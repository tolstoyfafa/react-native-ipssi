import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import getPosition from '../components/Geoloc';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';


import fetchDataVelibsApi from '../components/FetchDataApi';
import getPostion from '../components/Geoloc';
export default function MapScreen() {

    const styles = {
        map: {
            flex: 1,
            height: 200
        }
    }


    const [markers, setMarkers] = useState([]);

    const [userPosition, setUserPosition] = useState([]);

    const URL_API = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel';

    const changePosition = () => {
        getPosition().then(position => {
            console.log(position);

            setUserPosition({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })

            fetchDataVelibsApi(
                URL_API + '&geofilter.distance='
                + position.coords.latitude + ','
                + position.coords.longitude + ','
                + 1000)
                .then(records => {
                    setMarkers(records)
                })
            console.log(markers)
        })
    }


    useEffect(() => {
        changePosition()
    }, [])

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            zoomEnabled
            showsUserLocation={true}
            initialRegion={{
                /* It should be a static coords for paris  */
                latitude: userPosition.latitude,
                longitude: userPosition.longitude,
                latitudeDelta: 0.02,
                longitudeDelta: 0.03,
            }}
        >
            {
                markers.map((marker, i) => {
                    return (<Marker
                        key={i}
                        coordinate={{
                            latitude: marker.fields.geo[0],
                            longitude: marker.fields.geo[1]
                        }
                        }
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
