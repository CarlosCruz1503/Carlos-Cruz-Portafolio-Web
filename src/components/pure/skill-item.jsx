import React from 'react';

const SkillItem = ({img}) => {
    return (
        <div className="col-4 col-md-3 col-xl-2 col-xxl-1 col-skill">
            <img className="img" src={img} alt="Not Found Image" />
        </div>
    );
}

export default SkillItem;
