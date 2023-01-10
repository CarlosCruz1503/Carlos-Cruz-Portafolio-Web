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
                        <h1 class="text-type text-center">
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("GeeksForGeeks")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Welcomes You")
                                        .start();
                                }
                                }
                            />
                        </h1>
                    </div>
                    <div className="div-liner"></div>
                </div>

            </div>
        </div>

    );
}

export default Presentation;
