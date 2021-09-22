import * as React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import {StackParamTypes} from '../navigation/StackParamTypes';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<StackParamTypes, 'Notifications'>;

export const Notifications = ({navigation}: Props) => {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notifications screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 30,
    padding: 20,
    margin: 20,
  },
});
export default Notifications;
