import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { getLocationData } from "../services/apiClient";
import { LOCALHOST_IP } from '@env';

export default () => {

    const [locationData, setLocationData] = useState(null);

    useEffect(() => {
        if(locationData == null) {
            setLocationData("GEEN DATA");
        }
    }, [locationData]); 

    const locationGet = async () => {
        const data = await getLocationData();
        console.log(data);
        setLocationData(data);
    };

    return (
        <View>
            <Text>
                {JSON.stringify(locationData)}
            </Text>
            <Button
                title="Get Location JSON"
                onPress={locationGet}
            />
        </View>

    );

}