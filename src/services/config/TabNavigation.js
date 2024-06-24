import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {sizes} from '../utilities/sizes';
import {colors} from '../utilities/colors';
import images from '../utilities/images';
import {Image, Text, View} from 'react-native';
import {fontSize} from '../utilities/fonts';
import UserHome from '../../screens/UserHome';
import Categories from '../../screens/Categories';
import Session from '../../screens/Session';
import {useSelector} from 'react-redux';
import {getRole} from '../../store/manageRole';
import ProviderHome from '../../screens/ProviderHome';
import ProviderSession from '../../screens/ProviderSession';
import Profile from '../../screens/Profile/Index';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const role = useSelector(getRole);
  console.log('bottomn tabs-==-=-=-=-', role);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          width: sizes.screenWidth,
          height: sizes.screenHeight * 0.075,
          paddingTop: sizes.screenHeight * 0.01,
          paddingHorizontal: sizes.screenWidth * 0.04,
          borderTopRightRadius: sizes.screenWidth * 0.07,
          borderTopLeftRadius: sizes.screenWidth * 0.07,
          paddingTop: sizes.screenHeight * 0.032,
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={role === 'user' ? UserHome : ProviderHome}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={!focused ? images.homeTab : images.homeTabTwo}
              style={{
                resizeMode: 'contain',
                width: sizes.screenWidth * 0.1,
                height: focused
                  ? sizes.screenWidth * 0.1
                  : sizes.screenWidth * 0.04,
              }}
            />
          ),
          tabBarLabel: ({focused}) => <CustomTabLabel focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={role === 'user' ? Categories : ProviderSession}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={!focused ? images.categoryTab : images.categoryTabTwo}
                style={{
                  resizeMode: 'contain',
                  width: sizes.screenWidth * 0.1,
                  height: focused
                    ? sizes.screenWidth * 0.1
                    : sizes.screenWidth * 0.04,
                }}
              />
            </View>
          ),
          tabBarLabel: ({focused}) => <CustomTabLabel focused={focused} />,
        }}
      />

      <Tab.Screen
        name="Session"
        component={Session}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={!focused ? images.calenderTab : images.calenderTabTwo}
                style={{
                  resizeMode: 'contain',
                  width: sizes.screenWidth * 0.1,
                  height: focused
                    ? sizes.screenWidth * 0.1
                    : sizes.screenWidth * 0.04,
                }}
              />
            </View>
          ),
          tabBarLabel: ({focused}) => <CustomTabLabel focused={focused} />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={
                focused
                  ? {
                      borderWidth: 5,
                      borderRadius: sizes.screenWidth * 1,
                      borderColor: colors.lightBlue,
                    }
                  : null
              }>
              <Image
                source={!focused ? images.tabProfile : images.tabProfile}
                style={{
                  resizeMode: 'contain',
                  width: sizes.screenWidth * 0.07,
                  height: focused
                    ? sizes.screenWidth * 0.07
                    : sizes.screenWidth * 0.07,
                  borderRadius: sizes.screenWidth * 1,
                }}
              />
            </View>
          ),
          tabBarLabel: ({focused}) => <CustomTabLabel focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}

const CustomTabLabel = ({focused, label}) => {
  const inactiveImg = images.homeTwo;
  const activeImg = images.home;

  return (
    <Text
      style={{
        // color: focused ? activeColor : inactiveColor,
        fontSize: fontSize.tiny,
        fontWeight: focused ? '800' : '400',
      }}>
      <Image
        // source={focused ? activeImg : inactiveImg}
        style={{
          resizeMode: 'contain',
          width: sizes.screenWidth * 0.065,
          height: sizes.screenWidth * 0.065,
          // tintColor: focused ? activeColor : inactiveColor,
        }}
      />
      {/* {label} */}
    </Text>
  );
};
