import { AsyncStorage } from 'react-native';
export default async (url) => {
    try {
        const res = await fetch(url);
        const jsonResponse = await res.json();
        console.log(jsonResponse);
        AsyncStorage.setItem('data', JSON.stringify(jsonResponse));
        return jsonResponse.records;
    }
    catch (error) {
        console.log(error)
        return AsyncStorage.getItem('data');
    }
}