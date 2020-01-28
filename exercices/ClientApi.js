import React from 'react';
import { FlatList, ActivityIndicator, Text, View, AsyncStorage } from 'react-native';

export default class ClientApi extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isConnected: false }
    }

    componentDidMount() {
        return fetch('https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reeles')
            .then(res => res.json())
            .then((jsonResponse) => {
                console.log(jsonResponse)
                AsyncStorage.setItem('data', JSON.stringify(jsonResponse.datasets))
                this.setState({
                    velibs: jsonResponse.datasets,
                    isConnected: true,
                });
            }).catch((error) => {
                console.log(error)
                AsyncStorage.getItem('data').then((value) => {
                    this.setState({
                        velibs: JSON.parse(value),
                        isConnected: false,
                    });
                    ;
                }
                )
            }
            )
    };


    render() {

        if (!this.state.isConnected) {
            return (
                <View style={{ flex: 1, padding: 20 }}>
                    <ActivityIndicator />
                    <Text>is Disconnected ... </Text>
                    <FlatList
                        data={this.state.velibs}
                        renderItem={({ item }) => <Item title={item.title} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            )
        }

        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <Text>Good Asyn Storage </Text>

            </View>
        );
    }
}
