import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Privacy() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.heading}>PRIVACY POLICY</Text>
          <Text style={styles.text}>
            This Privacy Policy explains how logisoft Private Limited and its affiliates collect, use, and share information from or about you when you use our websites, downloadable applications such as interactive mobile applications, and voice-activated assistants, and other services that link to this policy.
          </Text>
          <Text style={styles.text}>
            When you use the Services, you agree to the collection, use, and sharing of your information as described in this Privacy Policy. Before you submit any information, please read this Privacy Policy for an explanation of how we will treat your personal information. By using any part of the services, you consent to the collection, use, disclosure and transfer of your personal information for the purposes outlined in this Privacy Policy and to the collection, processing and maintenance of this information. If you do not agree to this Privacy Policy, please do not use the Portal. Your use of any part of the Portal indicates your acceptance of this Privacy Policy and of the collection, use and disclosure of your personal information in accordance with this Privacy Policy. While you have the option not to provide us with certain information or withdraw consent to collect certain information, kindly note that in such an event you may not be able to take full advantage of the entire scope of features and services offered to you and we reserve the right not to provide you with our services.
          </Text>
          <Text style={styles.subheading}>1. TYPES OF INFORMATION WE COLLECT</Text>
          <Text style={styles.text}>
            We, or our service providers on our behalf, may collect the following information about you or your use of the Services:
          </Text>
          <Text style={styles.boldText}>Information You Provide to Us</Text>
          <View style={styles.indentedSection}>
            <Text style={{marginBottom:10}}>
                <Text style={styles.boldText}>Contact and registration information:</Text>
                <Text style={styles.text}>such as your name, address, telephone number, email address, username, and password.</Text>
            </Text>
            <Text style={{marginBottom:10}}>
                <Text style={styles.boldText}>Information about you or your friends and family:</Text>
                <Text style={styles.text}>such as demographic or biographical information, gender, interests, photos, or any other information about you that you provide to us, including information about friends, contacts or referrals</Text>
            </Text>
            <Text style={{marginBottom:10}}>
                <Text style={styles.boldText}>Transaction information:</Text>
                <Text style={styles.text}>payment information such as your credit/debit card details, purchase history and other information related to your transaction.</Text>
            </Text>
            <Text style={{marginBottom:10}}>
                <Text style={styles.boldText}>Customer care, technical support and other feedback:</Text>
                <Text style={styles.text}>questions and other messages you address to us directly through online forms and social media platforms. If you contact us by phone, we may record the conversation and/or keep a summary of the call.</Text>
            </Text>
            <Text style={{marginBottom:10}}>
                <Text style={styles.boldText}>Other information you provide:</Text>
                <Text style={styles.text}>any other information that you provide to us including, posts, date of birth, content, photos, booking times or biometric identifiers such as facial scans or fingerprints</Text>
            </Text>
          </View>
          <Text style={styles.boldText}>Information We Collect Automatically</Text>
          <View style={styles.indentedSection}>
            <Text style={{marginBottom:10}}>
                <Text style={styles.boldText}>Device Information:</Text>
                <Text style={styles.text}>including your IP address, browser types, browser language, operating system, platform type, device types, and device IDs such as unique identifiers, advertising identifiers etc</Text>
            </Text>
            <Text style={{marginBottom:10}}>
                <Text style={styles.boldText}>Usage Information:</Text>
                <Text style={styles.text}>including files you download, domain names, landing pages, your browsing activity, what you click, scrolling and keystroke activity, pages viewed, advertising viewed or visited, forms or fields you complete or partially complete, search terms, whether you open an email and your interaction with the content, access times, and error logs, and other similar information.</Text>
            </Text>
            <Text style={{marginBottom:10}}>
                <Text style={styles.boldText}>Location Information:</Text>
                <Text style={styles.text}>including the city, state and ZIP code associated with your IP address, information derived through WiFi triangulation, and precise location information from GPS-based functionality on your mobile devices or from your use of our Mobile Apps, and with your consent, your precise GPS information.</Text>
            </Text>
            <Text style={{marginBottom:10}}>
                <Text style={styles.boldText}>Offline Information:</Text>
                <Text style={styles.text}>Certain information may also be stored while you are offline and transmitted to us when you next connect to the Internet, regardless of where you connect from or the device you use to connect.</Text>
            </Text>
          </View> 
          <Text style={styles.boldText}>Information from Third Party Sources</Text>
          <Text>We may receive information about you from third parties, partners or our service providers such as:</Text>
          <View style={styles.indentedSection}>
            <Text style={{marginBottom:10}}>
                <Text style={styles.boldText}>Public Information:</Text>
                <Text style={styles.text}>from publicly and commercially available online or offline sources, as permitted by law including demographic information, purchasing data, membership in loyalty programs or information about advertisements you have seen or acted upon, including your interaction with advertisers' products and services.</Text>
            </Text>
            <Text style={{marginBottom:10}}>
                <Text style={styles.boldText}>Social Media Information:</Text>
                <Text style={styles.text}>if you visit the website on a device on which you also use social networks or if you interact with us through a social media service or other platforms, we may have access to some information you provide to that social network or platform such as your name, email address, friend list, photo, age, gender, location, birthday, social networking ID, current city, and the people/sites you follow.</Text>
            </Text>
          </View> 
            <Text style={styles.subheading}>2. HOW WE USE YOUR INFORMATION</Text>
            <Text>Depending on the Service you use, we, or our service providers, may use your information to:</Text>
            <Text style={styles.boldText}>Provide the Service including</Text> 
            <View style={styles.indentedSection}>
                <Text>1. Responding to your requests or inquiries;</Text>
                <Text>2. Providing technical support;</Text>
                <Text>3. Sending you service-related communications, including announcements and administrative messages; </Text>
                <Text>4. Understanding how you use the services so we can improve them.</Text> 
            </View>
            <Text style={styles.boldText}>Personalize your experience including</Text> 
            <View style={styles.indentedSection}>
                <Text>1. Providing you with advertising based on your activities and interests;</Text>
                <Text>2. Creating and updating audience segments that can be used for targeted advertising and marketing on the services, television, third-party services and platforms, mobile apps and/or websites, and offline;</Text>
                <Text>3. Creating profiles about you, including adding information we obtain from third parties, which may be used for analytics, marketing and advertising </Text>
                <Text>4. Sending you newsletters, surveys and information about products, services and promotions offered by us, our partners, and other organizations with which we work.</Text> 
            </View>
            <Text style={styles.boldText}>Recognize your devices and associate the information with your profile including</Text> 
            <View style={styles.indentedSection}>
                <Text>1. Using data collected or received from service providers, advertisers, and other third parties, such as your device information, to match mobile advertising and cookie identifiers</Text>
                <Text>2. Matching your devices if you log into the same online service on multiple devices or web browsers or if your devices share similar attributes that support an inference that they are used by the same user or household;</Text>
                <Text>3. Using this information to match your interests across devices, as well as for analytics, ad serving or reporting, or to improve the services; </Text>
                <Text>4. Identifying you or your device or associated information with you, your device, or your profile whenever you use the service, even if you do so when logged out or without intentionally identifying yourself.</Text> 
            </View>
            <Text style={styles.boldText}>Prevent fraud and defend our legal rights</Text> 
            <View style={styles.indentedSection}>
                <Text>1. protecting the safety of our users and others</Text>
                <Text>2. enforcing our terms of service</Text>
                <Text>3. preventing fraud or any other potentially illegal activities. </Text>
            </View>
            <Text style={styles.normalText}>We may combine all the information we collect from or receive about you for any of the foregoing purposes. Please see Your Rights and Choices section for further information.</Text>
            <Text style={styles.normalText}>We may aggregate or de-identify your information and may use, share, rent or sell aggregated or de-identified information for any purpose and such information is not subject to this Privacy Policy.</Text>
            <Text style={styles.subheading}>3. YOUR RIGHTS AND CHOICES</Text> 
            <Text style={styles.boldText}>Communication Preferences and Opt-outs</Text> 
            <Text style={styles.normalText}>You may unsubscribe from our email newsletters or promotional emails by following the opt-out instructions contained in the email. You cannot unsubscribe from service- related, transactional, or emails related to your service.</Text>
            <Text style={styles.boldText}>Rectification or Erasure of Information</Text> 
            <Text style={styles.normalText}>Users are entitled to contact us at [] to request for rectification of the Personal Information collected by us and/or for erasure of your Personal Information.</Text>
            <Text style={styles.boldText}>Withdrawal of Consent</Text> 
            <Text style={styles.normalText}>If you have given your free consent to the collection, use, disclosure, retention and protection of your Personal Information, and wish to withdraw such consent, you may do so by contacting us at [] at any time.</Text>
            <Text style={styles.normalText}>Notwithstanding the above provisions, any decision by you to opt-out, rectify or erase information from our records or withdraw your consent shall not in any manner whatsoever affect and/or make illegal processing of your information done prior to the communication of your aforesaid decision to us.</Text>
            <Text style={styles.boldText}>Cookies and Similar Technologies</Text> 
            <Text style={styles.normalText}>We, and our service providers, advertisers, and other partners, use cookies and similar technologies (e.g., web beacons, pixels, ad tags and device identifiers) to recognize you and/or your device(s) on, off and across different services and devices. Our Cookies and Tracking Technologies policy provides certain opt-out choices. However, we may still allow collect usage data for certain other purposes (e.g., contextual advertising, research, analytics, and internal operations).</Text>
            <Text style={styles.boldText}>Other Online Services</Text> 
            <Text style={styles.normalText}>Our services may contain links to third party websites and services. These other sites may collect information about you when you visit them and use this information in accordance with their own privacy policies and terms of use. We do not endorse or control those third parties' policies or practices. In some circumstances, we may host some websites on behalf of others and those entities may place or permit the placement of cookies and other tracking technology. We are not responsible for these tracking practices.</Text>
            <Text style={styles.subheading}>4. HOW WE PROTECT YOUR INFORMATION</Text> 
            <Text style={styles.normalText}>We maintain procedural, technical, and physical safeguards for the services to help protect against loss, misuse or unauthorized access, disclosure, alteration, or destruction of the information you provide via the services. These safeguards vary depending upon the sensitivity of the information we collect and store. Please be aware that no security solutions are infallible. The database is stored on servers secured behind a firewall; access to such servers being password- protected and strictly limited based on need-to-know basis, we cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet. Further, any information you include in a posting to the discussion areas will be available to anyone with Internet access. By using the Portal, you understand and agree that your information may be used in or transferred to countries other than India.</Text>
            <Text style={styles.subheading}>5. UPDATES TO OUR PRIVACY POLICY</Text> 
            <Text style={styles.normalText}>If we make material changes to the way we collect or use your information, we will notify you by posting a revised version of this Privacy Policy online, and we may also notify you by other means. You should check the website periodically for updates.</Text>
            <Text style={styles.normalText}>The date at the top of the Privacy Policy tells you when it was last updated. Any changes to this Privacy Policy will become effective when the revised Privacy Policy is posted. If you use this online service after the changes are posted, you have agreed the changes. If you do not agree with this Privacy Policy or any changes we make, please do not continue to use the Services.</Text>
            <Text style={styles.subheading}>6. CONTACT US</Text> 
            <Text style={styles.normalText}>For any questions or complaints about this Privacy Policy or our privacy practices, please contact us at apnaghar@gmail.com.</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    normalText:{
        marginTop:5,marginBottom:8
    },
    container: {
      flex: 1,
      width: Dimensions.get("screen").width,
      padding: 10,
    },
    heading: {
      fontWeight: "600",
      fontSize: 17,
      marginBottom: 15,
    },
    text: {
      fontSize: 15,
      marginBottom: 10,      
      flexWrap:"wrap"
    },
    subheading: {
      fontWeight: "600",
      fontSize: 17,
      marginBottom: 10,
    },
    boldText: {
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
      marginTop: 10,
    },
    indentedSection: {
      marginLeft: 25,
    },
  });
  