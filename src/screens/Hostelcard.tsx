import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  TextInput,
} from 'react-native';
import { arr } from '../data/data';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import { Dropdown } from 'react-native-element-dropdown';

const sharingtype = [
  { value: "Single", label: "Single Sharing" },
  { value: "Double", label: "Double Sharing" },
  { value: "Triple", label: "Three Sharing" },
  { value: "Quadrant", label: "Four Sharing" },
];

const hostelType = [
  { value: "Mens", label: "Mens" },
  { value: "Womans", label: "Womans" },
  { value: "Colive", label: "Colive" },
];

const priceRange = [
  { value: "7000", label: "5000 - 7000" },
  { value: "10000", label: "7000 - 10000" },
  { value: "13000", label: "10000 - 13000" },
  { value: "13001", label: "Above 13000" },
];

export default function HostelCard({ route }: any) {
  const [cityArray, setCityArray] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setLoading] = useState(true);
  const sheetRef = useRef<BottomSheetMethods>(null);
  const [sharingType, setSharingType] = useState("");
  const [hosteltype, setHostelType] = useState("");
  const [range, setRange] = useState("");

  useEffect(() => {
    const { city = '', type = '' } = route.params || {};
    setLoading(true);

    let filteredCities = arr.filter(
      (hstlObj: any) => hstlObj.location === city
    );
    if (type) {
      filteredCities = filteredCities.filter(
        hstlObj => hstlObj.type.toLowerCase() === type.toLowerCase()
      );
    }

    setCityArray(filteredCities);
    setLoading(false);
  }, [route.params]);

  const applyFilters = () => {
    let filteredHostels = arr;
  
    if (sharingType) {
      filteredHostels = filteredHostels.filter(hostel =>
        hostel.roomTypes.some(room => room.sharing.toLowerCase() === sharingType.toLowerCase())
      );
    }
  
    // if (hosteltype) {
    //   filteredHostels = filteredHostels.filter(
    //     hostel => hostel.hostletype.toLowerCase() === hosteltype.toLowerCase()
    //   );
    // }
  
    if (range) {
      if(range == "13001"){
        const maxPrice = parseInt(range);
        filteredHostels = filteredHostels.filter(hostel =>
          hostel.roomTypes.some(room => room.price > maxPrice)
        );
      }
      else{
        const maxPrice = parseInt(range);
        filteredHostels = filteredHostels.filter(hostel =>
          hostel.roomTypes.some(room => room.price <= maxPrice)
        );
      }
    }
  
    setCityArray(filteredHostels);
    sheetRef.current?.close();
  };
  

  const renderHostelCard = ({ item }: any) => (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri:
            item.imageUrl ||
            'https://www.ipeindia.org/wp-content/uploads/2022/07/AND00968-scaled.jpg',
        }}
        style={styles.image}
        imageStyle={styles.imageStyle}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>colive</Text>
        </View>
      </ImageBackground>
      <View style={styles.contentContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.hostelName}>{item.name}</Text>
          {item.ratings && (
            <View style={styles.ratingContainer}>
              <Image
                source={{
                  uri: 'https://png.pngtree.com/png-clipart/20220926/original/pngtree-shiny-gold-star-clipart-illustration-design-png-image_8633179.png',
                }}
                style={styles.starIcon}
              />
              <Text style={styles.ratingText}>{item.ratings}</Text>
            </View>
          )}
        </View>

        <View style={styles.locationRow}>
          <Image
            source={require('../assets/location.png')}
            style={styles.locationIcon}
          />
          <Text style={styles.locationText}>
            {item.location}, {item.subLocation}
          </Text>
        </View>

        <View style={styles.amenitiesRow}>
          <View style={styles.amenity}>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2a3GJ8yRMDYe_N8lsvRCP7FfcGbwWYCtBNQ&s',
              }}
              style={styles.amenityIcon}
            />
            <Text style={styles.amenityText}>
              {item.foodType.length === 2 ? 'Veg & Non-Veg' : 'Veg only'}
            </Text>
          </View>
          <View style={styles.amenity}>
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/03/30/13/24/wifi-1290667_640.png',
              }}
              style={styles.wifiIcon}
            />
            <Text style={styles.amenityText}>WiFi</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.footer}>
          <View>
            <Text style={styles.price}>₹ {item.price || '4500'}/-</Text>
            <Text style={styles.priceSubtitle}>Starting from</Text>
          </View>
          <TouchableOpacity style={styles.reserveButton}>
            <Text style={styles.reserveText}>Reserve Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#6366f1" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Image
          source={require('../assets/Search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search hostels..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholderTextColor="#6b7280"
        />
        {searchQuery !== '' && (
          <TouchableOpacity
            onPress={() => setSearchQuery('')}
            style={styles.clearButton}>
            <Text style={styles.clearButtonText}>×</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => sheetRef.current?.open()}>
          <Image
            source={require('../assets/filter.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={cityArray}
        renderItem={renderHostelCard}
        keyExtractor={item => item.name}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {searchQuery
                ? 'No hostels found matching your search.'
                : 'No hostels found for this location.'}
            </Text>
          </View>
        }
      />

      <BottomSheet ref={sheetRef}>
        <Text style={styles.filterHeader}>Apply Filters</Text>

        <Dropdown
          data={sharingtype}
          maxHeight={180}
          labelField="label"
          valueField="value"
          placeholder="Select Sharing Type"
          value={sharingType}
          onChange={(item) => setSharingType(item.value)}
        />

        <Dropdown
          data={hostelType}
          maxHeight={180}
          labelField="label"
          valueField="value"
          placeholder="Select Hostel Type"
          value={hosteltype}
          onChange={(item) => setHostelType(item.value)}
        />

        <Dropdown
          data={priceRange}
          maxHeight={180}
          labelField="label"
          valueField="value"
          placeholder="Select Price Range"
          value={range}
          onChange={(item) => setRange(item.value)}
        />

        <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
          <Text style={styles.applyButtonText}>Apply Filters</Text>
        </TouchableOpacity>
      </BottomSheet>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  filterHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  bottomSheetContent: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  dropdown: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: '#f9fafb',
  },
  applyButton: {
    backgroundColor: '#6366f1',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 16,
    alignItems: 'center',
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  resetButton: {
    backgroundColor: '#f3f4f6',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 12,
    alignItems: 'center',
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6b7280',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 16,
    padding: 12,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#6b7280',
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    width: '50%',
    fontSize: 16,
    color: '#111827',
  },
  clearButton: {
    padding: 4,
  },
  clearButtonText: {
    fontSize: 24,
    color: '#6b7280',
    fontWeight: '500',
  },
  listContent: {
    padding: 16,
    paddingTop: 0,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    height: 220,
  },
  imageStyle: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  contentContainer: {
    padding: 16,
  },
  tag: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignSelf: 'flex-end',
    margin: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  tagText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  hostelName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fef3c7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  starIcon: {
    height: 16,
    width: 16,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#92400e',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationIcon: {
    width: 10,
    height: 16,
    marginRight: 8,
  },
  locationText: {
    fontSize: 14,
    color: '#6b7280',
  },
  amenitiesRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  amenity: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  amenityIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  wifiIcon: {
    width: 16,
    height: 12,
    marginRight: 8,
  },
  amenityText: {
    fontSize: 12,
    color: '#4b5563',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  priceSubtitle: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
  },
  reserveButton: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#6366f1',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  reserveText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
});
