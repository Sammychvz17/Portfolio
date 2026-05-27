import react from 'react';
import { motion, AnimatePresence } from "motion/react";
import './globals.css';


const HomePage = () => {

    return (
    <div>

        <div className="">      
            <h1 className="text-left text-4xl mb-4 p-14 w-full">Samantha Chavez</h1>
            <nav className="text-right mt-2">
                <ul id="nav-list" className= "text-md" >
                    <li id="about-link" className= "hover:shadow-lg text-gray-800"><a href="./about">About</a></li>
                    <li id="contact-link" className= "hover:shadow-lg text-gray-800"><a href="./contact">Contact</a></li>
                    <li id="projects-link" className= "hover:shadow-lg text-gray-800"><a href="./projects">Projects</a></li>
                </ul>
            </nav>
        </div>

       
        
        <div className="mt-6">  
            
        </div>
        <br />
        <div className="text-center pd-4">
            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

    </div>
    );
};

export default HomePage;