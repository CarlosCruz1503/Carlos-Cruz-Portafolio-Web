import React from 'react';
import "../../styles/css/projects.scss"
import todoBackground from "../../../public/images/task.jpg"
import todoBack from "../../../public/images/todo-screen.png"
import calBack from "../../../public/images/calculadora-screen.png"
import crudBack from "../../../public/images/django.jpg"
import reverBack from "../../../public/images/reverdesora.png"
const Projects = () => {
    return (
        <div className='div-projects'>
            <div className='projects-title'>
                <h1 className='text-center'>MI PORTAFOLIO.</h1>
            </div>
            <div className="container project-container">
                <div className="row">
                    <div className="col-11 col-md-5 col-xl-4 ">
                        <div className='square' style={{ backgroundImage: `url(${todoBackground})`, backgroundSize: "cover", backgroundPosition: "60% 50%" }}>
                            <div className="content-square">
                                <h4 className='mt-2'>TODO APP</h4>
                                <div className="buttons-projects-square">
                                    <a href="https://todo-react-app.onrender.com" target="_blank" className="btn projects-icons"><i class="bi bi-link-45deg icons-networks" ></i></a>
                                    <a href="https://github.com/CarlosCruz1503/ReactProject" target="_blank" className="btn projects-icons"><i class="bi bi-github icons-networks" ></i></a>
                                </div>
                                <h5 className='mt-3'>Tecnologías usadas</h5>
                                <div className="technologies-projects-square mb-2">
                                    <p class="icons-technologies" ><img src="https://cdn-icons-png.flaticon.com/512/152/152843.png" alt="" /></p>
                                    <p class="icons-technologies" ><img src="https://cdn-icons-png.flaticon.com/512/732/732007.png" alt="" /></p>
                                    <p class="bi icons-technologies" ><img src="https://cdn-icons-png.flaticon.com/512/5968/5968509.png" alt="" /></p>
                                    <p class="bi icons-technologies" ><img src="https://cdn-icons-png.flaticon.com/512/3393/3393920.png" alt="" /></p>
                                    <i class="bi icons-technologies" ><img src="https://cdn-icons-png.flaticon.com/512/5968/5968671.png" alt="" /></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md-5 col-xl-4">
                        <div className='square' style={{ backgroundImage: `url(${calBack})`, backgroundSize: "cover", backgroundPosition: "50% 50%" }}>
                            <div className="content-square">
                                <h4 className='mt-2'>CALCULADORA</h4>
                                <div className="buttons-projects-square">
                                    <a href="https://calculadoracarloscruz.netlify.app/" target="_blank" className="btn projects-icons"><i class="bi bi-link-45deg icons-networks" ></i></a>
                                    <a href="https://github.com/CarlosCruz1503/CalculadoraJS" target="_blank" className="btn projects-icons"><i class="bi bi-github icons-networks" ></i></a>
                                </div>
                                <h5 className='mt-3'>Tecnologías usadas</h5>
                                <div className="technologies-projects-square mb-2">
                                    <p class="icons-technologies" ><img src="https://cdn-icons-png.flaticon.com/512/152/152843.png" alt="" /></p>
                                    <p class="icons-technologies" ><img src="https://cdn-icons-png.flaticon.com/512/732/732007.png" alt="" /></p>
                                    <p class="bi icons-technologies" ><img src="https://cdn-icons-png.flaticon.com/512/5968/5968509.png" alt="" /></p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md-5 col-xl-4">
                        <div className='square' style={{ backgroundImage: `url(${crudBack})`, backgroundSize: "cover", backgroundPosition: "50% 50%" }}>
                            <div className="content-square">
                                <h5 className='text-center mt-2'>DJANGO CRUD (SOLO BACKEND)</h5>
                                <p>Al entrar a la web es super lenta para iniciar (40s)</p>
                                <p>Ten paciencia, es un server gratuito</p>
                                <div className="buttons-projects-square">
                                    <a href="https://coto-qqma.onrender.com" target="_blank" className="btn projects-icons"><i class="bi bi-link-45deg icons-networks" ></i></a>
                                    <a href="https://github.com/CarlosCruz1503/authCrud" target="_blank" className="btn projects-icons"><i class="bi bi-github icons-networks" ></i></a>
                                </div>
                                <h5 className='mt-2'>Tecnologías usadas</h5>
                                <div className="technologies-projects-square mb-2">
                                    <p class="icons-technologies" ><img src="https://cdn-icons-png.flaticon.com/512/152/152843.png" alt="" /></p>
                                    <p class="icons-technologies" ><img src="https://cdn-icons-png.flaticon.com/512/732/732007.png" alt="" /></p>
                                    <p class="bi icons-technologies" ><img src="https://cdn-icons-png.flaticon.com/512/5968/5968509.png" alt="" /></p>
                                    <p class="bi icons-technologies i-large" ><img className="img-large" src="https://static.djangoproject.com/img/logos/django-logo-negative.png" alt="" /></p>
                                    <i class="bi icons-technologies" ><img src="https://cdn-icons-png.flaticon.com/512/5968/5968671.png" alt="" /></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-11 col-md-5 col-xl-4">
                        <div className='square' style={{ backgroundImage: `url(${reverBack})`, backgroundSize: "cover", backgroundPosition: "50% 50%" }}>
                            <div className="content-square">
                                <h5 className='text-center mt-2'>Web para presentación de un producto</h5>
                                <div className="buttons-projects-square">
                                    <a href="https://reverdesora.netlify.app/" target="_blank" className="btn projects-icons"><i class="bi bi-link-45deg icons-networks" ></i></a>
                                    <a href="https://github.com/CarlosCruz1503/Reverdesora-Previsora-Seguros-" target="_blank" className="btn projects-icons"><i class="bi bi-github icons-networks" ></i></a>
                                </div>
                                <h5 className='mt-2'>Tecnologías usadas</h5>
                                <div className="technologies-projects-square mb-2">
                                    <p class="icons-technologies" ><img src="https://cdn-icons-png.flaticon.com/512/152/152843.png" alt="" /></p>
                                    <p class="icons-technologies" ><img src="https://cdn-icons-png.flaticon.com/512/732/732007.png" alt="" /></p>
                                    <p class="bi icons-technologies" ><img src="https://cdn-icons-png.flaticon.com/512/5968/5968509.png" alt="" /></p>
                                    <i class="bi icons-technologies" ><img src="https://cdn.iconscout.com/icon/free/png-256/vue-dot-js-3629145-3030285.png" alt="" /></i>
                                    <i class="bi icons-technologies" ><img src="https://cdn-icons-png.flaticon.com/512/5968/5968671.png" alt="" /></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
