import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const states = [
  'Select',
  'WB',
  'DL',
  'UP',
  'MP',
  'OD',
];

const AddressScreen = ({data, updateValue}) => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.textStyle}>State</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={data.state}
          onValueChange={itemValue => updateValue('state', itemValue)}>
          {states.map((state, index) => (
            <Picker.Item
              color={state === 'Select' ? '#bababa' : '#000000'}
              key={index}
              label={state}
              value={state === 'Select' ? '' : state}
            />
          ))}
        </Picker>
      </View>

      <Text style={styles.textStyle}>Location</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your location"
        placeholderTextColor={'#bababa'}
        multiline
        value={data.location}
        onChangeText={val => updateValue('location', val)}
      />

      <Text style={styles.textStyle}>pinCode</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your pinCode"
        placeholderTextColor={'#bababa'}
        value={data.pinCode}
        keyboardType="numeric"
        onChangeText={val => updateValue('pinCode', val)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
      marginBottom: 3,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#bababa',
    padding: 10,
    borderRadius: 6,
    fontSize: 16,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
  },
});

export default AddressScreen;
