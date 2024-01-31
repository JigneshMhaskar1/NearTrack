import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Animated,
  Image,
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { styles } from "../navigation/BottomTabs/styles";
import { Colors, Constant } from "../global";

const Images = [
  { uri: "https://upload.wikimedia.org/wikipedia/commons/2/27/Portland_Shriner_Hospital_full_-_Oregon.JPG" },
  { uri: "https://upload.wikimedia.org/wikipedia/commons/1/11/Japanese_Red_Cross_Nagoya_Daini_hospital.JPG" },
  { uri: "https://i0.wp.com/www.orthospinenews.com/wp-content/uploads/2019/04/Hospital-building-12bto234rui.jpg?fit=790%2C559&ssl=1" },
  { uri: "https://healthfirsts.in/izhan94/uploads/2020/01/devasyahospital5.jpg" },
  { uri: "https://seniornewsandliving.com/wp-content/uploads/2016/07/COMMWEB72.jpg" },
  { uri: "https://www.shbarcelona.com/blog/en/wp-content/uploads/2014/03/Spain.Catalonia.Hospitalet.Hospital.de_.Bellvitge.2.jpg" },
  { uri: "https://th.bing.com/th/id/OIP.TKsuwo6wr5wlm2oNa40yRwHaFN?rs=1&pid=ImgDetMain" },
  { uri: "https://vedicologyindia.com/wp-content/uploads/2021/03/Vastu-For-Hospital.jpg" },
  { uri: "https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2012/5/3/201253145357454734_20.jpg" },
  { uri: "https://3.bp.blogspot.com/-j8rnVudiqzI/WLRlKal6XpI/AAAAAAAANjI/UiNwQRbB5NktSPt48OX6SuFpC03GCCRbwCLcB/s1600/45.jpg" },
  { uri: "https://th.bing.com/th/id/R.299d01dbb0aa13674b01e45d480bc484?rik=1a7OwD5IvlkzCQ&riu=http%3a%2f%2fcitifmonline.com%2fwp-content%2fuploads%2f2016%2f09%2findian-hospital-1-480x330.jpg&ehk=6eDaePipBy6ezbN6CIip23S7WL42aNIodOoM8LvZdcg%3d&risl=&pid=ImgRaw&r=0" },

];

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 40;

const HomeScreen = () => {
  const [markers, setMarkers] = useState([
    {
      coordinate: {
        latitude: 19.249960,
        longitude: - 73.017648,
      },
      title: "S S Hospital",
      description: "Pavanputra Enclave, Thane - Bhiwandi Road, Opposite Jain Temple, District, Kalher, Thane, Maharashtra 421302",
      image: Images[0],
    },
    {
      coordinate: {
        latitude: 19.288799,
        longitude: - 73.067346,
      },
      title: "Frank Hospital",
      description: "603/1 Frank Hospital Khadan Road Aas Bibi, Kalyan - Bhiwandi Road, Opp. Gupta Transport, Mumbai, Maharashtra 421302",
      image: Images[1],
    },
    {
      coordinate: {
        latitude: 19.288038,
        longitude: - 73.055281,
      },
      title: "Amrut Hospital",
      description: "Dhamankar Naka, Padma Nagar, Bhiwandi, Mumbai, Maharashtra 421302",
      image: Images[2],
    },
 {
      coordinate: {
        latitude: 19.289761,
        longitude: - 73.068948,
      },
      title: "Masoom Hospital",
      description: "Kalyan Bhiwandi Road, Rajeev Gandhi Chowk, Bhiwandi, Maharashtra 421302",
      image: Images[3],
    },
 {
      coordinate: {
        latitude: 19.296317,
        longitude: - 73.062573,
      },
      title: "Sagar Hospital",
      description: " Dhamankar Naka, Padma Nagar, Bhiwandi, Maharashtra 421302, India, Bhiwandi, Maharashtra 421302",
      image: Images[4],
    },
 {
      coordinate: {
        latitude: 19.300088,
        longitude: -73.055265,
      },
      title: "Dange Hospital",
      description: " 29, Mandai - Dhamankar Naka Road, Prabhu Ali, Mandai, Bhiwandi, Maharashtra 421302",
      image: Images[5],
    },
 {
      coordinate: {
        latitude: 19.304481,
        longitude: -73.065884,
      },
      title: "Sai Leela Hospital",
      description: " Firdous Complex, Old Mumbai-Agra Rd, Vetal Pada, Gulzar Nagar, Bhiwandi, Thane, Maharashtra 421302",
      image: Images[6],
    }
  ]);

  const [region, setRegion] = useState({
    latitude: 45.52220671242907,
    longitude: -122.6653281029795,
    latitudeDelta: 0.04864195044303443,
    longitudeDelta: 0.040142817690068,
  });

  const index = useRef(0);
  const animation = useRef(new Animated.Value(0)).current;

  const interpolations = markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];
    const scale = animation.interpolate({
      inputRange,
      outputRange: [1, 4, 1],
      extrapolate: "clamp",
    });
    const borderRadius = animation.interpolate({
      inputRange,
      outputRange: [100, 0, 100], // You can adjust the values according to your preference
      extrapolate: "clamp",
    });

    const opacity = animation.interpolate({
      inputRange,
      outputRange: [0.75, 1, 0.75],
      extrapolate: "clamp",
    });
    return { scale, opacity ,borderRadius};
  });

  const mapRef = useRef(null);

  useEffect(() => {
    if (markers.length === 0) {
      // Handle the case when markers array is empty
      return;
    }

    const listener = ({ value }) => {
      let newIndex = Math.floor(value / CARD_WIDTH + 0.3);
      if (newIndex >= markers.length) {
        newIndex = markers.length - 1;
      }
      if (newIndex <= 0) {
        newIndex = 0;
      }

      clearTimeout(regionTimeout);
      regionTimeout = setTimeout(() => {
        if (index.current !== newIndex) {
          index.current = newIndex;
          const { coordinate } = markers[newIndex];
          if (coordinate) {
            mapRef.current.animateToRegion(
              {
                ...coordinate,
                latitudeDelta: region.latitudeDelta,
                longitudeDelta: region.longitudeDelta,
              },
              350
            );
          }
        }
      }, 10);
    };

    animation.addListener(listener);

    return () => {
      animation.removeListener(listener);
    };
  }, [markers, region]);

  let regionTimeout;
  const handleScroll = (event) => {
    const value = event.nativeEvent.contentOffset.x;
    animation.setValue(value);
    clearTimeout(regionTimeout);
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        initialRegion={region}
        style={{ flex: 1 }}
      >
        {markers.map((marker, index) => (
          <Marker key={index} coordinate={marker.coordinate}>
            {marker.coordinate && ( // Add a check for marker.coordinate
              <Animated.View style={{ alignItems: "center", justifyContent: "center" }}>
                <Animated.View
                  style={{
                    width: 50,
                    height: 55,
                    // backgroundColor: "black",
                    // transform: [{ scale: interpolations[index].scale }],
                    opacity: interpolations[index].opacity,
                    borderRadius: interpolations[index].borderRadius
                  }}
                >
                  <Image
                    source={marker.image}
                    style={{ width: 50, height: 55, alignSelf: "center", borderRadius: 100, }}
                    resizeMode="cover"
                  />

                </Animated.View>

              </Animated.View>
            )}
          </Marker>
        ))}
      </MapView>
      <Animated.ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={Constant.SCREEN_WIDTH}
        onScroll={handleScroll}
        style={{ position: "absolute", bottom: 30, left: 0, right: 0, paddingVertical: 10 }}
        // contentContainerStyle={{ marginLeft:10}}
      >
        {markers.map((marker, index) => (

          <View style={styles.cardComponentStyle} key={index}>
            <View style={{ height: 80, width: 80, borderRadius: 10, borderWidth: 1, borderColor: Colors.BLACK, alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={marker.image}
                style={{ width: 70, height: 70, alignSelf: "center", borderRadius: 10, }}
                // resizeMode="cover"
              />
            </View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text numberOfLines={1} style={{ fontSize: 12, marginTop: 5, fontWeight: "bold" }}>{marker.title}</Text>
              <Text numberOfLines={1} style={{ fontSize: 12, color: "#444" }}>{marker.description}</Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default HomeScreen;