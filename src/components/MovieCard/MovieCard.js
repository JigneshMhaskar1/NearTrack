import React from 'react'
import { DrawerActions, useNavigation } from "@react-navigation/native"
import { Colors, Constant, ScreenNames } from "../../global"
import { CHANGE_BY_MOBILE_DPI } from "../../global/constant";
import { ImageBackground, View, Text } from "react-native";
import { styles } from "../../screen/Home/HomeStyle";
import StarSvg from '../../assets/svgs/Star.svg'
const MovieCard = ({item,index}) => {
    return (
        <View style={styles.movieCardContainer}>
        <ImageBackground
            borderBottomLeftRadius={CHANGE_BY_MOBILE_DPI(10)}
            borderBottomRightRadius={CHANGE_BY_MOBILE_DPI(10)}
            borderTopLeftRadius={CHANGE_BY_MOBILE_DPI(10)}
            borderTopRightRadius={CHANGE_BY_MOBILE_DPI(10)}
            source={item.image}
            style={styles.backgrounImageContainer}>
            <View style={styles.starContainer}>
                <Text style={styles.priceFontStyle}>{item.price} ₹</Text>
            </View>
        </ImageBackground>
        <View style={styles.flexContainer}>
            <Text numberOfLines={1} style={styles.nameFontStyle}>{item.name}</Text>
            <View style={styles.flexDirection}>
                <Text style={styles.ratingFontStyle}>{item?.rating}</Text>
                <StarSvg height={CHANGE_BY_MOBILE_DPI(9)} width={CHANGE_BY_MOBILE_DPI(9)} style={styles.marginOnStar} />
                <Text style={styles.ratingFontStyle}>{'IMBD'}</Text>
            </View>
        </View>
    </View>
    );
};
export default MovieCard;
