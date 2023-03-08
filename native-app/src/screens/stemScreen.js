import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Alert,Button} from 'react-native';

import {useState, useEffect} from 'react';
import * as Location from 'expo-location';
import { getLocationData } from '../services/apiClient';


export default () => {
  const [locationLatitude, setLocationLatitude] = useState();
  const [locationLongitude, setLocationLongitude] = useState();
  const [locationAccuracy, setLocationAccuracy] = useState();

  const [moeslandLatitude, setMoeslandLatitude] = useState();
  const [moeslandLongitude, setMoeslandLongitude] = useState();
  const [moeslandRange, setMoeslandRange] = useState();


  useEffect(() => {
    const getPermissions = async () => {
      let status = await Location.requestForegroundPermissionsAsync();

      if(status.granted){
        let currentLocation = await Location.getCurrentPositionAsync({}); 
        setLocationLatitude(currentLocation.coords.latitude);
        setLocationLongitude(currentLocation.coords.longitude);
        setLocationAccuracy(currentLocation.coords.accuracy);
      }
      else if(!status.granted){
        alert("The permission to use geolocation has not been granted");
      }

    };

    getPermissions();
  }, []);

  const fetchData = async () => {
    const data = await getLocationData();
    console.log(data);
    if(data != null) {
      setData(data);
      return;
    }
    fakeData();
  };

  const setData = (data) => {
    setMoeslandLatitude(data.latitude)
    setMoeslandLongitude(data.longitude)
    setMoeslandRange(data.range)
  }

  const fakeData = () => {
    setMoeslandLatitude(37.41)
    setMoeslandLongitude(-122.06)
    let moeslandRange = 1000.00;
    setMoeslandRange(moeslandRange)
  }

  const checkIfInRange = async () => {
    let status = await Location.requestForegroundPermissionsAsync();
    if(status.granted){

      const earthRadius = 6371e3; // meters
      const φ1 = moeslandLatitude * Math.PI/180; //in radians
      const φ2 = locationLatitude * Math.PI/180;
      const Δφ = (locationLatitude-moeslandLatitude) * Math.PI/180;
      const Δλ = (locationLongitude-moeslandLongitude) * Math.PI/180;

      const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      const rangeBetweenTwoPoints = earthRadius * c; 
      if(rangeBetweenTwoPoints >= parseFloat(moeslandRange + locationAccuracy))
      {
        alert("you are outside the range to vote, distance in meters is: " + rangeBetweenTwoPoints + "\n range is: " + moeslandRange)
      }
      else{
        alert("you have succesfully voted for your favorite team!")
      }
    }

  };
  
  const vote = async () => {
    fetchData();
    checkIfInRange();
  };

  return (
    <View style={styles.container}>
      <Button title="Stemmen" onPress={vote} />
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
