
import Image from "next/image";
import logo from "@/assets/icons/logo.png";



const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50">
            <div className="flex items-center justify-between px-8 py-4">
                <a href="#home">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={90}
                        height={90}
                    />
                </a>
            

            <ul id="nav-list" className="flex gap-8 text-lg">
                <li className="hover:underline">
                    <a href="#about">About</a>
                </li>

                <li className="hover:underline">
                    <a href="#projects">Projects</a>
                </li>

                <li className="hover:underline">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;