import React, {useEffect, useState, useRef} from 'react';
import firestore from '@react-native-firebase/firestore';
import {View, StyleSheet, Text, FlatList, Button} from 'react-native';

type ContactType = {
  first_name: string;
  last_name: string;
  company_name: string;
  address: string;
  city: string;
  state: string;
  post: number;
  phone1: string;
  phone2: string;
  email: string;
  web: string;
  key: string;
};

const App = () => {
  const [firestoreData, setFirestoreData] = useState([]);
  const [data, setData] = useState();
  const indices = useRef([0]).current;

  useEffect(() => {
    let letter = '';
    const _data = [];
    firestoreData.forEach(item => {
      if (item.first_name[0] === letter) {
        _data.push(item);
      } else {
        _data.push({key: item.first_name[0]});
        indices.push(_data.length - 1);
        _data.push(item);
        letter = item.first_name[0];
      }
    });
    console.log(indices);
    setData(_data);
    // const subscriber = firestore()
    //   .collection('contacts')
    //   .orderBy('first_name')
    //   .onSnapshot(querySnapshot => {
    //     const _contacts = [];
    //     querySnapshot.forEach(documentSnapshot => {
    //       _contacts.push({
    //         ...documentSnapshot.data(),
    //         key: documentSnapshot.id,
    //       });
    //     });
    //     setFirestoreData(_contacts);
    //     updateData();
    //   });
    // return () => subscriber();
    // Unsubscribe from events when no longer in use
  }, [firestoreData]);

  // const updateData = () => {
  //   let letter = '';
  //   const _data = [];
  //   firestoreData.forEach(item => {
  //     if (item.first_name[0] === letter) {
  //       _data.push(item);
  //     } else {
  //       _data.push({key: item.first_name[0]});
  //       indices.push(_data.length - 1);
  //       _data.push(item);
  //       letter = item.first_name[0];
  //     }
  //   });
  //   console.log(indices);
  //   setData(_data);
  // };

  const renderItem = ({item}: {item: ContactType}): JSX.Element => {
    if (item.key.length === 1) {
      return (
        <View style={styles.header}>
          <Text>{item.key}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.contact}>
          <Text>
            {item.first_name} {item.last_name}
          </Text>
        </View>
      );
    }
  };

  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  const onPress = () => {
    firestore()
      .collection('contacts')
      .orderBy('first_name')
      .onSnapshot(querySnapshot => {
        const _contacts = [];
        querySnapshot.forEach(documentSnapshot => {
          _contacts.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setFirestoreData(_contacts);
        // updateData();
      });
  };

  return (
    <View style={styles.container}>
      <View>
        <Button onPress={onPress} title="Add contact" />
      </View>
      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={item => item.key}
        ItemSeparatorComponent={renderSeparator}
        // ListHeaderComponent={renderHeader}
        stickyHeaderIndices={indices}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contact: {
    height: 40,
    paddingHorizontal: '3%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  separator: {
    height: 1,
    width: '96%',
    backgroundColor: '#CED0CE',
  },
  header: {
    padding: 5,
    backgroundColor: '#E8E8E8',
    width: '96%',
  },
});

export default App;
