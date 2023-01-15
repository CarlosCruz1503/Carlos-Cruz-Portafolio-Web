import React from 'react';
import Presentation from '../components/sections/presentation';
import "../styles/css/home.scss"
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Skills from '../components/sections/skills';
const Home = () => {
    return (
        <div>
            <div className='home-div' id="home">
                <Presentation></Presentation>
            </div>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
        </div>

    );
};

export default Home;
