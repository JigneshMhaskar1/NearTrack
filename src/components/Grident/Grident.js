import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Constant } from '../../global';

const Grident = ({ child, externalLinearContainet,colorArray }) => {
    return (
        <View style={styles.container}>
            <View style={{ ...styles.linercontainer, externalLinearContainet }}>
                <LinearGradient
                    colors={colorArray}
                    style={styles.flexContainer}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    angle={45}
                >
                    {child}
                </LinearGradient>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    linercontainer: {
        height: '100%',
        width: '100%',
    },
    flexContainer: {
        flex: 1,
    },
});

export default Grident;
