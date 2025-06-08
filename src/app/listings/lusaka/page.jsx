"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import Header from "../../../components/Header";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const floatAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Room data
const rooms = [
  {
    id: 1,
    title: "The Ibex Hill Oasis",
    price: "K2000",
    location: "Lusaka - Ibex Hill",
    status: "available",
    description: "Spacious executive suite with separate living area, premium furnishings, and stunning city views. Perfect for business executives and diplomatic guests.",
    images: ["/Pic1.jpg", "/Pic2.jpg", "/Pic3.jpg"],
    features: ["King Size Bed", "Separate Living Area", "Garden Views", "Work Desk", "Fully Equipped Kitchen"],
    capacity: "2 Guests",
    size: "65 sqm"
  },
  {
    id: 2,
    title: "Urban Retreat",
    price: "K1200",
    location: "Lusaka - Ibex Hill",
    status: "available",
    description: "Modern business-focused accommodation with dedicated workspace, high-speed internet, and premium amenities ideal for corporate travelers.",
    images: ["/Pic4.jpg", "/Pic5.jpg", "/Pic6.jpg"],
    features: ["Queen Bed", "Business Desk", "High-Speed WiFi", "Mini Kitchen"],
    capacity: "2 Guests",
    size: "45 sqm"
  },
  {
    id: 3,
    title: "The Cozy Nook",
    price: "K600",
    location: "Lusaka - Ibex Hill",
    status: "unavailable",
    description: "Comfortable and well-appointed room with all essential amenities, perfect for budget-conscious travelers seeking quality accommodation.",
    images: ["/Pic7.jpg", "/Pic8.jpg", "/Pic9.jpg"],
    features: ["Double Bed", "Kitchenette", "Free WiFi", "DStv"],
    capacity: "2 Guests",
    size: "35 sqm"
  },
  {
    id: 4,
    title: "Diplomatic Residence",
    price: "K1800",
    location: "Lusaka - Ibex Hill",
    status: "available",
    description: "Elegant and secure accommodation tailored for embassy staff and diplomatic visitors, offering privacy and premium services.",
    images: ["/Pic10.jpg", "/Pic11.jpg", "/Pic12.jpg"],
    features: ["King Size Bed", "Private Balcony", "Enhanced Security", "Dedicated Parking"],
    capacity: "2 Guests",
    size: "70 sqm"
  },
  {
    id: 5,
    title: "The Garden Flat",
    price: "K950",
    location: "Lusaka - Ibex Hill",
    status: "available",
    description: "Charming ground-floor apartment with direct access to a lush private garden, perfect for relaxation and outdoor dining.",
    images: ["/Pic13.jpg", "/Pic14.jpg", "/Pic15.jpg"],
    features: ["Queen Bed", "Garden Access", "Outdoor Seating", "Bright Interiors"],
    capacity: "2 Guests",
    size: "50 sqm"
  },
  {
    id: 6,
    title: "Family Friendly Suite",
    price: "K1500",
    location: "Lusaka - Ibex Hill",
    status: "available",
    description: "Spacious suite designed to accommodate families, featuring extra sleeping space and child-friendly amenities.",
    images: ["/Pic16.jpg", "/Pic17.jpg", "/Pic18.jpg"],
    features: ["King Bed + Sofa Bed", "Kid's Play Area", "Extra Storage", "Kitchenette"],
    capacity: "4 Guests",
    size: "80 sqm"
  },
  {
    id: 7,
    title: "The Executive Studio",
    price: "K1000",
    location: "Lusaka - Ibex Hill",
    status: "unavailable",
    description: "Compact yet functional studio apartment with all the essentials for a comfortable and productive stay, ideal for solo travelers.",
    images: ["/Pic19.jpg", "/Pic20.jpg", "/Pic21.jpg"],
    features: ["Double Bed", "Workstation", "En-suite Bathroom", "Mini Fridge"],
    capacity: "1 Guest",
    size: "30 sqm"
  },
  {
    id: 8,
    title: "Business Traveler's Choice",
    price: "K1100",
    location: "Lusaka - Ibex Hill",
    status: "available",
    description: "Well-appointed room with a focus on the needs of business travelers, including a comfortable workspace and reliable internet.",
    images: ["/Pic22.jpg", "/Pic23.jpg", "/Pic24.jpg"],
    features: ["Queen Bed", "Ergonomic Chair", "High-Speed WiFi", "Coffee Maker"],
    capacity: "1 Guest",
    size: "40 sqm"
  },
  {
    id: 9,
    title: "The Budget Comfort",
    price: "K650",
    location: "Lusaka - Ibex Hill",
    status: "available",
    description: "Affordable and clean accommodation with all necessary amenities for a short stay.",
    images: ["/Pic1.jpg", "/Pic5.jpg", "/Pic10.jpg"], // Re-using images as needed
    features: ["Single Bed", "Basic Amenities", "Shared Kitchen Access"],
    capacity: "1 Guest",
    size: "25 sqm"
  }
];

// Room Card Component with Slideshow
function RoomCard({ room, index }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true });

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const handleCardClick = () => {
    // This will navigate to individual room page later
    console.log(`Navigate to room ${room.id}`);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={scaleIn}
      initial="hidden"
      animate={cardInView ? "visible" : "hidden"}
      whileHover={{ y: -10, scale: 1.02 }}
      onClick={handleCardClick}
      className="group bg-white rounded-3xl shadow-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:shadow-3xl"
    >
      {/* Image Slideshow */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={room.images[currentImageIndex]}
            alt={`${room.title} - Image ${currentImageIndex + 1}`}
            fill
            style={{ objectFit: "cover" }}
            className="group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Image Navigation */}
          {room.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                ›
              </button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {room.images.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(imgIndex);
                 }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      imgIndex === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide ${
            room.status === 'available' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {room.status}
          </span>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full">
            <span className="text-lg font-bold">{room.price}</span>
            <span className="text-sm opacity-90">/Day</span>
          </div>
        </div>
      </div>

      {/* Room Details */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">
              {room.title}
            </h3>
            <p className="text-amber-600 font-semibold text-lg">{room.location}</p>
          </div>
          <div className="text-right text-sm text-gray-600">
            <p>{room.capacity}</p>
            <p>{room.size}</p>
          </div>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          {room.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {room.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center text-sm text-gray-700">
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
              {feature}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex items-center justify-between">
          <div className="text-gray-500 text-sm">
            Click to view details
          </div>
          <motion.div
            whileHover={{ x: 5 }}
            className="text-amber-600 font-semibold flex items-center"
          >
            View Room
            <span className="ml-2 text-xl">→</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function RoomsPage() {
  const heroRef = useRef(null);
  const roomsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const roomsInView = useInView(roomsRef, { once: true });

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header/>
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="/Background2.jpg"
            alt="Hideaway Apartments Rooms"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-8xl font-bold mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Lusaka</span> Rooms
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="text-xl md:text-3xl mb-12 max-w-4xl leading-relaxed font-light"
          >
            Discover your perfect home away from home in <span className="text-amber-400 font-semibold">Lusaka</span> 
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-6 text-lg"
          >
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-green-400 mr-2">✓</span>
              <span>15 Premium Rooms</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-amber-400 mr-2">💰</span>
              <span>From K600/Day</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-blue-400 mr-2">📍</span>
              <span>2 Prime Locations</span>
            </div>
          </motion.div>
          
          <motion.div
            animate={floatAnimation}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-4 bg-white rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rooms Section */}
      <section ref={roomsRef} className="py-20 md:py-32 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={roomsInView ? "visible" : "hidden"}
            className="text-center mb-16 md:mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
            >
              Available Rooms
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Choose from our carefully curated selection of premium accommodations
            </motion.p>
          </motion.div>

          {/* Room Cards Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={roomsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12"
          >
            {rooms.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </motion.div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                More Rooms Coming Soon!
              </h3>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                We're constantly expanding our premium accommodation options. 
                Contact us for special requests or upcoming availability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-600 font-bold text-lg px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Check Availability
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What's Included
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Every room comes with our signature amenities and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "🏠", title: "Fully Furnished", desc: "Complete furnishing with modern amenities" },
              { icon: "🧹", title: "Housekeeping", desc: "Regular professional cleaning services" },
              { icon: "📡", title: "High-Speed WiFi", desc: "Complimentary fast internet access" },
              { icon: "🔒", title: "24/7 Security", desc: "Professional security and private access" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-400">Hideaway Apartments</h3>
              <p className="text-gray-300 leading-relaxed">
                Premium serviced apartments in Lusaka and Kitwe, specializing in corporate housing and embassy guest accommodation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Locations</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-amber-400 mr-2">📍</span>
                  Lusaka - Ibex Hill (9 Rooms)
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">📍</span>
                  Kitwe - CBD (6 Rooms)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📧 Email: info@hideawayzm.com</p>
                <p>📱 Phone: +260768239726</p>
                <p>🕒 Available 24/7 for reservations</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Hideaway Apartments. All rights reserved. | Reservations Only Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}