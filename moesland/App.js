import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Alert,Button} from 'react-native';

import {useState, useEffect} from 'react';
import * as Location from 'expo-location';


export default function App() {
  const [location, setLocation] = useState();
  const [tochtLocation, setTochtLocation] = useState();
  console.log("Running");
  
  useEffect(() => {
    const getPermissions = async () => {
      let status = await Location.requestForegroundPermissionsAsync();
      console.log("Status is:");
      console.log(status.granted);

      if(status.granted){
        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
        console.log("Status is granted!");
      }
      else if(!status.granted){
        console.log("The permission to use geolocation has not been grated");
        alert("The permission to use geolocation has not been grated");
      }

    };

    getPermissions();
  }, []);

  const fetchData = async () => {
    
    };

    const checkIfInRange = async () => {
      alert("you are outside te range to vote")
    };

  const vote = async () => {
    fetchData();
    checkIfInRange();
    };

  return (
    <View style={styles.container}>
      <Button title="Reverse Geocode Current Location" onPress={vote} />
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
