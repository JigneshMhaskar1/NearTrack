import { Dimensions } from "react-native";
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
// regex
export const regex = {
    email: new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,),
    password: /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/,
    mobileNumber: /^(\+91[\\-\s]?)?[0]?(91)?[6789]\d{9}$/,
    userName: /^([a-zA-Z]+\s)*[a-zA-Z0-9]+$/,
    specialNotAccept: /[\s#.,-]/,
};

// change dpi
export const MOCKUP_WIDTH = 375;
export const CHANGE_BY_MOBILE_DPI = (temp) => (SCREEN_WIDTH / (MOCKUP_WIDTH / temp));