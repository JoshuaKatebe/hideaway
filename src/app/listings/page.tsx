"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
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
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" }
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

const ListingsPage = () => {
  const heroRef = useRef(null);
  const locationsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const locationsInView = useInView(locationsRef, { once: true });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Header/>
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80 z-10"></div>
          <motion.div
            initial={{ scale: 1.1, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            {/* You can replace this with your actual background image */}
            <div className="w-full h-full bg-gradient-to-br from-amber-900/30 via-orange-900/30 to-red-900/30"></div>
          </motion.div>
        </div>
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Choose Your <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Location</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="text-xl md:text-3xl mb-12 max-w-4xl leading-relaxed font-light"
          >
            Discover premium serviced apartments in Zambia's most strategic business locations
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-6 text-lg"
          >
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-amber-400 mr-2">🏢</span>
              <span>15 Premium Rooms</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-blue-400 mr-2">📍</span>
              <span>2 Prime Locations</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-green-400 mr-2">⭐</span>
              <span>5+ Years Excellence</span>
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

      {/* Location Selection Section */}
      <section ref={locationsRef} className="py-24 px-4 bg-gradient-to-br from-white to-gray-50 text-gray-800">
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
              Select Your Destination
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Each location offers unique advantages tailored to your specific needs
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={locationsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Lusaka Card */}
            <motion.div
              variants={slideInLeft}
              className="group relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-amber-300/20 to-orange-300/20 rounded-full translate-y-24 -translate-x-24"></div>
              
              <div className="relative z-10 p-10">
                {/* Location Header */}
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-4xl">L</span>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-800 mb-2">Lusaka</h3>
                    <p className="text-amber-600 font-semibold text-lg">Ibex Hill - Embassy District</p>
                  </div>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl group/img">
                    <div className="w-full h-48 flex items-center justify-center">
                      <Image
                        src="/Pic24.jpg"
                        alt="Lusaka Interior"
                        width={500} 
                        height={300} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl group/img">
                    <div className="w-full h-48 flex items-center justify-center">
                      <Image
                        src="/Background3.jpg"
                        alt="Embassy View"
                        width={500}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
                    <span className="text-amber-600 text-2xl mr-4">🏛️</span>
                    <div>
                      <p className="font-semibold text-gray-800">US Embassy Access</p>
                      <p className="text-gray-600 text-sm">Only 3 minutes drive to embassy district</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
                    <span className="text-amber-600 text-2xl mr-4">✈️</span>
                    <div>
                      <p className="font-semibold text-gray-800">Airport Shuttle</p>
                      <p className="text-gray-600 text-sm">24/7 transportation service available</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
                    <span className="text-amber-600 text-2xl mr-4">🏢</span>
                    <div>
                      <p className="font-semibold text-gray-800">Business Centers</p>
                      <p className="text-gray-600 text-sm">Minutes to Town Centre and Chilenje House</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 text-white mb-8">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-2xl">9 Rooms</h4>
                      <p className="opacity-90">Premium Accommodations</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold">★★★★★</p>
                      <p className="text-sm opacity-90">Embassy Preferred</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href="/listings/lusaka" className="block">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xl py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.01]"
                  >
                    Explore Lusaka Apartments →
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Kitwe Card */}
            <motion.div
              variants={slideInRight}
              className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full -translate-y-32 -translate-x-32"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-blue-300/20 to-indigo-300/20 rounded-full translate-y-24 translate-x-24"></div>
              
              <div className="relative z-10 p-10">
                {/* Location Header */}
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-4xl">K</span>
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-gray-800 mb-2">Kitwe</h3>
                    <p className="text-blue-600 font-semibold text-lg">Central Business District</p>
                  </div>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl group/img">
                    <div className="w-full h-48 flex items-center justify-center">
                      <Image
                        src="/Pic10.jpg"
                        alt="Kitwe Interior"
                        width={500} 
                        height={300} 
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="relative overflow-hidden rounded-2xl shadow-xl group/img">
                    <div className="w-full h-48 flex items-center justify-center">
                      <Image
                        src="/Pic13.jpg"
                        alt="Embassy View"
                        width={500}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
                    <span className="text-blue-600 text-2xl mr-4">⛏️</span>
                    <div>
                      <p className="font-semibold text-gray-800">Mining Hub</p>
                      <p className="text-gray-600 text-sm">Center of Zambia's copper mining industry</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
                    <span className="text-blue-600 text-2xl mr-4">🏭</span>
                    <div>
                      <p className="font-semibold text-gray-800">Corporate Access</p>
                      <p className="text-gray-600 text-sm">Close to major mining corporations</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md">
                    <span className="text-blue-600 text-2xl mr-4">🔒</span>
                    <div>
                      <p className="font-semibold text-gray-800">Enhanced Security</p>
                      <p className="text-gray-600 text-sm">24/7 professional security services</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-6 text-white mb-8">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-bold text-2xl">6 Rooms</h4>
                      <p className="opacity-90">Industrial District</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold">★★★★★</p>
                      <p className="text-sm opacity-90">Corporate Preferred</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link href="/listings/kitwe" className="block">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-xl py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.01]"
                  >
                    Explore Kitwe Apartments →
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Why Choose Hideaway?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the difference that 5+ years of hospitality excellence makes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🚫", title: "Reservations Only", desc: "No walk-ins for enhanced security" },
              { icon: "🔒", title: "Private Yards", desc: "Secure outdoor spaces with 24/7 security" },
              { icon: "🏢", title: "Corporate Ready", desc: "Professional workspaces for business" },
              { icon: "⭐", title: "Proven Excellence", desc: "5+ years of satisfied guests" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl p-6 text-center shadow-xl"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Book Your Stay?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Contact us today to secure your premium accommodation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 font-bold text-lg px-8 py-4 rounded-full shadow-2xl"
              >
                📞 +260768239726
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                📧 info@hideawayzm.com
              </motion.button>
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
};

export default ListingsPage;