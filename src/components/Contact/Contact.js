import React from 'react'
import "./Contact.css"
import emailIcon from "../../imges/emailIcon.png";
import linkedinIcon from "../../imges/linkedinIcon.png";
import githubIcon from "../../imges/githubIcon.png";



const Contacts =()=>{
    return <footer id='contact' className='container5'>
        <div className='text'>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className='links2'>
            <li className='link2'>
                <img src={emailIcon} alt='Email icon'/>
                <a href='mailto:priyasharma291103@gmail.com'>priyasharma291103@gmail.com</a>
            </li>
            <li className='link2'>
                <img src={linkedinIcon} alt='linkedin icon'/>
                <a href='https://www.linkedin.com/in/priya-sharma-aa1560250/'>linkedin.com/priyasharma</a>
            </li>
            <li className='link2'>
                <img src={githubIcon} alt='Github icon'/>
                <a href='https://github.com/Priya29Sharma'>github.com/priyasharma</a>
            </li>
        </ul>
    </footer>
}





export default Contacts;