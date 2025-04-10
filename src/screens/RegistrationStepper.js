import React, {useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import GeneralInfoScreen from './GeneralInfoScreen';
import AddressScreen from './AddressScreen';
import OtherInfo from './OtherInfo';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

const RegistrationStepper = () => {
  const navigation = useNavigation();

  const [currentStep, setCurrentStep] = useState(0);
  const [isStepValid, setIsStepValid] = useState(false);


  const labels = ['General Info', 'Address', 'Other Info'];

  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#2196f3',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#2196f3',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#2196f3',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#2196f3',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#2196f3',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: 'gray',
  };

  const [regInfo, setRegInfo] = useState({
    name: '',
    phone: '',
    email: '',
    gender: '',
    state: '',
    location: '',
    pincode: '',
    hobbies: [],
    skill: '',
    image: '',
  });

  const updateValue = (field, value) => {
    setRegInfo(prev => ({...prev, [field]: value}));
  };

  const handleNextBtn = () => {
    if (currentStep < 2) {
      setCurrentStep(prev => prev + 1);
    }else{
      navigation.navigate('Details', { data: regInfo });
    }
  };

  const handlePrevBtn = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };


  const validateStep = () => {
    switch (currentStep) {
      case 0:
        return regInfo.name !== '' && regInfo.phone !== '' && regInfo.email !== '' && regInfo.gender !== '';
      case 1:
        return regInfo.state !== '' && regInfo.location !== '' && regInfo.pincode !== '';
      case 2:
        return regInfo.hobbies.length > 0 && regInfo.skill !== '' && regInfo.image !== '';
      default:
        return false;
    }
  };


useEffect(() => {
  setIsStepValid(validateStep());
}, [regInfo, currentStep]);

  return (
    <View style={styles.main}>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentStep}
        labels={labels}
        stepCount={3}
      />

      <View style={styles.stepPageView}>
        {currentStep === 0 && (
          <GeneralInfoScreen data={regInfo} updateValue={updateValue} />
        )}
        {currentStep === 1 && (
          <AddressScreen data={regInfo} updateValue={updateValue} />
        )}
        {currentStep === 2 && (
          <OtherInfo data={regInfo} updateValue={updateValue} />
        )}
      </View>
      <View style={styles.prevNextBtn}>
        <Button
          title="Previous"
          onPress={handlePrevBtn}
          disabled={currentStep === 0}
        />
        <Button
          title={currentStep === 2 ? 'Submit' : 'Next'}
          onPress={handleNextBtn}
          disabled={!isStepValid}
        />
      </View>
    </View>
  );
};
export default RegistrationStepper;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 15,
  },
  stepPageView: {
    marginTop: 30,
  },
  prevNextBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    marginTop: 30,
  },
});
