import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Alert,Button} from 'react-native';

import {useState, useEffect} from 'react';
import * as Location from 'expo-location';


export default function App() {
  const [location, setLocation] = useState();
  const [moeslandLatitude, setMoeslandLatitude] = useState();
  const [moeslandLongitude, setMoeslandLongitude] = useState();
  const [moeslandRange, setMoeslandRange] = useState();


  useEffect(() => {
    const getPermissions = async () => {
      let status = await Location.requestForegroundPermissionsAsync();
      console.log("Status is:");
      console.log(status.granted);

      if(status.granted){
        console.log("Status is granted!");
        let currentLocation = await Location.getCurrentPositionAsync({}); 
        console.log(location);
        setLocation(currentLocation);
      }
      else if(!status.granted){
        console.log("The permission to use geolocation has not been grated");
        alert("The permission to use geolocation has not been grated");
      }

    };

    getPermissions();
  }, []);

  const fetchData = async () => {
    //faking fetching data from them backend
    let moeslandLatitude = 37.4226711;
    setMoeslandLatitude(37.4226711)
    console.log(moeslandLatitude);

    let moeslandLongitude = -122.0849872;
    setMoeslandLongitude(-122.0849872)
    console.log(moeslandLongitude);

    let moeslandRange = 1000;
    setMoeslandRange(moeslandRange)
    console.log(moeslandRange);

  };

  const checkIfInRange = async () => {
    
    if()

    if(true)
    {
      alert("you have succesfully voted for your favorite team!")
    }
    else{
      alert("you are outside te range to vote")
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
