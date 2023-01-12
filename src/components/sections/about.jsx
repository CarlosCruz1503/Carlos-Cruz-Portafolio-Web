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
                        <p>Me motiva aprender cada vez más, me apasiona el desarollo, he imaginar y luego programar algo en diferentes lenguajes como Python y JavaScript</p>
                        <p>Mi objetivo principal es aprender tecnologías que me permitan desenvolverme profesionalmente como desarrollador de software.</p>
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="row squares">
                            <div className="col-11 col-lg-5 info-square info-square-one">
                                <h2 className="square-number"> +5 </h2>
                                <h3 className='square-text text-center'>PROYECTOS COMPLETADOS</h3>
                            </div>
                            <div className="col-11 col-lg-5 info-square">
                                <h2 className="square-number"> +10 </h2>
                                <h3 className='square-text square-text-peque text-center '>CERTIFICACIONES OBTENIDAS</h3>
                            </div>
                            <div className="col-11 col-lg-5 info-square">
                                <h2 className="square-number"> +12 </h2>
                                <h3 className='square-text text-center'>CURSOS COMPLETOS</h3>
                            </div>
                            <div className="col-11 col-lg-5 info-square">
                                <h2 className="square-number"> 1 </h2>
                                <h3 className='square-text text-center'>BOOTCAMP EN PROCESO</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
