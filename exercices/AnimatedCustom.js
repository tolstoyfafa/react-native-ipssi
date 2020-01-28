import React, { useState, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const AnimatedCustom = (props) => {
    const [state, setState] = useState(
        {
            animationValue: new Animated.Value(0),
            viewState: true
        }
    );

    const toggleAnimation = () => {
        
    }

    return <>
        <View style={styles.container}>
            <View style={{ backgroundColor: 'blue', flex: 0.5 }} />
            <View style={{ backgroundColor: 'red', flex: 0.5 }} />
        </View>
    </>

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: 100
    }
});
export default AnimatedCustom;