import * as React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackParamTypes} from '../navigation/StackParamTypes';
import {StackNavigationProp} from '@react-navigation/stack';

// type Props = StackScreenProps<StackParamTypes, 'Home'>;

export const Home = () => {
  const navigation =
    useNavigation<StackNavigationProp<StackParamTypes, 'Home'>>();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Home screen</Text>
        <Button
          onPress={() => navigation.navigate('Modal')}
          title="Open Modal"
        />
      </View>
    </>
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

export default Home;
