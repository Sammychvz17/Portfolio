"use client"; // This directive indicates that the code in this file should be executed on the client side, allowing for interactivity and dynamic content rendering in a React application.

// Importing necessary libraries and components for the HomePage component.
import react from 'react';
import { motion, AnimatePresence } from "motion/react";

// Importing the global CSS styles and other components that will be used in the HomePage component.
import './globals.css';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import flower from '../assets/images/flower.jpg';


const HomePage = () => {

    return (
    <div>
        <div className="">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="text-center pd-4"
                >
                    <h1 className="text-left text-4xl mb-4 p-14 w-full">Samantha Chavez</h1>
                </motion.div>
            </AnimatePresence>
        
            <nav className="text-center mt-2">
                <ul id="nav-list" className= "text-md" >
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        id="home-link" className= "hover:shadow-lg text-gray-800"><a href="./">Home</a></motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        id="about-link" className= "hover:shadow-lg text-gray-800"><a href="./components/About">About</a></motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        id="contact-link" className= "hover:shadow-lg text-gray-800"><a href="./components/Contact">Contact</a></motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        id="projects-link" className= "hover:shadow-lg text-gray-800"><a href="./components/Projects">Projects</a></motion.li>
                </ul>
            </nav>
        </div>
    
        <div className="mt-6">  
            
        </div>
        <br />

        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}className="text-center pd-4"
        >
            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </motion.div>
            <Card title="Project Title" description="Project Description" image= {flower} />
    </div>
    );
};

export default HomePage;