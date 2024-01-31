import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Colors, Constant, Fonts } from '../../global';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';

const GlobalInput = ({ setValue = () => { }, value = '', placeHolderText = '', placeHolderColor = Colors.GRAY_DARK, editable = false, maxLength,
    externalMainInputContainerStyle, externalInputContainer }) => {
    return (
        <View style={{ ...styles.inputMainContainer, ...externalMainInputContainerStyle }}>
            <TextInput
                onChangeText={setValue}
                editable={editable}
                maxLength={maxLength}
                placeholder={placeHolderText}
                placeholderTextColor={placeHolderColor}
                style={{ ...styles.inputContainer, ...externalInputContainer }}>{value}</TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    inputMainContainer: {
        height: CHANGE_BY_MOBILE_DPI(60),
        width: Constant.SCREEN_WIDTH - 40,
        borderRadius: CHANGE_BY_MOBILE_DPI(5),
        backgroundColor: Colors.WHITE,
        paddingHorizontal: CHANGE_BY_MOBILE_DPI(20),
        justifyContent: "center",
        marginHorizontal:CHANGE_BY_MOBILE_DPI(20)
    },
    inputContainer: {
        fontSize: CHANGE_BY_MOBILE_DPI(14),
        fontFamily: Fonts.AXIFORMA_MEDIUM   ,
        color: Colors.BLACK
    }
});

export default GlobalInput;
