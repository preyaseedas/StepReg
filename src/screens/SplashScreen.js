import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();

  //Navigate to Home screen after 2000ms
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Registration');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Step Registration</Text>
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImg: {
    width: 150,
    height: 150,
  },
  text: {color: '#2196f3', fontSize: 30, fontWeight: 600, padding: 20},
});
