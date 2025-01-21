import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import DrawerContent from '../component/DrawerContent/DrawerContent';
import Index from '../screens/Index';
import SearchHeader from '../component/SearchHeader/SearchHeader';
import Search from '../component/Search/Search';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Support from '../screens/Support';
import Legal from '../screens/Legal';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="index"
        component={Index}
        options={{
          headerTitleAlign: 'center',
          header: () => <SearchHeader />,
        }}
      />
    </Drawer.Navigator>
  );
};
const ComponentNaviations = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MainDrawer"
            children={() => <DrawerNavigation />}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SearchBar"
            component={Search}
            options={{
              headerTitleAlign: 'center',
            }}
          />
          
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Support"
            component={Support}
            options={{
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Legal"
            component={Legal}
            options={{
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default ComponentNaviations;
const styles = StyleSheet.create({});
