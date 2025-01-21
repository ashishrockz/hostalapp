import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MenuItem from '../component/MenuItem/MenuItem'

const Support = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.supportSection}>
            <View style={styles.avatarContainer}>
              <Image
                source={require('../assets/support.png')}
                style={styles.avatarImage}
              />
            </View>
            <Text style={styles.supportTitle}>How we can help you?</Text>
            <Text style={styles.supportSubtitle}>
              Please look for below suggestion.
            </Text>
          </View>
    
          <View style={styles.menuSection}>
            <MenuItem
              iconSource={require('../assets/icons/faqs.png')}
              title="FAQS"
              subtitle="The section you will know about the Frequently Asked Questions."
              onPress={() => navigation.navigate('Login')}
            />
            <MenuItem
              iconSource={require('../assets/icons/support.png')}
              title="Get Help"
              subtitle="In this section you can ask about the help if you have any query or doubt"
              onPress={() => navigation.navigate('Support')}
            />
            <MenuItem
              iconSource={require('../assets/icons/legal.png')}
              title="Give us Feedback"
              subtitle="In this section you can give us fedback or suggestion so that we can improve our services"
              onPress={() => navigation.navigate('Legal')}
            />
          </View>
        </SafeAreaView>
  )
}

export default Support

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  supportSection: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  avatarContainer: {
    width:300,
    height:250,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  avatarImage: {
    width:300,
    height:250,
    resizeMode: 'contain',
  },
  supportTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  supportSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  menuSection: {
    marginTop: 10,
  },
})