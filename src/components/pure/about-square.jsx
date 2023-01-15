import React from 'react';

const AboutSquare = ({number,text}) => {
    return (
        <div className="col-11 col-lg-5 info-square info-square-one">
            <h2 className="square-number"> {number} </h2>
            <h3 className='square-text text-center'>{text}</h3>
        </div>
    );
}

export default AboutSquare;
