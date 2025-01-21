import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
interface User {
  profilePic: string | undefined;
}

const DrawerContent = (props: DrawerContentComponentProps) => {
  const [user, setUser] = useState<User | null>(null);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileSection}>
          {user ? (
            user.profilePic ? (
              <View style={styles.profileContainer}>
                <Image
                  source={{uri: user.profilePic}}
                  style={styles.profilePic}
                />
                <Text style={styles.userName}>User Name</Text>
              </View>
            ) : (
              <Text style={styles.noImage}>No Profile Picture</Text>
            )
          ) : (
            <View style={styles.loginContainer}>
              <Image
                source={require('../../assets/noprofile.png')}
                style={styles.profilePic}
              />
              <Text>Welcome Buddy!</Text>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.itemText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.itemText}>Booking</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Legal')}>
            <Text style={styles.itemText}>Legal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Support')}>
            <Text style={styles.itemText}>Support</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={()=>(navigation.navigate("Privacy"))}>
          <Text style={styles.footerText}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Text style={styles.footerText}>Terms and Conditions</Text>
        </TouchableOpacity>
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
  },
  profileSection: {
    padding: 5,
    // borderBottomWidth: 1,
    // borderBottomColor: '#E5E5E5',
  },
  profileContainer: {
    alignItems: 'center',
  },
  loginContainer: {
    alignItems: 'center',
    backgroundColor: '#F5F8FF',
    padding: 20,
    borderRadius: 12,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#4A90E2',
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginTop: 8,
  },
  noImage: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
    marginVertical: 20,
  },
  loginButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25,
    marginTop: 10,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    padding: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#333333',
    marginLeft: 10,
  },
  footer: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  footerItem: {
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#666666',
  },
  versionText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 5,
  },
});
