import { StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Import your components
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
import HostelBooking from '../screens/hostelBooking';
import PaymentGateway from '../screens/PaymentGateway';

// Define types for the navigation parameters
export type RootStackParamList = {
  Login: undefined;
  OTP: undefined;
  MainDrawer: undefined;
  SearchBar: undefined;
  Profile: undefined;
  Support: undefined;
  Legal: undefined;
  'Privacy Policy': undefined;
  'Terms And Conditions': undefined;
  'Service Terms': undefined;
  'Non Discrimination Policy': undefined;
  'Booking Policy': undefined;
  'Cancellation Policy': undefined;
  hostelcard: undefined;
  HostelDetailCard: undefined;
  Account: undefined;
  'Your Bookings': undefined;
  'Confirm Bookings': {
    hostelDetails: {
      imageUrl: string;
      name: string;
      location: string;
      subLocation: string;
      roomAmenities: string[];
      hostelRules: string[];
    };
    selectedRoom: {
      sharing: number;
      price: number;
    };
  };
  PaymentScreen: {
    hostelDetails: {
      name: string;
      location: string;
      subLocation: string;
    };
    selectedRoom: {
      sharing: number;
      price: number;
    };
    duration: number;
    movingDate: Date;
    totalAmount: number;
  };
  BookingSuccess: {
    paymentId: string;
    orderId: string;
    amount: number;
    timestamp: string;
    customerDetails: {
      name: string;
      email: string;
      phone: string;
    };
    hostelDetails: any;
    roomDetails: any;
    duration: number;
    movingDate: string;
  };
};

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator<RootStackParamList>();

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
const ComponentNavigations = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OTP"
            component={OTP}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainDrawer"
            component={DrawerNavigation}
            options={{ headerShown: false }}
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
          <Stack.Screen
            name="Confirm Bookings"
            component={HostelBooking}
            options={{
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="PaymentScreen"
            component={PaymentGateway}
            options={{
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default ComponentNavigations;
const styles = StyleSheet.create({});
