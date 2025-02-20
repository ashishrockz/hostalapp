import { StatusBar, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ComponentNaviations from './src/navigations/ComponentNaviations'
import { UserContext } from './src/hooks/context'
import { User } from './src/types/Types'
 
const App = () => {
  const [userInfo, setUserInfo] = useState<User["userInfo"]>({});
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [recentBookings, setRecentBookings] = useState([]);
 
  return (
    <UserContext.Provider value={{userInfo,setUserInfo,isLoggedIn,setIsLoggedIn, recentBookings, setRecentBookings}}>
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor= '#fff' />
        <ComponentNaviations />
      </View>
    </UserContext.Provider>
  )
}
 
export default App
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})