import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors, sizes} from '../../services';

export default function Categories({navigation}) {
  const [filterSearch, setFilterSearch] = useState(false);
  const [onClickToggle, setOnClickToggle] = useState('service');
  const [checkBoxImg, setCheckBoxImg] = useState('');
  const [serviceProviderList, setServiceProviderList] = useState([
    {
      id: 1,
      images: images.serviceImg,
      name: 'Joyful HVAC Services',
      subHeading: 'Heating, AC',
      jobs: '124',
      Price: '$20/Hour',
      tagCheck: false,
    },
    {
      id: 2,
      images: images.serviceImg,
      name: 'Joyful HVAC Services',
      subHeading: 'Heating, AC',
      jobs: '124',
      Price: '$20/Hour',
      tagCheck: false,
    },
    {
      id: 3,
      images: images.serviceImg,
      name: 'Joyful HVAC Services',
      subHeading: 'Heating, AC',
      jobs: '124',
      Price: '$20/Hour',
      tagCheck: false,
    },
    {
      id: 4,
      images: images.serviceImg,
      name: 'Joyful HVAC Services',
      subHeading: 'Heating, AC',
      jobs: '124',
      Price: '$20/Hour',
      tagCheck: false,
    },
    {
      id: 5,
      images: images.serviceImg,
      name: 'Joyful HVAC Services',
      subHeading: 'Heating, AC',
      jobs: '124',
      Price: '$20/Hour',
      tagCheck: false,
    },
    {
      id: 6,
      images: images.serviceImg,
      name: 'Joyful HVAC Services',
      subHeading: 'Heating, AC',
      jobs: '124',
      Price: '$20/Hour',
      tagCheck: false,
    },
    {
      id: 7,
      images: images.serviceImg,
      name: 'Joyful HVAC Services',
      subHeading: 'Heating, AC',
      jobs: '124',
      Price: '$20/Hour',
      tagCheck: false,
    },
  ]);

  const [serviceList, setServiceList] = useState([
    {
      id: 1,
      images: images.serviceImg,
      name: 'Joyful HVAC Services',
      subHeading: 'Heating, Ventilation, AC',
      Price: '$20',
      tagCheck: false,
    },
    {
      id: 2,
      images: images.serviceImg,
      name: 'Joyful HVAC Services',
      subHeading: 'Heating, Ventilation, AC',
      Price: '$20',
      tagCheck: false,
    },
    {
      id: 3,
      images: images.serviceImg,
      name: 'Joyful HVAC Services',
      subHeading: 'Heating, Ventilation, AC',
      Price: '$20',
      tagCheck: false,
    },
    {
      id: 4,
      images: images.serviceImg,
      name: 'Joyful HVAC Services',
      subHeading: 'Heating, Ventilation, AC',
      Price: '$20',
      tagCheck: false,
    },
    {
      id: 5,
      images: images.serviceImg,
      name: 'Joyful HVAC Services',
      subHeading: 'Heating, Ventilation, AC',
      Price: '$20',
      tagCheck: false,
    },
    {
      id: 6,
      images: images.serviceImg,
      name: 'Joyful HVAC Services',
      subHeading: 'Heating, Ventilation, AC',
      Price: '$20',
      tagCheck: false,
    },
    {
      id: 7,
      images: images.serviceImg,
      name: 'Joyful HVAC Services',
      subHeading: 'Heating, Ventilation, AC',
      Price: '$20',
      tagCheck: false,
    },
  ]);

  const handleServiceTag = id => {
    setServiceList(prevServiceList =>
      prevServiceList.map(item =>
        item.id === id ? {...item, tagCheck: !item.tagCheck} : item,
      ),
    );
  };

  const handleTagPress = id => {
    setServiceProviderList(prevServiceList =>
      prevServiceList.map(item =>
        item.id === id ? {...item, tagCheck: !item.tagCheck} : item,
      ),
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Categories</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image source={images.notification} style={styles.headerImg} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerView}>
          <View style={styles.SearchView}>
            <Image source={images.search} style={styles.searchImg} />
            <TextInput
              placeholder="Search"
              style={styles.inputFieldView}
              placeholderTextColor={colors.black}
            />
          </View>
          <TouchableOpacity onPress={() => setFilterSearch(!filterSearch)}>
            <Image source={images.filter} style={styles.filterImg} />
          </TouchableOpacity>
        </View>
        <View style={styles.serviceRow}>
          <TouchableOpacity
            style={
              onClickToggle == 'service'
                ? styles.servicesView
                : styles.servicesViewWithStyle
            }
            onPress={() => setOnClickToggle('service')}>
            <Text
              style={
                onClickToggle === 'service' ? styles.color : styles.colorBlack
              }>
              Services
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              onClickToggle === 'provider'
                ? styles.servicesView
                : styles.servicesViewWithStyle
            }
            onPress={() => setOnClickToggle('provider')}>
            <Text
              style={
                onClickToggle == 'provider' ? styles.color : styles.colorBlack
              }>
              Services Provider
            </Text>
          </TouchableOpacity>
        </View>

        {onClickToggle === 'service' && (
          <ScrollView showsVerticalScrollIndicator={false}>
            {serviceList.map((item, index) => {
              return (
                <TouchableOpacity style={styles.serviceMainView} key={index}>
                  <Image source={item.images} style={styles.serviceImgStyle} />
                  <View>
                    <View style={[styles.flexRow, {marginTop: 10}]}>
                      <Text style={styles.topHeadingOne}>{item.name}</Text>
                      <TouchableOpacity
                        onPress={() => handleServiceTag(item.id)}
                        style={styles.tagPosition}>
                        <Image
                          source={item.tagCheck ? images.tagOn : images.tagOff}
                          style={styles.tagImg}
                        />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.middleHeadingOne}>
                      {item.subHeading}
                    </Text>
                    <View style={styles.btmView}>
                      <Text style={styles.ratingSection}>
                        <Text style={styles.ratingSectionOne}>
                          {item.Price}
                        </Text>
                        /hr
                      </Text>
                      <Image
                        source={images.starRating}
                        style={styles.startRating}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
            <View style={{marginBottom: sizes.screenHeight * 0.08}}></View>
          </ScrollView>
        )}

        {onClickToggle === 'provider' && (
          <ScrollView showsVerticalScrollIndicator={false}>
            {serviceProviderList.map((item, index) => {
              return (
                <TouchableOpacity style={styles.serviceMainView} key={index}>
                  <Image source={item.images} style={styles.serviceImgStyle} />
                  <View>
                    <View style={styles.flexRow}>
                      <Text style={styles.topHeading}>{item.name}</Text>
                      <TouchableOpacity
                        onPress={() => handleTagPress(item.id)}
                        style={styles.tagPosition}>
                        <Image
                          source={item.tagCheck ? images.tagOn : images.tagOff}
                          style={styles.tagImg}
                        />
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.middleHeading}>{item.subHeading}</Text>
                    <View style={[styles.flexRow, {paddingRight: 10}]}>
                      <View>
                        <Text style={styles.ratingSection}>Ratings</Text>
                        <Image
                          source={images.rating}
                          style={styles.ratingImg}
                        />
                      </View>
                      <View>
                        <Text style={styles.ratingSection}>Total Jobs</Text>
                        <Text style={styles.textColor}>{item.jobs}</Text>
                      </View>
                      <View>
                        <Text style={styles.ratingSection}>Price</Text>
                        <Text style={styles.textColor}>{item.Price}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
            <View style={{marginBottom: sizes.screenHeight * 0.08}}></View>
          </ScrollView>
        )}
      </View>
      {filterSearch && (
        <View style={styles.dropDownMainView}>
          <View style={styles.rowView}>
            <TouchableOpacity onPress={() => setCheckBoxImg('first')}>
              <Image
                source={
                  checkBoxImg === 'first'
                    ? images.dropdownBlue
                    : images.dropDown
                }
                style={styles.dropDownImg}
              />
            </TouchableOpacity>
            <Text style={styles.dropDownColor}>Near Me</Text>
          </View>
          <View style={styles.rowView}>
            <TouchableOpacity onPress={() => setCheckBoxImg('second')}>
              <Image
                source={
                  checkBoxImg === 'second'
                    ? images.dropdownBlue
                    : images.dropDown
                }
                style={styles.dropDownImg}
              />
            </TouchableOpacity>
            <Text style={styles.dropDownColor}>Most Rated</Text>
          </View>
          <View style={styles.rowView}>
            <TouchableOpacity onPress={() => setCheckBoxImg('third')}>
              <Image
                source={
                  checkBoxImg === 'third'
                    ? images.dropdownBlue
                    : images.dropDown
                }
                style={styles.dropDownImg}
              />
            </TouchableOpacity>
            <Text style={styles.dropDownColor}>Most Jobs</Text>
          </View>
          <View style={styles.rowView}>
            <TouchableOpacity onPress={() => setCheckBoxImg('fourth')}>
              <Image
                source={
                  checkBoxImg === 'fourth'
                    ? images.dropdownBlue
                    : images.dropDown
                }
                style={styles.dropDownImg}
              />
            </TouchableOpacity>
            <Text style={styles.dropDownColor}>Lowest Price</Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
