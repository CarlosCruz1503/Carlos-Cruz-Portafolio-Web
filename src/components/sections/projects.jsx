import React from 'react';
import "../../styles/css/projects.scss"
import todoBackground from "../../../public/images/task.jpg"
import todoBack from "../../../public/images/todo-screen.png"
import calBack from "../../../public/images/calculadora-screen.png"
import crudBack from "../../../public/images/django.jpg"
import reverBack from "../../../public/images/reverdesora.png"
import instagram from "../../../public/images/Instracrem.jpg"
import myPage from "../../../public/images/myPage.png"
import ProjectCard from '../pure/project-card';

const Projects = () => {

    const todoIcons = ["https://cdn-icons-png.flaticon.com/512/152/152843.png", "https://cdn-icons-png.flaticon.com/512/732/732007.png"]

    return (
        <div className='div-projects ' id="projects">
            <div className='projects-title' id="projects-title">
                <h1 className='text-center'>MI PORTAFOLIO.</h1>
            </div>
            <div className="container project-container hidden">
                <div className="row">
                    <ProjectCard
                        img={instagram}
                        title="Copia de Instagram, desarollada con React y Django-Rest"
                        linkWeb="https://instacrem.vercel.app/home/"
                        linkGit="https://github.com/CarlosCruz1503/Instacrem---REACT"
                        linkGit2="https://github.com/CarlosCruz1503/django-instacrem"
                        icons={["https://cdn-icons-png.flaticon.com/512/152/152843.png",
                            "https://cdn-icons-png.flaticon.com/512/732/732007.png",
                            "https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png",
                            "https://cdn-icons-png.flaticon.com/512/5968/5968509.png",
                            "https://cdn-icons-png.flaticon.com/512/5968/5968671.png",
                            "https://cdn-icons-png.flaticon.com/512/3393/3393920.png",
                        ]}
                        iconLarge={["https://redux.js.org/img/redux-logo-landscape.png",
                            "https://static.djangoproject.com/img/logos/django-logo-negative.png",
                            "https://inlab.fib.upc.edu/sites/default/files/styles/large/public/field/image/django-rest-framework.jpg",
                        ]}
                    ></ProjectCard>
                    <ProjectCard
                        img={todoBackground}
                        title="TODO APP"
                        linkWeb="https://todo-react-app.onrender.com"
                        linkGit="https://github.com/CarlosCruz1503/ReactProject"
                        icons={["https://cdn-icons-png.flaticon.com/512/152/152843.png",
                            "https://cdn-icons-png.flaticon.com/512/732/732007.png",
                            "https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png",
                            "https://cdn-icons-png.flaticon.com/512/5968/5968671.png",
                            "https://cdn-icons-png.flaticon.com/512/5968/5968509.png",
                            "https://cdn-icons-png.flaticon.com/512/3393/3393920.png",
                        ]}
                    ></ProjectCard>

                    <ProjectCard
                        img={calBack}
                        title="CALCULADORA"
                        linkWeb="https://calculadoracarloscruz.netlify.app/"
                        linkGit="https://github.com/CarlosCruz1503/CalculadoraJS"
                        icons={["https://cdn-icons-png.flaticon.com/512/152/152843.png",
                            "https://cdn-icons-png.flaticon.com/512/732/732007.png",
                            "https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png",
                            "https://cdn-icons-png.flaticon.com/512/5968/5968509.png",]}
                    ></ProjectCard>

                    <ProjectCard
                        img={crudBack}
                        title="DJANGO CRUD (SOLO BACKEND)"
                        linkWeb="https://carloscruz.pythonanywhere.com/"
                        linkGit="https://github.com/CarlosCruz1503/CRUDAUTH"
                        icons={["https://cdn-icons-png.flaticon.com/512/152/152843.png",
                            "https://cdn-icons-png.flaticon.com/512/732/732007.png",
                            "https://cdn-icons-png.flaticon.com/512/5968/5968509.png",
                            "https://cdn-icons-png.flaticon.com/512/5968/5968671.png"]}
                        iconLarge={["https://static.djangoproject.com/img/logos/django-logo-negative.png",]}
                    ></ProjectCard>
                    <ProjectCard
                        img={myPage}
                        title="Mi pagina Personal"
                        linkWeb="https://carlos-cruz-personal-web.onrender.com/"
                        linkGit="https://github.com/CarlosCruz1503/Carlos-Cruz-Portafolio-Web"
                        icons={["https://cdn-icons-png.flaticon.com/512/152/152843.png",
                            "https://cdn-icons-png.flaticon.com/512/732/732007.png",
                            "https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png",
                            "https://cdn-icons-png.flaticon.com/512/5968/5968671.png",
                            "https://cdn-icons-png.flaticon.com/512/5968/5968509.png",
                            "https://cdn-icons-png.flaticon.com/512/3393/3393920.png",
                        ]}
                    ></ProjectCard>
                    <ProjectCard
                        img={reverBack}
                        title="Web para presentación de un producto"
                        linkWeb="https://reverdesora.netlify.app/"
                        linkGit="https://github.com/CarlosCruz1503/Reverdesora-Previsora-Seguros-"
                        icons={["https://cdn-icons-png.flaticon.com/512/152/152843.png",
                            "https://cdn-icons-png.flaticon.com/512/732/732007.png",
                            "https://cdn-icons-png.flaticon.com/512/5968/5968509.png",
                            "https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png",
                            "https://cdn-icons-png.flaticon.com/512/5968/5968671.png",
                            "https://cdn.iconscout.com/icon/free/png-256/vue-dot-js-3629145-3030285.png",
                        ]}
                    ></ProjectCard>
                </div>
            </div>
        </div>
    );
}

export default Projects;
