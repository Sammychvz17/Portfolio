"use client";

import react from 'react';
import { motion, AnimatePresence } from "motion/react";
import './globals.css';


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
                        id="about-link" className= "hover:shadow-lg text-gray-800"><a href="./about">About</a></motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        id="contact-link" className= "hover:shadow-lg text-gray-800"><a href="./contact">Contact</a></motion.li>
                    <motion.li
                        whileHover={{ scale: 1.1 }}
                        id="projects-link" className= "hover:shadow-lg text-gray-800"><a href="./projects">Projects</a></motion.li>
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

    </div>
    );
};

export default HomePage;