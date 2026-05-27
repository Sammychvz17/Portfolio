
const Navbar = () => {
    return (
        <nav className="text-center mt-2">
            <ul id="nav-list" className="text-md">
                <li id="home-link" className="hover:shadow-lg text-gray-800"><a href="./">Home</a></li>
                <li id="about-link" className="hover:shadow-lg text-gray-800"><a href="./about">About</a></li>
                <li id="contact-link" className="hover:shadow-lg text-gray-800"><a href="./contact">Contact</a></li>
                <li id="projects-link" className="hover:shadow-lg text-gray-800"><a href="./projects">Projects</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;