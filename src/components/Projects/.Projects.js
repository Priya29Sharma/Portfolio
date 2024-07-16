import React from 'react'
import "./Projects.css"
import projects from "../../data/projects.json"
import projectImage from "../../imges/project.webp"
import ticTacToeImage from "../../imges/project.webp"
import passwordGeneratorImage from "../../imges/project.webp"
import devdetectorAppImage from "../../imges/project.webp"
import todoListImage from "../../imges/project.webp"
import nihalImport from "../../imges/project.webp"







const getImageForProject = (title) => {
    switch (title) {
        case 'Tic-Tac-Toe':
            return ticTacToeImage;
        case 'Password Generator':
            return passwordGeneratorImage;
        case 'To-do List':
            return todoListImage;
        case 'Devdetector App':
            return devdetectorAppImage;
        case 'Nihal Import':
            return nihalImport;
       // Default image if project image is not found
    }
};

const Projects = ()=>{
    return <section className='container4' id='projects'>
        <h2 className='title5'>Projects</h2>
        <div className='content4'>
            {
                projects.map((project,id) =>{
                    return<div className='container41' key={id}>
                        <img src={getImageForProject(project.title)} alt={project.title} className='projectImage'/>
                        <h3 className='project-title'>{project.title}</h3>
                         <p className='description2'>{project.description}</p>
                        <ul className='skills2'>
                            {
                                project.skills.map((skill,id) =>{
                                    return(
                                   <li className='skill2' key={id}>{skill}</li> 
                                    );
                                })

                            }
                        </ul>
                        <div className='links'>
                            <a href={project.demo} className='link'>Demo</a>
                            <a href={project.source} className='link'>Source</a>

                        </div>

                    </div>

                
                })

            }
        </div>
        </section>
    
}

export default Projects