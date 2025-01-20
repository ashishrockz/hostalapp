import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native'; 
import {DrawerNavigationProp} from '@react-navigation/drawer';
type Navigation = DrawerNavigationProp<any>;

const SearchHeader = () => {
    const navigation = useNavigation<Navigation>()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={require('../../assets/Menu.png')} style={styles.menuIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchBox} onPress={()=>(navigation.navigate("SearchBar"))}>
        <Text style={styles.searchText}>Search by city</Text>
        <Image source={require('../../assets/Search.png')} style={styles.searchIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff', 
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4,
  },
  menuIcon: {
    width: 30,
    height: 30
  },
  searchBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    padding:10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '88%',
   
  },
  searchText: {
    fontSize: 16,
    color: '#777', 
    flex: 1,
  },
  searchIcon: {
    width: 20,
    height: 20,
    
  },
});
