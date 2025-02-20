import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../hooks/context';

const HostelPaymentGateway = ({ navigation, route }:any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const { setRecentBookings } = useContext(UserContext);  // Get booking details from route params
  const { hostelDetails, selectedRoom, duration, movingDate, totalAmount } = route.params;

  const RAZORPAY_KEY = 'rzp_test_BCxw0pqyim72mN';

  const generateOrderId = () => {
    return `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  };

  const handlePayment = async () => {
    // Basic validation
    if (!name || !email || !phone) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email');
      return;
    }

    if (phone.length !== 10) {
      Alert.alert('Error', 'Please enter a valid 10-digit phone number');
      return;
    }

    setLoading(true);

    const options = {
      key: RAZORPAY_KEY,
      amount: totalAmount * 100, // Convert to paisa
      name: hostelDetails.name,
      description: `${duration} Month Booking - ${selectedRoom.sharing} Sharing Room`,
      currency: 'INR',
      prefill: {
        name,
        email,
        contact: phone,
      },
      notes: {
        hostel_name: hostelDetails.name,
        location: `${hostelDetails.location}, ${hostelDetails.subLocation}`,
        room_type: `${selectedRoom.sharing} Sharing`,
        duration: `${duration} Months`,
        moving_date: movingDate.toISOString().split('T')[0],
      }
    };

    try {
      const data = await RazorpayCheckout.open(options);
      const bookingDetails = {
        paymentId: data.razorpay_payment_id,
        orderId: generateOrderId(),
        amount: totalAmount,
        timestamp: new Date().toISOString(),
        customerDetails: { name, email, phone },
        hostelDetails,
        roomDetails: selectedRoom,
        duration,
        movingDate: movingDate.toISOString(),
      };

      try {
        const existingBookings = await AsyncStorage.getItem('bookings');
        const bookings = existingBookings ? JSON.parse(existingBookings) : [];
        bookings.push(bookingDetails);
        await AsyncStorage.setItem('bookings', JSON.stringify(bookings));
      } catch (storageError) {
        console.warn('Failed to save booking details:', storageError);
      }
      setRecentBookings((prev: any) => [
        ...prev,
        {
          hostelDetails: hostelDetails,
          selectedRoom: selectedRoom,
          duration: duration,
          date: movingDate.toISOString().split("T")[0],
        },
      ]);
      // Navigate to success screen
      navigation.navigate('Your Bookings');
      
    } catch (error) {
      Alert.alert('Payment Failed', error.message || 'Payment processing failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Booking Details</Text>

        <View style={styles.bookingSummary}>
          <Text style={styles.hostelName}>{hostelDetails.name}</Text>
          <Text style={styles.location}>{hostelDetails.location}, {hostelDetails.subLocation}</Text>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Room Type:</Text>
            <Text style={styles.value}>{selectedRoom.sharing} Sharing</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Duration:</Text>
            <Text style={styles.value}>{duration} Months</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.label}>Moving Date:</Text>
            <Text style={styles.value}>{movingDate.toISOString().split('T')[0]}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Contact Information</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          maxLength={10}
        />

        <View style={styles.amountContainer}>
          <Text style={styles.amountLabel}>Total Amount:</Text>
          <Text style={styles.amount}>₹{totalAmount.toLocaleString()}</Text>
        </View>

        <TouchableOpacity 
          style={[styles.payButton, loading && styles.disabledButton]}
          onPress={handlePayment}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Pay Now</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  bookingSummary: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  hostelName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#666',
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginVertical: 20,
  },
  amountLabel: {
    fontSize: 18,
    color: '#333',
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  payButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HostelPaymentGateway;