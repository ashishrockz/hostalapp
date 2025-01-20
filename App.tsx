import { StyleSheet, View } from 'react-native'
import React from 'react'
import ComponentNaviations from './src/navigations/ComponentNaviations'

const App = () => {
  return (
    <View style={styles.container}>
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