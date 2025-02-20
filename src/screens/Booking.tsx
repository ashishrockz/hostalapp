import React, { useContext, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Modal, TextInput, Alert } from "react-native";
import { UserContext } from "../hooks/context";
 
const Booking = () => {
  const { recentBookings } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<any>();
  const [reason, setReason] = useState("")
 
  const checkOutDate = (date: any, duration: any) => {
    const checkIn = new Date(date);
    checkIn.setMonth(checkIn.getMonth() + duration);
    return checkIn.toDateString();
  };
 
  const handleRefundRequest = () => {
    if (!reason.trim()) {
      Alert.alert("Please enter a reason for your refund request.");
      return;
    }
    console.log("Refund requested for:", selectedBooking);
    console.log("Reason:", reason);
    setModalVisible(false);
    setReason("");
  };
 
 
 
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recent Bookings</Text>
      <FlatList
        data={recentBookings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.hostelDetails.imageUrl || 'https://www.ipeindia.org/wp-content/uploads/2022/07/AND00968-scaled.jpg' }}
                style={styles.image}
              />
              <View style={styles.overlay}>
                <Text style={styles.overlayText}>{item.hostelDetails.name}</Text>
              </View>
            </View>
            <View style={styles.details}>
              <View style={styles.row}>
                <Image source={{
                  uri:"https://media.istockphoto.com/id/1148705812/vector/location-icon-vector-pin-sign-isolated-on-white-background-navigation-map-gps-direction.jpg?s=612x612&w=0&k=20&c=lqEIzW3QedZfytsX30NoBJbHxZZbWnlLsvEiwOSbaow="
                }} style={styles.icon} />
                <Text style={styles.location}>{item.hostelDetails.subLocation}, {item.hostelDetails.location}</Text>
              </View>
              <View style={styles.row}>
                <Image source={{
                  uri:"https://static.thenounproject.com/png/1021592-200.png"
                }} style={styles.icon} />
                <Text style={styles.info}>Room: {item.selectedRoom.sharing} Sharing</Text>
              </View>
              <View style={styles.row}>
                <Image source={{
                  uri:"https://cdn3.iconfinder.com/data/icons/inficons-currency-set/512/rupee-512.png"
                }} style={styles.icon} />
                <Text style={styles.info}>Price: ₹{item.selectedRoom.price}/month</Text>
              </View>
              <View style={styles.row}>
                <Image source={{
                  uri:"https://c8.alamy.com/comp/2HFBPFB/month-duration-icon-outline-vector-hour-timer-date-general-2HFBPFB.jpg"
                }} style={styles.icon} />
                <Text style={styles.info}>Duration: {item.duration} months</Text>
              </View>
              <View style={styles.row}>
                <Image source={{
                  uri:"https://e7.pngegg.com/pngimages/111/427/png-clipart-computer-icons-airport-check-in-hotel-receptionist-hotel-text-desktop-wallpaper-thumbnail.png"
                }} style={styles.icon} />
                <Text style={styles.info}>Check-in: {new Date(item.date).toDateString()}</Text>
              </View>
              <View style={styles.row}>
                <Image source={{
                  uri:"https://cdn-icons-png.flaticon.com/512/1668/1668921.png"
                }} style={styles.icon} />
                <Text style={styles.info}>Check-out: {checkOutDate(item.date, item.duration)}</Text>
              </View>
              <TouchableOpacity style={styles.viewButton} onPress={()=>{
                setModalVisible(true);
                setSelectedBooking(item);
                }}>
                <Text style={styles.viewButtonText}>Request Refund</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalBackground} onPress={() => setModalVisible(false)} />
          <View style={styles.modalContent}>
            {selectedBooking && (
              <>
                <Text style={styles.modalTitle}>Refund Request</Text>
                <Text style={styles.modalText}>Hostel: <Text style={{ fontWeight: "bold" }}>{selectedBooking.hostelDetails.name}</Text></Text>
                <Text style={styles.modalText}>Check-in: {new Date(selectedBooking.date).toDateString()}</Text>
                <Text style={styles.modalText}>Check-out: {new Date().toDateString()}</Text>
                <Text style={styles.modalAmount}>
                  Refund Amount: ₹{selectedBooking.selectedRoom.price * selectedBooking.duration - Math.floor((new Date().getTime() - new Date(selectedBooking.date).getTime()) / (1000 * 60 * 60 * 24)) * 500}
                </Text>
 
                <Text style={styles.label}>Reason for Leaving:</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your reason..."
                  value={reason}
                  onChangeText={setReason}
                  multiline
                />
 
                <View style={styles.modalButtons}>
                  <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                    <Text style={styles.modalButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButtonConfirm} onPress={handleRefundRequest}>
                    <Text style={styles.modalButtonText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};
 
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    padding: 10,
    backgroundColor: "gray",
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  modalButtonConfirm: {
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 16,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#222",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 10,
    alignItems: "center",
  },
  overlayText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  details: {
    paddingVertical: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  location: {
    fontSize: 16,
    color: "#6c757d",
  },
  info: {
    fontSize: 15,
    color: "#333",
  },
  viewButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  viewButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  modalBackground: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  modalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
    marginVertical: 10
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    alignSelf: "flex-start"
  },
  textInput: {
    width: "100%",
    height: 80,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    textAlignVertical: "top" ,
    marginBottom:10
  },
 
});
 
export default Booking;