import {View, Text, SafeAreaView, Image, TextInput} from 'react-native';
import React from 'react';
import {styles} from './style';
import images from '../../services/utilities/images';
import {colors} from '../../services';
import Button from '../../components/Button';

export default function LeaveReview({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.reviewText}>Leave Review</Text>
        <Text style={styles.reviewText1}>
          Share Your Experience and Leave a Review
        </Text>
        <Text style={styles.reviewText2}>Rating (Outing of 5)</Text>
        <Image source={images.bigStars} style={styles.star} />
        <View style={styles.textField}>
          <TextInput
            placeholder="Give your feedback..."
            placeholderTextColor={colors.black}
            style={styles.textInput}
            multiline
          />
        </View>
        <View style={styles.bottomBtn}>
          <Button
            title={'Continue'}
            onPress={() => navigation.navigate('Session')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
