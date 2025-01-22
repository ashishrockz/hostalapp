import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { arr } from "../data/data";

export default function HostelCard({ route }: any) {
  const [cityArray, setCityArray] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const { city = "", type = "" } = route.params || {};
    setLoading(true);

    let filteredCities = arr.filter((hstlObj:any) => hstlObj.location === city);
    if (type) {
      filteredCities = filteredCities.filter(
        (hstlObj) => hstlObj.type.toLowerCase() === type.toLowerCase()
      );
    }

    setCityArray(filteredCities);
    setLoading(false);
  }, [route.params]);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#8a42f5" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {cityArray.length > 0 ? (
          cityArray.map((cityObj) => (
            <View key={cityObj.name} style={styles.card}>
              <ImageBackground
                source={{
                  uri:
                    cityObj.imageUrl ||
                    "https://www.ipeindia.org/wp-content/uploads/2022/07/AND00968-scaled.jpg",
                }}
                style={styles.image}
              >
                <View style={styles.tag}>
                  <Text style={styles.tagText}>
                    colive
                  </Text>
                </View>
              </ImageBackground>
              <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <Text style={styles.hostelName}>{cityObj.name}</Text>
                {cityObj.ratings && 
                <View style={{flexDirection:"row",alignItems:"center",marginRight:10}}>
                    <Image source={{
                    uri:"https://png.pngtree.com/png-clipart/20220926/original/pngtree-shiny-gold-star-clipart-illustration-design-png-image_8633179.png"
                }} style={{height:27,width:27}}></Image>
                <Text style={{fontSize:18}}>{cityObj.ratings}</Text>
                    </View>}
              </View>
              <View style={styles.locationRow}>
                <Image
                  source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/0/619.png",
                  }}
                  style={styles.icon}
                />
                <Text style={styles.locationText}>{cityObj.location}, {cityObj.subLocation}</Text>
              </View>
              <View style={styles.amenitiesRow}>
                <View style={styles.amenity}>
                  <Image
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2a3GJ8yRMDYe_N8lsvRCP7FfcGbwWYCtBNQ&s",
                    }}
                    style={styles.amenityIcon}
                  />
                  <Text style={styles.amenityText}>{cityObj.foodType.length == 2 ? "Veg & Non-Veg":"Veg only"}</Text>
                </View>
                <View style={styles.amenity}>
                  <Image
                    source={{
                      uri: "https://cdn.pixabay.com/photo/2016/03/30/13/24/wifi-1290667_640.png",
                    }}
                    style={styles.amenityIcon1}
                  />
                  <Text style={styles.amenityText}>WiFi</Text>
                </View>
              </View>
              <View style={styles.footer}>
                <View>
                  <Text style={styles.price}>
                    ₹ {cityObj.price || "4500"}/-
                  </Text>
                  <Text style={styles.priceSubtitle}>Starting from</Text>
                </View>
                <TouchableOpacity style={styles.reserveButton}>
                  <Text style={styles.reserveText}>Reserve Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No hostels found for this location.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
    elevation: 3,
    marginHorizontal: 10,
  },
  image: {
    height: 200,
    width: "100%",
  },
  tag: {
    backgroundColor: "rgba(0,0,0,0.6)",
    alignSelf: "flex-end",
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  tagText: {
    color: "white",
    fontWeight: "bold",
  },
  hostelName: {
    fontSize: 18,
    fontWeight: "500",
    margin: 10,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  locationText: {
    fontSize: 15,
    color: "#555",
  },
  amenitiesRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 10,
    marginTop: 10,
  },
  amenity: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  amenityIcon: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  amenityIcon1:{
    width: 20,
    height: 16,
    marginRight: 5,
  },
  amenityText: {
    fontSize: 14,
    color: "#555",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "500",
  },
  priceSubtitle: {
    fontSize: 14,
    color: "#888",
  },
  reserveButton: {
    backgroundColor: "#8a42f5",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  reserveText: {
    color: "white",
    fontWeight: "500",
  },
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: "#888",
  },
});
