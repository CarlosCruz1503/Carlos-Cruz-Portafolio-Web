import React, { useEffect } from 'react';
import Presentation from '../components/sections/presentation';
import "../styles/css/home.scss"
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Skills from '../components/sections/skills';
import Footer from '../components/sections/footer';
import Form from '../components/sections/form';
const Home = () => {

    const observerLeft = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show")
            } else {
                entry.target.classList.remove("show")
            }
        })
    })

    const observerRight = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("showRight")
            } else {
                entry.target.classList.remove("showRight")
            }
        })
    })

    useEffect(() => {
        const hiddenElementsLeft = document.querySelectorAll(".hidden")
        hiddenElementsLeft.forEach((el) => observerLeft.observe(el))
        const hiddenElementsRight = document.querySelectorAll(".hiddenRight")
        hiddenElementsRight.forEach((el) => observerRight.observe(el))
    }, []);


    return (
        <div>
            <div className='home-div' id="home" >
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
