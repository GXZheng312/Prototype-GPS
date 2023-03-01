export async function getLocationData() {
    try {
        const response = await fetch(
            'http://192.168.2.12:5000/api/parade/gps-location/1?format=json',
            {}
        );
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error)
        return error
    }
}

