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


const HomePage = () => {

    return (
    <main className="container">
    <Navbar />

      <section id="home">
        <Home />
      </section>
      

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    <Footer />
    </main>
    );
};

export default HomePage;