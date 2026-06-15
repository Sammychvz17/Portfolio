
import Image from "next/image";
import logo from "@/assets/icons/logo.png";



const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-sm ">

            <ul id="nav-list" className="flex justify-end gap-8 py-4 text-lg">
            <div className="flex justify left">
            <Image
                src={logo}
                alt="Logo"
                width={100}
                height={100}
            />

        </div>
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