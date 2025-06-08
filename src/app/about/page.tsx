"use client";

import Image from "next/image";
import Link from "next/link";
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

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "US Embassy Staff",
    rating: 5,
    date: "2 weeks ago",
    text: "Exceptional service from start to finish! The proximity to the US Embassy made my appointments so convenient. The apartment was immaculate, fully equipped, and the staff went above and beyond. Highly recommend for anyone with embassy business.",
    avatar: "👩‍💼"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Remote Worker",
    rating: 5,
    date: "1 month ago",
    text: "Perfect setup for remote work! Fast Wi-Fi, quiet environment, and excellent housekeeping service. The kitchen facilities allowed me to maintain my routine while staying for 3 weeks. Professional and reliable service.",
    avatar: "👨‍💻"
  },
  {
    id: 3,
    name: "Dr. Amanda Thompson",
    role: "Corporate Executive",
    rating: 5,
    date: "3 weeks ago",
    text: "Outstanding corporate housing experience. The attention to detail, security, and location in Ibex Hill exceeded expectations. Perfect for extended business stays. Will definitely book again on my next visit to Lusaka.",
    avatar: "👩‍⚕️"
  },
  {
    id: 4,
    name: "James Robertson",
    role: "Mining Consultant",
    rating: 5,
    date: "2 months ago",
    text: "The Kitwe location was perfect for my mining project work. Clean, comfortable, and great value. The security and housekeeping services were top-notch. Highly recommend for business travelers in the Copperbelt.",
    avatar: "👨‍🔧"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "International Consultant",
    rating: 5,
    date: "1 month ago",
    text: "Hideaway Apartments made my 6-week assignment in Zambia comfortable and stress-free. The reservations-only policy ensures a quiet, professional environment. Excellent luggage storage and laundry services too!",
    avatar: "👩‍🎓"
  },
  {
    id: 6,
    name: "Robert Davies",
    role: "Embassy Contractor",
    rating: 5,
    date: "3 weeks ago",
    text: "Five stars for professionalism! The team understood my specific needs for embassy-related work. Secure, clean, and perfectly located. The airport shuttle service was a great bonus. Exceptional hospitality.",
    avatar: "👨‍💼"
  }
];

export default function AboutUs() {
  const [selectedReviews, setSelectedReviews] = useState(6);
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const reviewsRef = useRef(null);
  const locationsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true});
  const storyInView = useInView(storyRef, { once: true});
  const valuesInView = useInView(valuesRef, { once: true });
  const teamInView = useInView(teamRef, { once: true });
  const reviewsInView = useInView(reviewsRef, { once: true });
  const locationsInView = useInView(locationsRef, { once: true});

  const handleViewAllReviews = () => {
    window.open('https://zm.africabz.com/lusaka/hideaway-apartments-336207', '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Header />
      </motion.div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/Pic3.jpg"
            alt="Hideaway Apartments - Professional hospitality team"
            fill
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
          >
            About <span className="text-gradient bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Hideaway</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-2xl mb-8 max-w-4xl leading-relaxed font-light"
          >
            5+ Years of Excellence in Hospitality Services
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 mt-8"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">15+</div>
              <div className="text-sm opacity-90">Premium Rooms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">2</div>
              <div className="text-sm opacity-90">Prime Locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">500+</div>
              <div className="text-sm opacity-90">Satisfied Guests</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400">24/7</div>
              <div className="text-sm opacity-90">Professional Service</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={storyInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={slideInLeft} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500"></div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded with a vision to provide premium accommodation services in Zambia, Hideaway Apartments has grown to become the preferred choice for US Embassy guests, corporate travelers, and remote workers seeking quality short-term housing.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Located in the prestigious Ibex Hill area of Lusaka, just 3 minutes from the US Embassy, we've built our reputation on reliability, comfort, and exceptional service. Our expertise in hospitality spans over 5 years, during which we've perfected the art of making guests feel at home.
            </p>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-500">
              <p className="text-gray-700 font-medium italic">
                "We believe that every guest deserves more than just accommodation - they deserve a hideaway where comfort meets convenience."
              </p>
            </div>
          </motion.div>

          <motion.div variants={slideInRight} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src="/Pic4.jpg"
                  alt="Hideaway Apartments interior design"
                  width={300}
                  height={200}
                  style={{ objectFit: "cover" }}
                  className="hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl shadow-lg mt-8"
              >
                <Image
                  src="/Pic5.jpg"
                  alt="Professional hospitality service"
                  width={300}
                  height={200}
                  style={{ objectFit: "cover" }}
                  className="hover:scale-110 transition-transform duration-700"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={storyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border-2 border-amber-100"
            >
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-600">Est. 2019</p>
                <p className="text-sm text-gray-600">Years of Excellence</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Values Section */}
      <section ref={valuesRef} className="py-20 px-4 w-full bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              The principles that guide our commitment to exceptional hospitality
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: "🛡️",
                title: "Security First",
                description: "Professional 24/7 security with private yards and controlled access",
                color: "from-red-500 to-red-600"
              },
              {
                icon: "⭐",
                title: "Excellence",
                description: "Uncompromising quality in every aspect of our service delivery",
                color: "from-amber-500 to-orange-500"
              },
              {
                icon: "🤝",
                title: "Professionalism",
                description: "Experienced team dedicated to meeting corporate and diplomatic standards",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "🏠",
                title: "Comfort",
                description: "Creating a home-like atmosphere with all modern conveniences",
                color: "from-green-500 to-green-600"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                  <span className="text-4xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={teamRef} className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={teamInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
          >
            Why Choose Hideaway?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We specialize in serving the unique needs of our distinguished clientele
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={teamInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center space-y-6"
          >
            <div className="relative">
              <Image
                src="/Pic13.jpg"
                alt="US Embassy proximity"
                width={400}
                height={300}
                style={{ objectFit: "cover" }}
                className="rounded-2xl shadow-lg mx-auto"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                Embassy Preferred
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">US Embassy Specialists</h3>
            <p className="text-gray-600 leading-relaxed">
              Strategic location just 3 minutes from the US Embassy makes us the preferred choice for diplomatic staff, contractors, and embassy visitors requiring convenient, secure accommodation.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="text-center space-y-6"
          >
            <div className="relative">
              <Image
                src="/Pic7.jpg"
                alt="Corporate housing excellence"
                width={400}
                height={300}
                style={{ objectFit: "cover" }}
                className="rounded-2xl shadow-lg mx-auto"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-full font-semibold">
                Corporate Ready
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Corporate Housing Experts</h3>
            <p className="text-gray-600 leading-relaxed">
              Tailored solutions for business travelers, remote workers, and corporate relocations. Our fully furnished apartments provide the perfect environment for extended business stays.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="text-center space-y-6"
          >
            <div className="relative">
              <Image
                src="/Pic1.jpg"
                alt="Premium amenities and services"
                width={400}
                height={300}
                style={{ objectFit: "cover" }}
                className="rounded-2xl shadow-lg mx-auto"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-2 rounded-full font-semibold">
                Full Service
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Comprehensive Services</h3>
            <p className="text-gray-600 leading-relaxed">
              From housekeeping and laundry to luggage storage and airport transfers, we handle every detail so you can focus on what matters most during your stay in Zambia.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Reviews Section */}
      <section ref={reviewsRef} className="py-20 px-4 w-full bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={reviewsInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            >
              What Our Guests Say
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Real experiences from our valued guests across embassy, corporate, and remote work communities
            </motion.p>
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewAllReviews}
              className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Reviews on AfricaBZ →
            </motion.button>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={reviewsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {reviews.slice(0, selectedReviews).map((review, index) => (
              <motion.div
                key={review.id}
                variants={scaleIn}
                whileHover={{ y: -5, scale: 1.02 }}
                onClick={handleViewAllReviews}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-amber-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-2xl mr-4">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex text-amber-400 mb-1">
                      {"★".repeat(review.rating)}
                    </div>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  "{review.text}"
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                  <span className="text-xs text-amber-600 font-medium">Click to verify on AfricaBZ</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center mt-12"
          >
            <button
              onClick={handleViewAllReviews}
              className="px-8 py-4 border-2 border-amber-500 text-amber-600 font-semibold rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300"
            >
              Read More Reviews
            </button>
          </motion.div>
        </div>
      </section>

      {/* Detailed Locations */}
      <section ref={locationsRef} className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={locationsInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
          >
            Our Locations
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Strategically positioned in Zambia's key business and diplomatic centers
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={locationsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Lusaka Location */}
          <motion.div
            variants={slideInLeft}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-2xl">L</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800">Lusaka Branch</h3>
                <p className="text-blue-600 font-medium">Flagship Location</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1">📍</span>
                <div>
                  <p className="font-semibold text-gray-800">Address:</p>
                  <p className="text-gray-700">Ibex Hill, Lusaka, Zambia</p>
                  <p className="text-sm text-gray-600">3 minutes from US Embassy</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-3">🏢</span>
                <span className="text-gray-700"><strong>9 Premium Rooms</strong> - Individually decorated</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-3">🚗</span>
                <span className="text-gray-700">4 min to Town Centre Market, 9 min to Chilenje House</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-3">✈️</span>
                <span className="text-gray-700">24/7 Airport shuttle service available</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Specialized Services:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• US Embassy appointment coordination</li>
                <li>• Diplomatic protocol assistance</li>
                <li>• Corporate meeting facilities nearby</li>
                <li>• National Assembly & Museum access</li>
              </ul>
            </div>
          </motion.div>

          {/* Kitwe Location */}
          <motion.div
            variants={slideInRight}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-xl"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-2xl">K</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-800">Kitwe Branch</h3>
                <p className="text-green-600 font-medium">Copperbelt Hub</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1">📍</span>
                <div>
                  <p className="font-semibold text-gray-800">Address:</p>
                  <p className="text-gray-700">Plot 22, 9th Street</p>
                  <p className="text-gray-700">Mindolo Miseshi, Kitwe, Zambia</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-3">🏢</span>
                <span className="text-gray-700"><strong>6 Premium Rooms</strong> - Same quality standards</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-3">⛏️</span>
                <span className="text-gray-700">Heart of Zambia's mining industry</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-3">🏭</span>
                <span className="text-gray-700">Close to major mining corporations</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Specialized Services:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mining industry professional housing</li>
                <li>• Corporate contractor accommodation</li>
                <li>• Extended project stay packages</li>
                <li>• Industrial area convenient access</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
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