import React from 'react';
import "../styles/css/redes.scss"
const Redes = () => {
    return (
        <div className='networks hidden'>
            <div className="line-decoration"></div>
            <a href="https://www.linkedin.com/in/carlos-jose-cruz-luengas/" target="_blank" className="btn fix-networks"><i class="bi bi-linkedin icons-networks" ></i></a>
            <a href="https://github.com/CarlosCruz1503" target="_blank" className="btn fix-networks"><i class="bi bi-github icons-networks" ></i></a>
            <a className="btn fix-networks"  href='mailto:carlosjose445566@gmail.com'><i class="bi bi-envelope icons-networks" ></i></a>
        </div>
    );
}

export default Redes;
