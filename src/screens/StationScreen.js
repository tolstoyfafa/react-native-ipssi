import React from 'react';
import { Text, View, StyleSheet } from 'react-native';




export default function StationScreen(props) {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ddd',
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
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', fontStyle: 'italic', fontSize: 30 }}>
                Station Details
        </Text>
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