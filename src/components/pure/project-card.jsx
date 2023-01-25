import React from 'react';
const ProjectCard = ({ img, title, nota1, nota2, linkWeb, linkGit, linkGit2, icons, iconLarge }) => {

    return (
        <div className="col-11 col-xl-5 p-0">
            <div className='square' style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "50% 50%" }}>
                <div className="content-square">
                    <h5 className='text-center mt-2'>{title}</h5>
                    <h6>{nota1}</h6>
                    <h6>{nota2}</h6>
                    <div className="buttons-projects-square">
                        <a href={linkWeb} target="_blank" className="btn projects-icons"><i class="bi bi-link-45deg icons-networks" ></i></a>
                        {linkGit2
                            ?
                            <div>
                                <a href={linkGit} target="_blank" className="btn projects-icons"><i class="bi bi-github icons-networks" ></i><h6>FrontEnd</h6></a>
                                <a href={linkGit2} target="_blank" className="btn projects-icons"><i class="bi bi-github icons-networks" ></i><h6>BackEnd</h6></a>
                            </div>
                            :
                            <a href={linkGit} target="_blank" className="btn projects-icons"><i class="bi bi-github icons-networks" ></i></a>
                        }
                    </div>
                    <h5 className='tech-uses'>Tecnologías usadas</h5>

                    <div className="technologies-projects-square mb-1">
                        {icons ? icons.map((element, key) => {
                            return (<p class="icons-technologies" key={key}>
                                <img src={element} alt="Not Found Image" />
                            </p>)
                        }) :
                            <></>}
                        {iconLarge  
                        ?
                        iconLarge.map((element, key) => {
                            return (<p class="icons-technologies i-large" key={key}>
                                <img className="img-large" src={element} alt="Not Found Image" />
                            </p>)
                        }) :
                        <></>}

                    </div>
                </div>
            </div>
        </div>

    );
}

export default ProjectCard;
