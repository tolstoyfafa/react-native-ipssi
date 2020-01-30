import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';




export default function StationScreen(props) {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ddd',
        },
        map: {
            flex: 1,
            height: 200
        },
        listItem: {
            flex: 0.8,
            flexDirection: 'column',
            backgroundColor: '#d3d3d3',
            marginBottom: 10,
        },
        textStyle: {
            textAlign: 'left',
            fontSize: 20
        }
    });

    const data = props.navigation.getParam('stationDetails', 'default');

    return (<>
        <Text style={{ textAlign: 'center', fontStyle: 'italic', fontSize: 30 }}>
            Station Details
        </Text>
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            /*    region={{
                   latitude: 37.78825,
                   longitude: -122.4324,
                   latitudeDelta: 0.015,
                   longitudeDelta: 0.0121,
               }} */
            zoomEnabled
            showsUserLocation>

        </MapView>
        <View style={styles.container}>
            {/* Use react vectors to add icones styles */}
            <View style={styles.listItem}>
                <Text style={styles.textStyle}>Station name: {data.station_name}</Text>
            </View>
            <View style={styles.listItem}>
                <Text style={styles.textStyle}>Station state: {data.station_state}</Text>
            </View>
            <View style={styles.listItem}>
                <Text style={styles.textStyle}>Credit card: {data.creditcard}</Text>
            </View>
            <View style={styles.listItem}>
                <Text style={styles.textStyle}>Available Bikes: {data.nbbike}</Text>
            </View>
        </View>
    </>)
}




StationScreen.navigationOptions = {
    title: 'Details'
}