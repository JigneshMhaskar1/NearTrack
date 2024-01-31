import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CHANGE_BY_MOBILE_DPI} from '../global/constant';
import BackArrow from '../assets/svgs/backArrow.svg';
import {Colors, Fonts} from '../global';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomHeader = ({backgroundColor, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      style={{...styles.main, backgroundColor}}
      onPress={onPress}>
      <BackArrow
        height={CHANGE_BY_MOBILE_DPI(15)}
        width={CHANGE_BY_MOBILE_DPI(25)}
      />
      <Text style={styles.header}>Back</Text>
    </TouchableOpacity>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  main: {
    height: CHANGE_BY_MOBILE_DPI(45),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: CHANGE_BY_MOBILE_DPI(15),
  },
  header: {
    fontFamily: Fonts.AXIFORMA_MEDIUM,
    fontSize: CHANGE_BY_MOBILE_DPI(16),
    color: Colors.WHITE,
    marginHorizontal: CHANGE_BY_MOBILE_DPI(10),
  },
});
