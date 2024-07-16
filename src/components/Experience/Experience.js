
import React from 'react';
import skills from '../../data/skills.json';
import './Experience.css';

// Import your images
import htmlImage from '../../imges/html.png';
import cssImage from '../../imges/css.png';
import reactImage from '../../imges/react.png';
import dbmsImage from '../../imges/d.png';
import jsImage from '../../imges/node.png';
import dsaImage from '../../imges/dsaimage.png';
import cnImage from '../../imges/computer.png';


const getImageForSkill = (title) => {
    switch (title) {
        case 'HTML':
            return htmlImage;
        case 'CSS':
            return cssImage;
        case 'React':
            return reactImage;
        case 'DSA':
            return dsaImage;
        case 'DBMS':
            return dbmsImage;
        case 'SQL':
            return jsImage;
        case 'JS':
            return jsImage;
        case 'CN':
            return cnImage;
        case 'OOPS':
            return dsaImage;
        
        default:
            return null;
    }
};









const Experience = () => {
    return (
        <section className='container3' id="experience">
            <h2 className='title4'>Skills</h2>
            <div className="skills">
                {skills.map((skill, index) => (
                    <div key={index} className='skill'>
                        {/* Display the image */}
                        <div className='skillImageContainer'>
                        <img src={getImageForSkill(skill.title)} alt={skill.title} />
                        </div>
                        {/* Display the title */}
                        <p>{skill.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};




export default Experience;
