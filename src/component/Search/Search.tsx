import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { cities, citiesHostels } from '../../data/data';

const Search = () => {
  const [currentType, setCurrentType] = useState("");
  const [cityName, setCityName] = useState("");
  const [allCities, setAllCities] = useState(citiesHostels);
  useEffect(() => {
    const filteredCities = citiesHostels.filter((cityObj) =>
      cityObj.name.some((city) => city.toLowerCase().includes(cityName.toLowerCase()))
    );
    setAllCities(filteredCities);
  }, [cityName]);
  const length = citiesHostels.reduce((len, obj) => len + obj.name.length, 0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.cityTypeContainer}>
          <TouchableOpacity
            style={[styles.cityTypeButton, currentType === "hostel" && styles.selectedButton]}
            onPress={() => setCurrentType("hostel")}
          >
            <Text style={currentType === "hostel" ? styles.selectedText : null}>
              {currentType === "hostel" ? "Get me a Hostel" : "Hostel"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.cityTypeButton, currentType === "pg" && styles.selectedButton]}
            onPress={() => setCurrentType("pg")}
          >
            <Text style={currentType === "pg" ? styles.selectedText : null}>  {currentType === "pg" ? "Get me a PG" : "PG"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.searchInput}>
          <TextInput onChangeText={(text) => (setCityName(text))} placeholder="Search by city name..." style={{ fontSize: 18, marginLeft: 7, width: "70%", height: 45 }} />
          <Image source={{
            uri: "https://cdn-icons-png.flaticon.com/512/54/54481.png"
          }} style={styles.searchImage}></Image>
        </View>
      </View>
      <View style={styles.cityListContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {cities.map((obj, index) => (
            <View key={index} style={styles.cityItem}>
              <Image source={{ uri: obj.image }} style={styles.cityImage} />
              <Text>{obj.city}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <Text style={styles.cityCountText}>ALL {length} CITIES</Text>
      {allCities.length == 0 && <View style={styles.noCitiesContainer}><Text style={styles.noCities}>No cities were found ....</Text></View>}
      {allCities.length > 0 && <ScrollView style={styles.scrollView}>
        {
          allCities.map((obj) => (
            <View key={obj.code}>
              <Text style={styles.codeText}>{obj.code}</Text>
              {obj.name.map((names) => (
                <View style={styles.cityNameContainer} key={names}>
                  <Image source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/0/619.png"
                  }} style={styles.cityNameIcon} />
                  <Text>{names}</Text>
                </View>
              ))}
            </View>
          ))
        }
      </ScrollView>}
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  noCitiesContainer: {
    flex: 1,
    backgroundColor: 'white',
    height: "100%"
  },
  noCities: {
    marginTop: 30,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    flex: 1,
    width: Dimensions.get("screen").width,
  },
  header: {
    backgroundColor: "white",
    padding: 10,
  },
  cityTypeContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  cityTypeButton: {
    backgroundColor: "#f5f3f0",
    flexDirection: "column",
    alignItems: "center",
    width: "49%",
    padding: 10,
    borderRadius: 10,
  },
  selectedButton: {
    borderWidth: 1,
    borderColor: "blue",
    backgroundColor: "#cce7ff",
  },
  selectedText: {
    color: "blue",
  },
  searchInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "99%",
    alignItems: "center",
    marginTop: 10,
    padding: 5,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
  },
  cityListContainer: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  },
  cityItem: {
    marginLeft: 8,
    marginRight: 8,
    flexDirection: "column",
    alignItems: "center",
  },
  cityImage: {
    height: 70,
    width: 70,
    borderRadius: 100,
  },
  cityCountText: {
    paddingLeft: 10,
    fontWeight: "500",
  },
  scrollView: {
    backgroundColor: "white",
    padding: 10,
    paddingBottom: 10,
    marginTop: 10, marginBottom: 10
  },
  codeText: {
    fontWeight: "600",
    fontSize: 20,
  },
  cityNameContainer: {
    display: "flex",
    flexDirection: 'row',
    marginLeft: 45,
    marginTop: 12,
    marginBottom: 12
  },
  cityNameIcon: {
    height: 20,
    width: 20
  },
  searchImage: {
    height: 20,
    width: 20,
    marginRight: 10
  }
});