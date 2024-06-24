import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Button from '../../components/Button';

export default function ForgotPassword({navigation}) {
  const [value, setValue] = useState('');

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleResetPassword = () => {
    navigation.navigate('ResetPassword');
  };

  const CELL_COUNT = 4;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainContentView}>
        <Text style={styles.headingText}>Forgot Password?</Text>
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
          <Button title={'Next'} onPress={handleResetPassword} />
        </View>
      </View>
    </View>
  );
}
