import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors} from '../../services';

export default function Session({navigation}) {
  const [sessionSet, setSessionSet] = useState('upcoming');

  const handleMeeting = () => {
    navigation.navigate('MeetingRoom');
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Sessions</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image source={images.notification} style={styles.headerImg} />
          </TouchableOpacity>
        </View>
        <View style={styles.flexRow}>
          <TouchableOpacity onPress={() => setSessionSet('upcoming')}>
            <Text
              style={
                sessionSet === 'upcoming'
                  ? styles.textHeading
                  : styles.textHeadingWithoutColor
              }>
              Upcoming
            </Text>
            <View style={sessionSet === 'upcoming' ? styles.blueLine : null} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSessionSet('completed')}>
            <Text
              style={
                sessionSet === 'completed'
                  ? styles.textHeading
                  : styles.textHeadingWithoutColor
              }>
              Completed
            </Text>
            <View
              style={sessionSet === 'completed' ? styles.blueLine1 : null}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSessionSet('cancelled')}>
            <Text
              style={
                sessionSet === 'cancelled'
                  ? styles.textHeading
                  : styles.textHeadingWithoutColor
              }>
              Cancelled
            </Text>
            <View
              style={sessionSet === 'cancelled' ? styles.blueLine2 : null}
            />
          </TouchableOpacity>
        </View>
        {sessionSet === 'upcoming' && (
          <View>
            <View style={styles.upcomingMainView}>
              <Image
                source={images.electrician}
                style={styles.electricianImg}
              />
              <View>
                <Text style={styles.upcomingText}>Joyful HVAC Service</Text>
                <Text style={styles.upcomingText1}>
                  Service: AC Installation
                </Text>
                <Text style={styles.upcomingText2}>
                  Session is starting now
                </Text>
              </View>
              <TouchableOpacity
                style={styles.upcomingBtn}
                onPress={handleMeeting}>
                <Text style={styles.btnText}>Join Session</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.upcomingMainView}>
              <Image
                source={images.electrician}
                style={styles.electricianImg}
              />
              <View>
                <Text style={styles.upcomingText}>Joyful HVAC Service</Text>
                <Text style={styles.upcomingText1}>
                  Service: AC Installation
                </Text>
                <Text style={styles.upcomingText3}>
                  Booking for: Oct 24 | 100:00 AM
                </Text>
              </View>
              <TouchableOpacity style={styles.upcomingBtn1}>
                <Text style={styles.btnText}>Cancel Session</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.upcomingMainView}>
              <Image
                source={images.electrician}
                style={styles.electricianImg}
              />
              <View>
                <Text style={styles.upcomingText}>Joyful HVAC Service</Text>
                <Text style={styles.upcomingText1}>
                  Service: AC Installation
                </Text>
                <Text style={styles.upcomingText3}>
                  Booking for: Oct 24 | 100:00 AM
                </Text>
              </View>
              <TouchableOpacity style={styles.upcomingBtn1}>
                <Text style={styles.btnText}>Cancel Session</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {sessionSet === 'completed' && (
          <View>
            <View style={styles.completedTopView}>
              <View style={styles.completedMainView}>
                <Image
                  source={images.electrician}
                  style={styles.electricianImg1}
                />
                <View>
                  <Text style={styles.upcomingText}>Joyful HVAC Service</Text>
                  <Text style={styles.upcomingText1}>
                    Service: AC Installation
                  </Text>
                </View>
                <Text style={styles.sessionText}>Session Time:45 min</Text>
              </View>
              <View style={styles.bottom}>
                <View style={styles.hori} />
                <TouchableOpacity style={styles.flexRowItem}>
                  <Text style={styles.viewText}>View More</Text>
                  <Image source={images.arrowDown} style={styles.arrowImg} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.completedTopView1}>
              <View style={styles.completedMainView}>
                <Image
                  source={images.electrician}
                  style={styles.electricianImg1}
                />
                <View>
                  <Text style={styles.upcomingText}>Joyful HVAC Service</Text>
                  <Text style={styles.upcomingText1}>
                    Service: AC Installation
                  </Text>
                </View>
                <Text style={styles.sessionText}>Session Time:45 min</Text>
              </View>
              <View style={styles.btmBtnView}>
                <TouchableOpacity
                  style={styles.reviewBtn}
                  onPress={() => navigation.navigate('LeaveReview')}>
                  <Text style={styles.reviewBtnText}>Leave Review</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.reviewBtn1}>
                  <Text style={styles.reviewBtnText1}>Book Again</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        {sessionSet == 'cancelled' && (
          <View>
            <View style={styles.cancelledTopView}>
              <View style={styles.completedMainView}>
                <Image
                  source={images.electrician}
                  style={styles.electricianImg1}
                />
                <View>
                  <Text style={styles.upcomingText}>Joyful HVAC Service</Text>
                  <Text style={styles.cancelledText1}>AC Installation</Text>
                </View>
                <Text style={styles.cancelledText}>Cancelled</Text>
              </View>
            </View>
            <View style={styles.cancelledTopView}>
              <View style={styles.completedMainView}>
                <Image
                  source={images.electrician}
                  style={styles.electricianImg1}
                />
                <View>
                  <Text style={styles.upcomingText}>Joyful HVAC Service</Text>
                  <Text style={styles.cancelledText1}>AC Installation</Text>
                </View>
                <Text style={styles.cancelledText}>Cancelled</Text>
              </View>
            </View>
            <View style={styles.cancelledTopView}>
              <View style={styles.completedMainView}>
                <Image
                  source={images.electrician}
                  style={styles.electricianImg1}
                />
                <View>
                  <Text style={styles.upcomingText}>Joyful HVAC Service</Text>
                  <Text style={styles.cancelledText1}>AC Installation</Text>
                </View>
                <Text style={styles.cancelledText}>Cancelled</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
