/**
 * Detail Page
 */

import React from 'react';
import {View, Text, Button} from 'react-native';

const Detail = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Page</Text>
      <Button
        title="Go to Detail Again"
        onPress={() => navigation.push('Detail')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export {Detail};
