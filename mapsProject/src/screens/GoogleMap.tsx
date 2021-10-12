import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {View, StyleSheet} from 'react-native';

export const GoogleMap = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 47.91972,
          longitude: 106.90916,
          latitudeDelta: 0.075,
          longitudeDelta: 0.075,
        }}>
        <Marker
          coordinate={{
            latitude: 47.91972,
            longitude: 106.90916,
          }}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
