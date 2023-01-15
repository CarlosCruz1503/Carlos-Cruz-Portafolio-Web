import React from 'react';
import "../../styles/css/skills.scss"
import SkillItem from '../pure/skill-item';
import htmlLogo from "../../../public/images/html-logo.png"
import cssLogo from "../../../public/images/css-logo.png"
import jsLogo from "../../../public/images/js-logo.png"
import bsLogo from "../../../public/images/bs-logo.png"
import reactLogo from "../../../public/images/react-logo.png"
import pythonLogo from "../../../public/images/python-logo.png"
import djLogo from "../../../public/images/dj-logo.png"
import djrestLogo from "../../../public/images/djrest-logo.png"
import gitLogo from "../../../public/images/git-logo.png"
import gitHubLogo from "../../../public/images/gitHub-logo.png"
import postLogo from "../../../public/images/post-logo.png"
import mongoLogo from "../../../public/images/mongo-logo.jpg"

const Skills = () => {
    return (
        <div className='div-skills' id="skills">
            <div className="skills">
                <div className="row row-skills">
                    <h1 className='title' id="skills-title">Skills.</h1>
                    <SkillItem img={htmlLogo}></SkillItem>
                    <SkillItem img={cssLogo}></SkillItem>
                    <SkillItem img={jsLogo}></SkillItem>
                    <SkillItem img={bsLogo}></SkillItem>
                    <SkillItem img={reactLogo}></SkillItem>
                    <SkillItem img={pythonLogo}></SkillItem>
                    <SkillItem img={djLogo}></SkillItem>
                    <SkillItem img={djrestLogo}></SkillItem>
                    <SkillItem img={gitLogo}></SkillItem>
                    <SkillItem img={gitHubLogo}></SkillItem>
                    <SkillItem img={postLogo}></SkillItem>
                    <SkillItem img={mongoLogo}></SkillItem>
                </div>
            </div>
        </div>
    );
}

export default Skills;
