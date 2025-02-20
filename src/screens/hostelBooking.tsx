import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  Dimensions,
  Modal,
  ActivityIndicator,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { RootStackParamList } from '../navigations/ComponentNaviations';
import { StackScreenProps } from '@react-navigation/stack';

interface HostelDetails {
  imageUrl: string;
  name: string;
  location: string;
  subLocation: string;
  roomAmenities: string[];
  hostelRules: string[];
}

interface RoomDetails {
  sharing: number;
  price: number;
}

interface HostelBookingProps {
  route: {
    params: {
      hostelDetails: HostelDetails;
      selectedRoom: RoomDetails;
    };
  };
  navigation: any;
}

type Props = StackScreenProps<RootStackParamList, 'Confirm Bookings'>;

const HostelBooking: React.FC<Props> = ({ route, navigation }) => {
  const {hostelDetails, selectedRoom} = route.params;
  const [duration, setDuration] = useState<number>(1);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const DEFAULT_IMAGE = 'https://www.ipeindia.org/wp-content/uploads/2022/07/AND00968-scaled.jpg';

  const calculateTotalAmount = () => {
    return selectedRoom.price * duration;
  };

  const handleProceedToPayment = () => {
    navigation.navigate('PaymentScreen', {
      hostelDetails,
      selectedRoom,
      duration,
      movingDate: date,
      totalAmount: calculateTotalAmount(),
    });
  };

  const incrementDuration = () => {
    setDuration(prev => prev + 1);
  };

  const decrementDuration = () => {
    if (duration > 1) {
      setDuration(prev => prev - 1);
    }
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
    Alert.alert(
      'Image Error',
      'Failed to load hostel image. Showing default image instead.',
      [{text: 'OK'}],
    );
  };

  const ImageContainer = ({isModal = false}) => (
    <View style={isModal ? styles.modalImageContainer : styles.header}>
      <Image
        source={{
          uri: imageError ? DEFAULT_IMAGE : hostelDetails.imageUrl || DEFAULT_IMAGE,
        }}
        style={[
          isModal ? styles.modalImage : styles.hostelImage,
          isModal ? {width: windowWidth, height: windowHeight * 0.7} : {width: windowWidth},
        ]}
        resizeMode={isModal ? 'contain' : 'cover'}
        onLoadStart={() => setImageLoading(true)}
        onLoadEnd={() => setImageLoading(false)}
        onError={handleImageError}
      />
      {imageLoading && (
        <View
          style={[
            styles.loadingContainer,
            isModal ? {height: windowHeight * 0.7} : {height: 200},
          ]}>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      )}
      {!isModal && !imageLoading && (
        <TouchableOpacity
          style={styles.expandImageButton}
          onPress={() => setImageModalVisible(true)}>
          <Text style={styles.expandImageText}>🔍</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageContainer />
        <View style={styles.headerContent}>
          <Text style={styles.hostelName}>{hostelDetails.name}</Text>
          <Text style={styles.hostelLocation}>
            {hostelDetails.location}, {hostelDetails.subLocation}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Booking Details</Text>
          <View style={styles.bookingCard}>
            <View style={styles.bookingRow}>
              <Text style={styles.bookingLabel}>Room Type</Text>
              <Text style={styles.bookingValue}>
                {selectedRoom.sharing} Sharing
              </Text>
            </View>

            <View style={styles.bookingRow}>
              <Text style={styles.bookingLabel}>Price</Text>
              <Text style={styles.bookingValue}>₹{selectedRoom.price}</Text>
            </View>

            <View style={styles.bookingRow}>
              <Text style={styles.bookingLabel}>Duration</Text>
              <View style={styles.durationSelector}>
                <TouchableOpacity
                  onPress={decrementDuration}
                  style={[styles.durationButton, {opacity: duration === 1 ? 0.5 : 1}]}>
                  <Text style={styles.durationButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.durationValue}>
                  {duration} Month{duration > 1 ? 's' : ''}
                </Text>
                <TouchableOpacity
                  onPress={incrementDuration}
                  style={styles.durationButton}>
                  <Text style={styles.durationButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.bookingRow}>
              <Text style={styles.bookingLabel}>Moving Date</Text>
              <TouchableOpacity
                onPress={() => setShowDatePicker(true)}
                style={styles.dateInput}>
                <Text style={styles.dateText}>
                  {date.toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bookingRow}>
              <Text style={styles.bookingLabel}>Total Amount</Text>
              <Text style={styles.totalAmount}>₹{calculateTotalAmount()}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Amenities</Text>
          <View style={styles.amenitiesGrid}>
            {hostelDetails.roomAmenities.map((amenity, index) => (
              <View key={index} style={styles.amenityItem}>
                <Text style={styles.amenityText}>{amenity}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hostel Rules</Text>
          <View style={styles.rulesList}>
            {hostelDetails.hostelRules.map((rule, index) => (
              <View key={index} style={styles.ruleItem}>
                <Text style={styles.ruleNumber}>{index + 1}.</Text>
                <Text style={styles.ruleText}>{rule}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleProceedToPayment}>
          <Text style={styles.confirmButtonText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={imageModalVisible}
        onRequestClose={() => setImageModalVisible(false)}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setImageModalVisible(false)}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>
          <ImageContainer isModal={true} />
        </View>
      </Modal>

      <DatePicker
        modal
        open={showDatePicker}
        date={date}
        onConfirm={date => {
          setShowDatePicker(false);
          setDate(date);
        }}
        onCancel={() => {
          setShowDatePicker(false);
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    marginBottom: 0,
    position: 'relative',
  },
  headerContent: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  hostelImage: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expandImageButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expandImageText: {
    fontSize: 20,
    color: '#fff',
  },
  modalImageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  modalImage: {
    backgroundColor: '#000',
    resizeMode: 'cover',
  },
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F5F7FA',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  summaryCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  summaryLabel: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1A',
  },
  totalRow: {
    borderBottomWidth: 0,
    marginTop: 8,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#007AFF',
  },
  payButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },
  payButtonDisabled: {
    opacity: 0.6,
  },
  payButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  // Fix duplicate modalContainer style by merging properties
  // Add these to the existing StyleSheet.create({...}) object

  modalContent: {
    backgroundColor: '#fff',
    marginTop: 'auto',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '90%',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: -2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end', // Changed from 'center' to 'flex-end' for bottom sheet modal
  },

  // Styles for the image modal
  imageModalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageModalCloseButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageModalCloseText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
  },

  // Additional styles for payment form
  paymentSection: {
    marginBottom: 24,
  },

  paymentLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },

  paymentInput: {
    backgroundColor: '#F5F7FA',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },

  paymentError: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
  },

  processingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },

  processingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#1A1A1A',
    fontWeight: '500',
  },

  // Additional helper styles
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 16,
  },

  errorContainer: {
    padding: 16,
    backgroundColor: '#FFE5E5',
    borderRadius: 8,
    marginBottom: 16,
  },

  errorText: {
    color: '#FF3B30',
    fontSize: 14,
  },

  successContainer: {
    padding: 16,
    backgroundColor: '#E5FFE5',
    borderRadius: 8,
    marginBottom: 16,
  },

  successText: {
    color: '#34C759',
    fontSize: 14,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalCloseButton: {
    padding: 8,
  },
  modalCloseText: {
    fontSize: 20,
    color: '#666',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    flex: 1,
    marginLeft: 16,
    textAlign: 'center',
  },
  modalScroll: {
    flex: 1,
    padding: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  hostelName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  hostelLocation: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  bookingCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  bookingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  bookingLabel: {
    fontSize: 16,
    color: '#666',
  },
  bookingValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#007AFF',
  },
  durationSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  durationButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  durationButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
  durationValue: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 16,
    minWidth: 80,
    textAlign: 'center',
  },
  dateInput: {
    padding: 8,
    backgroundColor: '#F5F7FA',
    borderRadius: 8,
  },
  dateText: {
    fontSize: 16,
    color: '#1A1A1A',
  },
  amenitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  amenityItem: {
    width: '50%',
    paddingVertical: 8,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  amenityText: {
    fontSize: 16,
    color: '#1A1A1A',
    marginLeft: 8,
  },
  rulesList: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
  },
  ruleItem: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  ruleNumber: {
    fontSize: 16,
    color: '#666',
    width: 24,
  },
  ruleText: {
    fontSize: 16,
    color: '#1A1A1A',
    flex: 1,
  },
  confirmButton: {
    backgroundColor: '#007AFF',
    marginHorizontal: 16,
    marginBottom: 24,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  // New styles for payment integration
  paymentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    flex: 1,
    marginLeft: 16,
    textAlign: 'center',
  },
});

export default HostelBooking;
