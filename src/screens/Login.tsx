import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { userInfo } from '../data/data';

const Login = ({ navigation }: any) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(number);
  };

  const handleSubmit = () => {
    const trimmedPhoneNumber = phoneNumber.trim();
    if (userInfo.some((item) => item.phnumber === trimmedPhoneNumber)) {
      navigation.navigate("OTP", {
        phoneNumber: trimmedPhoneNumber,
        otp: Math.floor(100000 + Math.random() * 900000),
      });
    } else {
      Alert.alert("Phone number doesn't exist");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Get started with</Text>
        <Text style={styles.brandText}>ApnaGhar</Text>
      </View>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate("MainDrawer")}
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <View style={styles.phoneInput}>
          <Text style={styles.countryCode}>+91</Text>
          <TextInput
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text.replace(/\s+/g, ""))} 
            style={styles.input}
            placeholder="Phone number"
            placeholderTextColor="#ffffff80"
            keyboardType="phone-pad"
          />
        </View>
        <Text style={styles.confirmText}>
          We'll text you to confirm your number.
        </Text>
        <TouchableOpacity
          style={[
            styles.continueButton,
            {
              backgroundColor: validatePhoneNumber(phoneNumber) ? "#ffffff" : "#ffffff50",
            },
          ]}
          onPress={handleSubmit}
          disabled={!validatePhoneNumber(phoneNumber)}
        >
          <Text
            style={[
              styles.continueText,
              {
                color: validatePhoneNumber(phoneNumber) ? "#0066ff" : "#ffffff80", 
              },
            ]}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066ff',
    padding: 20,
  },
  header: {
    marginTop: 20,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '600',
  },
  brandText: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '600',
  },
  skipButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  skipText: {
    color: '#ffffff',
    fontSize: 16,
  },
  inputContainer: {
    marginTop: 40,
  },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ffffff40',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 10,
  },
  countryCode: {
    color: '#ffffff',
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#ffffff',
    fontSize: 16,
    paddingVertical: 0,
  },
  confirmText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  continueButton: {
    borderRadius: 30,
    paddingVertical: 15,
    marginTop: 20,
  },
  continueText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
