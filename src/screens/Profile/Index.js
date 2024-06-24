import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import {useDispatch, useSelector} from 'react-redux';
import {getRole, removeRole} from '../../store/manageRole';
import {removeAuthToken} from '../../store/authToken';

export default function Profile({navigation}) {
  const dispatch = useDispatch();

  const role = useSelector(getRole);

  const handleLogout = () => {
    dispatch(removeAuthToken());
    dispatch(removeRole());
  };

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Profile</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image source={images.notification} style={styles.headerImg} />
          </TouchableOpacity>
        </View>
        <View style={styles.nameView}>
          <Image source={images.welcomeUserProfile} style={styles.profileImg} />
          <Text style={styles.textView}>Michael Bernando</Text>
          <Text style={styles.textView1}>michael.ber@email.com</Text>
          <TouchableOpacity
            style={styles.textView2}
            onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.textView3}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        {role === 'user' ? (
          <TouchableOpacity
            style={styles.middleMainView}
            onPress={() => navigation.navigate('PaymentMethod')}>
            <Image source={images.cards} style={styles.imageStyle} />
            <View style={styles.middleTextView}>
              <Text style={styles.middleViewText}>Payment Methods</Text>
              <Text style={styles.middleViewText1}>
                Add your credit or debit card
              </Text>
            </View>
            <Image source={images.backArrow} style={styles.imageStyle1} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.middleMainView}
            onPress={() => navigation.navigate('EditServices')}>
            <Image source={images.cards} style={styles.imageStyle} />
            <View style={styles.middleTextView}>
              <Text style={styles.middleViewText}>Edit Service</Text>
              <Text style={styles.middleViewText1}>Edit service details</Text>
            </View>
            <Image source={images.backArrow} style={styles.imageStyle1} />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.middleMainView}>
          <Image source={images.bill} style={styles.imageStyle} />
          <View style={styles.middleTextView}>
            <Text style={styles.middleViewText}>Privacy Policy</Text>
            <Text style={styles.middleViewText1}>View policies from admin</Text>
          </View>
          <Image source={images.backArrow} style={styles.imageStyle1} />
        </TouchableOpacity>
        {role === 'user' && (
          <TouchableOpacity style={styles.middleMainView}>
            <Image source={images.save} style={styles.imageStyle} />
            <View style={styles.middleTextView}>
              <Text style={styles.middleViewText}>Saved Services</Text>
              <Text style={styles.middleViewText1}>
                View your saved services
              </Text>
            </View>
            <Image source={images.backArrow} style={styles.imageStyle1} />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.middleMainView}
          onPress={() => navigation.navigate('Security')}>
          <Image source={images.lock} style={styles.imageStyle} />
          <View style={styles.middleTextView}>
            <Text style={styles.middleViewText}>Security</Text>
            <Text style={styles.middleViewText1}>Enhance your security</Text>
          </View>
          <Image source={images.backArrow} style={styles.imageStyle1} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.middleMainView}
          onPress={() => navigation.navigate('ChatInbox')}>
          <Image source={images.messages} style={styles.imageStyle} />
          <View style={styles.middleTextView}>
            <Text style={styles.middleViewText}>Chats</Text>
            <Text style={styles.middleViewText1}>View Chats</Text>
          </View>
          <Image source={images.backArrow} style={styles.imageStyle1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.flexRow} onPress={handleLogout}>
          <Text style={styles.signOutText}>Sign Out</Text>
          <Image source={images.logout} style={styles.imageStyle} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
