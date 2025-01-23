import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HostelDetailCard({ route }) {
    const details = route.params.details;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image
                    source={{
                        uri: details.imageUrl || "https://www.ipeindia.org/wp-content/uploads/2022/07/AND00968-scaled.jpg",
                    }}
                    style={styles.image}
                />
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
                                />
                                <Text style={styles.ratingText}>{details.ratings}</Text>
                            </View>
                        )}
                    </View>
                    <View style={styles.locationContainer}>
                        <Image
                            source={require("../assets/location.png")}
                            style={styles.locationIcon}
                        />
                        <Text style={styles.locationText}>
                            {details.location}, {details.subLocation}
                        </Text>
                    </View>
                    <View style={styles.tagContainer}>
                        <Text style={styles.tagText}>Colive</Text>
                    </View>
                    <Text style={styles.description}>
                        Pre Month Rent Starting From
                    </Text>
                    <Text style={styles.hostelName}>Rs 4,500/-</Text>
                </View>
                <View style={styles.subDetailsContainer}>
                    <Text style={styles.subDetailsTitle}>Sharing Type</Text>
                    {details.roomTypes.map((obj, index) => (
                        <View key={index} style={styles.roomTypeContainer}>
                            <Text style={styles.roomSharingText}>{obj.sharing}</Text>
                            <Image
                                source={{
                                    uri: "https://static.thenounproject.com/png/1021592-200.png",
                                }}
                                style={styles.roomIcon}
                            />
                            <Text style={styles.roomPriceText}>₹ {obj.price}/-</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.subDetailsContainer}>
                    <Text style={styles.subDetailsTitle}>Amenities</Text>
                    <View style={styles.amenitiesHeader}>
                        <Image
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/512/6192/6192020.png",
                            }}
                            style={styles.amenitiesIcon}
                        />
                        <Text style={styles.amenitiesHeaderText}>Room Amenities</Text>
                    </View>
                    <View style={styles.amenitiesGrid}>
                        {details.roomAmenities.map((obj, index) => (
                            <View key={index} style={styles.amenityItem}>
                                <Text style={styles.amenityText}>{obj}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.amenitiesHeader}>
                        <Image
                            source={{
                                uri: "https://t4.ftcdn.net/jpg/02/73/82/69/360_F_273826938_g3zTc4k5UtVsYDgZnPyVkzR6WEmyeuhB.jpg",
                            }}
                            style={{height:30,width:30}}
                        />
                        <Text style={styles.amenitiesHeaderText}>Food Type</Text>
                    </View>
                    <View style={styles.amenitiesGrid}>
                        {details.foodType.length == 1 ? <View style={styles.amenityItem}><Text style={styles.amenityText}>Veg only</Text></View> :
                            <View style={styles.amenityItem}><Text style={styles.amenityText}>Veg & Non-veg</Text></View>}
                    </View>
                    <View style={styles.amenitiesHeader}>
                        <Image
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/512/4692/4692642.png",
                            }}
                            style={styles.amenitiesIcon}
                        />
                        <Text style={styles.amenitiesHeaderText}>House Keeping</Text>
                    </View>
                    <View style={styles.amenitiesGrid}>
                        {details.houseKeeping.map((obj, index) => (
                            <View key={index} style={styles.amenityItem}>
                                <Text style={styles.amenityText}>{obj}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.amenitiesHeader}>
                        <Image
                            source={{
                                uri: "https://cdn-icons-png.flaticon.com/512/6192/6192020.png",
                            }}
                            style={styles.amenitiesIcon}
                        />
                        <Text style={styles.amenitiesHeaderText}>Other Facilities</Text>
                    </View>
                    <View style={styles.amenitiesGrid}>
                        {details.otherFacilities.map((obj, index) => (
                            <View key={index} style={styles.amenityItem}>
                                <Text style={styles.amenityText}>{obj}</Text>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={styles.subDetailsContainer}>
                    <Text style={styles.subDetailsTitle}>Hostel Rules</Text>
                    {details.hostelRules.map((text, index) => (
                        <Text key={index} style={{ fontSize: 16 }}>*{text}</Text>
                    ))}
                </View>
                {details.ratings &&
                    <View style={styles.subDetailsContainer}>
                        <View style={styles.ratingsHeader}>
                            <Text style={styles.ratingsTitle}>Ratings & Reviews</Text>
                            <Text style={styles.writeReviewText}>Write a Review</Text>
                        </View>
                        <View style={styles.ratingsContainer}>
                            <View style={styles.ratingSummary}>
                                <Text style={styles.ratingValue}>{details.ratings}</Text>
                                <Image
                                    source={{
                                        uri: "https://png.pngtree.com/png-clipart/20220926/original/pngtree-shiny-gold-star-clipart-illustration-design-png-image_8633179.png",
                                    }}
                                    style={styles.starIcon}
                                />
                                <Text style={styles.ratingCount}>({details.ratingObj.length} ratings)</Text>
                            </View>
                            <View style={styles.ratingDivider} />
                            <View style={styles.reviewContainer}>
                                <View style={styles.userInfo}>
                                    <Image
                                        source={{
                                            uri: "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=360",
                                        }}
                                        style={styles.userAvatar}
                                    />
                                    <View style={styles.userDetails}>
                                        <Text style={styles.userName}>{details.ratingObj[0].name}</Text>
                                        <Text style={styles.reviewDate}>{details.ratingObj[0].date}</Text>
                                    </View>
                                </View>
                                <Text style={styles.userComment}>{details.ratingObj[0].comment}</Text>
                            </View>

                        </View>
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    reviewContainer: {
        backgroundColor: "#f8f9fa",
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        elevation: 2,
    },
    userInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    userAvatar: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 12,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    userDetails: {
        flex: 1,
    },
    userName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    reviewDate: {
        fontSize: 12,
        color: "#777",
        marginTop: 2,
    },
    userComment: {
        fontSize: 14,
        color: "#555",
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12,
    },
    ratingsTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    writeReviewText: {
        fontSize: 14,
        color: "#007bff",
        textDecorationLine: "underline",
        fontWeight: "600",
    },
    ratingsContainer: {
        borderWidth: 1,
        borderColor: "#e0e0e0",
        borderRadius: 10,
        padding: 16,
        backgroundColor: "#f9f9f9",
        elevation: 1,
    },
    ratingSummary: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    ratingValue: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ff9800",
        marginRight: 6,
    },
    ratingCount: {
        fontSize: 14,
        color: "#555",
    },
    ratingDivider: {
        height: 1,
        backgroundColor: "#d4d4d4",
        marginVertical: 8,
        borderStyle: "dashed",
    },
    overallRatingText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        textAlign: "center",
    },
    starIcon: {
        height: 16,
        width: 16,
        marginRight: 4,
    },
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa",
    },
    image: {
        height: 250,
        width: "100%",
        resizeMode: "cover",
    },
    detailsContainer: {
        padding: 16,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        marginTop: -20,
        elevation: 5,
    },
    subDetailsContainer: {
        padding: 16,
        backgroundColor: "#ffffff",
        marginTop: 4
    },
    hostelName: {
        fontSize: 19,
        fontWeight: "bold",
        marginBottom: 8,
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    locationIcon: {
        width: 10,
        height: 16,
        marginRight: 8,
    },
    locationText: {
        fontSize: 14,
        color: "#666",
    },
    tagContainer: {
        backgroundColor: "#d4d5d6",
        alignSelf: "flex-start",
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginBottom: 12,
    },
    tagText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#333",
    },
    description: {
        fontSize: 14,
        color: "#555",
        lineHeight: 20,
    },
    subDetailsTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
    },
    roomTypeContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f7f5f5",
        padding: 12,
        borderRadius: 8,
        marginBottom: 8,
        elevation: 2,
    },
    roomSharingText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
    },
    roomIcon: {
        height: 25,
        width: 25,
        tintColor: "#888",
    },
    roomPriceText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#007bff",
    },
    amenitiesHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    amenitiesIcon: {
        height: 25,
        width: 25,
        marginRight: 8,
    },
    amenitiesHeaderText: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#555",
    },
    amenitiesGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 10
    },
    amenityItem: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: "#f7f5f5",
        borderRadius: 8,
        marginBottom: 8,
        justifyContent: "center",
        alignItems: "center",
        elevation: 2,
        minWidth: 80,
        maxWidth: 150
    },
    amenityText: {
        fontSize: 13,
        fontWeight: "600",
        color: "#333",
        textAlign: "center",
    },


});
