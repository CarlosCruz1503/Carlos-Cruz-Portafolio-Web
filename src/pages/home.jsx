import React from 'react';
import Presentation from '../components/sections/presentation';
import "../styles/css/home.scss"
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Skills from '../components/sections/skills';
import Footer from '../components/sections/footer';
import Form from '../components/sections/form';
const Home = () => {
    return (
        <div>
            <div className='home-div' id="home">
                <Presentation></Presentation>
            </div>
            <About></About>
            <Projects></Projects>
            <Skills></Skills>
            <Form></Form>
            <Footer></Footer>
        </div>
    );
};

export default Home;
