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
import Profile from '../screens/Profile';
import Support from '../screens/Support';
import Legal from '../screens/Legal';
import Privacy from '../screens/privacy';
import Login from '../screens/Login';
import TermsAndConditions from '../screens/TermsAndConditions';
import Cancellation from '../screens/Cancellation';
import BookingPolicy from '../screens/BookingPolicy';
import NonDisceimination from '../screens/NonDisceimination';
import ServiceTerms from '../screens/ServiceTerms';
import HostelCard from '../screens/Hostelcard';
import HostelDetailCard from '../screens/HostelDetailCard';
import OTP from '../screens/OTP';
import Accounts from '../screens/Accounts';
import Booking from '../screens/Booking';
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
            name="OTP"
            component={OTP}
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
          <Stack.Screen
            name="Privacy Policy"
            component={Privacy}
            options={{
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Terms And Conditions"
            component={TermsAndConditions}
            options={{
              headerTitleAlign: 'center',
            }}
          />
           <Stack.Screen
            name="Service Terms"
            component={ServiceTerms}
            options={{
              headerTitleAlign: 'center',
            }}
          />
           <Stack.Screen
            name="Non Discrimination Policy"
            component={NonDisceimination}
            options={{
              headerTitleAlign: 'center',
            }}
          />
           <Stack.Screen
            name="Booking Policy"
            component={BookingPolicy}
            options={{
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Cancellation Policy"
            component={Cancellation}
            options={{
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="hostelcard"
            component={HostelCard}
            options={{
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="HostelDetailCard"
            component={HostelDetailCard}
            options={{
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Account"
            component={Accounts}
            options={{
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="Your Bookings"
            component={Booking}
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
