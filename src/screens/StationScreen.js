import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, Button } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { PropTypes } from 'prop-types';

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

    const stationDetails = navigation.getParam('stationDetails', 'default');
    const [favs, setFavs] = useState([]);

    const {
        creditcard,
        duedate,
        geo,
        nbbike,
        station_name,
        station_state,
    } = stationDetails

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
                description={""}>
            </Marker>
        </MapView>
        <ScrollView style={styles.container}>
            <View style={styles.listItem}>
                <Text style={styles.title}>{station_name}</Text>
            </View>
            <View style={styles.listItem}>
                <Text style={styles.textItem}>🚶‍♂️ Statation à  {station_name} De vous</Text>
            </View>
            <View style={styles.listItem}>
                <Text style={styles.textItem}>🔨   Etat: {station_state}</Text>
            </View>
            <View style={styles.listItem}>
                <Text style={styles.textItem}> 💳  Paiement par carte: {creditcard}</Text>
            </View>
            <View style={styles.listItem}>
                <Text style={styles.textItem}> 📆   Mise à jour: {duedate}</Text>
            </View>
            <View style={styles.listItem}>
                <Text style={styles.textItem}>🚲   Vélos disponibles: {nbbike}</Text>
            </View>
            <View style={styles.listItem}>
                <TouchableOpacity>
                    <Button
                        title='🧡   Ajout aux favoris'
                        onPress={() => {
                            Alert.alert('Salut!',
                                'voulez vous ajoutez cette station à vos station favorites?',

                                [
                                    {
                                        text: 'Cancel',
                                        onPress:
                                            () => console.log('Cancel Pressed!')

                                    },
                                    {
                                        text: 'OK',
                                        onPress: () => {
                                            setFavs(favs.push(stationDetails))
                                            navigation.navigate('Home',
                                                { favorite: favs }
                                            )

                                        }
                                    }
                                ])
                        }}
                    ></Button>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </>)
}

StationScreen.propTypes = {
    navigation: PropTypes.shape(
        {
            getParam: PropTypes.func.isRequired,
            navigate: PropTypes.func.isRequired
        }
    ).isRequired,
}

StationScreen.navigationOptions = {
    title: 'Details'
}