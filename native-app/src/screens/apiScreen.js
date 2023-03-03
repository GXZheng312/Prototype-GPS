import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiButton from '../components/apiButton';

export default () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>api screen</Text>
        <ApiButton/>
      </View>
    );
};
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});