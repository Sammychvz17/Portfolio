import react from 'react';
import './globals.css';


const HomePage = () => {

    return (
    <div>

        <div className="w-full bg-blue-100 text-left text-4xl mb-4 p-14 shadow-md">      
            <h1 className="shadow-md">Samantha Chavez</h1>
        </div>

       
        
        <div className="mt-6">  
            <nav>
                <ul id="nav-list" className= "flex justify-center text-4xl space-x-4" >
                    <li id="about-link" className= "hover:shadow-lg text-gray-800"><a href="/about">About</a></li>
                    <li id="contact-link" className= "hover:shadow-lg text-gray-800"><a href="/contact">Contact</a></li>
                    <li id="projects-link" className= "hover:shadow-lg text-gray-800"><a href="/projects">Projects</a></li>
                </ul>
            </nav>
        </div>
        <br />
        <div className="text-center pd-4">
            <p>This is the main landing page of our application.</p>
        </div>

    </div>
    );
};

export default HomePage;