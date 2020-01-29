import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Button, Body, Right, Icon } from 'react-native';
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
            <View style={{ flex: 1, padding: 20, backgroundColor: 'yellow' }}>
                <ActivityIndicator />
                <Text>{this.state.isConnected ? 'CONNECTED' : 'NOT CONNECTED'} </Text>
                {/* Todo: ADD a condition to 
                handle no connexion */}
                {this.state.velibs ?
                    (<FlatList
                        data={this.state.velibs}
                        keyExtractor={(item, index) => item.datasetid}
                        renderItem={({ item }) =>
                            <Text>{item.fields.station_name}</Text>
                        }
                    />) :
                    (<View>
                        <Text>Can not access to server</Text>
                    </View>)
                }
            </View>
        )
    }
}
