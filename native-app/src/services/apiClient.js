import { LOCALHOST_IP } from '@env';

export async function getLocationDebugData() {
    try {
        console.log("IP:" + LOCALHOST_IP);
        const response = await fetch(
            'http://' + LOCALHOST_IP + ':5000/api/parade/gps-location/1?format=json',
            {}
        );
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function getLocationData() {
    try {
        console.log("IP:" + LOCALHOST_IP);
        const response = await fetch(
            'http://' + LOCALHOST_IP + ':5000/api/location?format=json',
            {}
        );
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error)
        return error
    }
}
