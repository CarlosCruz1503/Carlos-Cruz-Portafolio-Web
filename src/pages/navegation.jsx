import React from 'react';
import "../styles/css/navegation.scss"
const Navegation = () => {
    return (
        <div>
            <div className='navegation'>
                <div className="line-decoration"></div>
                <a className="btn fix-networks" href="#home"><i class="bi bi-house-fill icons-networks" ></i></a>
                <a className="btn fix-networks" href="#about"><i class="bi bi-person-fill icons-networks" ></i></a>
                <a className="btn fix-networks" href="#projects"><i class="bi bi-briefcase-fill icons-networks" ></i></a>
                <a className="btn fix-networks" href="#skills"><i class="bi bi-binoculars-fill icons-networks" ></i></a>
                <a className="btn fix-networks" href="#form"><i class="bi bi-envelope-open-fill icons-networks" ></i></a>
            </div>
            <div className='navegationcel'>
                <a className="btn fix-networks" href="#home"><i class="bi bi bi-house-fill icons-navegation" ></i></a>
                <a className="btn fix-networks" href="#about-title"><i class="bi bi-person-fill icons-navegation" ></i></a>
                <a className="btn fix-networks" href="#projects-title"><i class="bi bi-briefcase-fill icons-navegation" ></i></a>
                <a className="btn fix-networks" href="#skills-title"><i class="bi bi-binoculars-fill icons-navegation" ></i></a>
                <a className="btn fix-networks" href="#form-title"><i class="bi bi-envelope-open-fill icons-navegation" ></i></a>
            </div>
        </div>
    );
}

export default Navegation;
