"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '../../../../components/Header';
import Link from 'next/link';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Room data (in a real app, this would come from an API or database)
const roomsData = {
  lusaka: [
    {
      id: 1,
      title: "The Ibex Hill Oasis",
      price: "K2000",
      location: "Lusaka - Ibex Hill",
      status: "available",
      description: "Spacious executive suite with separate living area, premium furnishings, and stunning city views. Perfect for business executives and diplomatic guests.",
      longDescription: "Experience the epitome of luxury in our flagship Ibex Hill Oasis suite. This meticulously designed space offers the perfect blend of comfort and functionality for discerning travelers. The separate living area provides ample space for relaxation or informal meetings, while the premium furnishings ensure your utmost comfort. Located just minutes from the US Embassy, this suite is particularly popular with diplomatic guests seeking quality accommodation in a secure environment. The large windows offer stunning views of the surrounding area, filling the space with natural light throughout the day.",
      images: ["/Pic1.jpg", "/Pic2.jpg", "/Pic3.jpg"],
      features: ["King Size Bed", "Separate Living Area", "Garden Views", "Work Desk", "Fully Equipped Kitchen"],
      amenities: ["High-Speed WiFi", "Daily Housekeeping", "24/7 Security", "Backup Power", "Parking", "Airport Transfers", "Laundry Service"],
      capacity: "2 Guests",
      size: "65 sqm",
      bedrooms: 1,
      bathrooms: 1
    },
    // Add more rooms as in your existing data
  ],
  kitwe: [
    // Kitwe rooms data
  ]
};

export default function RoomDetailsPage() {
  const params = useParams();
  const location = params.location;
  const roomId = parseInt(params.roomId);
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Simulate fetching room data
    const locationRooms = roomsData[location] || [];
    const foundRoom = locationRooms.find(r => r.id === roomId);
    
    // In a real app, you'd fetch this data from an API
    setTimeout(() => {
      setRoom(foundRoom);
      setLoading(false);
    }, 500);
  }, [location, roomId]);

  const nextImage = () => {
    if (!room) return;
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    if (!room) return;
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Header />
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading room details...</p>
        </div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto py-20 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Room Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            We couldn't find the room you're looking for.
          </p>
          <Link href={`/listings/${location}`}>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition-colors">
              View All {location.charAt(0).toUpperCase() + location.slice(1)} Rooms
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/listings" className="hover:text-amber-600 transition-colors">Listings</Link>
            <span className="mx-2">›</span>
            <Link href={`/listings/${location}`} className="hover:text-amber-600 transition-colors">
              {location.charAt(0).toUpperCase() + location.slice(1)}
            </Link>
            <span className="mx-2">›</span>
            <span className="text-amber-600 font-medium">{room.title}</span>
          </div>
        </div>
      </div>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-7xl mx-auto py-12 px-4"
      >
        {/* Room Title and Status */}
        <motion.div variants={fadeIn} className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">{room.title}</h1>
            <p className="text-xl text-amber-600">{room.location}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide ${
              room.status === 'available' 
                ? 'bg-green-500 text-white' 
                : 'bg-red-500 text-white'
            }`}>
              {room.status}
            </span>
          </div>
        </motion.div>
        
        {/* Image Gallery */}
        <motion.div variants={fadeIn} className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative h-[50vh] md:h-[60vh]">
            <Image
              src={room.images[currentImageIndex]}
              alt={`${room.title} - Image ${currentImageIndex + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority
              className="rounded-3xl"
            />
            
            {/* Image Navigation */}
            {room.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
                >
                  <span className="text-2xl">‹</span>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300"
                >
                  <span className="text-2xl">›</span>
                </button>
                
                {/* Image Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                  {room.images.map((_, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={() => setCurrentImageIndex(imgIndex)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        imgIndex === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>
        
        {/* Room Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div variants={fadeIn} className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About This Room</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {room.longDescription || room.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-amber-500 text-3xl mb-2">👥</div>
                  <div className="font-semibold">{room.capacity}</div>
                  <div className="text-sm text-gray-500">Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-amber-500 text-3xl mb-2">📏</div>
                  <div className="font-semibold">{room.size}</div>
                  <div className="text-sm text-gray-500">Room Size</div>
                </div>
                <div className="text-center">
                  <div className="text-amber-500 text-3xl mb-2">🛏️</div>
                  <div className="font-semibold">{room.bedrooms || 1}</div>
                  <div className="text-sm text-gray-500">Bedroom(s)</div>
                </div>
                <div className="text-center">
                  <div className="text-amber-500 text-3xl mb-2">🚿</div>
                  <div className="font-semibold">{room.bathrooms || 1}</div>
                  <div className="text-sm text-gray-500">Bathroom(s)</div>
                </div>
              </div>
            </div>
            
            {/* Features */}
            <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Room Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Amenities */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Included Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(room.amenities || []).map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Sidebar */}
          <motion.div variants={fadeIn} className="lg:col-span-1">
            {/* Booking Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl sticky top-8">
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-800">{room.price}<span className="text-lg text-gray-600">/day</span></div>
                <div className="w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500 mt-2 rounded-full"></div>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Room Type</span>
                  <span className="font-semibold">{room.title}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Location</span>
                  <span className="font-semibold">{room.location}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Capacity</span>
                  <span className="font-semibold">{room.capacity}</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-gray-600">Size</span>
                  <span className="font-semibold">{room.size}</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xl py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-4">
                Book Now
              </button>
              
              <button className="w-full border-2 border-amber-500 text-amber-500 font-bold text-xl py-4 rounded-xl hover:bg-amber-50 transition-all duration-300">
                Check Availability
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}