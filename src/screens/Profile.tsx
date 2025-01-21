import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import MenuItem from '../component/MenuItem/MenuItem';

const Profile = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../assets/icons/profile-placeholder.png')}
            style={styles.avatarImage}
          />
        </View>
        <Text style={styles.profileTitle}>You are not logged in</Text>
        <Text style={styles.profileSubtitle}>
          Login or sign up to view your complete profile
        </Text>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuSection}>
        <MenuItem
          iconSource={require('../assets/icons/account.png')}
          title="Account"
          subtitle="Manage your account such as personal details, logout, delete account"
          onPress={() => navigation.navigate('Login')}
        />
        <MenuItem
          iconSource={require('../assets/icons/support.png')}
          title="Support"
          subtitle="We are here to help so please get in touch with us"
          onPress={() => navigation.navigate('Support')}
        />
        <MenuItem
          iconSource={require('../assets/icons/legal.png')}
          title="Legal"
          subtitle="You can see privacy policy, terms and condition, service terms, Non discrimination policy, booking policy, cancellation policy"
          onPress={() => navigation.navigate('Legal')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    overflow: 'hidden',
  },
  avatarImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  profileTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  profileSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  continueButton: {
    backgroundColor: '#FFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#5B5BFF',
  },
  continueButtonText: {
    color: '#5B5BFF',
    fontSize: 16,
    fontWeight: '500',
  },
  menuSection: {
    marginTop: 16,
  },
});