import React, { useEffect } from 'react';
import "../../styles/css/about.scss"
import AboutSquare from '../pure/about-square';
const About = () => {

    return (
        <div className='about-div' id="about">
            <div className='about-title ' id="about-title">
                <h1 className='text-center'>SOBRE MI.</h1>
            </div>
            <div className="container hiddenRight">
                <div className="row row-about">
                    <div className="col-12 col-md-5 text-about">
                        <h2>INFORMACION</h2>
                        <p>¡Hola! Me llamo Carlos, apasionado por la programación.</p>
                        <p>Me motiva aprender cada vez más, me apasiona el desarollo, he imaginar y luego programar algo en diferentes lenguajes como Python y JavaScript</p>
                        <p>Mi objetivo principal es aprender tecnologías que me permitan desenvolverme profesionalmente como desarrollador de software.</p>
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="row squares">
                            <AboutSquare
                                number="+5"
                                text="PROYECTOS COMPLETADOS"
                            >
                            </AboutSquare>

                            <AboutSquare
                                number="+10"
                                text="CERTIFICACIONES OBTENIDAS"
                            >
                            </AboutSquare>

                            <AboutSquare
                                number="+12"
                                text="CURSOS COMPLETOS"
                            >
                            </AboutSquare>

                            <AboutSquare
                                number="1"
                                text="BOOTCAMP EN PROCESO"
                            >
                            </AboutSquare>
                            <a href="https://www.linkedin.com/in/carlos-jose-cruz-luengas/" target="_blank" className="btn fix-networks">Ver Certificaciones y cursos en linkedin<i class="bi bi-linkedin icons-networks" ></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
