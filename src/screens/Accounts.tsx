import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MenuItem from '../component/MenuItem/MenuItem';
import { UserContext } from '../hooks/context';

const Accounts = ({ navigation }: any) => {
  const { setIsLoggedIn, setUserInfo } = useContext(UserContext);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserInfo({});
    navigation.navigate('Login');
  };

  const handleDeleteAccount = () => {
    setIsLoggedIn(false);
    setIsModalVisible(false);
    setUserInfo({});
    navigation.navigate('Login'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <MenuItem 
        title='Delete Account' 
        onPress={() => setIsModalVisible(true)} 
      />
      <MenuItem 
        title='Logout' 
        onPress={handleLogout} 
      />
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Are you sure?</Text>
            <Text style={styles.modalMessage}>
              Do you really want to delete your account?
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.yesButton]}
                onPress={handleDeleteAccount}
              >
                <Text style={styles.yesText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  yesButton: {
    backgroundColor: '#ff4d4d',
  },
  cancelText: {
    color: '#333',
    fontSize: 16,
  },
  yesText: {
    color: '#FFF',
    fontSize: 16,
  },
});
