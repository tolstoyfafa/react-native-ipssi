import React from 'react';
import { FlatList, ActivityIndicator, Text, View, ListItem, Body, Right, Icon } from 'react-native';
import fetchDataVelibsApi from './FetchDataApi';


export default class ClientApi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isConnected: false,
            velibs: []
        }
    }

    componentDidMount() {
        fetchDataVelibsApi('https://raw.githubusercontent.com/tlenclos/fake-opendata-velib-server/master/db.json')
            .then((value) => {
                console.log(value);
                this.setState({
                    velibs: value,
                    isConnected: true,
                })
            }
            )
    };



    render() {

        return (
            <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator />
                <Text>{this.state.isConnected ? 'CONNECTED' : 'NOT CONNECTED'} </Text>
                <FlatList
                    data={this.state.velibs}
                    renderItem={({ item }) => <Text>{item.datasetid}</Text>}
                />
            </View>
        )
    }
}
