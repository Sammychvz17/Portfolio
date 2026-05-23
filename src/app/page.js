import react from 'react';
import './globals.css';


const HomePage = () => {

    return (
    <div>

        <div className="">      
            <h1>Welcome to the Home Page</h1>
        </div>

        <div className="">
            <p>This is the main landing page of our application.</p>
        </div>
        
        <div className="">  
            <nav>
                <ul id="nav-list">
                    <li id="home-link"><a href="/">Home</a></li>
                    <li id="about-link"><a href="/about">About</a></li>
                    <li id="contact-link"><a href="/contact">Contact</a></li>
                    <li id="projects-link"><a href="/projects">Projects</a></li>
                </ul>
            </nav>
        </div>
        
    </div>
    );
};

export default HomePage;