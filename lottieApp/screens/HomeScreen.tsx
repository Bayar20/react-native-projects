import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

type PermissionStatus =
  | 'unavailable'
  | 'denied'
  | 'limited'
  | 'granted'
  | 'blocked';

type PermissionTypes = {
  permission: string;
};

export const HomeScreen = () => {
  const checkPermissionForBackgroundLocation = () => {
    const permission = PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION;
    console.log(permission);
    checkPermission(permission);
  };

  const checkPermission = async permission => {
    try {
      const result = await check(permission);
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          console.log('denied on check');
          requestPermission(permission);
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const requestPermission = async permission => {
    try {
      const result = await request(permission);
      switch (result) {
        case RESULTS.UNAVAILABLE:
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <Button
        title="Get background location"
        onPress={checkPermissionForBackgroundLocation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
