import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MenuItem from '../component/MenuItem/MenuItem'
import { UserContext } from '../hooks/context'

const Accounts = ({navigation}:any) => {
  const {setIsLoggedIn,setUserInfo} = useContext(UserContext); // Use useContext correctly
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserInfo({});
        navigation.navigate('Login');
      };
  return (
   <SafeAreaView style={styles.container}>
    <MenuItem 
    title='DeletAcccount'/>
    <MenuItem 
    title='Logout'
    onPress={() => handleLogout()}/>
   </SafeAreaView>
  )
}

export default Accounts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
      },
})

