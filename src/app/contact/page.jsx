"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
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
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 30 },
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

export default function ContactPage() {
  const heroRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formRef = useRef(null);
  const emergencyRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const contactInfoInView = useInView(contactInfoRef, { once: true });
  const formInView = useInView(formRef, { once: true });
  const emergencyInView = useInView(emergencyRef, { once: true });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

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
            alt="Contact Hideaway Apartments"
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
            <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
              Contact <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">Us</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="text-xl md:text-3xl mb-12 max-w-4xl leading-relaxed font-light"
          >
            Ready to make your <span className="text-amber-400 font-semibold">reservation?</span> We're here to help 24/7
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-6 text-lg"
          >
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-green-400 mr-2">📞</span>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-blue-400 mr-2">✈️</span>
              <span>Airport Shuttle</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-amber-400 mr-2">🚫</span>
              <span>Reservations Only</span>
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

      {/* Contact Information Section */}
      <section ref={contactInfoRef} className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={contactInfoInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
            >
              Get In Touch
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Two premium locations, one exceptional service standard
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={contactInfoInView ? "visible" : "hidden"}
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
                
                <div className="relative overflow-hidden rounded-xl shadow-lg mb-8 group">
                  <Image
                    src="/Pic1.jpg"
                    alt="Lusaka location"
                    width={500}
                    height={300}
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg">9 Premium Rooms</p>
                    <p className="text-sm opacity-90">3 minutes from US Embassy</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center bg-white rounded-xl p-4 shadow-md">
                    <span className="text-amber-600 text-2xl mr-4">📍</span>
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">Ibex Hill, Embassy District, Lusaka</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white rounded-xl p-4 shadow-md">
                    <span className="text-amber-600 text-2xl mr-4">📞</span>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">+2+260768239726</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white rounded-xl p-4 shadow-md">
                    <span className="text-amber-600 text-2xl mr-4">✉️</span>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">lusaka@hideawayzm.com</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white rounded-xl p-4 shadow-md">
                    <span className="text-amber-600 text-2xl mr-4">🕒</span>
                    <div>
                      <p className="font-semibold text-gray-800">Reception Hours</p>
                      <p className="text-gray-600">24/7 Available</p>
                    </div>
                  </div>
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
                
                <div className="relative overflow-hidden rounded-xl shadow-lg mb-8 group">
                  <Image
                    src="/Pic19.jpg"
                    alt="Kitwe location"
                    width={500}
                    height={300}
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold text-lg">6 Premium Rooms</p>
                    <p className="text-sm opacity-90">Mining district access</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center bg-white rounded-xl p-4 shadow-md">
                    <span className="text-blue-600 text-2xl mr-4">📍</span>
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">Central Business District, Kitwe</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white rounded-xl p-4 shadow-md">
                    <span className="text-blue-600 text-2xl mr-4">📞</span>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">++260768239726</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white rounded-xl p-4 shadow-md">
                    <span className="text-blue-600 text-2xl mr-4">✉️</span>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">kitwe@hideawayzm.com</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white rounded-xl p-4 shadow-md">
                    <span className="text-blue-600 text-2xl mr-4">🕒</span>
                    <div>
                      <p className="font-semibold text-gray-800">Reception Hours</p>
                      <p className="text-gray-600">24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-24 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Make a Reservation
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Fill out the form below and we'll get back to you within 24 hours to confirm your booking
            </motion.p>
          </motion.div>

          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-300 mb-2">
                    Preferred Location *
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-xl text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                  >
                    <option value="">Select location</option>
                    <option value="lusaka">Lusaka - Ibex Hill</option>
                    <option value="kitwe">Kitwe - Central Business District</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="checkIn" className="block text-sm font-semibold text-gray-300 mb-2">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-xl text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="checkOut" className="block text-sm font-semibold text-gray-300 mb-2">
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-xl text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-semibold text-gray-300 mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-xl text-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Special Requests or Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-600 border border-gray-500 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about any special requirements, airport shuttle needs, or other requests..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Send Reservation Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Emergency & Additional Services */}
      <section ref={emergencyRef} className="py-20 px-4 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={emergencyInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-8 text-gray-800"
            >
              Additional Services & Support
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={emergencyInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={scaleIn}
              className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center shadow-xl"
            >
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🚨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Emergency Support</h3>
              <p className="text-gray-600 mb-4">24/7 emergency assistance for any urgent situations</p>
              <p className="text-red-600 font-bold text-lg">Emergency Hotline: +260768239726</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center shadow-xl"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">✈️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Airport Shuttle</h3>
              <p className="text-gray-600 mb-4">24/7 airport transfer service available for all guests</p>
              <p className="text-blue-600 font-bold text-lg">Book: 2 hours in advance</p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center shadow-xl"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Corporate Bookings</h3>
              <p className="text-gray-600 mb-4">Special rates and services for business travelers</p>
              <p className="text-green-600 font-bold text-lg">Corporate: +260768239726</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Book Your Stay?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              <span className="font-semibold">Remember:</span> We operate by reservations only. No walk-ins accepted.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+260768239726"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 inline-block"
              >
                📞 Call Now
              </motion.a>
              <motion.a
                href="mailto:info@hideawayzm.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300 inline-block"
              >
                ✉️ Email Us
              </motion.a>
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