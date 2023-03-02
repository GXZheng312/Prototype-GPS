import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

state = {
    location: {},
    errorMessage: ''
}



_getLocation =  async() => {
  const {status} = Permissions.askAsync(Permissions.Location);

  if (status !== 'granted')
  {
      console.log('GPS PERMISSION NOT GRANTED!');
      this.setState({
          errorMessage: 'GPS PERMISSION IS NOT GRANTED!'
        })
  }
  const userLocation = await Location.getCurrentPositionAsync();
  this._getLocation;//
  this.setState({
    location
  })
}


export default function App() {
  //https://github.com/michalchudziak/react-native-geolocation
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(this.state.location)} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
