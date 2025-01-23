import React, {useEffect, useRef, useState} from 'react';
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
  Dimensions,
} from 'react-native';
import {arr , sharingTypes,hostelTypes,priceRanges} from '../data/data';
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import {Dropdown} from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');

export default function HostelCard({route}: any) {
  const [cityArray, setCityArray] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setLoading] = useState(true);
  const sheetRef = useRef<BottomSheetMethods>(null);

  // Filter states
  const [sharingType, setSharingType] = useState('');
  const [hostelType, setHostelType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  useEffect(() => {
    const {city = '', type = ''} = route.params || {};
    setLoading(true);

    let filteredCities = arr.filter(
      (hstlObj: any) => hstlObj.location === city,
    );
    if (type) {
      filteredCities = filteredCities.filter(
        hstlObj => hstlObj.type.toLowerCase() === type.toLowerCase(),
      );
    }

    setCityArray(filteredCities);
    setLoading(false);
  }, [route.params]);

  const applyFilters = () => {
    let filteredHostels = arr;

    if (sharingType) {
      filteredHostels = filteredHostels.filter(hostel =>
        hostel.roomTypes.some(
          room => room.sharing.toLowerCase() === sharingType.toLowerCase(),
        ),
      );
    }

    // if (hostelType) {
    //   filteredHostels = filteredHostels.filter(
    //     hostel => hostel.type.toLowerCase() === hostelType.toLowerCase(),
    //   );
    // }

    if (priceRange) {
      const maxPrice = parseInt(priceRange);
      filteredHostels = filteredHostels.filter(hostel =>
        hostel.roomTypes.some(room =>
          maxPrice === 13001 ? room.price > 13000 : room.price <= maxPrice,
        ),
      );
    }

    setCityArray(filteredHostels);
    sheetRef.current?.close();
  };

  const resetFilters = () => {
    setSharingType('');
    setHostelType('');
    setPriceRange('');
    setCityArray(arr);
    sheetRef.current?.close();
  };

  const filteredHostels = searchQuery
    ? cityArray.filter(
        hostel =>
          hostel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hostel.subLocation.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : cityArray;

  const renderHostelCard = ({item}: any) => (
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
        data={filteredHostels}
        renderItem={renderHostelCard}
        keyExtractor={(item, index) => `${item.name}-${index}`}
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

      <BottomSheet ref={sheetRef} height={500} style={styles.bottomSheet}>
        <View style={styles.bottomSheetContent}>
          <Text style={styles.filterTitle}>Filter Hostels</Text>

          <View style={styles.filterSection}>
            <Text style={styles.filterLabel}>Sharing Type</Text>
            <Dropdown
              data={sharingTypes}
              labelField="label"
              valueField="value"
              placeholder="Select Sharing Type"
              value={sharingType}
              onChange={item => setSharingType(item.value)}
              style={styles.dropdown}
              placeholderStyle={styles.dropdownPlaceholder}
              selectedTextStyle={styles.dropdownSelected}
            />
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.filterLabel}>Hostel Type</Text>
            <Dropdown
              data={hostelTypes}
              labelField="label"
              valueField="value"
              placeholder="Select Hostel Type"
              value={hostelType}
              onChange={item => setHostelType(item.value)}
              style={styles.dropdown}
              placeholderStyle={styles.dropdownPlaceholder}
              selectedTextStyle={styles.dropdownSelected}
            />
          </View>

          <View style={styles.filterSection}>
            <Text style={styles.filterLabel}>Price Range</Text>
            <Dropdown
              data={priceRanges}
              labelField="label"
              valueField="value"
              placeholder="Select Price Range"
              value={priceRange}
              onChange={item => setPriceRange(item.value)}
              style={styles.dropdown}
              placeholderStyle={styles.dropdownPlaceholder}
              selectedTextStyle={styles.dropdownSelected}
            />
          </View>

          <View style={styles.filterButtons}>
            <TouchableOpacity style={styles.resetButton} onPress={resetFilters}>
              <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>

            <LinearGradient
              colors={['#6366f1', '#4f46e5']}
              style={styles.applyButton}>
              <TouchableOpacity
                onPress={applyFilters}
                style={styles.applyButtonInner}>
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
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
  bottomSheet: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  bottomSheetContent: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  filterTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 20,
  },
  filterSection: {
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4b5563',
    marginBottom: 10,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#f9fafb',
  },
  dropdownPlaceholder: {
    color: '#9ca3af',
  },
  dropdownSelected: {
    color: '#111827',
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  resetButton: {
    backgroundColor: '#f3f4f6',
    padding: 15,
    borderRadius: 12,
    width: '45%',
    alignItems: 'center',
  },
  resetButtonText: {
    color: '#4b5563',
    fontWeight: '600',
  },
  applyButton: {
    borderRadius: 12,
    width: '45%',
  },
  applyButtonInner: {
    padding: 15,
    alignItems: 'center',
  },
  applyButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});
