/**
 * Home Page
 */

import React from 'react';
import {View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Page</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};

export {Home};
