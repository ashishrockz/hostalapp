import {useContext, useEffect, useRef, useState} from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {UserContext} from '../hooks/context';
import {useNavigation} from '@react-navigation/native';
import { userInfo } from '../data/data';

export default function OTP({route,navigation }:any) {
  const {setIsLoggedIn,setUserInfo} = useContext(UserContext);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('');
  const [value6, setValue6] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
  const box4 = useRef();
  const box5 = useRef();
  const box6 = useRef();
  console.log(route.params);

  const handleSubmit = () => {
    const otp = [value1, value2, value3, value4, value5, value6].join('');
    if (route.params.otp == otp) {
      setIsLoggedIn(true);
      setSuccess(true);
      const user = userInfo.filter(item => item.phnumber == route.params.phoneNumber)
      setUserInfo(user[0])
      navigation.navigate('MainDrawer');
    }
    console.log('Submitted OTP:', otp);
  };

  const [count, setCount] = useState(30);
  const [isSuccess, setSuccess] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (count === 0 || isSuccess) {
        clearInterval(timer);
      } else {
        setCount(pre => pre - 1);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count, isSuccess]);

  const validateInput = (text, setValue, nextRef, prevRef) => {
    if (/^\d*$/.test(text)) {
      setValue(text);
      setErrorMessage('');
      if (text.length >= 1 && nextRef) {
        nextRef.current.focus();
      }
    } else {
      setErrorMessage('Only numbers are allowed');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Confirm your number</Text>
        <Text style={styles.subtitle}>
          Enter the OTP we sent over SMS to {route.params.phoneNumber}
        </Text>
        <View style={styles.otpContainer}>
          <TextInput
            ref={box1}
            maxLength={1}
            keyboardType="number-pad"
            style={[styles.otpInput, value1 ? styles.filledOtpInput : {}]}
            onChangeText={text => validateInput(text, setValue1, box2, null)}
          />
          <TextInput
            ref={box2}
            maxLength={1}
            keyboardType="number-pad"
            style={[styles.otpInput, value2 ? styles.filledOtpInput : {}]}
            onChangeText={text => validateInput(text, setValue2, box3, box1)}
          />
          <TextInput
            ref={box3}
            maxLength={1}
            keyboardType="number-pad"
            style={[styles.otpInput, value3 ? styles.filledOtpInput : {}]}
            onChangeText={text => validateInput(text, setValue3, box4, box2)}
          />
          <TextInput
            ref={box4}
            maxLength={1}
            keyboardType="number-pad"
            style={[styles.otpInput, value4 ? styles.filledOtpInput : {}]}
            onChangeText={text => validateInput(text, setValue4, box5, box3)}
          />
          <TextInput
            ref={box5}
            maxLength={1}
            keyboardType="number-pad"
            style={[styles.otpInput, value5 ? styles.filledOtpInput : {}]}
            onChangeText={text => validateInput(text, setValue5, box6, box4)}
          />
          <TextInput
            ref={box6}
            maxLength={1}
            keyboardType="number-pad"
            style={[styles.otpInput, value6 ? styles.filledOtpInput : {}]}
            onChangeText={text => validateInput(text, setValue6, null, box5)}
          />
        </View>
        {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        <TouchableOpacity
          style={[
            styles.submitButton,
            {
              backgroundColor: value1 && value2 && value3 && value4 && value5 && value6 ? 'white' : 'rgba(255, 255, 255, 0.5)',
            },
          ]}
          onPress={handleSubmit}
          disabled={!(value1 && value2 && value3 && value4 && value5 && value6)}
        >
          <Text
            style={[
              styles.submitButtonText,
              {
                color: value1 && value2 && value3 && value4 && value5 && value6 ? '#4A90E2' : 'rgba(255, 255, 255, 0.5)', // Text color
              },
            ]}
          >
            Verify
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.resendText}>Resend OTP in {count}</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066ff',
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginHorizontal: 5,
  },
  filledOtpInput: {
    backgroundColor: 'white',
    color: '#4A90E2',
  },
  submitButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginVertical: 20,
  },
  submitButtonText: {
    color: '#4A90E2',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendText: {
    color: 'white',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#faf8f7',
    marginBottom: 10,
    fontSize:20
  },
});