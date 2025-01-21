import { StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import ComponentNaviations from './src/navigations/ComponentNaviations'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor= '#fff' />
      <ComponentNaviations />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  }
})