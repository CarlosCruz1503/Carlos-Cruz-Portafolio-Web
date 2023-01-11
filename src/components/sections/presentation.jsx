import React from 'react';
import "../../styles/css/presentation.scss"
import Typewriter from "typewriter-effect";
const Presentation = () => {
    return (

        <div className="div-presentation">
            <div className="miTitle">
                <h1 class="principal-title text-center">CARLOS CRUZ.</h1>
                <div className="div-typer">
                    <div className="div-liner"></div>
                    <div className="div-typying">
                        <h3 class="text-type text-center">
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Full Stack Developer")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("BackEnd Developer(DJANGO)")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("FrontEnd Developer(REACT)")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("BackEnd Developer(NODE JS)")
                                        .start();
                                }
                                }
                            />
                        </h3>
                    </div>
                    <div className="div-liner"></div>
                </div>

            </div>
        </div>


    );
}

export default Presentation;
