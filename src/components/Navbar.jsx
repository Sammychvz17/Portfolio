import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";


const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-sm ">
            <ul id="nav-list" className="flex justify-end gap-8 py-4 text-lg">
            <li className="hover:underline">
                <a href="#home">Home</a>
            </li>

            <li className="hover:underline">
                <a href="#about">About</a>
            </li>

            <li className="hover:underline">
                <a href="#projects">Projects</a>
            </li>

            <li className="hover:underline" >
                <a href="#contact">Contact</a>
            </li>
            </ul>
        </nav>
    );
};

export default Navbar;