"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Header from "../components/Header";

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

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
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

export default function Home() {
  const overviewRef = useRef(null);
  const servicesRef = useRef(null);
  const locationsRef = useRef(null);
  
  const overviewInView = useInView(overviewRef, { once: true});
  const servicesInView = useInView(servicesRef, { once: true });
  const locationsInView = useInView(locationsRef, { once: true });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full"
      >
        <Header />
      </motion.div>

      <section className="relative w-full h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/Background1.jpg"
            alt="Hideaway Apartments - Luxury accommodation in Lusaka"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
        </motion.div>
        
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Welcome to <span className="text-gradient bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Hideaway</span> Apartments
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="text-lg md:text-2xl mb-8 max-w-3xl leading-relaxed font-light"
          >
            Premium serviced apartments for US Embassy guests, corporate travelers, and remote workers in Lusaka & Kitwe
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#overview">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Explore Our Locations
              </motion.button>
            </Link>
            <Link href="#services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Services
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Banner */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full bg-gradient-to-r from-gray-900 to-gray-800 py-8"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-white">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">🏢</span>
              </div>
              <p className="font-semibold">Corporate Housing</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">🏛️</span>
              </div>
              <p className="font-semibold">US Embassy Preferred</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">🔒</span>
              </div>
              <p className="font-semibold">24/7 Security</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl">📅</span>
              </div>
              <p className="font-semibold">Reservations Only</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <section id="overview" ref={overviewRef} className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={overviewInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
          >
            Discover Your Perfect Hideaway
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Located in peaceful Ibex Hill, just 3 minutes from the US Embassy, Hideaway Apartments is your premier choice for luxury serviced accommodation. With over 5 years of hospitality expertise, we specialize in providing fully furnished apartments with a home-like atmosphere.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={overviewInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={slideInLeft} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/Pic1.jpg"
                alt="Luxury apartment interior at Hideaway Apartments Lusaka"
                width={600}
                height={400}
                style={{ objectFit: "cover" }}
                className="hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-amber-600">9</p>
                <p className="text-sm text-gray-600">Luxury Rooms</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={slideInRight} className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
              Lusaka Location
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our flagship Lusaka property features 9 individually decorated rooms in the prestigious Ibex Hill area. Each apartment comes with a full kitchenette, separate sitting area, and modern amenities designed for extended stays.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Fully Furnished</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Free Wi-Fi & DStv</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Private Parking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Airport Shuttle</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Kitwe Location */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={overviewInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20"
        >
          <motion.div variants={slideInLeft} className="order-2 lg:order-1 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
              Kitwe Location
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our Kitwe branch offers the same premium services and comfort with 6 well-appointed rooms. Perfect for business travelers and those seeking quality accommodation in Zambia's copper mining hub.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Same Quality Service</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Business District</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Professional Security</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Housekeeping</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={slideInRight} className="order-1 lg:order-2 relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/Pic2.jpg"
                alt="Hideaway Apartments Kitwe location exterior"
                width={600}
                height={400}
                style={{ objectFit: "cover" }}
                className="hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">6</p>
                <p className="text-sm text-gray-600">Premium Rooms</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="py-20 px-4 w-full bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6 text-gray-800"
            >
              Premium Services
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Everything you need for a comfortable extended stay, handled by our experienced hospitality team
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "🏠",
                title: "Fully Furnished Apartments",
                description: "Complete with kitchenettes, sitting areas, and modern amenities",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "🏢",
                title: "Corporate Housing",
                description: "Long-term accommodation solutions for business professionals",
                color: "from-green-500 to-green-600"
              },
              {
                icon: "🧹",
                title: "Housekeeping Service",
                description: "Regular cleaning and maintenance to keep your space pristine",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: "🧳",
                title: "Luggage Storage",
                description: "Secure storage for your belongings during check-in/out",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: "👕",
                title: "Laundry Services",
                description: "Professional cleaning and dry cleaning services available",
                color: "from-pink-500 to-pink-600"
              },
              {
                icon: "📡",
                title: "Wi-Fi & Entertainment",
                description: "Complimentary high-speed internet and DStv premium channels",
                color: "from-teal-500 to-teal-600"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section id="locations" ref={locationsRef} className="py-20 px-4 w-full">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={locationsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6 text-gray-800"
            >
              Strategic Locations
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Perfectly positioned in Zambia's key business centers
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={locationsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div
              variants={slideInLeft}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Lusaka</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-amber-600 mr-3">📍</span>
                  <span className="text-gray-700">Ibex Hill, 3 minutes from US Embassy</span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-600 mr-3">🚗</span>
                  <span className="text-gray-700">4 minutes to Town Centre Market</span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-600 mr-3">🏛️</span>
                  <span className="text-gray-700">9 minutes to Chilenje House</span>
                </div>
                <div className="flex items-center">
                  <span className="text-amber-600 mr-3">✈️</span>
                  <span className="text-gray-700">24/7 Airport shuttle available</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong>Business District Location:</strong> Perfect for embassy appointments, corporate meetings, and accessing Lusaka's commercial center.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={slideInRight}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Kitwe</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📍</span>
                  <span className="text-gray-700">Central business district location</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">⛏️</span>
                  <span className="text-gray-700">Heart of copper mining region</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">🏢</span>
                  <span className="text-gray-700">Close to major corporations</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">🔒</span>
                  <span className="text-gray-700">Professional 24/7 security</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong>Mining Hub Access:</strong> Ideal for business travelers and professionals working in Zambia's industrial heartland.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-4 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            <strong>Strictly reservations and appointments only.</strong> No walk-ins, no parties.
          </p>
          <p className="text-lg mb-8 opacity-80">
            Contact us today to secure your premium accommodation in Lusaka or Kitwe.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            Make a Reservation
          </motion.button>
        </div>
      </motion.section>

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