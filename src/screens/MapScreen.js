import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import getPosition from '../components/Geoloc';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


export default function MapScreen() {

    const styles = {
        map: {
            flex: 1,
            height: 200
        }
    }

    const [state, setState] = useState(
        {
            position: {}
        }
    )


    useEffect(() => {
    }, [])

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            zoomEnabled
            showsUserLocation
            initialRegion={{
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.04,
                longitudeDelta: 0.05,
            }}
        /* Put here user location */
        >
            <Marker
                coordinate={{
                    latitude: 0,
                    longitude: 0
                }}
                /* Put here all markers  */
                /* Add a custom marker image */
                description={"ddd"}>
            </Marker>

        </MapView>
    );
}

MapScreen.navigationOptions = {
    title: 'Map',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
