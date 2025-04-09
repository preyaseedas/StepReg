import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'react-native-image-picker';
import BouncyCheckbox from 'react-native-bouncy-checkbox/lib';

const hobbiesList = ['Reading', 'Traveling', 'Gaming', 'Cooking'];
const skillsList = ['React', 'Node.js', 'Java', 'JavaScript', 'React Native'];

const OtherInfo = ({data, updateValue}) => {
  const [selectedHobbies, setSelectedHobbies] = useState(data.hobbies || []);

  const toggleHobby = hobby => {
    setSelectedHobbies(prev => {
      const updated = prev.includes(hobby)
        ? prev.filter(h => h !== hobby)
        : [...prev, hobby];
      updateValue('hobbies', updated);
      return updated;
    });
  };

  const openImagePicker = () => {
    ImagePicker.launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel && !response.errorCode && response.assets?.[0]) {
        updateValue('image', response.assets[0].uri);
      }
    });
  };

  return (
    <ScrollView style={styles.mainView}>
      <Text style={styles.textStyle}>Hobbies</Text>
      {hobbiesList.map((hobby, index) => (
        <BouncyCheckbox
          key={index}
          size={25}
          fillColor="#007bff"
          unfillColor="#FFFFFF"
          text={hobby}
          iconStyle={{borderColor: '#007bff'}}
          innerIconStyle={{borderWidth: 2}}
          textStyle={{textDecorationLine: 'none'}}
          isChecked={selectedHobbies.includes(hobby)}
          onPress={() => toggleHobby(hobby)}
          style={styles.checkbox}
        />
      ))}

      <Text style={styles.textStyle}>Skills</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={data.skill}
          onValueChange={itemValue => updateValue('skill', itemValue)}>
          <Picker.Item label="Select a skill" value="" />
          {skillsList.map(skill => (
            <Picker.Item
                key={skill}
                label={skill}
                value={skill}
                color={'#000000'}
            />
          ))}
        </Picker>
      </View>

      <Text style={styles.textStyle}>Upload Image</Text>
      <TouchableOpacity style={styles.imageBox} onPress={openImagePicker}>
        {data.image ? (
          <Image source={{uri: data.image}} style={styles.image} />
        ) : (
          <Text>Select Image</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
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
    marginTop: 5,
  },
  imageBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  checkbox: {
    marginVertical: 5,
  },
});

export default OtherInfo;
