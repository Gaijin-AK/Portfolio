//make a about me page


import React from 'react';
import { Link } from 'react-router-dom';
import style from './About.module.css';

const About = () => {
    return (
        <>
            <div className={style.about}>
                <h1 >About Me</h1>
                <p >My name is <strong>Abcde Keith Leonardo</strong> "AK" for short. I am a full stack web developer. I have been working in the web development field for almost a year.  I am proficient in HTML, CSS, JavaScript, React, Node, and Express. I am currently looking for a full time position as a web developer. I am also looking for freelance work. Previously was in Hotel and Restaurant industry at Centro Escolar University Now a Graduate Web Developer in Uplift Code Camp.  I love playing video games ever since a kid also watch anime or action movies.Also, growing up with passion for japanese car culture. If you have any questions, please feel free to contact me.</p>
                <p>"One Level-UP at a grind"</p>

             <button><a href="https://drive.google.com/file/d/1uUNVCU2rOqT8Ss4wG4EenQPNHyWpnIxs/view?usp=share_link" target="_blank">My Resume </a></button>
            <Link to='/contact' className={style.contact}>Contact Me</Link>

             </div>
            <div className={style.links}>
            <Link to='/project' >Home</Link>
             <Link to='/project'>Project</Link>

            </div>
        </>
    )
}

export default About;
