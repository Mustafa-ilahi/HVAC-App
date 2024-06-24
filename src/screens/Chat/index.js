import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Header from '../../components/Header';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors} from '../../services';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Chat() {
  const scrollViewRef = useRef();

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({animated: false});
    } else {
      console.log('scrollViewRef.current is undefined');
    }
  };

  const handleLayout = () => {
    scrollToBottom();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            ref={scrollViewRef}
            onContentSizeChange={() => scrollToBottom()}
            onLayout={handleLayout}>
            <View style={styles.padding}>
              <Header title={'Joyful HVAC Services'} showNotification={true} />
              <View style={styles.hori} />
              <View style={styles.flexRow}>
                <Image source={images.serviceImg} style={styles.imgStyle} />
                <View>
                  <Text style={styles.chatText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                  <Text style={styles.chatText1}>
                    Ut enim ad minim veniam, quis nostrud exercitation
                  </Text>
                </View>
              </View>
              <Text style={styles.chatText2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <View style={styles.flexRow}>
                <Image source={images.serviceImg} style={styles.imgStyle1} />
                <Text style={styles.chatText4}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </Text>
              </View>
              <Text style={styles.chatText2}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Text>
              <View style={styles.flexRow}>
                <Image source={images.serviceImg} style={styles.imgStyle1} />
                <View>
                  <Text style={styles.chatText}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                  <Text style={styles.chatText1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Text>
                </View>
              </View>
              <Text style={styles.chatText2}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Text>
            </View>
          </ScrollView>
          <View style={styles.inputTextField}>
            <TextInput
              placeholder="Message..."
              placeholderTextColor={colors.black}
              style={styles.textField}
              multiline
            />
            <TouchableOpacity>
              <Image source={images.galleryPicker} style={styles.imagePicker} />
            </TouchableOpacity>
          </View>
          <View style={styles.marginBottom} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
