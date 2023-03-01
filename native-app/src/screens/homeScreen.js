import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to api"
          onPress={() => navigation.navigate('api')}
        />  
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