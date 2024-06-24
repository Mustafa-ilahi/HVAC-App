import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {selectAuthToken} from '../../store/authToken';
import {getRole} from '../../store/manageRole';
import LandingPage from '../../screens/LandingPage';
import AccountType from '../../screens/AccountType';
import Registration from '../../screens/Registration';
import ServiceSetup from '../../screens/ServiceSetup';
import PortfolioUpload from '../../screens/PortfolioUpload';
import SignIn from '../../screens/SignIn';
import ForgotPassword from '../../screens/ForgotPassword';
import EmailVerification from '../../screens/EmailVerification';
import ResetPassword from '../../screens/ResetPassword';
import ProfileSetup from '../../screens/ProfileSetup';
import WelcomeUser from '../../screens/WelcomeUser';
import VideoSection from '../../screens/VideoSection';
import UserProfile from '../../screens/UserProfile/Index';
import WatchVideos from '../../screens/WatchVideos/Index';
import ServiceSection from '../../screens/ServiceSection';
import ServiceMainPage from '../../screens/ServiceMainPage';
import CustomerFeedback from '../../screens/CustomerFeedback';
import SessionDetails from '../../screens/SessionDetails';
import Payment from '../../screens/Payment';
import AddCard from '../../screens/AddCard';
import LeaveReview from '../../screens/LeaveReview';
import SessionEnded from '../../screens/SessionEnded';
import Notification from '../../screens/Notification';
import ChatInbox from '../../screens/ChatInbox';
import Chat from '../../screens/Chat';
import EditProfile from '../../screens/EditProfile';
import Security from '../../screens/Security';
import PaymentMethod from '../../screens/PaymentMethod';
import PaymentDetails from '../../screens/PaymentDetails';
import ScheduleSession from '../../screens/ScheduleSession';
import MeetingRoom from '../../screens/MeetingRoom';
import AccountVerification from '../../screens/AccountVerification';
import TabNavigation from './TabNavigation';
import EditServices from '../../screens/EditServices';

const Stack = createStackNavigator();
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyStack" component={MyStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MyStack = () => {
  const authToken = useSelector(selectAuthToken);
  const role = useSelector(getRole);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {authToken ? (
        role === 'user' ? (
          <Stack.Screen name="UserStack" component={UserStack} />
        ) : role === 'provider' ? (
          <Stack.Screen name="ProviderStack" component={ProviderStack} />
        ) : null
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LandingPage" component={LandingPage} />
      <Stack.Screen name="AccountType" component={AccountType} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen
        name="AccountVerification"
        component={AccountVerification}
      />
      <Stack.Screen name="ServiceSetup" component={ServiceSetup} />
      <Stack.Screen name="PortfolioUpload" component={PortfolioUpload} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="EmailVerification" component={EmailVerification} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
      <Stack.Screen name="WelcomeUser" component={WelcomeUser} />
    </Stack.Navigator>
  );
};

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      {/* <Stack.Screen name="UserHome" component={UserHome} /> */}
      <Stack.Screen name="VideoSection" component={VideoSection} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="WatchVideos" component={WatchVideos} />
      <Stack.Screen name="ServiceSection" component={ServiceSection} />
      <Stack.Screen name="ServiceMainPage" component={ServiceMainPage} />
      <Stack.Screen name="CustomerFeedback" component={CustomerFeedback} />
      <Stack.Screen name="SessionDetails" component={SessionDetails} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="AddCard" component={AddCard} />
      {/* <Stack.Screen name="Categories" component={Categories} /> */}
      {/* <Stack.Screen name="Session" component={Session} /> */}
      <Stack.Screen name="LeaveReview" component={LeaveReview} />
      <Stack.Screen name="SessionEnded" component={SessionEnded} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="ChatInbox" component={ChatInbox} />
      <Stack.Screen name="Chat" component={Chat} />
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Security" component={Security} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
      <Stack.Screen name="ScheduleSession" component={ScheduleSession} />
      <Stack.Screen name="MeetingRoom" component={MeetingRoom} />
      <Stack.Screen name="ServiceSetup" component={ServiceSetup} />
    </Stack.Navigator>
  );
};

const ProviderStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="EditServices" component={EditServices} />
      {/* <Stack.Screen name="UserHome" component={UserHome} /> */}
      <Stack.Screen name="VideoSection" component={VideoSection} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="WatchVideos" component={WatchVideos} />
      <Stack.Screen name="ServiceSection" component={ServiceSection} />
      <Stack.Screen name="ServiceMainPage" component={ServiceMainPage} />
      <Stack.Screen name="CustomerFeedback" component={CustomerFeedback} />
      <Stack.Screen name="SessionDetails" component={SessionDetails} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="AddCard" component={AddCard} />
      {/* <Stack.Screen name="Categories" component={Categories} /> */}
      {/* <Stack.Screen name="Session" component={Session} /> */}
      <Stack.Screen name="LeaveReview" component={LeaveReview} />
      <Stack.Screen name="SessionEnded" component={SessionEnded} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="ChatInbox" component={ChatInbox} />
      <Stack.Screen name="Chat" component={Chat} />
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Security" component={Security} />
      <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
      <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
      <Stack.Screen name="ScheduleSession" component={ScheduleSession} />
      <Stack.Screen name="MeetingRoom" component={MeetingRoom} />
      <Stack.Screen name="ServiceSetup" component={ServiceSetup} />
    </Stack.Navigator>
  );
};

const MyTabs = () => {
  return <TabNavigation />;
};
