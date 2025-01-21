import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { cities } from '../data/data';
const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Hey Buddy! Welcome to,</Text>
          <Text style={styles.titleText}>India Ka Apna Hostel</Text>
          <View style={styles.platformContainer}>
            <Text style={styles.titleText}>Booking Platform</Text>
            <Image
              source={require('../assets/smile.png')}
              style={styles.smileIcon}
            />
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsWrapper}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>2200+</Text>
              <Text style={styles.statLabel}>HOSTELS{'\n'}ONBOARD</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>120k+</Text>
              <Text style={styles.statLabel}>BEDS{'\n'}AVAILABLE</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>30+</Text>
              <Text style={styles.statLabel}>CITIES{'\n'}COVERED</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardText}>SEARCH BY CITY</Text>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1690987601363-83022d125159?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D',
              }}
              style={styles.cardImage}
            />
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>SEARCH BY INSTITUTE</Text>
            <Image
              source={{
                uri: 'https://www.ieor.iitb.ac.in/sites/default/files/files/banner-1%20iitb_0.jpg',
              }}
              style={styles.cardImage}
            />
          </View>
        </View>
        <View style={styles.citiesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Student Cities</Text>
            <Text style={styles.viewAllText}>View All</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {cities.map(obj => (
              <View key={obj.image} style={styles.cityItem}>
                <Image source={{uri: obj.image}} style={styles.cityImage} />
                <Text style={styles.cityName}>{obj.city}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.featuresSection}>
          <Text style={styles.featureTitle}>Relax! We got you covered</Text>
          <Image
            source={require('../assets/Media.jpg')}
            style={styles.featureImage}
          />
          <View style={styles.featureItem}>
            <Image
              source={{uri: 'https://cdn-icons-png.flaticon.com/512/0/191.png'}}
              style={styles.featureIcon}
            />
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureItemTitle}>Verified Property</Text>
              <Text style={styles.featureDescription}>
                We have got it checked on 145 parameters to tell you every
                details and insights
              </Text>
            </View>
          </View>
          <View style={styles.featureItem}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/4947/4947544.png',
              }}
              style={styles.featureIcon}
            />
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureItemTitle}>
                100% Refund on Cancellation
              </Text>
              <Text style={styles.featureDescription}>
                Get 100% refund on your cancellation and there are no hidden fee
                involved
              </Text>
            </View>
          </View>
          <View style={styles.featureItem}>
            <Image
              source={{
                uri: 'https://t3.ftcdn.net/jpg/04/43/98/24/360_F_443982441_rBudWjP3eXwZ20EAZhvIWNLx4jDr1kup.jpg',
              }}
              style={styles.featureIcon}
            />
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureItemTitle}>
                24/7 Personalized Assistance
              </Text>
              <Text style={styles.featureDescription}>
                Call us are here to help even if it's lazy sunday afternoon
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.contactSection}>
          <Image
            source={require('../assets/trouble.jpg')}
            style={styles.troubleImage}
          />
          <View style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Get in touch</Text>
          </View>
        </View>
        <View style={styles.testimonialsSection}>
          <View style={styles.testimonialHeader}>
            <Text style={styles.testimonialTitle}>Words from our Students</Text>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHKJV2CRXfXRaEuANO_mMva-HdUjnp_sMD7q8a_H4MqLxWPoB6T7JlkjAws2g03nbo1uA&usqp=CAU',
              }}
              style={styles.testimonialIcon}
            />
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.testimonialScrollContainer}>
            <View style={styles.testimonialCard}>
              <View style={styles.testimonialUserHeader}>
                <Image
                  source={{
                    uri: 'https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
                  }}
                  style={styles.testimonialAvatar}
                />
                <View style={styles.testimonialUserInfo}>
                  <Text style={styles.testimonialName}>Shalil K. Priya</Text>
                  <Text style={styles.testimonialLocation}>Kota</Text>
                </View>
              </View>
              <Image
                source={{
                  uri: 'https://thumb.ac-illust.com/8b/8bde8952c833a2eda923bc375b4c47ec_t.jpeg',
                }}
                style={styles.ratingImage}
              />
              <Text style={styles.testimonialText}>
                "My parents were scared about sending me alone to Kota. The most
                important issue was the quality of food and safety. After we
                found Homeversity, everything became clearer and they helped me
                find the safest hostel."
              </Text>
            </View>
            <View style={styles.testimonialCard}>
              <View style={styles.testimonialUserHeader}>
                <Image
                  source={{
                    uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                  style={styles.testimonialAvatar}
                />
                <View style={styles.testimonialUserInfo}>
                  <Text style={styles.testimonialName}>Abraham George</Text>
                  <Text style={styles.testimonialLocation}>Delhi</Text>
                </View>
              </View>
              <Image
                source={{
                  uri: 'https://thumb.ac-illust.com/8b/8bde8952c833a2eda923bc375b4c47ec_t.jpeg',
                }}
                style={styles.ratingImage}
              />
              <Text style={styles.testimonialText}>
                "I had joined UPEs late and had come pretty far from home,
                Kerala. I was in great deal of confusion about where to stay as
                mostly all good hostels are filled. Homeversity still managed to
                find the best hostel at that point in time."
              </Text>
            </View>
            <View style={styles.testimonialCard}>
              <View style={styles.testimonialUserHeader}>
                <Image
                  source={{
                    uri: 'https://static.vecteezy.com/system/resources/previews/039/334/804/non_2x/ai-generated-indian-female-student-free-photo.jpg',
                  }}
                  style={styles.testimonialAvatar}
                />
                <View style={styles.testimonialUserInfo}>
                  <Text style={styles.testimonialName}>Harini</Text>
                  <Text style={styles.testimonialLocation}>Hyderabad</Text>
                </View>
              </View>
              <Image
                source={{
                  uri: 'https://thumb.ac-illust.com/8b/8bde8952c833a2eda923bc375b4c47ec_t.jpeg',
                }}
                style={styles.ratingImage}
              />
              <Text style={styles.testimonialText}>
                "Homeversity is the brand for the students who are looking for
                hostels, PGs or flats. Their assistance is world class and
                discounts are much needed relief. They provide kind of hostels
                which we never find on other sites."
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.socialSection}>
          <Text style={styles.socialTitle}>Follow Us On Our Socials</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    width: Dimensions.get('screen').width,
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 15,
  },
  welcomeText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#1a1a1a',
    letterSpacing: -0.5,
    marginVertical: 4,
  },
  platformContainer: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  smileIcon: {
    height: 45,
    width: 45,
    marginLeft: 10,
  },
  statsContainer: {
    backgroundColor: '#f5ede6',
    padding: 20,
    marginHorizontal: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  statsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  statNumber: {
    fontSize: 30,
    fontWeight: '800',
    color: '#3469fa',
    marginBottom: 8,
  },
  statLabel: {
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    color: '#4a4a4a',
    letterSpacing: 0.5,
  },
  statDivider: {
    borderLeftWidth: 1,
    borderStyle: 'dashed',
    height: 80,
    borderColor: 'black',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 15,
  },
  card: {
    flex: 1,
    marginHorizontal: 6,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 18,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    color: '#333',
    letterSpacing: 0.5,
  },
  cardImage: {
    height: 110,
    width: '100%',
    borderRadius: 12,
  },
  citiesSection: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 15,
    borderRadius: 20,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  viewAllText: {
    color: '#3469fa',
    fontSize: 14,
    fontWeight: '600',
  },
  cityItem: {
    marginRight: 20,
    alignItems: 'center',
  },
  cityImage: {
    height: 85,
    width: 85,
    borderRadius: 42.5,
    marginBottom: 8,
    borderWidth: 3,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  cityName: {
    fontSize: 14,
    color: '#4a4a4a',
    fontWeight: '500',
  },
  featuresSection: {
    backgroundColor: '#ffffff',
    marginTop: 15,
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  featureTitle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 22,
    marginBottom: 20,
    color: '#1a1a1a',
  },
  featureImage: {
    height: 180,
    width: '100%',
    borderRadius: 15,
    marginBottom: 25,
  },
  featureItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  featureIcon: {
    height: 45,
    width: 45,
    marginRight: 15,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureItemTitle: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 6,
    color: '#1a1a1a',
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  contactSection: {
    backgroundColor: '#ffffff',
    marginTop: 15,
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  troubleImage: {
    height: 180,
    width: '100%',
    borderRadius: 15,
    marginBottom: 15,
  },
  contactButton: {
    backgroundColor: '#f0eeeb',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  contactButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  testimonialsSection: {
    backgroundColor: "#ffffff",
    marginTop: 15,
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  testimonialHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  testimonialTitle: {
    fontWeight: "700",
    fontSize: 22,
    color: '#1a1a1a',
    flex: 1,
  },
  testimonialIcon: {
    height: 50,
    width: 50,
  },
  testimonialScrollContainer: {
    paddingRight: 20, // Adds padding at the end of scroll
  },
  testimonialCard: {
    backgroundColor: "white",
    padding: 20,
    width: 300,
    borderRadius: 18,
    marginRight: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  testimonialUserHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  testimonialAvatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  testimonialUserInfo: {
    flex: 1,
  },
  testimonialName: {
    fontWeight: "700",
    fontSize: 18,
    color: '#333',
    marginBottom: 4,
  },
  testimonialLocation: {
    fontSize: 14,
    color: '#666',
  },
  ratingImage: {
    height: 35,
    width: 140,
    marginVertical: 15,
  },
  testimonialText: {
    fontSize: 14,
    color: '#4a4a4a',
    lineHeight: 22,
    fontStyle: 'italic',
  },
  socialSection: {
    backgroundColor: '#ffffff',
    marginTop: 15,
    marginBottom: 20,
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  socialTitle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 20,
    color: '#1a1a1a',
  },
});
