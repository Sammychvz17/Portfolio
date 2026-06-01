"use client"; // This directive indicates that the code in this file should be executed on the client side, allowing for interactivity and dynamic content rendering in a React application.

// Importing necessary libraries and components for the HomePage component.
import react from 'react';
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

// Importing the global CSS styles and other components that will be used in the HomePage component.
import './globals.css';
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransitions";


const HomePage = () => {

    return (
    <main className="container">
    <Navbar />

      <motion.section 
        id="home"
        initial={{ opacity: 0, y: 120, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
            type: "spring",
            stiffness: 90,
            damping: 12,
            mass: 0.8,}}
        viewport={{ once: false, amount: 0.3 }}
        >
        <Home />
      </motion.section>

    <motion.section
        id="about"
        initial={{ opacity: 0, y: 120, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
            type: "spring",
            stiffness: 90,
            damping: 12,
            mass: 0.8,}}
        viewport={{ once: false, amount: 0.3 }}
    >
        <About />
    </motion.section>

    <motion.section
        id="projects"
        initial={{ opacity: 0, y: 120, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
            type: "spring",
            stiffness: 90,
            damping: 12,
            mass: 0.8,}}
        viewport={{ once: false, amount: 0.3 }}
    >
        <Projects />
    </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 120, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
            type: "spring",
            stiffness: 90,
            damping: 12,
            mass: 0.8,}}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Contact />
      </motion.section>
    <Footer />
    </main>
    );
};

export default HomePage;