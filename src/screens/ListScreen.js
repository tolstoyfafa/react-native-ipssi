import React, { useState, useEffect } from 'react';
import fetchDataVelibsApi from '../components/FetchDataApi';
import { StyleSheet, Text, FlatList, Button, View, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

export default function ListScreen({ navigation }) {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff'
        },
        itemContainer: {
            height: 40,
            padding: 3,
            flexDirection: 'row',
            backgroundColor: "#01d1",
            borderRadius: 10,
            marginBottom: 5,
        },
        textItem: {
            fontSize: 20,
            textAlign: 'center',
            color: 'palevioletred'
        },
        itemContainerFv: {
            height: 40,
            padding: 3,
            flexDirection: 'row',
            backgroundColor: '#6C9997',
            borderRadius: 10,
            marginBottom: 5,
        },
        textItemFv: {
            fontSize: 20,
            textAlign: 'center',
            color: 'red'
        },
    });

    const [state, setState] = useState(
        {
            isConnected: false,
            velibs: [],
        }
    )

    const [hidden, setHidden] = useState(true);

    const favorites = navigation.getParam('favorite', []);

    const url_api = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel';

    useEffect(() => {
        fetchDataVelibsApi(url_api)
            .then((value) => {
                setState({
                    velibs: value,
                    isConnected: true,
                })
            })
    }, []);

    const renderItem = ({ item }) =>
        <View style={styles.itemContainer}>
            <Text onPress={() => {
                navigation.navigate('Station', {
                    stationDetails: item.fields
                })
            }}
                style={styles.textItem}>
                {item.fields.station_name}
            </Text>
        </View>

    return (
        <ScrollView style={styles.container}>
            <Text>{state.isConnected ? 'CONNECTED' : 'NOT CONNECTED'} </Text>
            <View>
                <Button
                    title='Station favorites'
                    onPress={() => {
                        setHidden(!hidden)
                    }}>
                </Button>
                {hidden ?
                    <FlatList
                        data={favorites}
                        keyExtractor={(item, index) => item.datasetid}
                        renderItem={({ item }) =>
                            <View style={styles.itemContainerFv}>
                                <Text style={styles.textItemFv}>
                                    {item.station_name}</Text>
                            </View>}
                    /> : null}
            </View>

            {
                state.velibs ?
                    (<FlatList
                        data={state.velibs}
                        keyExtractor={(item, index) => item.datasetid}
                        renderItem={renderItem}
                    />) :
                    (<View>
                        <Text>Can not access to server</Text>
                    </View>)
            }
        </ScrollView >
    );
}

ListScreen.propTypes = {
    navigation: PropTypes.shape(
        {
            navigate: PropTypes.func.isRequired,
            getParam: PropTypes.func.isRequired
        },
    ).isRequired
}

ListScreen.navigationOptions = {
    title: "Vélibs",
};


