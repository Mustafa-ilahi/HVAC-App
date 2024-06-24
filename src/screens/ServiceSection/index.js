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
import {colors} from '../../services';

export default function ServiceSection({navigation}) {
  //   const [tagCheck, setTagCheck] = useState(false);
  const [serviceList, setServiceList] = useState([
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

  const handleTagPress = id => {
    setServiceList(prevServiceList =>
      prevServiceList.map(item =>
        item.id === id ? {...item, tagCheck: !item.tagCheck} : item,
      ),
    );
  };

  const handleServices = () => {
    navigation.navigate('ServiceMainPage');
  };
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Heating Services</Text>
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
          <TouchableOpacity>
            <Image source={images.filter} style={styles.filterImg} />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {serviceList.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.serviceMainView}
                key={index}
                onPress={handleServices}>
                <Image source={item.images} style={styles.serviceImgStyle} />
                <View>
                  <View style={styles.flexRow}>
                    <Text style={styles.topHeading}>{item.name}</Text>
                    <TouchableOpacity onPress={() => handleTagPress(item.id)}>
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
                      <Image source={images.rating} style={styles.ratingImg} />
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
