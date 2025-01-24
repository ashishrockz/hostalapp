import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';

export default function HostelDetailCard({route}: any) {
  const details = route.params.details;

  const renderAmenityItem = (item: string, index: number) => (
    <View key={index} style={styles.amenityItem}>
      <Text style={styles.amenityText}>{item}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                details.imageUrl ||
                'https://www.ipeindia.org/wp-content/uploads/2022/07/AND00968-scaled.jpg',
            }}
            style={styles.image}
            accessible={true}
            accessibilityLabel="Hostel Image"
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.headerRow}>
            <Text style={styles.hostelName}>{details.name}</Text>
            {details.ratings && (
              <View style={styles.ratingContainer}>
                <Image
                  source={{
                    uri: 'https://png.pngtree.com/png-clipart/20220926/original/pngtree-shiny-gold-star-clipart-illustration-design-png-image_8633179.png',
                  }}
                  style={styles.starIcon}
                  accessible={true}
                  accessibilityLabel="Rating Star"
                />
                <Text style={styles.ratingText}>{details.ratings}</Text>
              </View>
            )}
          </View>

          <View style={styles.locationContainer}>
            <Image
              source={require('../assets/location.png')}
              style={styles.locationIcon}
              accessible={true}
              accessibilityLabel="Location Icon"
            />
            <Text style={styles.locationText}>
              {details.location}, {details.subLocation}
            </Text>
          </View>

          <View style={styles.tagContainer}>
            <Text style={styles.tagText}>Colive</Text>
          </View>

          <View style={styles.rentSection}>
            <Text style={styles.description}>Pre Month Rent Starting From</Text>
            <Text style={styles.rentAmount}>Rs 4,500/-</Text>
          </View>
        </View>

        {/* Room Types Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Sharing Type</Text>
          {details.roomTypes.map((obj: any, index: number) => (
            <TouchableOpacity
              key={index}
              style={styles.roomTypeContainer}
              activeOpacity={0.7}>
              <Text style={styles.roomSharingText}>{obj.sharing}</Text>
              <Image
                source={{
                  uri: 'https://static.thenounproject.com/png/1021592-200.png',
                }}
                style={styles.roomIcon}
                accessible={true}
                accessibilityLabel="Room Type Icon"
              />
              <Text style={styles.roomPriceText}>₹ {obj.price}/-</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Amenities Section with Improved Grid Layout */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Amenities</Text>

          {[
            {
              icon: 'https://cdn-icons-png.flaticon.com/512/6192/6192020.png',
              title: 'Room Amenities',
              items: details.roomAmenities,
            },
            {
              icon: 'https://t4.ftcdn.net/jpg/02/73/82/69/360_F_273826938_g3zTc4k5UtVsYDgZnPyVkzR6WEmyeuhB.jpg',
              title: 'Food Type',
              items:
                details.foodType.length == 1 ? ['Veg only'] : ['Veg & Non-veg'],
            },
            {
              icon: 'https://cdn-icons-png.flaticon.com/512/4692/4692642.png',
              title: 'House Keeping',
              items: details.houseKeeping,
            },
            {
              icon: 'https://cdn-icons-png.flaticon.com/512/6192/6192020.png',
              title: 'Other Facilities',
              items: details.otherFacilities,
            },
          ].map((section, sectionIndex) => (
            <View key={sectionIndex}>
              <View style={styles.amenitiesHeader}>
                <Image
                  source={{uri: section.icon}}
                  style={styles.amenitiesIcon}
                  accessible={true}
                  accessibilityLabel={`${section.title} Icon`}
                />
                <Text style={styles.amenitiesHeaderText}>{section.title}</Text>
              </View>
              <View style={styles.amenitiesGrid}>
                {section.items.map(renderAmenityItem)}
              </View>
            </View>
          ))}
        </View>

        {/* Hostel Rules Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Hostel Rules</Text>
          {details.hostelRules.map((text: string, index: number) => (
            <Text key={index} style={styles.ruleText}>
              * {text}
            </Text>
          ))}
        </View>

        {/* Optional Reviews Section */}
        {details.ratings && (
          <View style={styles.sectionContainer}>
            <View style={styles.ratingsHeader}>
              <Text style={styles.sectionTitle}>Ratings & Reviews</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                accessibilityRole="button"
                accessibilityLabel="Write a Review">
                <Text style={styles.writeReviewText}>Write a Review</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.ratingsContainer}>
              <View style={styles.ratingSummary}>
                <Text style={styles.ratingValue}>{details.ratings}</Text>
                <Image
                  source={{
                    uri: 'https://png.pngtree.com/png-clipart/20220926/original/pngtree-shiny-gold-star-clipart-illustration-design-png-image_8633179.png',
                  }}
                  style={styles.starIcon}
                />
                <Text style={styles.ratingCount}>
                  ({details.ratingObj.length} ratings)
                </Text>
              </View>
              <View style={styles.ratingDivider} />
              <View style={styles.reviewContainer}>
                <View style={styles.userInfo}>
                  <Image
                    source={{
                      uri: 'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=360',
                    }}
                    style={styles.userAvatar}
                  />
                  <View style={styles.userDetails}>
                    <Text style={styles.userName}>
                      {details.ratingObj[0].name}
                    </Text>
                    <Text style={styles.reviewDate}>
                      {details.ratingObj[0].date}
                    </Text>
                  </View>
                </View>
                <Text style={styles.userComment}>
                  {details.ratingObj[0].comment}
                </Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f6',
  },
  scrollViewContent: {
    paddingBottom: 24,
  },
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    height: 250,
    width: '100%',
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  detailsContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginTop: -40,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  rentSection: {
    marginTop: 8,
    alignItems: 'center',
  },
  rentAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
  },
  sectionContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  ruleText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
    lineHeight: 22,
  },
  reviewContainer: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userAvatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  reviewDate: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  userComment: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#92400e',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fef3c7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  writeReviewText: {
    fontSize: 14,
    color: '#007bff',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  ratingsContainer: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 16,
    backgroundColor: '#f9f9f9',
    elevation: 1,
  },
  ratingSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff9800',
    marginRight: 6,
  },
  ratingCount: {
    fontSize: 14,
    color: '#555',
  },
  ratingDivider: {
    height: 1,
    backgroundColor: '#d4d4d4',
    marginVertical: 8,
    borderStyle: 'dashed',
  },
  overallRatingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  starIcon: {
    height: 16,
    width: 16,
    marginRight: 4,
  },

  subDetailsContainer: {
    padding: 16,
    backgroundColor: '#ffffff',
    marginTop: 4,
  },
  hostelName: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationIcon: {
    width: 10,
    height: 16,
    marginRight: 8,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
  },
  tagContainer: {
    backgroundColor: '#d4d5d6',
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  tagText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  subDetailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  roomTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f7f5f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    elevation: 2,
  },
  roomSharingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  roomIcon: {
    height: 25,
    width: 25,
    tintColor: '#888',
  },
  roomPriceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007bff',
  },
  amenitiesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  amenitiesIcon: {
    height: 25,
    width: 25,
    marginRight: 8,
  },
  amenitiesHeaderText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#555',
  },
  amenitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 10,
  },
  amenityItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f7f5f5',
    borderRadius: 8,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    minWidth: 80,
    maxWidth: 150,
  },
  amenityText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});
