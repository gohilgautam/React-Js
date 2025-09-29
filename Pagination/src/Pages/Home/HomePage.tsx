import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import hero1 from "../../assets/images/hero_1.jpg.webp";
import hero2 from "../../assets/images/hero_2.jpg.webp";
import hero3 from "../../assets/images/hero_3.jpg.webp";

export default function HomePage() {
  // Hero slides
  const slides = [
    { id: 1, image: {hero1}, title: "We Are Specialists In Architecture", subtitle: "Transforming spaces with innovative designs", button: "Contact Us" },
    { id: 2, image: {hero2}, title: "Creative Interior Solutions", subtitle: "Bring your dream space to life", button: "Learn More" },
    { id: 3, image: {hero3}, title: "Design That Inspires", subtitle: "Modern designs for modern living", button: "Our Work" },
  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % length), 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    { id: 1, title: "Creative Stairs", description: "Innovative designs that elevate your space." },
    { id: 2, title: "Kitchen Design", description: "Functional and aesthetic kitchen solutions." },
    { id: 3, title: "Lamp Decoration", description: "Lighting that adds character to your interiors." },
    { id: 4, title: "Interior Blueprint", description: "Detailed plans for a harmonious layout." },
    { id: 5, title: "Dining Table", description: "Custom tables that fit your style." },
    { id: 6, title: "Modern Design", description: "Contemporary designs for modern living." },
  ];

  const testimonials = [
    { id: 1, name: "Mike Dorney", position: "CEO and Co-Founder", quote: "Exceptional service and design." },
    { id: 2, name: "James Smith", position: "CEO and Co-Founder", quote: "Transformed our space beautifully." },
    { id: 3, name: "Sarah Lee", position: "Interior Designer", quote: "Highly recommend their work." },
  ];

  const gallery = [
    "images/gallery1.jpg",
    "images/gallery2.jpg",
    "images/gallery3.jpg",
    "images/gallery4.jpg",
    "images/gallery5.jpg",
    "images/gallery6.jpg",
  ];

  return (
    <div className="font-sans text-gray-800">

      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <div className="flex transition-transform duration-1000 ease-in-out h-full" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0 h-full bg-cover bg-center relative" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-5xl font-bold"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="mt-4 text-xl"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
                >
                  {slide.button}
                </motion.button>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button onClick={() => setCurrent((current - 1 + length) % length)} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition">&#10094;</button>
        <button onClick={() => setCurrent((current + 1) % length)} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition">&#10095;</button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full ${current === i ? "bg-green-600" : "bg-gray-400"}`} />)}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold">What We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 cursor-pointer"
              >
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.img
            src="images/about.jpg"
            alt="About Us"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800">About Our Company</h2>
            <p className="mt-4 text-gray-600 text-lg">
              We are a professional architecture and interior design agency dedicated to transforming spaces into modern, stylish, and functional environments.
            </p>
            <motion.button whileHover={{ scale: 1.05 }} className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition">Learn More</motion.button>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold">Our Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {gallery.map((img, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }} className="overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300">
                <img src={img} alt={`Gallery ${i}`} className="w-full h-64 object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold">What Our Clients Say</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gray-100 p-8 rounded-lg shadow-lg">
                <p className="text-xl italic">"{t.quote}"</p>
                <p className="mt-4 font-semibold">{t.name}</p>
                <p className="text-gray-500">{t.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold">Get In Touch</h2>
          <p className="mt-4 text-xl text-gray-600">We'd love to hear from you.</p>
          <motion.form
            className="mt-8 max-w-lg mx-auto flex flex-col gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition" />
            <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition" />
            <textarea placeholder="Your Message" className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition" rows="4"></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

    </div>
  );
}

