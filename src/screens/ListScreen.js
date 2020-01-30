import React, { useState, useEffect } from 'react';
import fetchDataVelibsApi from '../components/FetchDataApi';
import {
    StyleSheet,
    Text,
    FlatList,
    View,
    ActivityIndicator
} from 'react-native';

export default function ListScreen(props) {

    const [state, setState] = useState(
        {
            isConnected: false,
            velibs: []
        }
    )

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff'
        }
    });

    useEffect(() => {
        fetchDataVelibsApi('https://raw.githubusercontent.com/tlenclos/fake-opendata-velib-server/master/db.json')
            .then((value) => {
                console.log(value);
                setState({
                    velibs: value,
                    isConnected: true,
                })
            }
            )
    }
        , []);

    return (
        <View style={styles.container}>
            <ActivityIndicator />
            <Text>{state.isConnected ? 'CONNECTED' : 'NOT CONNECTED'} </Text>
            {/* Todo: ADD a condition to 
            handle no connexion */}

            {state.velibs ?
                (<FlatList
                    data={state.velibs}
                    keyExtractor={(item, index) => item.datasetid}
                    renderItem={({ item }) =>
                        <Text onPress={() => {
                            props.navigation.navigate('Station', {
                                stationDetails: item.fields
                            })
                        }}>
                            {item.fields.station_name}</Text>
                    }
                />) :
                (<View>
                    <Text>Can not access to server</Text>
                </View>)
            }
        </View>
    );
}

ListScreen.navigationOptions = {
    title: "Vélibs",
};


