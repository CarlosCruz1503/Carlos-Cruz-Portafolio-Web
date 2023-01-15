import React from 'react';

const ProjectCard = ({ img, title, nota1, nota2, linkWeb, linkGit, icons, iconLarge }) => {

    return (
        <div className="col-11 col-md-5 col-xl-4">
            <div className='square' style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "50% 50%" }}>
                <div className="content-square">
                    <h5 className='text-center mt-2'>{title}</h5>
                    <p>{nota1}</p>
                    <p>{nota2}</p>
                    <div className="buttons-projects-square">
                        <a href={linkWeb} target="_blank" className="btn projects-icons"><i class="bi bi-link-45deg icons-networks" ></i></a>
                        <a href={linkGit} target="_blank" className="btn projects-icons"><i class="bi bi-github icons-networks" ></i></a>
                    </div>
                    <h5 className='tech-uses'>Tecnologías usadas</h5>

                    <div className="technologies-projects-square mb-1">
                        {icons ? icons.map((element, key) => {
                            return (<p class="icons-technologies" key={key}>
                                <img src={element} alt="Not Found Image" />
                            </p>)
                        }) :
                            <></>}
                        { iconLarge ? <p class="icons-technologies i-large" >
                            <img src={iconLarge} className="img-large" alt="Not Found Image" />
                        </p>:
                        <></>}

                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProjectCard;
