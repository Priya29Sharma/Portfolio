import React from "react";
import "./About.css"
import aboutImage from"../../imges/aboutImage.png"
import cursorIcon  from"../../imges/cursorIcon.png"
import serverIcon  from"../../imges/serverIcon.png"
import uiIcon  from"../../imges/uiIcon.png"

const About=()=>{
    return <section className="container2" id="about">
        <h2 className="title3">About</h2>
        <div className="content2">
        <img src={aboutImage} 
        alt=" Me sitting with a laptop"
        className="aboutImage"
        />
        <ul className="aboutItems">
            <li className="aboutItem">
                <img src={cursorIcon} alt=" Cursor icon"/>
                <div className="aboutItemText">
                    <h3>Web Development Expertise (React)</h3>
                    <p>
                    Demonstrated proficiency in web development,
                     particularly with React, showcasing the ability to 
                     create dynamic and engaging user interfaces using 
                     modern technologies and industry best practices.
                    </p>
                </div>
            </li>
            <li className="aboutItem" >
                <img src={serverIcon} alt=" Server icon"/>
                <div className="aboutItemText">
                    <h3>Data Structures Proficiency</h3>
                    <p>
                    Equipped with a strong foundation in Data Structures 
                    and Algorithms, adept at problem-solving and algorithmic
                     thinking crucial for efficient application development.
                    </p>
                </div>
            </li>
            <li className="aboutItem">
                <img src={uiIcon} alt=" Ui icon"/>
                <div className="aboutItemText">
                    <h3> Computer Fundamentals</h3>
                    <p>
                    Possessing a comprehensive grasp of computer fundamentals, 
                    including core concepts in computer science.
                    </p>
                </div>
            </li>
        </ul>
        
        </div>
    </section>
}

export default About