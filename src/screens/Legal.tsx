import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MenuItem from '../component/MenuItem/MenuItem';
const Legal = ({navigation}:any) => {
  // const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.supportSection}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../assets/legal.png')}
            style={styles.avatarImage}
          />
        </View>
      </View>
      {/* <View>
        {legalArr.map((arr)=>(
          <TouchableOpacity key={arr} style={styles.card} onPress={()=>(navigation.navigate(arr))}>
            <Text style={styles.cardText}>{arr}</Text>
            <Image source={require("../assets/icons/right.png")} style={styles.arrowImage}></Image>
          </TouchableOpacity>
        ))}
      </View> */}
      <View style={styles.menuSection}>
        <MenuItem
          title="Privacy Policy"
          onPress={() => navigation.navigate('Privacy Policy')}
        />
        <MenuItem
          title="Terms And Conditions"
          onPress={() => navigation.navigate('Terms And Conditions')}
        />
        <MenuItem
          title="Service Terms"
          onPress={() => navigation.navigate('Service Terms')}
        />
        <MenuItem
          title="Non Discrimination Policy"
          onPress={() => navigation.navigate('Non Discrimination Policy')}
        />
        <MenuItem
          title="Booking Policy"
          onPress={() => navigation.navigate('Booking Policy')}
        />
        <MenuItem
          title="Cancellation Policy"
          onPress={() => navigation.navigate('Cancellation Policy')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Legal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  supportSection: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  avatarContainer: {
    width:250,
    height:200,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatarImage: {
    width:300,
    height:250,
    resizeMode: 'contain',
  },
  menuSection: {
    marginTop: 10,
  },
});
