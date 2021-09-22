import * as React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {StackParamTypes} from '../navigation/StackParamTypes';
import {StackScreenProps} from '@react-navigation/stack';

type Props = StackScreenProps<StackParamTypes, 'Settings'>;

export const ModalScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.text}>Please rate us!</Text>
        <Button title="Dismiss" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modal: {
    backgroundColor: '#cfcbc2',
    width: '75%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    padding: 20,
    margin: 20,
  },
});

export default ModalScreen;
