import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";


const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md ">
            <ul id="nav-list" className="flex justify-right gap-8 py-4 text-sm">
            <li>
                <a href="#home">Home</a>
            </li>

            <li>
                <a href="#about">About</a>
            </li>

            <li>
                <a href="#projects">Projects</a>
            </li>

            <li>
                <a href="#contact">Contact</a>
            </li>
            </ul>
        </nav>
    );
};

export default Navbar;