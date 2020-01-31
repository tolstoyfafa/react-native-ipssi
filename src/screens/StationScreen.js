import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';




export default function StationScreen({ navigation }) {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
        title: {
            textAlign: 'center',
            fontStyle: 'italic',
            fontSize: 30
        },
        map: {
            flex: 1,
            height: 200
        },
        listItem: {
            flex: 0.8,
            flexDirection: 'column',
            backgroundColor: '#01d1',
            marginBottom: 10,
        },
        textItem: {
            fontSize: 20,
            textAlign: 'center',
            color: 'palevioletred'
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


        </MapView>
        <View style={styles.container}>
            {/* Use react vectors to add icones styles */}
            <View style={styles.listItem}>
                <Text style={styles.textItem}>Station: {station_name}</Text>
            </View>
            <View style={styles.listItem}>
                <Text style={styles.textItem}>Etat: {station_state}</Text>
            </View>
            <View style={styles.listItem}>
                <Text style={styles.textItem}>Paiement par carte: {creditcard}</Text>
            </View>
            <View style={styles.listItem}>
                <Text style={styles.textItem}>Vélos disponibles: {nbbike}</Text>
            </View>
        </View>
    </>)
}




StationScreen.navigationOptions = {
    title: 'Details'
}