import React, {useRef, useState} from 'react';
import MapView, {Marker, LatLng, PROVIDER_GOOGLE} from 'react-native-maps';
import {View, StyleSheet} from 'react-native';

export const GoogleMap = () => {
  const mapRef = useRef(null);
  const [markers, setMarkers] = useState<LatLng[]>([]);

  const _renderMarkers = () => {
    console.log(markers);
    return markers.map((marker, index) => (
      <Marker
        key={index}
        coordinate={{
          latitude: marker.latitude,
          longitude: marker.longitude,
        }}
      />
    ));
  };
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        onPress={event => {
          const {latitude, longitude} = event.nativeEvent.coordinate;
          setMarkers(prev => [...prev, {latitude, longitude}]);
        }}
        region={{
          latitude: 47.91972,
          longitude: 106.90916,
          latitudeDelta: 0.075,
          longitudeDelta: 0.075,
        }}>
        {_renderMarkers()}
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
