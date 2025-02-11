import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Platform, Button, Pressable, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { NaverMapView, NaverMapMarkerOverlay } from "@mj-studio/react-native-naver-map";
import * as Location from "expo-location";

export default function Map() {


  useEffect(() => {
    (async () => {
      try {
        const {granted} = await Location.requestForegroundPermissionsAsync();

        /**
         * Note: Foreground permissions should be granted before asking for the background permissions
         * (your app can't obtain background permission without foreground permission).
        */
        if(granted) {
          await Location.requestBackgroundPermissionsAsync();
        }

      } catch(e) {
        console.log(`Location request has been failed: ${e}`);
      }
    })
  }, [])

  if(Platform.OS === "web") {
    return (
      <View>
        <Text>지도를 사용할 수 없습니다. 웹에서는 Google Maps를 사용하세요.</Text>
      </View>
    );
  }

  const initRegion = {
    latitude: 37.5665,
    longitude: 126.9780,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.locationContainer} onPress={initLocation}>
            <View style={styles.locationButton}>
              <MaterialIcons name="my-location" size={30} color="black" />
            </View>
          </TouchableOpacity> */}
      <NaverMapView 
        style={styles.container}
        mapType={'Basic'}
        layerGroups={{
          BUILDING: true,
          BICYCLE: false,
          CADASTRAL: false,
          MOUNTAIN: false,
          TRAFFIC: false,
          TRANSIT: false,
        }}
        initialRegion={initRegion}
        locale={'ko'}
        onInitialized={() => {
          return console.log('initialized!');
        }}>

      </NaverMapView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  locationContainer: {
    position: "absolute",
    bottom: "3%",   // 하단에서 20px 거리
    right: "3%",    // 우측에서 20px 거리
    zIndex: 1, 
  },
  locationButton: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    shadowColor: '#000', // 그림자 효과 추가
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5, // 안드로이드에서 그림자 효과
  }

});