"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Header from "../../components/Header";

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
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
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

export default function ServicesPage() {
  const heroRef = useRef(null);
  const accommodationRef = useRef(null);
  const amenitiesRef = useRef(null);
  const locationsRef = useRef(null);
  const specialFeaturesRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const accommodationInView = useInView(accommodationRef, { once: true });
  const amenitiesInView = useInView(amenitiesRef, { once: true });
  const locationsInView = useInView(locationsRef, { once: true });
  const specialFeaturesInView = useInView(specialFeaturesRef, { once: true });

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
            src="/Background4.jpg"
            alt="Hideaway Apartments Premium Services"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
              Premium <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="text-xl md:text-3xl mb-12 max-w-4xl leading-relaxed font-light"
          >
            Exceptional hospitality services across <span className="text-amber-400 font-semibold">Lusaka</span> and <span className="text-blue-400 font-semibold">Kitwe</span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-6 text-lg"
          >
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-amber-400 mr-2">★</span>
              <span>5+ Years Experience</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-green-400 mr-2">🏢</span>
              <span>Corporate Housing</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-blue-400 mr-2">🏛️</span>
              <span>Embassy Preferred</span>
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

      {/* Accommodation Services */}
      <section ref={accommodationRef} className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={accommodationInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
            >
              Accommodation Excellence
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Fully furnished apartments designed for comfort, privacy, and productivity
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={accommodationInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
          >
            <motion.div variants={slideInLeft} className="space-y-8">
              <h3 className="text-4xl font-bold text-gray-800 mb-6">Fully Furnished Living Spaces</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                  <Image
                    src="/Pic24.jpg"
                    alt="Luxury living room at Hideaway Apartments"
                    width={400}
                    height={300}
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Premium Living Room</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                  <Image
                    src="/Pic23.jpg"
                    alt="Modern kitchen facilities"
                    width={400}
                    height={300}
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Full Kitchenette</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-amber-500">
                  <h4 className="font-bold text-gray-800 mb-2">Living Areas</h4>
                  <p className="text-gray-600 text-sm">Separate sitting areas with modern furniture and entertainment systems</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-800 mb-2">Kitchenettes</h4>
                  <p className="text-gray-600 text-sm">Full-sized refrigerators, ovens, and complete cooking facilities</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-gray-800 mb-2">Work Spaces</h4>
                  <p className="text-gray-600 text-sm">Dedicated desk areas perfect for remote work and business</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-gray-800 mb-2">Privacy</h4>
                  <p className="text-gray-600 text-sm">Individual room decoration and private entrance access</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideInRight} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                    <Image
                      src="/Pic11.jpg"
                      alt="Comfortable bedroom"
                      width={300}
                      height={200}
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                    <Image
                      src="/Pic12.jpg"
                      alt="Modern bathroom facilities"
                      width={300}
                      height={250}
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                    <Image
                      src="/Pic13.jpg"
                      alt="Dining area setup"
                      width={300}
                      height={250}
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                    <Image
                      src="/Pic14.jpg"
                      alt="Additional amenities"
                      width={300}
                      height={200}
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold">15</p>
                  <p className="text-sm opacity-90">Total Rooms</p>
                  <p className="text-xs opacity-75">Lusaka: 9 | Kitwe: 6</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Amenities & Services */}
      <section ref={amenitiesRef} className="py-24 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={amenitiesInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Complete Amenities
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              Everything you need for a seamless extended stay experience
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={amenitiesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                icon: "🧹",
                title: "Professional Housekeeping",
                description: "Regular cleaning services to maintain pristine living conditions throughout your stay",
                color: "from-blue-500 to-blue-600",
                image: "/Pic7.jpg"
              },
              {
                icon: "🧳",
                title: "Secure Luggage Storage",
                description: "Safe and convenient storage for your belongings during check-in, check-out, or extended stays",
                color: "from-green-500 to-green-600",
                image: "/Pic11.jpg"
              },
              {
                icon: "👕",
                title: "Laundry & Dry Cleaning",
                description: "Professional laundry services and dry cleaning facilities available on-site",
                color: "from-purple-500 to-purple-600",
                image: "/Pic8.jpg"
              },
              {
                icon: "📡",
                title: "High-Speed Wi-Fi",
                description: "Complimentary high-speed internet access perfect for remote work and video conferencing",
                color: "from-orange-500 to-orange-600",
                image: "/Pic19.jpg"
              },
              {
                icon: "📺",
                title: "Premium DStv Entertainment",
                description: "Full DStv package with international channels for your entertainment needs",
                color: "from-pink-500 to-pink-600",
                image: "/Pic18.jpg"
              },
              {
                icon: "⚡",
                title: "Backup Solar Power System",
                description: "Reliable backup solar inverter system ensures uninterrupted power during outages",
                color: "from-yellow-500 to-yellow-600",
                image: "/Pic5.jpg"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-amber-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location-Specific Services */}
      <section ref={locationsRef} className="py-24 px-4 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={locationsInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
            >
              Location Advantages
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Strategic positioning in Zambia's key business centers with location-specific benefits
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={locationsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Lusaka Location */}
            <motion.div
              variants={slideInLeft}
              className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-10 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mr-6">
                    <span className="text-white font-bold text-3xl">L</span>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-800">Lusaka Branch</h3>
                    <p className="text-amber-600 font-semibold text-lg">Ibex Hill - Embassy District</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="relative overflow-hidden rounded-xl shadow-lg group">
                    <Image
                      src="/Background5.jpg"
                      alt="Lusaka location exterior"
                      width={300}
                      height={200}
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg group">
                    <Image
                      src="/Pic10.jpg"
                      alt="Lusaka interior view"
                      width={300}
                      height={200}
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center bg-white rounded-xl p-4 shadow-md">
                    <span className="text-amber-600 text-2xl mr-4">🏛️</span>
                    <div>
                      <p className="font-semibold text-gray-800">US Embassy Access</p>
                      <p className="text-gray-600 text-sm">Only 3 minutes drive - perfect for embassy appointments</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white rounded-xl p-4 shadow-md">
                    <span className="text-amber-600 text-2xl mr-4">✈️</span>
                    <div>
                      <p className="font-semibold text-gray-800">24/7 Airport Shuttle</p>
                      <p className="text-gray-600 text-sm">Convenient transportation to Kenneth Kaunda International Airport</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white rounded-xl p-4 shadow-md">
                    <span className="text-amber-600 text-2xl mr-4">🏢</span>
                    <div>
                      <p className="font-semibold text-gray-800">Business District</p>
                      <p className="text-gray-600 text-sm">4 minutes to Town Centre Market, 9 minutes to Chilenje House</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-xl mb-2">9 Premium Rooms Available</h4>
                  <p className="opacity-90">Individually decorated with full amenities and private access</p>
                </div>
              </div>
            </motion.div>

            {/* Kitwe Location */}
            <motion.div
              variants={slideInRight}
              className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-10 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full -translate-y-16 -translate-x-16 opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-6">
                    <span className="text-white font-bold text-3xl">K</span>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-800">Kitwe Branch</h3>
                    <p className="text-blue-600 font-semibold text-lg">Central Business District</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="relative overflow-hidden rounded-xl shadow-lg group">
                    <Image
                      src="/Pic13.jpg"
                      alt="Kitwe location exterior"
                      width={300}
                      height={200}
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg group">
                    <Image
                      src="/Pic19.jpg"
                      alt="Kitwe interior view"
                      width={300}
                      height={200}
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center bg-white rounded-xl p-4 shadow-md">
                    <span className="text-blue-600 text-2xl mr-4">⛏️</span>
                    <div>
                      <p className="font-semibold text-gray-800">Mining Hub Access</p>
                      <p className="text-gray-600 text-sm">Strategic location in Zambia's copper mining capital</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white rounded-xl p-4 shadow-md">
                    <span className="text-blue-600 text-2xl mr-4">🏭</span>
                    <div>
                      <p className="font-semibold text-gray-800">Corporate Proximity</p>
                      <p className="text-gray-600 text-sm">Close to major mining corporations and industrial facilities</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white rounded-xl p-4 shadow-md">
                    <span className="text-blue-600 text-2xl mr-4">🔒</span>
                    <div>
                      <p className="font-semibold text-gray-800">Professional Security</p>
                      <p className="text-gray-600 text-sm">24/7 security with experienced professional guards</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-6 text-white">
                  <h4 className="font-bold text-xl mb-2">6 Premium Rooms Available</h4>
                  <p className="opacity-90">Same luxury standards with industrial district convenience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Special Features */}
      <section ref={specialFeaturesRef} className="py-24 px-4 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={specialFeaturesInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Exclusive Features
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              What sets Hideaway Apartments apart from the rest
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={specialFeaturesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚫</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">No Walk-ins</h3>
              <p className="opacity-90">Strictly reservations only for enhanced security and service quality</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Private Yards</h3>
              <p className="opacity-90">Well-maintained private outdoor spaces with professional security</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Corporate Ready</h3>
              <p className="opacity-90">Professional workspaces perfect for business travelers and remote workers</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">5+ Years Experience</h3>
              <p className="opacity-90">Proven expertise in hospitality with thousands of satisfied guests</p>
            </motion.div>
          </motion.div>

          {/* Additional Features Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={specialFeaturesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-3xl p-8 shadow-2xl"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <Image
                  src="/Background3.jpg"
                  alt="Embassy district location"
                  width={400}
                  height={250}
                  style={{ objectFit: "cover" }}
                  className="hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-lg">Embassy District</p>
                  <p className="text-sm opacity-90">Strategic Location</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Prime Location Access</h3>
              <p className="text-gray-300 leading-relaxed">
                Located in the heart of Lusaka's diplomatic district, offering unparalleled access to embassies, 
                business centers, and key government facilities.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-3xl p-8 shadow-2xl"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <Image
                  src="/Pic4.jpg"
                  alt="Professional security"
                  width={400}
                  height={250}
                  style={{ objectFit: "cover" }}
                  className="hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-lg">24/7 Security</p>
                  <p className="text-sm opacity-90">Professional Guards</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enhanced Security</h3>
              <p className="text-gray-300 leading-relaxed">
                Professional security personnel ensure your safety and peace of mind throughout your stay, 
                with controlled access and comprehensive property monitoring.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-3xl p-8 shadow-2xl"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <Image
                  src="/Pic8.jpg"
                  alt="Modern amenities"
                  width={400}
                  height={250}
                  style={{ objectFit: "cover" }}
                  className="hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-lg">Modern Amenities</p>
                  <p className="text-sm opacity-90">Complete Facilities</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Premium Amenities</h3>
              <p className="text-gray-300 leading-relaxed">
                Every room features modern amenities including backup solar power systems, high-speed internet, 
                and premium entertainment systems for your comfort.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Experience Premium Hospitality?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Join thousands of satisfied guests who have made Hideaway Apartments their home away from home
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Book Your Stay Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                Contact Us Today
              </motion.button>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="font-bold text-2xl mb-2">Lusaka</h3>
                <p className="opacity-90">Ibex Hill - Embassy District</p>
                <p className="text-sm opacity-75 mt-2">9 Premium Rooms Available</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="font-bold text-2xl mb-2">Kitwe</h3>
                <p className="opacity-90">Central Business District</p>
                <p className="text-sm opacity-75 mt-2">6 Premium Rooms Available</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="font-bold text-2xl mb-2">Experience</h3>
                <p className="opacity-90">5+ Years of Excellence</p>
                <p className="text-sm opacity-75 mt-2">Reservations Only</p>
              </div>
            </div>
          </motion.div>
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
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#overview" className="hover:text-amber-400 transition-colors">Our Locations</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Reservations</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Contact</a></li>
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
            <p>&copy; 2025 Hideaway Apartments. All rights reserved. | 7+ Years of Excellence in Hospitality</p>
          </div>
        </div>
      </footer>
    </div>
  );
}