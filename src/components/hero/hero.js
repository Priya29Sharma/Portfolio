import React from "react";
import "./hero.css"
import heroImage from"../../imges/heroImage.png"

const Hero= () =>{
    return <section className="container">
        <div className="content">
            <h1 className="title">Hi, I'm PRIYA</h1>
            <p className="description">
               I'm an enthusiastic final-year Bachelor of Engineering 
               student with a specialization in Web Development, adept 
               at HTML, CSS, JavaScript, and popular frameworks like React.
            </p>

            <a href="mailto:priyasharma291103@gmail.com" className="contactBtn">Contact Me</a>

        </div>
        <img src={heroImage} alt="Hero image of me" className="heroImg"></img>
        <div className="TopBlur"/>
        <div className="bottomBlur"/>

    </section>;
}




export default Hero