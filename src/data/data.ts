export const citiesHostels = [
    { code: "A", name: ["Ahmedabad", "Amritsar", "Agra"] },
    { code: "B", name: ["Bangalore"] },
    { code: "C", name: ["Chennai", "Coimbatore", "Chandigarh"] },
    { code: "D", name: ["Delhi"] },
    { code: "H", name: ["Hyderabad"] },
    { code: "I", name: ["Indore"] },
    { code: "J", name: ["Jaipur"] },
    { code: "K", name: ["Kolkata"] },
    { code: "L", name: ["Lucknow"] },
    { code: "M", name: ["Mumbai"] },
    { code: "N", name: ["Noida"] },
    { code: "P", name: ["Pune"] }
];


export const cities = [
    {
        city: "Delhi",
        image: "https://www.shutterstock.com/image-photo/view-on-india-gate-cloudy-600nw-2443149545.jpg",
    },
    {
        city: "Hyderabad",
        image: "https://lp-cms-production.imgix.net/2019-06/GettyImages-171676147_full.jpg?fit=crop&ar=1%3A1&w=1200&auto=format&q=75",
    },
    {
        city: "Bengaluru",
        image: "https://www.shutterstock.com/image-photo/bangalore-india-december-12-2024-600nw-2450403223.jpg",
    },
    {
        city: "Chennai",
        image: "https://media.istockphoto.com/id/1226340114/photo/puratchi-thalaivar-dr-mgr-central-railway-station-chennai-central-railway-station-india.jpg?s=612x612&w=0&k=20&c=lZjBnWBBoLiApWZUUWP1Vl3XAVdKjYMcgGpItXv_L14=",
    },
    {
        city: "Kota",
        image: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/05/24/Pictures/file-file-photo-photo-kota-city-ht_a3227bf2-407f-11e7-b7e5-3de2b6485255.jpg",
    }
];

export const legalArr=["Privacy Policy","Terms And Conditions","Service Terms","Non Discrimination Policy","Booking Policy","Cancellation Policy"]

export const arr= [
  {
    "location": "Indore",
    "type": "pg",
    "name": "Stanza Indore",
    "image": "StanzaIndore.jpg",
    "subLocation": "Rajwada",
    "roomTypes": [
      { "sharing": "Single", "price": 12000 },
      { "sharing": "Double", "price": 8000 },
      { "sharing": "Triple", "price": 6000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Geyser"],
    "houseKeeping": ["Daily Cleaning", "Male staff"],
    "hostelRules": ["No visitors after 8 PM", "Silence hours from 10 PM to 6 AM"],
    "otherFacilities": ["Terrace Garden", "CCTV Surveillance"],
    "ratings": 4.2,
    "ratingObj": [
      {
        "name": "Amit",
        "date": "18/1/2025",
        "comment": "Peaceful and comfortable."
      }
    ],
    "laundry": ["In-house Laundromat/Washing Machine", "Limited cloth count"],
    "foodPreparation": {
      "cookedBy": "Male staff",
      "meals": ["Breakfast", "Lunch", "Dinner"],
      "water": "RO Available"
    }
  },
  {
    "location": "Indore",
    "type": "pg",
    "name": "Green Nest PG",
    "image": "GreenNestPG.jpg",
    "subLocation": "Vijay Nagar",
    "roomTypes": [
      { "sharing": "Single", "price": 13000 },
      { "sharing": "Double", "price": 9000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Hot Water"],
    "houseKeeping": ["Weekly Cleaning", "Female staff"],
    "hostelRules": ["No smoking indoors", "Visitors allowed until 7 PM"],
    "otherFacilities": ["Library", "Yoga Room"],
    "ratings": 4.5,
    "ratingObj": [
      {
        "name": "Priya",
        "date": "10/1/2025",
        "comment": "Safe and well-maintained."
      }
    ],
    "laundry": ["Shared Washing Machine"],
    "foodPreparation": {
      "cookedBy": "In-house chef",
      "meals": ["Breakfast", "Dinner"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Indore",
    "type": "hostel",
    "name": "Urban Nest",
    "image": "UrbanNestIndore.jpg",
    "subLocation": "Palasia",
    "roomTypes": [
      { "sharing": "Single", "price": 10000 },
      { "sharing": "Double", "price": 7000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Geyser"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No loud music", "Gates close by 9 PM"],
    "otherFacilities": ["Parking Area", "24/7 Security"],
    "ratings": 4.0,
    "ratingObj": [
      {
        "name": "Karan",
        "date": "15/1/2025",
        "comment": "Affordable and secure."
      }
    ],
    "laundry": ["Self Service"],
    "foodPreparation": {
      "cookedBy": "Female staff",
      "meals": ["Lunch", "Dinner"],
      "water": "Filtered Water Available"
    }
  },
  {
    "location": "Indore",
    "type": "hostel",
    "name": "Skyline Hostel",
    "image": "SkylineHostelIndore.jpg",
    "subLocation": "Rajendra Nagar",
    "roomTypes": [
      { "sharing": "Single", "price": 9500 },
      { "sharing": "Double", "price": 6500 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "TV"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No alcohol allowed", "Pets not allowed"],
    "otherFacilities": ["Gym", "Common Room"],
    "laundry": ["Professional Laundry Service"],
    "foodPreparation": {
      "cookedBy": "Male staff",
      "meals": ["Breakfast", "Lunch", "Dinner"],
      "water": "RO Water"
    }
  },
  {
    "location": "Jaipur",
    "type": "pg",
    "name": "Pink City PG",
    "image": "PinkCityPG.jpg",
    "subLocation": "Vaishali Nagar",
    "roomTypes": [
      { "sharing": "Single", "price": 11000 },
      { "sharing": "Triple", "price": 5000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "Hot Water", "Study Table"],
    "houseKeeping": ["Daily Cleaning", "Female staff"],
    "hostelRules": ["No smoking indoors", "Quiet hours after 9 PM"],
    "otherFacilities": ["CCTV", "Rooftop Lounge"],
    "ratings": 4.5,
    "ratingObj": [
      {
        "name": "Rohit",
        "date": "5/1/2025",
        "comment": "Excellent services!"
      }
    ],
    "laundry": ["Washer & Dryer"],
    "foodPreparation": {
      "cookedBy": "Male staff",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water Available"
    }
  },
  {
    "location": "Jaipur",
    "type": "pg",
    "name": "Golden Stay",
    "image": "GoldenStayJaipur.jpg",
    "subLocation": "C-Scheme",
    "roomTypes": [
      { "sharing": "Single", "price": 14000 },
      { "sharing": "Double", "price": 8500 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Balcony"],
    "houseKeeping": ["Weekly Cleaning", "Male staff"],
    "hostelRules": ["No parties allowed", "Gates close by 10 PM"],
    "otherFacilities": ["Terrace Garden", "Library"],
    "laundry": ["In-house Washing Machine"],
    "foodPreparation": {
      "cookedBy": "Chef",
      "meals": ["Lunch", "Dinner"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Kolkata",
    "type": "hostel",
    "name": "Victoria Dorms",
    "image": "VictoriaDorms.jpg",
    "subLocation": "Park Street",
    "roomTypes": [
      { "sharing": "Single", "price": 14000 },
      { "sharing": "Double", "price": 9000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Laundry"],
    "houseKeeping": ["Weekly Cleaning", "Female staff"],
    "hostelRules": ["No pets", "No alcohol allowed"],
    "otherFacilities": ["Game Room", "Library"],
    "ratings": 4.6,
    "ratingObj": [
      {
        "name": "Aditya",
        "date": "20/1/2025",
        "comment": "Premium experience!"
      }
    ],
    "laundry": ["Professional Laundry Service"],
    "foodPreparation": {
      "cookedBy": "Chef",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Available"
    }
  },
  {
    "location": "Kolkata",
    "type": "pg",
    "name": "City Life PG",
    "image": "CityLifeKolkata.jpg",
    "subLocation": "Salt Lake",
    "roomTypes": [
      { "sharing": "Single", "price": 13000 },
      { "sharing": "Triple", "price": 7000 }
    ],
    "foodType": ["Vegetarian", "Egg"],
    "roomAmenities": ["WiFi", "Cooler", "Hot Water"],
    "houseKeeping": ["Daily Cleaning", "Male staff"],
    "hostelRules": ["No smoking indoors", "Visitors allowed until 8 PM"],
    "otherFacilities": ["Garden", "CCTV Surveillance"],
    "ratings": 4.1,
    "ratingObj": [
      {
        "name": "Neha",
        "date": "8/1/2025",
        "comment": "Great location and amenities."
      }
    ],
    "laundry": ["Washing Machine", "Cloth Drying Area"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Lunch"],
      "water": "Mineral Water"
    }
  },{
    "location": "Jaipur",
    "type": "hostel",
    "name": "Royal Stay Hostel",
    "image": "RoyalStayJaipur.jpg",
    "subLocation": "Malviya Nagar",
    "roomTypes": [
      { "sharing": "Single", "price": 12000 },
      { "sharing": "Double", "price": 8000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Hot Water", "Study Table"],
    "houseKeeping": ["Weekly Cleaning", "Female staff"],
    "hostelRules": ["No loud music after 10 PM", "Visitors allowed until 7 PM"],
    "otherFacilities": ["Rooftop Lounge", "CCTV Surveillance"],
    "ratings": 4.3,
    "ratingObj": [
      {
        "name": "Anjali",
        "date": "12/1/2025",
        "comment": "Comfortable and safe stay."
      }
    ],
    "laundry": ["Shared Washing Machine"],
    "foodPreparation": {
      "cookedBy": "In-house chef",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Available"
    }
  },
  {
    "location": "Jaipur",
    "type": "pg",
    "name": "Blue Pearl PG",
    "image": "BluePearlJaipur.jpg",
    "subLocation": "Tonk Road",
    "roomTypes": [
      { "sharing": "Single", "price": 14000 },
      { "sharing": "Double", "price": 9000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "AC"],
    "houseKeeping": ["Daily Cleaning", "Male staff"],
    "hostelRules": ["No smoking indoors", "No pets allowed"],
    "otherFacilities": ["Library", "24/7 Security"],
    "ratings": 4.7,
    "ratingObj": [
      {
        "name": "Siddharth",
        "date": "18/1/2025",
        "comment": "Feels like home!"
      }
    ],
    "laundry": ["Professional Laundry Service"],
    "foodPreparation": {
      "cookedBy": "Male staff",
      "meals": ["Breakfast", "Lunch", "Dinner"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Kolkata",
    "type": "hostel",
    "name": "Ganges Dormitory",
    "image": "GangesDormitory.jpg",
    "subLocation": "New Alipore",
    "roomTypes": [
      { "sharing": "Single", "price": 13000 },
      { "sharing": "Double", "price": 8500 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Hot Water"],
    "houseKeeping": ["Weekly Cleaning", "Male staff"],
    "hostelRules": ["No outside food allowed", "Gates close by 9 PM"],
    "otherFacilities": ["Gym", "Library"],
    "ratings": 4.4,
    "ratingObj": [
      {
        "name": "Riya",
        "date": "15/1/2025",
        "comment": "Clean and well-maintained."
      }
    ],
    "laundry": ["In-house Washing Machine"],
    "foodPreparation": {
      "cookedBy": "Chef",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water Available"
    }
  },
  {
    "location": "Kolkata",
    "type": "pg",
    "name": "Salt Lake Haven",
    "image": "SaltLakeHaven.jpg",
    "subLocation": "Salt Lake Sector V",
    "roomTypes": [
      { "sharing": "Single", "price": 15000 },
      { "sharing": "Triple", "price": 7500 }
    ],
    "foodType": ["Vegetarian", "Egg"],
    "roomAmenities": ["WiFi", "Cooler", "Study Table"],
    "houseKeeping": ["Daily Cleaning", "Female staff"],
    "hostelRules": ["No loud parties", "No smoking indoors"],
    "otherFacilities": ["CCTV Surveillance", "Common Room"],
    "ratings": 4.1,
    "ratingObj": [
      {
        "name": "Vikram",
        "date": "10/1/2025",
        "comment": "Great amenities and staff."
      }
    ],
    "laundry": ["Professional Laundry Service"],
    "foodPreparation": {
      "cookedBy": "In-house chef",
      "meals": ["Breakfast", "Lunch", "Dinner"],
      "water": "Mineral Water"
    }
  },
  {
    "location": "Pune",
    "type": "hostel",
    "name": "Oxford Hostel",
    "image": "OxfordHostelPune.jpg",
    "subLocation": "Kothrud",
    "roomTypes": [
      { "sharing": "Single", "price": 10000 },
      { "sharing": "Double", "price": 7000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Hot Water"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No loud music", "Gates close by 10 PM"],
    "otherFacilities": ["Gym", "Study Room"],
    "ratings": 4.3,
    "ratingObj": [
      {
        "name": "Ritika",
        "date": "20/1/2025",
        "comment": "Excellent location and facilities."
      }
    ],
    "laundry": ["Shared Washing Machine"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Available"
    }
  },
  {
    "location": "Pune",
    "type": "hostel",
    "name": "Deccan Heights",
    "image": "DeccanHeightsPune.jpg",
    "subLocation": "Deccan Gymkhana",
    "roomTypes": [
      { "sharing": "Single", "price": 12000 },
      { "sharing": "Double", "price": 8500 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Geyser"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No smoking indoors", "Visitors allowed until 8 PM"],
    "otherFacilities": ["Rooftop Lounge", "Parking"],
    "ratings": 4.5,
    "ratingObj": [
      {
        "name": "Arjun",
        "date": "18/1/2025",
        "comment": "Clean and well-organized."
      }
    ],
    "laundry": ["Professional Laundry Service"],
    "foodPreparation": {
      "cookedBy": "In-house chef",
      "meals": ["Breakfast", "Lunch", "Dinner"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Pune",
    "type": "pg",
    "name": "Skyline PG",
    "image": "SkylinePGPune.jpg",
    "subLocation": "Baner",
    "roomTypes": [
      { "sharing": "Single", "price": 14000 },
      { "sharing": "Triple", "price": 8000 }
    ],
    "foodType": ["Vegetarian", "Egg"],
    "roomAmenities": ["WiFi", "Cooler", "Study Table"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No alcohol allowed", "No pets"],
    "otherFacilities": ["CCTV Surveillance", "Common Room"],
    "ratings": 4.2,
    "ratingObj": [
      {
        "name": "Megha",
        "date": "15/1/2025",
        "comment": "Very comfortable stay."
      }
    ],
    "laundry": ["Shared Laundry Area"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Lunch"],
      "water": "Mineral Water"
    }
  },
  {
    "location": "Pune",
    "type": "pg",
    "name": "Urban Stay PG",
    "image": "UrbanStayPune.jpg",
    "subLocation": "Aundh",
    "roomTypes": [
      { "sharing": "Single", "price": 13000 },
      { "sharing": "Double", "price": 8500 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Hot Water"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No loud parties", "Quiet hours after 10 PM"],
    "otherFacilities": ["Library", "24/7 Security"],
    "ratings": 4.1,
    "ratingObj": [
      {
        "name": "Siddhi",
        "date": "10/1/2025",
        "comment": "Good amenities and polite staff."
      }
    ],
    "laundry": ["Washing Machine"],
    "foodPreparation": {
      "cookedBy": "In-house chef",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water Available"
    }
  },{
    "location": "Noida",
    "type": "hostel",
    "name": "Elite Hostel",
    "image": "EliteHostelNoida.jpg",
    "subLocation": "Sector 62",
    "roomTypes": [
      { "sharing": "Single", "price": 12000 },
      { "sharing": "Double", "price": 9000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Hot Water"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No pets allowed", "Gates close by 9 PM"],
    "otherFacilities": ["Library", "Game Room"],
    "ratings": 4.6,
    "ratingObj": [
      {
        "name": "Varun",
        "date": "12/1/2025",
        "comment": "Great facilities and clean rooms."
      }
    ],
    "laundry": ["In-house Laundry"],
    "foodPreparation": {
      "cookedBy": "Chef",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water"
    }
  },
  {
    "location": "Noida",
    "type": "hostel",
    "name": "Noida Stay Hostel",
    "image": "NoidaStayHostel.jpg",
    "subLocation": "Sector 15",
    "roomTypes": [
      { "sharing": "Single", "price": 13000 },
      { "sharing": "Double", "price": 8500 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Geyser"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No alcohol", "Quiet hours after 10 PM"],
    "otherFacilities": ["Rooftop Garden", "24/7 Security"],
    "ratings": 4.3,
    "ratingObj": [
      {
        "name": "Pratik",
        "date": "18/1/2025",
        "comment": "Peaceful and convenient."
      }
    ],
    "laundry": ["Professional Laundry"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Lunch", "Dinner"],
      "water": "Mineral Water"
    }
  },
  {
    "location": "Noida",
    "type": "pg",
    "name": "Green Acres PG",
    "image": "GreenAcresPGNoida.jpg",
    "subLocation": "Sector 44",
    "roomTypes": [
      { "sharing": "Single", "price": 14000 },
      { "sharing": "Triple", "price": 7000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Study Table"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No smoking", "No pets"],
    "otherFacilities": ["Gym", "Common Room"],
    "ratings": 4.2,
    "ratingObj": [
      {
        "name": "Swati",
        "date": "15/1/2025",
        "comment": "Comfortable and safe."
      }
    ],
    "laundry": ["Shared Laundry"],
    "foodPreparation": {
      "cookedBy": "Chef",
      "meals": ["Breakfast", "Lunch"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Noida",
    "type": "pg",
    "name": "White Lotus PG",
    "image": "WhiteLotusPGNoida.jpg",
    "subLocation": "Sector 18",
    "roomTypes": [
      { "sharing": "Single", "price": 15000 },
      { "sharing": "Double", "price": 9500 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Hot Water"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No loud music", "Quiet hours after 10 PM"],
    "otherFacilities": ["Library", "24/7 Security"],
    "ratings": 4.4,
    "ratingObj": [
      {
        "name": "Aditi",
        "date": "10/1/2025",
        "comment": "Excellent facilities."
      }
    ],
    "laundry": ["Washing Machine"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water Available"
    }
  },
  {
    "location": "Mumbai",
    "type": "hostel",
    "name": "Seaview Hostel",
    "image": "SeaviewHostelMumbai.jpg",
    "subLocation": "Bandra",
    "roomTypes": [
      { "sharing": "Single", "price": 18000 },
      { "sharing": "Double", "price": 12000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Hot Water"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No alcohol", "No loud parties"],
    "otherFacilities": ["Terrace Lounge", "Gym"],
    "ratings": 4.5,
    "ratingObj": [
      {
        "name": "Rohan",
        "date": "16/1/2025",
        "comment": "Amazing location and facilities."
      }
    ],
    "laundry": ["In-house Laundry"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water"
    }
  },
  {
    "location": "Mumbai",
    "type": "hostel",
    "name": "Cityscape Hostel",
    "image": "CityscapeHostelMumbai.jpg",
    "subLocation": "Andheri West",
    "roomTypes": [
      { "sharing": "Single", "price": 20000 },
      { "sharing": "Double", "price": 14000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Study Desk"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No smoking indoors", "Quiet hours after 11 PM"],
    "otherFacilities": ["Common Room", "Parking"],
    "ratings": 4.7,
    "ratingObj": [
      {
        "name": "Meera",
        "date": "18/1/2025",
        "comment": "Luxurious and well-maintained."
      }
    ],
    "laundry": ["Professional Laundry Service"],
    "foodPreparation": {
      "cookedBy": "In-house chef",
      "meals": ["Breakfast", "Lunch", "Dinner"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Mumbai",
    "type": "pg",
    "name": "Urban Nest PG",
    "image": "UrbanNestPGMumbai.jpg",
    "subLocation": "Powai",
    "roomTypes": [
      { "sharing": "Single", "price": 22000 },
      { "sharing": "Double", "price": 15000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Hot Water"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No pets", "No guests after 9 PM"],
    "otherFacilities": ["Gym", "CCTV Surveillance"],
    "ratings": 4.3,
    "ratingObj": [
      {
        "name": "Anjali",
        "date": "10/1/2025",
        "comment": "Comfortable and secure."
      }
    ],
    "laundry": ["Washing Machine"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Dinner"],
      "water": "Mineral Water"
    }
  },
  {
    "location": "Mumbai",
    "type": "pg",
    "name": "Dream Stay PG",
    "image": "DreamStayPGMumbai.jpg",
    "subLocation": "Malad",
    "roomTypes": [
      { "sharing": "Single", "price": 19000 },
      { "sharing": "Triple", "price": 10000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Geyser"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No loud music", "Gates close by 10 PM"],
    "otherFacilities": ["Terrace Garden", "24/7 Security"],
    "ratings": 4.2,
    "ratingObj": [
      {
        "name": "Kunal",
        "date": "5/1/2025",
        "comment": "Affordable and clean."
      }
    ],
    "laundry": ["Shared Laundry Area"],
    "foodPreparation": {
      "cookedBy": "Chef",
      "meals": ["Breakfast", "Lunch"],
      "water": "RO Water"
    }
  },
  {
    "location": "Lucknow",
    "type": "hostel",
    "name": "Heritage Hostel",
    "image": "HeritageHostelLucknow.jpg",
    "subLocation": "Hazratganj",
    "roomTypes": [
      { "sharing": "Single", "price": 10000 },
      { "sharing": "Double", "price": 7000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Hot Water"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No alcohol", "Gates close by 9 PM"],
    "otherFacilities": ["Library", "Game Room"],
    "ratings": 4.6,
    "ratingObj": [
      {
        "name": "Shivam",
        "date": "20/1/2025",
        "comment": "Best place for students."
      }
    ],
    "laundry": ["In-house Laundry"],
    "foodPreparation": {
      "cookedBy": "Chef",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water"
    }
  },
  {
    "location": "Lucknow",
    "type": "hostel",
    "name": "Royal Stay Hostel",
    "image": "RoyalStayHostelLucknow.jpg",
    "subLocation": "Aliganj",
    "roomTypes": [
      { "sharing": "Single", "price": 12000 },
      { "sharing": "Double", "price": 8500 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Geyser"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No smoking indoors", "Quiet hours after 10 PM"],
    "otherFacilities": ["Common Room", "24/7 Security"],
    "ratings": 4.4,
    "ratingObj": [
      {
        "name": "Nidhi",
        "date": "18/1/2025",
        "comment": "Very safe and convenient."
      }
    ],
    "laundry": ["Professional Laundry"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Lunch", "Dinner"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Lucknow",
    "type": "pg",
    "name": "Comfort PG",
    "image": "ComfortPGLucknow.jpg",
    "subLocation": "Gomti Nagar",
    "roomTypes": [
      { "sharing": "Single", "price": 15000 },
      { "sharing": "Triple", "price": 8000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Study Table"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No pets", "No guests after 8 PM"],
    "otherFacilities": ["Gym", "CCTV Surveillance"],
    "ratings": 4.2,
    "ratingObj": [
      {
        "name": "Priya",
        "date": "15/1/2025",
        "comment": "Good for long stays."
      }
    ],
    "laundry": ["Shared Laundry"],
    "foodPreparation": {
      "cookedBy": "Chef",
      "meals": ["Breakfast", "Lunch"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Lucknow",
    "type": "pg",
    "name": "Elite Living PG",
    "image": "EliteLivingPGLucknow.jpg",
    "subLocation": "Indira Nagar",
    "roomTypes": [
      { "sharing": "Single", "price": 14000 },
      { "sharing": "Double", "price": 9000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Hot Water"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No loud music", "Quiet hours after 10 PM"],
    "otherFacilities": ["Library", "24/7 Security"],
    "ratings": 4.1,
    "ratingObj": [
      {
        "name": "Rahul",
        "date": "12/1/2025",
        "comment": "Decent facilities at a good price."
      }
    ],
    "laundry": ["Washing Machine"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water Available"
    }
  },  
  {
    "location": "Chennai",
    "type": "hostel",
    "name": "Bay View Hostel",
    "image": "BayViewHostelChennai.jpg",
    "subLocation": "Besant Nagar",
    "roomTypes": [
      { "sharing": "Single", "price": 13000 },
      { "sharing": "Double", "price": 9000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Hot Water"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No smoking", "No pets allowed"],
    "otherFacilities": ["Beachfront View", "CCTV Surveillance"],
    "ratings": 4.3,
    "ratingObj": [
      {
        "name": "Priya",
        "date": "10/1/2025",
        "comment": "Relaxing and convenient for beach lovers."
      }
    ],
    "laundry": ["In-house Laundry"],
    "foodPreparation": {
      "cookedBy": "Chef",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water"
    }
  },
  {
    "location": "Chennai",
    "type": "hostel",
    "name": "Urban Retreat Hostel",
    "image": "UrbanRetreatHostelChennai.jpg",
    "subLocation": "Velachery",
    "roomTypes": [
      { "sharing": "Single", "price": 14000 },
      { "sharing": "Triple", "price": 7000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Study Table"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No loud music", "Quiet hours after 9 PM"],
    "otherFacilities": ["Gym", "Common Room"],
    "ratings": 4.5,
    "ratingObj": [
      {
        "name": "Ravi",
        "date": "15/1/2025",
        "comment": "Perfect for students."
      }
    ],
    "laundry": ["Washing Machine"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Lunch", "Dinner"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Chennai",
    "type": "pg",
    "name": "Elite Comfort PG",
    "image": "EliteComfortPGChennai.jpg",
    "subLocation": "Adyar",
    "roomTypes": [
      { "sharing": "Single", "price": 16000 },
      { "sharing": "Double", "price": 11000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Geyser"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No guests allowed after 8 PM", "No pets"],
    "otherFacilities": ["Terrace Garden", "CCTV"],
    "ratings": 4.1,
    "ratingObj": [
      {
        "name": "Ananya",
        "date": "18/1/2025",
        "comment": "Great location and clean rooms."
      }
    ],
    "laundry": ["Professional Laundry"],
    "foodPreparation": {
      "cookedBy": "Chef",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water"
    }
  },
  {
    "location": "Chennai",
    "type": "pg",
    "name": "Peace Haven PG",
    "image": "PeaceHavenPGChennai.jpg",
    "subLocation": "T Nagar",
    "roomTypes": [
      { "sharing": "Single", "price": 12000 },
      { "sharing": "Triple", "price": 6000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Study Desk"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No alcohol", "No smoking indoors"],
    "otherFacilities": ["Library", "Security Guard"],
    "ratings": 4.0,
    "ratingObj": [
      {
        "name": "Vishal",
        "date": "12/1/2025",
        "comment": "Affordable and peaceful."
      }
    ],
    "laundry": ["Shared Washing Machine"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Dinner"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Delhi",
    "type": "hostel",
    "name": "Capital Stay Hostel",
    "image": "CapitalStayHostelDelhi.jpg",
    "subLocation": "Connaught Place",
    "roomTypes": [
      { "sharing": "Single", "price": 20000 },
      { "sharing": "Double", "price": 13000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Hot Water"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No smoking", "Gates close by 10 PM"],
    "otherFacilities": ["Roof Deck", "CCTV Surveillance"],
    "ratings": 4.6,
    "ratingObj": [
      {
        "name": "Aryan",
        "date": "20/1/2025",
        "comment": "Excellent facilities in a prime location."
      }
    ],
    "laundry": ["In-house Laundry"],
    "foodPreparation": {
      "cookedBy": "Chef",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water"
    }
  },
  {
    "location": "Delhi",
    "type": "hostel",
    "name": "Delhi Backpackers Hostel",
    "image": "DelhiBackpackersHostelDelhi.jpg",
    "subLocation": "Karol Bagh",
    "roomTypes": [
      { "sharing": "Single", "price": 15000 },
      { "sharing": "Triple", "price": 8000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "Fan", "Hot Water"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No loud music", "No pets allowed"],
    "otherFacilities": ["Library", "Common Room"],
    "ratings": 4.2,
    "ratingObj": [
      {
        "name": "Meera",
        "date": "22/1/2025",
        "comment": "Affordable and great for solo travelers."
      }
    ],
    "laundry": ["Shared Washing Machine"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Lunch"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Delhi",
    "type": "pg",
    "name": "Metro Living PG",
    "image": "MetroLivingPGDelhi.jpg",
    "subLocation": "Dwarka",
    "roomTypes": [
      { "sharing": "Single", "price": 15000 },
      { "sharing": "Double", "price": 10000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Geyser"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No alcohol", "No pets allowed"],
    "otherFacilities": ["Gym", "Common Room"],
    "ratings": 4.4,
    "ratingObj": [
      {
        "name": "Neha",
        "date": "18/1/2025",
        "comment": "Convenient and well-managed."
      }
    ],
    "laundry": ["Washing Machine"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Lunch"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Delhi",
    "type": "pg",
    "name": "Golden Leaf PG",
    "image": "GoldenLeafPGDelhi.jpg",
    "subLocation": "Saket",
    "roomTypes": [
      { "sharing": "Single", "price": 14000 },
      { "sharing": "Double", "price": 9500 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Geyser"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No smoking indoors", "No loud music after 9 PM"],
    "otherFacilities": ["Security Guard", "Elevator"],
    "ratings": 4.1,
    "ratingObj": [
      {
        "name": "Raj",
        "date": "15/1/2025",
        "comment": "Good value for money."
      }
    ],
    "laundry": ["In-house Laundry"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water"
    }
  },
  {
    "location": "Hyderabad",
    "type": "hostel",
    "name": "Tech Park Hostel",
    "image": "TechParkHostelHyderabad.jpg",
    "subLocation": "HITEC City",
    "roomTypes": [
      { "sharing": "Single", "price": 18000 },
      { "sharing": "Double", "price": 12000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Hot Water"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No smoking indoors", "Quiet hours after 9 PM"],
    "otherFacilities": ["Gym", "Gaming Zone"],
    "ratings": 4.5,
    "ratingObj": [
      {
        "name": "Rahul",
        "date": "15/1/2025",
        "comment": "Perfect for IT professionals."
      }
    ],
    "laundry": ["In-house Laundry"],
    "foodPreparation": {
      "cookedBy": "Chef",
      "meals": ["Breakfast", "Lunch", "Dinner"],
      "water": "RO Water"
    }
  },
  {
    "location": "Hyderabad",
    "type": "hostel",
    "name": "HITEC Residency Hostel",
    "image": "HITECResidencyHostelHyderabad.jpg",
    "subLocation": "Madhapur",
    "roomTypes": [
      { "sharing": "Single", "price": 16000 },
      { "sharing": "Double", "price": 11000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Geyser"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No pets allowed", "Strict check-in time"],
    "otherFacilities": ["Common Area", "Parking"],
    "ratings": 4.3,
    "ratingObj": [
      {
        "name": "Anil",
        "date": "19/1/2025",
        "comment": "Comfortable stay and ideal for business travelers."
      }
    ],
    "laundry": ["Washing Machine"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Lunch"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Hyderabad",
    "type": "pg",
    "name": "Pearl City PG",
    "image": "PearlCityPGHyderabad.jpg",
    "subLocation": "Gachibowli",
    "roomTypes": [
      { "sharing": "Single", "price": 17000 },
      { "sharing": "Double", "price": 10000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Geyser"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No pets allowed", "Quiet hours after 10 PM"],
    "otherFacilities": ["Common Room", "24/7 Security"],
    "ratings": 4.3,
    "ratingObj": [
      {
        "name": "Sneha",
        "date": "10/1/2025",
        "comment": "Comfortable stay for working professionals."
      }
    ],
    "laundry": ["Professional Laundry"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Dinner"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Hyderabad",
    "type": "pg",
    "name": "City Edge PG",
    "image": "CityEdgePGHyderabad.jpg",
    "subLocation": "Secunderabad",
    "roomTypes": [
      { "sharing": "Single", "price": 15000 },
      { "sharing": "Triple", "price": 7000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Study Desk"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No smoking", "No parties allowed"],
    "otherFacilities": ["Laundry Service", "CCTV"],
    "ratings": 4.2,
    "ratingObj": [
      {
        "name": "Vishal",
        "date": "12/1/2025",
        "comment": "Affordable and convenient location."
      }
    ],
    "laundry": ["Laundry on Request"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Lunch"],
      "water": "RO Water"
    }
  },
  {
    "location": "Agra",
    "type": "hostel",
    "name": "Agra Heritage Hostel",
    "image": "AgraHeritageHostel.jpg",
    "subLocation": "Taj Ganj",
    "roomTypes": [
      { "sharing": "Single", "price": 10000 },
      { "sharing": "Double", "price": 7000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Geyser"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No smoking", "No pets allowed"],
    "otherFacilities": ["Cultural Events", "Library"],
    "ratings": 4.2,
    "ratingObj": [
      {
        "name": "Arjun",
        "date": "10/1/2025",
        "comment": "Great experience with friendly staff."
      }
    ],
    "laundry": ["In-house Laundry"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water"
    }
  },
  {
    "location": "Agra",
    "type": "hostel",
    "name": "Taj Stay Hostel",
    "image": "TajStayHostelAgra.jpg",
    "subLocation": "Taj Mahal",
    "roomTypes": [
      { "sharing": "Single", "price": 12000 },
      { "sharing": "Triple", "price": 6000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Geyser"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No alcohol", "Quiet hours after 10 PM"],
    "otherFacilities": ["Garden", "Parking"],
    "ratings": 4.3,
    "ratingObj": [
      {
        "name": "Priya",
        "date": "12/1/2025",
        "comment": "Lovely place near Taj Mahal."
      }
    ],
    "laundry": ["Shared Washing Machine"],
    "foodPreparation": {
      "cookedBy": "Male Staff",
      "meals": ["Breakfast", "Lunch"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Agra",
    "type": "pg",
    "name": "Agra Comfort PG",
    "image": "AgraComfortPG.jpg",
    "subLocation": "Sadar Bazar",
    "roomTypes": [
      { "sharing": "Single", "price": 8000 },
      { "sharing": "Double", "price": 6000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Geyser"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No pets allowed", "No smoking inside"],
    "otherFacilities": ["Common Room", "CCTV Surveillance"],
    "ratings": 4.0,
    "ratingObj": [
      {
        "name": "Ravi",
        "date": "5/1/2025",
        "comment": "Good for a budget stay."
      }
    ],
    "laundry": ["Laundry Service"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water"
    }
  },
  {
    "location": "Agra",
    "type": "pg",
    "name": "Heritage PG",
    "image": "HeritagePGAgra.jpg",
    "subLocation": "Baluganj",
    "roomTypes": [
      { "sharing": "Single", "price": 9500 },
      { "sharing": "Double", "price": 7000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Geyser"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No smoking", "No parties"],
    "otherFacilities": ["Security Guard", "CCTV"],
    "ratings": 4.1,
    "ratingObj": [
      {
        "name": "Simran",
        "date": "8/1/2025",
        "comment": "Nice and affordable PG."
      }
    ],
    "laundry": ["In-house Laundry"],
    "foodPreparation": {
      "cookedBy": "Male Staff",
      "meals": ["Breakfast", "Lunch"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Amritsar",
    "type": "hostel",
    "name": "Golden Temple Hostel",
    "image": "GoldenTempleHostelAmritsar.jpg",
    "subLocation": "Near Golden Temple",
    "roomTypes": [
      { "sharing": "Single", "price": 12000 },
      { "sharing": "Double", "price": 8000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Geyser"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No smoking", "Quiet hours after 9 PM"],
    "otherFacilities": ["Cultural Programs", "Common Area"],
    "ratings": 4.7,
    "ratingObj": [
      {
        "name": "Jaspreet",
        "date": "16/1/2025",
        "comment": "Amazing location near Golden Temple."
      }
    ],
    "laundry": ["In-house Laundry"],
    "foodPreparation": {
      "cookedBy": "Chef",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water"
    }
  },
  {
    "location": "Amritsar",
    "type": "hostel",
    "name": "Amrit Stay Hostel",
    "image": "AmritStayHostelAmritsar.jpg",
    "subLocation": "Mall Road",
    "roomTypes": [
      { "sharing": "Single", "price": 10000 },
      { "sharing": "Triple", "price": 6000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Hot Water"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No pets allowed", "No loud music after 10 PM"],
    "otherFacilities": ["Garden", "Library"],
    "ratings": 4.2,
    "ratingObj": [
      {
        "name": "Karan",
        "date": "18/1/2025",
        "comment": "Great value for money."
      }
    ],
    "laundry": ["Shared Laundry"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Lunch"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Amritsar",
    "type": "pg",
    "name": "Golden Comfort PG",
    "image": "GoldenComfortPGAmritsar.jpg",
    "subLocation": "Guru Bazar",
    "roomTypes": [
      { "sharing": "Single", "price": 9500 },
      { "sharing": "Double", "price": 7000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Geyser"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No smoking", "No pets allowed"],
    "otherFacilities": ["CCTV", "Common Room"],
    "ratings": 4.3,
    "ratingObj": [
      {
        "name": "Simran",
        "date": "10/1/2025",
        "comment": "Good budget-friendly PG."
      }
    ],
    "laundry": ["In-house Laundry"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water"
    }
  },
  {
    "location": "Amritsar",
    "type": "pg",
    "name": "Sikh Heritage PG",
    "image": "SikhHeritagePGAmritsar.jpg",
    "subLocation": "Town Hall",
    "roomTypes": [
      { "sharing": "Single", "price": 8500 },
      { "sharing": "Double", "price": 6000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Fan", "Geyser"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No loud music", "No smoking inside"],
    "otherFacilities": ["Library", "CCTV Surveillance"],
    "ratings": 4.0,
    "ratingObj": [
      {
        "name": "Ravneet",
        "date": "5/1/2025",
        "comment": "Peaceful and clean place."
      }
    ],
    "laundry": ["Laundry Service"],
    "foodPreparation": {
      "cookedBy": "Male Staff",
      "meals": ["Breakfast", "Lunch"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Ahmedabad",
    "type": "hostel",
    "name": "City Comfort Hostel",
    "image": "CityComfortHostelAhmedabad.jpg",
    "subLocation": "Sarkhej",
    "roomTypes": [
      { "sharing": "Single", "price": 13000 },
      { "sharing": "Double", "price": 9000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Geyser"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No smoking", "Quiet hours after 9 PM"],
    "otherFacilities": ["Common Room", "CCTV Surveillance"],
    "ratings": 4.4,
    "ratingObj": [
      {
        "name": "Manish",
        "date": "17/1/2025",
        "comment": "Nice and peaceful stay."
      }
    ],
    "laundry": ["In-house Laundry"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Lunch"],
      "water": "RO Water"
    }
  },
  {
    "location": "Ahmedabad",
    "type": "hostel",
    "name": "Ahmedabad Backpackers Hostel",
    "image": "AhmedabadBackpackersHostel.jpg",
    "subLocation": "Navrangpura",
    "roomTypes": [
      { "sharing": "Single", "price": 12000 },
      { "sharing": "Triple", "price": 7000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Fan", "Geyser"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No pets allowed", "No loud music"],
    "otherFacilities": ["Terrace Garden", "Library"],
    "ratings": 4.2,
    "ratingObj": [
      {
        "name": "Pooja",
        "date": "15/1/2025",
        "comment": "A great place to meet other travelers."
      }
    ],
    "laundry": ["Shared Laundry"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Dinner"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Ahmedabad",
    "type": "pg",
    "name": "Silver Line PG",
    "image": "SilverLinePGAhmedabad.jpg",
    "subLocation": "Ellis Bridge",
    "roomTypes": [
      { "sharing": "Single", "price": 10000 },
      { "sharing": "Double", "price": 7500 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Geyser"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No smoking", "No pets allowed"],
    "otherFacilities": ["Security Guard", "CCTV"],
    "ratings": 4.3,
    "ratingObj": [
      {
        "name": "Alok",
        "date": "12/1/2025",
        "comment": "Perfect for students and working professionals."
      }
    ],
    "laundry": ["Laundry Service"],
    "foodPreparation": {
      "cookedBy": "Male Staff",
      "meals": ["Breakfast", "Lunch"],
      "water": "RO Water"
    }
  },
  {
    "location": "Ahmedabad",
    "type": "pg",
    "name": "Comfort Stay PG",
    "image": "ComfortStayPGAhmedabad.jpg",
    "subLocation": "Bopal",
    "roomTypes": [
      { "sharing": "Single", "price": 12000 },
      { "sharing": "Triple", "price": 8500 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Geyser"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No pets allowed", "No loud music"],
    "otherFacilities": ["Parking", "CCTV Surveillance"],
    "ratings": 4.0,
    "ratingObj": [
      {
        "name": "Snehal",
        "date": "5/1/2025",
        "comment": "Affordable and comfortable stay."
      }
    ],
    "laundry": ["Laundry on Request"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Lunch"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Chandigarh",
    "type": "hostel",
    "name": "Chandigarh Backpackers Hostel",
    "image": "ChandigarhBackpackersHostel.jpg",
    "subLocation": "Sector 22",
    "roomTypes": [
      { "sharing": "Single", "price": 12000 },
      { "sharing": "Double", "price": 8500 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Geyser"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No pets allowed", "No loud music after 10 PM"],
    "otherFacilities": ["Library", "Common Room"],
    "ratings": 4.5,
    "ratingObj": [
      {
        "name": "Raj",
        "date": "10/1/2025",
        "comment": "Great location and friendly atmosphere."
      }
    ],
    "laundry": ["In-house Laundry"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water"
    }
  },
  {
    "location": "Chandigarh",
    "type": "hostel",
    "name": "City View Hostel",
    "image": "CityViewHostelChandigarh.jpg",
    "subLocation": "Sector 35",
    "roomTypes": [
      { "sharing": "Single", "price": 11000 },
      { "sharing": "Triple", "price": 7000 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Fan", "Geyser"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No pets allowed", "Quiet hours after 9 PM"],
    "otherFacilities": ["Garden", "Common Area"],
    "ratings": 4.3,
    "ratingObj": [
      {
        "name": "Nikita",
        "date": "12/1/2025",
        "comment": "Affordable and peaceful environment."
      }
    ],
    "laundry": ["Shared Laundry"],
    "foodPreparation": {
      "cookedBy": "Male Staff",
      "meals": ["Breakfast", "Lunch"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Chandigarh",
    "type": "pg",
    "name": "Chandigarh Comfort PG",
    "image": "ChandigarhComfortPG.jpg",
    "subLocation": "Sector 44",
    "roomTypes": [
      { "sharing": "Single", "price": 9500 },
      { "sharing": "Double", "price": 7500 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Geyser"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No smoking", "No loud music"],
    "otherFacilities": ["CCTV", "Library"],
    "ratings": 4.4,
    "ratingObj": [
      {
        "name": "Amit",
        "date": "16/1/2025",
        "comment": "Clean and safe PG for students."
      }
    ],
    "laundry": ["In-house Laundry"],
    "foodPreparation": {
      "cookedBy": "Male Staff",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water"
    }
  },
  {
    "location": "Chandigarh",
    "type": "pg",
    "name": "Comfort Stay PG",
    "image": "ComfortStayPGChandigarh.jpg",
    "subLocation": "Sector 25",
    "roomTypes": [
      { "sharing": "Single", "price": 10500 },
      { "sharing": "Double", "price": 8000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Geyser"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No pets allowed", "Quiet hours after 10 PM"],
    "otherFacilities": ["Parking", "CCTV"],
    "ratings": 4.2,
    "ratingObj": [
      {
        "name": "Ravi",
        "date": "20/1/2025",
        "comment": "Nice and quiet place for professionals."
      }
    ],
    "laundry": ["Laundry Service"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Lunch"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Coimbatore",
    "type": "hostel",
    "name": "Coimbatore Backpackers Hostel",
    "image": "CoimbatoreBackpackersHostel.jpg",
    "subLocation": "Race Course",
    "roomTypes": [
      { "sharing": "Single", "price": 11500 },
      { "sharing": "Double", "price": 8000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Geyser"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No smoking", "Quiet hours after 10 PM"],
    "otherFacilities": ["Common Room", "Library"],
    "ratings": 4.6,
    "ratingObj": [
      {
        "name": "Suresh",
        "date": "5/1/2025",
        "comment": "Amazing place to stay in Coimbatore."
      }
    ],
    "laundry": ["In-house Laundry"],
    "foodPreparation": {
      "cookedBy": "Chef",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water"
    }
  },
  {
    "location": "Coimbatore",
    "type": "hostel",
    "name": "Coimbatore Central Hostel",
    "image": "CoimbatoreCentralHostel.jpg",
    "subLocation": "RS Puram",
    "roomTypes": [
      { "sharing": "Single", "price": 10000 },
      { "sharing": "Triple", "price": 6500 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Cooler", "Geyser"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No pets allowed", "No alcohol allowed"],
    "otherFacilities": ["Terrace Garden", "CCTV Surveillance"],
    "ratings": 4.3,
    "ratingObj": [
      {
        "name": "Vijay",
        "date": "15/1/2025",
        "comment": "Great location and good staff."
      }
    ],
    "laundry": ["Shared Laundry"],
    "foodPreparation": {
      "cookedBy": "Male Staff",
      "meals": ["Breakfast", "Lunch"],
      "water": "Filtered Water"
    }
  },
  {
    "location": "Coimbatore",
    "type": "pg",
    "name": "Coimbatore Comfort PG",
    "image": "CoimbatoreComfortPG.jpg",
    "subLocation": "Saibaba Colony",
    "roomTypes": [
      { "sharing": "Single", "price": 9000 },
      { "sharing": "Double", "price": 6500 }
    ],
    "foodType": ["Vegetarian"],
    "roomAmenities": ["WiFi", "Fan", "Geyser"],
    "houseKeeping": ["Daily Cleaning"],
    "hostelRules": ["No smoking", "No pets allowed"],
    "otherFacilities": ["CCTV", "Library"],
    "ratings": 4.0,
    "ratingObj": [
      {
        "name": "Deepak",
        "date": "18/1/2025",
        "comment": "Decent PG with all basic amenities."
      }
    ],
    "laundry": ["Laundry Service"],
    "foodPreparation": {
      "cookedBy": "Male Staff",
      "meals": ["Breakfast", "Dinner"],
      "water": "RO Water"
    }
  },
  {
    "location": "Coimbatore",
    "type": "pg",
    "name": "Elite PG",
    "image": "ElitePGCoimbatore.jpg",
    "subLocation": "Kalapathar",
    "roomTypes": [
      { "sharing": "Single", "price": 11000 },
      { "sharing": "Double", "price": 8000 }
    ],
    "foodType": ["Vegetarian", "Non-Vegetarian"],
    "roomAmenities": ["WiFi", "AC", "Geyser"],
    "houseKeeping": ["Weekly Cleaning"],
    "hostelRules": ["No smoking", "Quiet hours after 10 PM"],
    "otherFacilities": ["Common Room", "Parking"],
    "ratings": 4.2,
    "ratingObj": [
      {
        "name": "Sridhar",
        "date": "8/1/2025",
        "comment": "Very comfortable and clean place."
      }
    ],
    "laundry": ["In-house Laundry"],
    "foodPreparation": {
      "cookedBy": "Staff",
      "meals": ["Breakfast", "Lunch"],
      "water": "Filtered Water"
    }
  }                        
]
export const sharingTypes = [
  {label: 'Single Sharing', value: 'single'},
  {label: 'Double Sharing', value: 'double'},
  {label: 'Triple Sharing', value: 'triple'},
  {label: 'Four Sharing', value: 'quadrant'},
];

export const hostelTypes = [
  {label: 'Mens Hostel', value: 'mens'},
  {label: 'Womens Hostel', value: 'womens'},
  {label: 'Co-living', value: 'colive'},
];

export const priceRanges = [
  {label: '5,000 - 7,000', value: '7000'},
  {label: '7,000 - 10,000', value: '10000'},
  {label: '10,000 - 13,000', value: '13000'},
  {label: 'Above 13,000', value: '13001'},
];