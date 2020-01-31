import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import getPosition from '../components/Geoloc';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


import fetchDataVelibsApi from '../components/FetchDataApi';
export default function MapScreen() {

    const styles = {
        map: {
            flex: 1,
            height: 200
        }
    }


    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        fetchDataVelibsApi('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel').then(records => {
            setMarkers(records)
        })
    }, [])

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            zoomEnabled
            showsUserLocation
            initialRegion={{
                /* It should be a static coords for paris  */
                latitude: 48,
                longitude: 2,
                latitudeDelta: 0.04,
                longitudeDelta: 0.05,
            }}
        /* Put here user location */
        >{
                markers.map((marker, i) => {
                    return (<Marker
                        key={i}
                        coordinate={{
                            latitude: marker.fields.geo[0],
                            longitude: marker.fields.geo[1]
                        }
                        }
                        /* Put here all markers  */
                        /* Add a custom marker image */
                        description={marker.fields.station_name}>
                    </Marker>)
                })
            }


        </MapView>
    );
}

MapScreen.navigationOptions = {
    title: 'Map',
};

const styless = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
