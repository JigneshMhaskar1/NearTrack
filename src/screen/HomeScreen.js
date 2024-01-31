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

const Images = [
  { uri: "https://i.imgur.com/sNam9iJ.jpg" },
  { uri: "https://i.imgur.com/N7rlQYt.jpg" },
  { uri: "https://i.imgur.com/UDrH0wm.jpg" },
  { uri: "https://i.imgur.com/Ka8kNST.jpg" },
];

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

const HomeScreen = () => {
  const [markers, setMarkers] = useState([
    {
      coordinate: {
        latitude: 45.524548,
        longitude: -122.6749817,
      },
      title: "Best Place",
      description: "This is the best place in Portland",
      image: Images[0],
    },
    {
      coordinate: {
        latitude: 45.524698,
        longitude: -122.6655507,
      },
      title: "Second Best Place",
      description: "This is the second best place in Portland",
      image: Images[1],
    },
    {
      coordinate: {
        latitude: 45.5230786,
        longitude: -122.6701034,
      },
      title: "Third Best Place",
      description: "This is the third best place in Portland",
      image: Images[2],
    },
    {
      coordinate: {
        latitude: 45.521016,
        longitude: -122.6561917,
      },
      title: "Fourth Best Place",
      description: "This is the fourth best place in Portland",
      image: Images[3],
    },
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
      outputRange: [1, 2.5, 1],
      extrapolate: "clamp",
    });
    const opacity = animation.interpolate({
      inputRange,
      outputRange: [0.35, 1, 0.35],
      extrapolate: "clamp",
    });
    return { scale, opacity };
  });

  const mapRef = useRef(null);

  // useEffect(() => {
  //   const listener = ({ value }) => {
  //     let newIndex = Math.floor(value / CARD_WIDTH + 0.3);
  //     if (newIndex >= markers.length) {
  //       newIndex = markers.length - 1;
  //     }
  //     if (newIndex <= 0) {
  //       newIndex = 0;
  //     }

  //     clearTimeout(regionTimeout);
  //     regionTimeout = setTimeout(() => {
  //       if (index.current !== newIndex) {
  //         index.current = newIndex;
  //         const { coordinate } = markers[newIndex];
  //         mapRef.current.animateToRegion(
  //           {
  //             ...coordinate,
  //             latitudeDelta: region.latitudeDelta,
  //             longitudeDelta: region.longitudeDelta,
  //           },
  //           350
  //         );
  //       }
  //     }, 10);
  //   };

  //   animation.addListener(listener);

  //   return () => {
  //     animation.removeListener(listener);
  //   };
  // }, [markers, region]);

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
    regionTimeout = setTimeout(() => {
      if (index.current !== index) {
        index.current = index;
        const { coordinate } = markers[index];
        mapRef.current.animateToRegion(
          {
            ...coordinate,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
          },
          350
        );
      }
    }, 10);
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
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    backgroundColor: "rgba(130,4,150, 0.3)",
                    position: "absolute",
                    borderWidth: 1,
                    borderColor: "rgba(130,4,150, 0.5)",
                    transform: [{ scale: interpolations[index].scale }],
                    opacity: interpolations[index].opacity,
                  }}
                />
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: "rgba(130,4,150, 0.9)",
                  }}
                />
              </Animated.View>
            )}
          </Marker>
        ))}
      </MapView>
      <Animated.ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH}
        onScroll={handleScroll}
        style={{ position: "absolute", bottom: 30, left: 0, right: 0, paddingVertical: 10 }}
        contentContainerStyle={{ paddingRight: width - CARD_WIDTH }}
      >
        {markers.map((marker, index) => (
          <View style={{ padding: 10, elevation: 2, backgroundColor: "#FFF", marginHorizontal: 10 }} key={index}>
            <Image
              source={marker.image}
              style={{ flex: 3, width: "100%", height: "100%", alignSelf: "center" }}
              resizeMode="cover"
            />
            <View style={{ flex: 1 }}>
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