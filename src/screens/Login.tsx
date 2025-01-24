import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>Get started with</Text>
        <Text style={styles.brandText}>ApnaGhar</Text>
      </View>
      <TouchableOpacity style={styles.skipButton}
       onPress={() =>navigation.navigate("MainDrawer")}
       >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <View style={styles.phoneInput}>
          <Text style={styles.countryCode}>+91</Text>
          <TextInput
            value={phoneNumber}
            onChangeText={(text)=>(setPhoneNumber(text))}
            style={styles.input}
            placeholder="Phone number"
            placeholderTextColor="#ffffff80"
            keyboardType="phone-pad"
          />
          {/* <Text style={styles.checkMark}>✓</Text> */}
        </View>
        <Text style={styles.confirmText}>
          We'll text you to confirm your number.
        </Text>
        <TouchableOpacity style={styles.continueButton} onPress={()=>(navigation.navigate("OTP",{phoneNumber,otp:(Math.ceil(Math.random()*1000000))}))}>
          <Text style={styles.continueText}>Continue</Text>
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
  checkMark: {
    color: '#ffffff',
    fontSize: 20,
  },
  confirmText: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  continueButton: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    paddingVertical: 15,
    marginTop: 20,
  },
  continueText: {
    color: '#0066ff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});