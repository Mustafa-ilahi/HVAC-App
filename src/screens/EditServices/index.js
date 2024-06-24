import {View, Text, SafeAreaView, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import images from '../../services/utilities/images';
import {colors, sizes} from '../../services';
import Button from '../../components/Button';

export default function EditServices({navigation}) {
  const [editServices, setEditServices] = useState();

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const toggleService = service => {
    const isSelected = editServices.includes(service);
    if (isSelected) {
      // If the service is already selected, remove it from the array
      setEditServices(editServices.filter(s => s !== service));
    } else {
      // If the service is not selected, add it to the array
      setEditServices([...editServices, service]);
    }
  };
  return (
    // <SafeAreaView>
    //   <ScrollView>
    //     <View style={styles.mainContainer}>
    //       <Text style={styles.topHeading}>Edit Services</Text>
    //       <View>
    //         <Text
    //           style={{
    //             marginTop: sizes.screenHeight * 0.03,
    //             marginBottom: sizes.screenHeight * 0.007,
    //           }}>
    //           Edit Services
    //         </Text>
    //         <TouchableOpacity
    //           style={
    //             editServices == 'vent' ? styles.flexRowMain : styles.flexRow
    //           }
    //           onPress={() => setEditServices('vent')}>
    //           <Image
    //             source={
    //               editServices == 'vent'
    //                 ? images.ventilationServices
    //                 : images.ventBefore
    //             }
    //             style={styles.ventImg}
    //           />
    //           <Text style={styles.ventText}>Ventilation</Text>
    //           <Image
    //             source={
    //               editServices == 'vent'
    //                 ? images.checkBoxOn
    //                 : images.checkBoxOff
    //             }
    //             style={styles.ventImgVent}
    //           />
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //           style={editServices == 'ac' ? styles.flexRowMain : styles.flexRow}
    //           onPress={() => setEditServices('ac')}>
    //           <Image
    //             source={
    //               editServices == 'ac' ? images.acServices : images.acBefore
    //             }
    //             style={styles.ventImg}
    //           />
    //           <Text style={styles.ventText}>AC</Text>
    //           <Image
    //             source={
    //               editServices == 'ac' ? images.checkBoxOn : images.checkBoxOff
    //             }
    //             style={styles.ventImgVent}
    //           />
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //           style={
    //             editServices == 'heat' ? styles.flexRowMain : styles.flexRow
    //           }
    //           onPress={() => setEditServices('heat')}>
    //           <Image
    //             source={
    //               editServices == 'heat'
    //                 ? images.heatingServices
    //                 : images.heatingbefore
    //             }
    //             style={styles.ventImg}
    //           />
    //           <Text style={styles.ventText}>Heating</Text>
    //           <Image
    //             source={
    //               editServices == 'heat'
    //                 ? images.checkBoxOn
    //                 : images.checkBoxOff
    //             }
    //             style={styles.ventImgVent}
    //           />
    //         </TouchableOpacity>
    //         <Text
    //           style={{
    //             marginTop: sizes.screenHeight * 0.03,
    //             marginBottom: sizes.screenHeight * 0.007,
    //           }}>
    //           Edit portfolio
    //         </Text>
    //         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    //           <View style={styles.flexPort}>
    //             <Image source={images.serviceOne} style={styles.portfolioImg} />
    //             <Image source={images.serviceTwo} style={styles.portfolioImg} />
    //             <Image
    //               source={images.serviceThree}
    //               style={styles.portfolioImg}
    //             />
    //             <Image source={images.serviceOne} style={styles.portfolioImg} />
    //           </View>
    //         </ScrollView>
    //         <Text style={styles.hourlyText}>Edit Hourly Rate</Text>
    //         <View style={styles.rateView}>
    //           <Text style={styles.rateViewColor}>$</Text>
    //           <TextInput
    //             placeholder="20"
    //             style={styles.rateViewInputField}
    //             keyboardType="numeric"
    //             textAlignVertical="center"
    //           />
    //         </View>
    //         <Text style={styles.TopPara1}>Edit Description</Text>
    //         <Text style={styles.TopPara2}>
    //           With years of hands-on experience, our dedicated team provides
    //           top-notch repairs, installations, and maintenance to keep your air
    //           conditioning system running smoothly. Trust us to keep you cool
    //           and comfortable year-round.
    //         </Text>
    //       </View>
    //       <View style={styles.bottomBtn}>
    //         <Button
    //           title={'Save Changers'}
    //           onPress={handleProfile}
    //           disabled={!editServices}
    //         />
    //       </View>
    //     </View>
    //     <View style={{marginBottom: sizes.screenHeight * 0.1}} />
    //   </ScrollView>
    // </SafeAreaView>
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Text style={styles.topHeading}>Edit Services</Text>
          <View>
            <Text
              style={{
                marginTop: sizes.screenHeight * 0.03,
                marginBottom: sizes.screenHeight * 0.007,
              }}>
              Edit Services
            </Text>
            <TouchableOpacity
              style={
                editServices == 'vent' ? styles.flexRowMain : styles.flexRow
              }
              onPress={() => setEditServices('vent')}>
              <Image
                source={
                  editServices == 'vent'
                    ? images.ventilationServices
                    : images.ventBefore
                }
                style={styles.ventImg}
              />
              <Text style={styles.ventText}>Ventilation</Text>
              <Image
                source={
                  editServices == 'vent'
                    ? images.checkBoxOn
                    : images.checkBoxOff
                }
                style={styles.ventImgVent}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={editServices == 'ac' ? styles.flexRowMain : styles.flexRow}
              onPress={() => setEditServices('ac')}>
              <Image
                source={
                  editServices == 'ac' ? images.acServices : images.acBefore
                }
                style={styles.ventImg}
              />
              <Text style={styles.ventText}>AC</Text>
              <Image
                source={
                  editServices == 'ac' ? images.checkBoxOn : images.checkBoxOff
                }
                style={styles.ventImgVent}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={
                editServices == 'heat' ? styles.flexRowMain : styles.flexRow
              }
              onPress={() => setEditServices('heat')}>
              <Image
                source={
                  editServices == 'heat'
                    ? images.heatingServices
                    : images.heatingbefore
                }
                style={styles.ventImg}
              />
              <Text style={styles.ventText}>Heating</Text>
              <Image
                source={
                  editServices == 'heat'
                    ? images.checkBoxOn
                    : images.checkBoxOff
                }
                style={styles.ventImgVent}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginTop: sizes.screenHeight * 0.03,
                marginBottom: sizes.screenHeight * 0.007,
              }}>
              Edit portfolio
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.flexPort}>
                <Image source={images.serviceOne} style={styles.portfolioImg} />
                <Image source={images.serviceTwo} style={styles.portfolioImg} />
                <Image
                  source={images.serviceThree}
                  style={styles.portfolioImg}
                />
                <Image source={images.serviceOne} style={styles.portfolioImg} />
              </View>
            </ScrollView>
            <Text style={styles.hourlyText}>Edit Hourly Rate</Text>
            <View style={styles.rateView}>
              <Text style={styles.rateViewColor}>$</Text>
              <TextInput
                placeholder="20"
                style={styles.rateViewInputField}
                keyboardType="numeric"
                textAlignVertical="center"
                placeholderTextColor={'black'}
              />
            </View>
            <Text style={styles.TopPara1}>Edit Description</Text>
            <TextInput
              placeholder="With years of hands-on experience, our dedicated team provides
          top-notch repairs, installations, and maintenance to keep your air
          conditioning system running smoothly. Trust us to keep you cool and
          comfortable year-round."
              style={styles.TopPara2}
              placeholderTextColor={colors.black}
              multiline
            />
          </View>
          <View style={styles.bottomBtn}>
            <Button
              title={'Save Changers'}
              onPress={handleProfile}
              disabled={!editServices}
            />
          </View>
        </View>
        <View style={{marginBottom: sizes.screenHeight * 0.1}} />
      </ScrollView>
    </SafeAreaView>
  );
}
