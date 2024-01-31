import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CHANGE_BY_MOBILE_DPI } from '../../global/constant';
import { Colors, Constant, Fonts } from '../../global';

const GlobalButton = ({externalButtonContainer,externalFontStyle,text='',onClick = () => {},disabled = false}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onClick} disabled={disabled} style={{...styles.buttonContainer,...externalButtonContainer}}>
            <Text style={[styles.buttonFontStyle,externalFontStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
       height:CHANGE_BY_MOBILE_DPI(60),
       width:Constant.SCREEN_WIDTH - 40,
       borderRadius:CHANGE_BY_MOBILE_DPI(5),
       alignItems:'center',
       justifyContent:'center',
       backgroundColor:Colors.PRIMARY,
       marginHorizontal:CHANGE_BY_MOBILE_DPI(20)
    },
    buttonFontStyle:{
        fontSize:CHANGE_BY_MOBILE_DPI(16),
        fontFamily:Fonts.AXIFORMA_BOLD,
        color:Colors.WHITE
    }
});

export default GlobalButton;
