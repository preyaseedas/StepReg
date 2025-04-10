import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

const genderOptions = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
  {label: 'Other', value: 'Other'},
];

const GeneralInfoScreen = ({data, updateValue}) => {
  const [name, setName] = useState(data.name || '');
  const [phone, setPhone] = useState(data.phone || '');
  const [email, setEmail] = useState(data.email || '');
  const [gender, setGender] = useState(data.gender || '');

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    updateValue('name', name);
    updateValue('phone', phone);
    updateValue('email', email);
    updateValue('gender', gender);
  }, [name, phone, email, gender]);

  const validateName = text => {
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(text)) {
      setNameError('Only letters and spaces are allowed');
    } else {
      setNameError('');
    }
    setName(text);
  };

  const validatePhone = text => {
    const regex = /^[0-9]{0,10}$/;
    if (!regex.test(text)) {
      setPhoneError('Only digits allowed (max 10)');
    } else {
      setPhoneError('');
    }
    setPhone(text);
  };

  const validateEmail = text => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (text.length > 0 && !regex.test(text)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
    setEmail(text);
  };

  return (
    <View style={styles.mainView}>
      <Text style={styles.textStyle}>Name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        placeholderTextColor={'#bababa'}
        value={data.name}
        onChangeText={validateName}
      />
      {nameError ? <Text style={styles.error}>{nameError}</Text> : null}

      <Text style={styles.textStyle}>Phone No</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your phone"
        placeholderTextColor={'#bababa'}
        value={data.phone}
        keyboardType="phone-pad"
        onChangeText={validatePhone}
      />
      {phoneError ? <Text style={styles.error}>{phoneError}</Text> : null}

      <Text style={styles.textStyle}>Email ID</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your email"
        placeholderTextColor={'#bababa'}
        value={data.email}
        keyboardType="email-address"
        onChangeText={validateEmail}
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <Text style={styles.textStyle}>Gender</Text>
      <RadioForm
        radio_props={genderOptions}
        initial={genderOptions.findIndex(opt => opt.value === data.gender)}
        onPress={value => updateValue('gender', value)}
        formHorizontal
        labelHorizontal
        buttonColor={'#2196f3'}
        selectedButtonColor={'#2196f3'}
        labelStyle={styles.labelStyle}
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
  labelStyle: {
    marginRight: 10,
  },
  error: {
    color: 'red',
    marginTop: 4,
    marginLeft: 5,
    fontSize: 13,
  },
});

export default GeneralInfoScreen;
