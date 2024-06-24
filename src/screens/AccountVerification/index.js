import {View, Text, TouchableOpacity, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Button from '../../components/Button';

export default function AccountVerification({navigation}) {
  const [value, setValue] = useState('');

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleProfileSetup = () => {
    navigation.navigate('ProfileSetup');
  };

  const CELL_COUNT = 4;

  useEffect(() => {
    // Check if the length of entered OTP equals the desired length (6 in this case)
    if (value.length === CELL_COUNT) {
      // If the length matches, dismiss the keyboard
      Keyboard.dismiss();
    }
  }, [value]);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainContentView}>
        <Text style={styles.headingText}>Account Verification</Text>
        <Text style={styles.headingPara}>
          We’ve have send you a verification code on your email to verify your
          account.
        </Text>
        <CodeField
          ref={ref}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[
                Platform.OS == 'android' ? styles.cell : styles.cellIOS,
                isFocused && styles.focusCell,
              ]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <View style={styles.btmButtonText}>
          <Text style={styles.bottomText}>Didn't receive the OTP?</Text>
          <TouchableOpacity>
            <Text style={styles.signInText}> Resend</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottmBtn}>
          <Button title={'Next'} onPress={handleProfileSetup} />
        </View>
      </View>
    </View>
  );
}
