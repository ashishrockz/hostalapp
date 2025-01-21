import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Cancellation(){
    return(
        <SafeAreaView style={styles.container}>
           <ScrollView>
            <Text style={styles.heading}>Refund policy</Text>
            <Text style={styles.content}>These terms and conditions govern Apnaghar policy for refunds (“Guest Refund Policy”) and the obligations of the Host associated with the Guest Refund Policy. The Guest Refund Policy applies in addition to  Apnaghar Terms and Conditions (hereinafter referred to as Apnaghar Terms). The Guest Refund Policy is available to Guests who book and pay for an Accommodation through the Apnaghar Platform and suffer a Travel Issue (as defined below). The Guest’s rights under this Guest Refund Policy will supersede the Host’s cancellation policy.</Text>
            <Text style={styles.heading}>By using the Apnaghar Platform as a Host or Guest, you are indicating that you have read and that you understand and agree to be bound by this Guest Refund Policy.</Text>
            <Text style={styles.heading}>1. Travel Issue</Text>
            <Text style={styles.content}>A “Travel Issue” means any one of the following:</Text>
            <Text style={styles.content}>(a) the Host of the Accommodation (i) cancels a booking shortly before the scheduled start of the booking, or (ii) fails to provide the Guest with the reasonable ability to access the Accommodation (e.g. does not provide the keys and/or a security code or availibility of rooms or space).</Text>
            <Text style={styles.content}>(b) The Listing’s description or depiction of the Accommodation is materially inaccurate with respect to:</Text>
            <View style={{marginLeft:27}}>
                <Text style={styles.content}>i. The size of the Accommodation (e.g., number and size of the bedroom, bathroom and/or other rooms),</Text>
                <Text style={styles.content}>ii. Whether the booking for the Accommodation is for a private room or shared room, and whether another party, including the Host, is staying at the Accommodation during the booking,</Text>
                <Text style={styles.content}>ii. Special amenities or features represented in the Listing are not provided or do not function, such as decks, bathrooms (toilet/shower/bathtub), kitchen (sink/stove/refrigerator or major other appliances), and electrical, heating or air condition systems, Wi-Fi or any other mentioned services.</Text>
                <Text style={styles.content}>iv. The physical location of the Accommodation (proximity).</Text>
            </View>
            <Text style={styles.content}>(c) At the start of the Guest’s booking, the Accommodation:</Text>
            <Text style={styles.content}>(i) Is not generally clean and sanitary</Text>
            <Text style={styles.content}>(ii) Contains safety or health hazards that would be reasonably expected to adversely affect   the Guest’s stay at the Accommodation in Apnaghar judgment,</Text>
            <Text style={styles.content}>(iii) Does not contain clean bedding and bathroom towels available for the Guest’s use, or (iv) Has vermin or contains pets not disclosed in the Listing.</Text>
            <Text style={styles.heading}>2. The Guest Refund Policy</Text>
            <Text style={styles.content}>If you are a Guest and suffer a Travel Issue, we agree, at our discretion, to either (i) reimburse you up to the amount paid by you through the Apnaghar’s Platform (herein after referred to as Booking Fees) depending on the nature of the Travel Issue suffered, or (ii) use our reasonable efforts to find and book you another Accommodation for any unused or remaining duration left in your booking which is reasonably comparable to the Accommodation described in your original booking in terms of size, rooms, features and quality. All determinations of Apnaghar with respect to the Guest Refund Policy, including without limitation the size of any refund and the comparability of alternate Accommodations, shall be in Apnaghar’s discretion, and final and binding on the Guests and Hosts.</Text>
            <Text style={styles.heading}>3. Conditions to Claim a Travel Issue</Text>
            <Text style={styles.content}>To submit a valid claim for a Travel Issue and receive the benefits with respect to your booking, you are required to meet each of the following conditions:</Text>
            <Text style={styles.content}>(a) You must be the Guest that booked the Accommodation through Apnaghar.com;</Text>
            <Text style={styles.content}>(b) You must bring the Travel Issue to our attention in writing or via telephone and provide us with information (including photographs or other evidence) about the Accommodation and the circumstances of the Travel Issue within 48 hours of booking after the later of (i) the start of your booking or (ii) you discover the existence of the Travel Issue, and must respond to any requests by us for additional information or cooperation on the Travel Issue;</Text>
            <Text style={styles.content}>(c) You must not have directly or indirectly caused the Travel Issue (through your action, omission or negligence); and</Text>
            <Text style={styles.content}>(d) Unless Apnaghar advises you that the Travel Issue cannot be remediated, you must have used reasonable efforts to try to remedy the circumstances of the Travel Issue with the Host prior to making a claim for a Travel Issue.</Text>
            <Text style={styles.heading}>4. Minimum Quality Standards, Host Responsibilities and Reimbursement to Guest</Text>
            <Text style={styles.content}>4.1 If you are a Host, you are responsible for ensuring that the Accommodations you list on the Apnaghar Platform meet minimum quality standards regarding access, adequacy of the Listing description, safety, cleanliness, and do not present a Guest with Travel Issues. During a Guest’s stay at an Accommodation, Hosts should be available, or make a third-party available, in order to try, in good faith, to resolve any Guest issues.</Text>
            <Text style={styles.content}>4.2 If you are a Host, and if (i) Apnaghar determines that a Guest has suffered a Travel Issue related to an Accommodation listed by you and (ii) Apnaghar either reimburses that Guest (up to their Total Fees*) or provides an alternative Accommodation to the Guest, you agree to reimburse Apnaghar up to the amount paid by Apnaghar within 48 hours of Apnaghar’s request. If the Guest is relocated to an alternative Accommodation, you also agree to reimburse Apnaghar for reasonable additional costs incurred to relocate the Guest. You authorize Apnaghar Payments to collect any amounts owed to Apnaghar by reducing your Payout or as otherwise permitted pursuant to the Payments Terms.</Text>
            <Text style={styles.content}>*The cancelation amount or charges may vary as per the duration or the time period in which the booking was cancelled or the cancellation request was generated.</Text>
            <Text style={styles.content}>4.3 As a Host, you understand that the rights of Guests under this Guest Refund Policy will supersede the cancellation terms and conditions. If you dispute the Travel Issue, you may notify us in writing or via telephone and provide us with information (including photographs or other evidence) disputing the claims regarding the Travel Issue, provided you must have used reasonable and good faith efforts to try to remedy the Travel Issue with the Guest prior to disputing the Travel Issue claim.</Text>
            <Text style={styles.heading}>5. Contacting us.</Text>
            <Text style={styles.content}> If you have any questions about the Guest Refund Policy, please email us or contact our email id – Apnaghar@gmail.com</Text>
           </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:8,
        width:Dimensions.get("screen").width,
        flex:1
    },
    heading:{
        fontWeight:"600",
        fontSize:17,
        marginTop:10,marginBottom:10
    },
    content:{
        fontSize:16,
        marginTop:5,
        marginBottom:5
    }
})