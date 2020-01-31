import Geolocation from '@react-native-community/geolocation';

export default () => {
    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(resolve, reject)
    })
}



