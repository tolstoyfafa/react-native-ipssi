import React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { ScrollView } from 'react-native-gesture-handler';

export default function StationScreen({ navigation }) {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
        title: {
            textAlign: 'center',
            fontStyle: 'italic',
            fontSize: 35
        },
        map: {
            flex: 0.8,
            height: 200,
        },
        listItem: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#01d1',
            marginBottom: 5,
        },
        textItem: {
            fontSize: 20,
            textAlign: 'left',
        },
        imageStyle: {
            height: 6,
            width: 6
        }
    });

    const data = navigation.getParam('stationDetails', 'default');

    const {
        creditcard,
        densitylevel,
        duedate,
        geo,
        kioskstate,
        maxbikeoverflow,
        nbbike,
        nbbikeoverflow,
        nbdock,
        nbebike,
        nbebikeoverflow,
        nbedock,
        nbfreedock,
        nbfreeedock,
        overflowactivation,
        overflow,
        station,
        station_code,
        station_name,
        station_state,
        station_type
    } = data
    console.log(geo);
    const markerImage = require('../images/bike.png');
    return (<>
        <Text style={styles.title}>
            Station Details
        </Text>
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            zoomEnabled
            showsUserLocation={true}
            initialRegion={{
                latitude: geo[0],
                longitude: geo[1],
                latitudeDelta: 0.04,
                longitudeDelta: 0.05,
            }}
        >

            <Marker
                coordinate={{
                    latitude: geo[0],
                    longitude: geo[1]
                }}
                /* Add a custom marker image */
                description={"ddd"}>
            </Marker>
            <Marker
                coordinate={{
                    latitude: geo[0],
                    longitude: geo[1]
                }}
                /* Add a custom marker image */
                description={"ddd"}>
            </Marker>


        </MapView>
        <ScrollView style={styles.container}>
            <View style={styles.listItem}>
                <Text style={styles.title}>{station_name}</Text>
            </View>
            <View style={styles.listItem}>
                <Text style={styles.textItem}>🚶‍♂️   from you: {station_name}</Text>
            </View>
            <View style={styles.listItem}>
                <Text style={styles.textItem}>🔨   State: {station_state}</Text>
            </View>
            <View style={styles.listItem}>
                <Text style={styles.textItem}> 💳  Card payment: {creditcard}</Text>
            </View>
            <View style={styles.listItem}>
                <Text style={styles.textItem}> 📆   Last update: {duedate}</Text>
            </View>
            <View style={styles.listItem}>
                <Text style={styles.textItem}>🚲   Availables bikes: {nbbike}</Text>
            </View>
            <View style={styles.listItem}>
                <Text style={styles.textItem}
                    onPress={() => {
                        Alert.alert('Add to favourite')
                    }}
                >🧡   Add to favourite</Text>
            </View>
        </ScrollView>
    </>)
}




StationScreen.navigationOptions = {
    title: 'Details'
}