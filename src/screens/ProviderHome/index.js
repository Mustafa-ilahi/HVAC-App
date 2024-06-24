import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import images from '../../services/utilities/images'
import { sizes } from '../../services'

export default function ProviderHome() {
    const [newRequest, setNewRequest] = useState([
        {
            profile: images.welcomeUserProfile,
            name: 'Michael Bernando',
            service: 'Repairing',
            price: '20',
            schedule: '2:00 PM * 14 July',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            fullShow: true
        },
        {
            profile: images.serverProfileImgOne,
            name: 'Emily Smith',
            service: 'Repairing',
            price: '20',
            schedule: '2:00 PM * 14 July',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            fullShow: false
        },
        {
            profile: images.welcomeUserProfile,
            name: 'Michael Bernando',
            service: 'Repairing',
            price: '20',
            schedule: '2:00 PM * 14 July',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            fullShow: false
        },
    ])

    const handleToggelFulShow = (index) => {
        setNewRequest(prevRequests => {
            const updatedRequests = prevRequests.map((item, i) => {
                if (i === index) {
                    return { ...item, fullShow: !item.fullShow };
                }
                return item;
            });
            return updatedRequests;
        });
    }

    return (
        <SafeAreaView>
            <View style={styles.mainContainer}>
                <View style={[styles.flexRow, styles.headerMainView]}>
                    <View>
                        <Text style={styles.headerHeading}>
                            Hello <Text style={{ fontWeight: 'bold' }}>John Doe</Text>
                        </Text>
                        <View style={[styles.flexRow, { alignItems: 'center' }]}>
                            <Image source={images.locationBlue} style={styles.headerImgOne} />
                            <Text style={styles.headerLocation}>
                                Street 11 Block 19, Maplewood, New ....
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Image source={images.notification} style={styles.headerImgTwo} />
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.marginTop}>
                        <Text>Portfolio</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            <View>
                                <Image source={images.providerPortfolio1} style={styles.portfolioImg} />
                                <Text style={styles.portfolioText}>AC Maintenance</Text>
                            </View>
                            <View>
                                <Image source={images.providerPortfolio2} style={styles.portfolioImg2} />
                                <Text style={styles.portfolioText}>Heating Installation</Text>
                            </View>
                            <View>
                                <Image source={images.providerPortfolio3} style={styles.portfolioImg2} />
                                <Text style={styles.portfolioText}>Ventilation Service</Text>
                            </View>
                            <View>
                                <Image source={images.providerPortfolio1} style={styles.portfolioImg2} />
                                <Text style={styles.portfolioText}>AC Maintenance</Text>
                            </View>
                            <View>
                                <Image source={images.providerPortfolio2} style={styles.portfolioImg2} />
                                <Text style={styles.portfolioText}>Heating Installation</Text>
                            </View>
                            <View>
                                <Image source={images.providerPortfolio3} style={styles.portfolioImg2} />
                                <Text style={styles.portfolioText}>Heating Installation</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <TouchableOpacity style={styles.addPortfolioBtn}>
                        <Text style={styles.addPortfolioText}>
                            + Add Portfolio
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.marginTop}>
                        <Text style={styles.headingLarge}>Customer Requests</Text>
                        <Text style={styles.blueText}>{`You have ${newRequest?.length} new requests!`}</Text>
                        {
                            newRequest.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => handleToggelFulShow(index)}
                                        style={styles.requestContainer}
                                        key={index}
                                    >
                                        <View style={styles.profileContainer}>
                                            <Image source={item.profile} style={styles.requestProfile} />
                                            <Text style={styles.name}>{item.name}</Text>
                                        </View>
                                        <View style={styles.priceContainer}>
                                            <View>
                                                <Text style={styles.heading}>Air Conditioning</Text>
                                                <Text style={styles.text1}>{item.service}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.heading}>Price/hr</Text>
                                                <Text style={styles.text1}>{`$ ${item.price}`}</Text>
                                            </View>
                                        </View>
                                        {
                                            item.fullShow &&
                                            <View>
                                                <View style={styles.priceContainer2}>
                                                    <View>
                                                        <Text style={styles.heading}>Selected Schedule</Text>
                                                        <Text style={styles.text1}>{item.schedule}</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={styles.heading}>Hour</Text>
                                                        <Text style={styles.text1}>{`$ ${item.price}`}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.line}></View>
                                                <View>
                                                    <Text style={styles.heading}>About</Text>
                                                    <Text style={styles.text1}>{item.about}</Text>
                                                </View>
                                                <View style={styles.btnContainer}>
                                                    <TouchableOpacity style={styles.acceptBtn}>
                                                        <Image style={styles.btnImg} source={images.accept} />
                                                        <Text style={styles.acceptBtnText}>Accept</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={styles.declineBtn}>
                                                        <Image style={styles.btnImg} source={images.decline} />
                                                        <Text style={styles.declineBtnText}>Reject</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        }
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                    <TouchableOpacity
                    style={styles.viewAllContainer}
                    >
                        <Text style={styles.viewAllText}>View All</Text>
                        <Image source={images.arrowBlue} style={styles.viewAllArrow} />
                    </TouchableOpacity>
                    <View style={{ marginBottom: sizes.screenHeight * 0.09 }}></View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}