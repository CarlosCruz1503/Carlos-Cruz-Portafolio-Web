import React from 'react';
import "../../styles/css/about.scss"
const About = () => {
    return (
        <div className='about-div' id="about">
            <div className='about-title'>
                <h1 className='text-center'>SOBRE MI.</h1>
            </div>
            <div className="container">
                <div className="row row-about">
                    <div className="col-12 col-md-5 text-about">
                        <h2>INFORMACION</h2>
                        <p>¡Hola! Me llamo Carlos, apasionado por la programación.</p>
                        <p>Una de mis mayores motivaciones es aprender, actualmente estoy trabajando en mis habilidades como desarrollador participando en cursos y desarrollando proyectos en lenguajes como JavaScript, Python y Java.</p>
                        <p>Mi objetivo principal es aprender tecnologías que me permitan desenvolverme profesionalmente como desarrollador de software.</p>
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="row squares">
                            <div className="col-11 col-lg-5 info-square info-square-one">a</div>
                            <div className="col-11 col-lg-5 info-square">a</div>
                            <div className="col-11 col-lg-5 info-square">a</div>
                            <div className="col-11 col-lg-5 info-square">a</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
