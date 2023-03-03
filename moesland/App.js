import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Alert,Button} from 'react-native';

import {useState, useEffect} from 'react';
import * as Location from 'expo-location';


export default function App() {
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
        alert("The permission to use geolocation has not been grated");
      }

    };

    getPermissions();
  }, []);

  const fetchData = async () => {
    //faking fetching data from them backend
    let moeslandLatitude = 37.4226711;
    setMoeslandLatitude(37.41)

    let moeslandLongitude = -122.0849872;
    setMoeslandLongitude(-122.06)

    let moeslandRange = 1000.00;
    setMoeslandRange(moeslandRange)

  };

  const checkIfInRange = async () => {
    let status = await Location.requestForegroundPermissionsAsync();
    if(status.granted){

      const earthRadius = 6371e3; // metres
      const φ1 = moeslandLatitude * Math.PI/180; // φ, λ in radians
      const φ2 = locationLatitude * Math.PI/180;
      const Δφ = (locationLatitude-moeslandLatitude) * Math.PI/180;
      const Δλ = (locationLongitude-moeslandLongitude) * Math.PI/180;

      const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      const rangeBetweenTwoPoints = earthRadius * c; // in metres
      console.log(rangeBetweenTwoPoints);
      if(rangeBetweenTwoPoints >= parseFloat(moeslandRange + locationAccuracy))
      {
        alert("you are outside te range to vote, distance in meters is: " + rangeBetweenTwoPoints + "/n range is: " + moeslandRange)
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
