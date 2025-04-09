import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';

const DetailsScreen = () => {
    const route = useRoute();
    const { data } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Registration Summary</Text>

      <Text style={styles.label}>
        Name: <Text style={styles.value}>{data.name}</Text>
      </Text>
      <Text style={styles.label}>
        Phone No: <Text style={styles.value}>{data.phone}</Text>
      </Text>
      <Text style={styles.label}>
        Email ID: <Text style={styles.value}>{data.email}</Text>
      </Text>
      <Text style={styles.label}>
        Gender: <Text style={styles.value}>{data.gender}</Text>
      </Text>
      <Text style={styles.label}>
        State: <Text style={styles.value}>{data.state}</Text>
      </Text>
      <Text style={styles.label}>
        Location: <Text style={styles.value}>{data.location}</Text>
      </Text>
      <Text style={styles.label}>
        Pincode: <Text style={styles.value}>{data.pincode}</Text>
      </Text>
      <Text style={styles.label}>
        Hobby: <Text style={styles.value}>{data.hobbies?.join(', ')}</Text>
      </Text>
      <Text style={styles.label}>
        Skills: <Text style={styles.value}>{data.skill}</Text>
      </Text>

      {data.image ? (
        <>
          <Text style={styles.label}>Image:</Text>
          <Image source={{uri: data.image}} style={styles.image} />
        </>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'flex-start',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: '600',
  },
  value: {
    fontWeight: 'normal',
    color: '#333',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginTop: 10,
  },
});

export default DetailsScreen;
