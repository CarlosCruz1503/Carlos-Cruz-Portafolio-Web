import React from 'react';
import Presentation from '../components/sections/presentation';
import "../styles/css/home.scss"
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
const Home = () => {
    return (
        <div>
            <div className='home-div' id="home">
                <Presentation></Presentation>
            </div>
            <About></About>
            <Projects></Projects>
        </div>

    );
};

export default Home;
