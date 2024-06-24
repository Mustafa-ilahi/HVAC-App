import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style.js';
import images from '../../services/utilities/images';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {colors, sizes} from '../../services/index.js';
import Button from '../../components/Button/index.js';
import CalendarStrip from 'react-native-calendar-strip';
import 'moment';
import moment from 'moment';
import Header from '../../components/Header/index.js';

export default function ScheduleSession({navigation}) {
  const [selected, setSelected] = useState(null);

  const currentDate = moment();

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const handleMonthChange = newMonthIndex => {
    setSelectedMonth(newMonthIndex);
  };

  const [dateData, setDatedata] = useState([
    {
      time: '1:00',
    },
    {
      time: '1:30',
    },
    {
      time: '2:00',
    },
    {
      time: '2:30',
    },
    {
      time: '3:00',
    },
    {
      time: '3:30',
    },
    {
      time: '4:00',
    },
    {
      time: '4:30',
    },
    {
      time: '5:00',
    },
    {
      time: '5:30',
    },
    {
      time: '6:00',
    },
    {
      time: '6:30',
    },
  ]);

  const handleSessionDetails = () => {
    navigation.navigate('SessionDetails');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topContentcontainer}>
            <Header title={'Select Schedule'} showNotification={true} />
            <Text style={styles.heading}>
              Select from the available dates and times
            </Text>
            <View>
              <View style={styles.containerCheck}>
                <CalendarStrip
                  daySelectionAnimation={{
                    type: 'border',
                    duration: 100,
                    borderWidth: 1,
                  }}
                  style={{
                    height: sizes.screenHeight * 0.16,
                    paddingTop: sizes.screenHeight * 0.01,
                    paddingBottom: sizes.screenHeight * 0.02,
                  }}
                  dayContainerStyle={{
                    // backgroundColor: 'red',
                    borderWidth: 1,
                    borderColor: colors.grayBorder,
                  }}
                  scrollable={true}
                  scrollerPaging
                  useNativeDriver
                  highlightDateNumberStyle={{color: colors.white}}
                  highlightDateNameStyle={{color: colors.white}}
                  highlightDateContainerStyle={{
                    backgroundColor: colors.lightBlue2,
                    borderColor: colors.lightBlue2,
                  }}
                  leftSelector={[]}
                  rightSelector={[]}
                  calendarHeaderStyle={{color: colors.black}}
                  dateNumberStyle={{color: colors.gray}}
                  dateNameStyle={{color: colors.gray}}
                />
              </View>
            </View>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.availabiilityText}>Available Time</Text>
            <View style={styles.timeAlligment}>
              {dateData.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.selected,
                    index === selected
                      ? styles.selectedItem
                      : styles.notSelected,
                  ]}
                  onPress={() => setSelected(index)}>
                  <Text
                    style={[
                      styles.selectedTextcolor,
                      index === selected
                        ? styles.selectedTextcolor
                        : styles.textBlack,
                    ]}>
                    {item.time}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <Text style={styles.hoursText}>Select Addition Hours</Text>
          <View style={styles.inputFieldMainView}>
            <Image source={images.time} style={styles.timeImg} />
            <TextInput
              placeholder="0"
              placeholderTextColor={colors.black}
              style={styles.textInputField}
              keyboardType="numeric"
            />
            <Text style={styles.color}>hr</Text>
          </View>
          <View style={styles.btnMargin}>
            <Button title={'Book Session'} onPress={handleSessionDetails} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
