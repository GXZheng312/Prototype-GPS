import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <View style={{ display: 'flex', flexDirection: 'column'}}>
        <Button style={{ marginTop: 10 }}
          color='green'
          title="Go to api"
          onPress={() => navigation.navigate('api')}
        />
        <Button style={{ marginTop: 10 }}
          color='green'
          title="Go to stem"
          onPress={() => navigation.navigate('stem')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});