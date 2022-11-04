
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Projects.module.css';
import snake from './images/snake.jpeg';
import SH from './images/SH.jpeg';
import hapag from './images/hapag.jpeg';
import Todo from './images/todo.jpeg';

const Projects = () => {
    return (
        <>
            <div className={style.projectContainer}>
                <h1>Projects</h1>
                <div className={style.projectDiv}>
                    <h2>SNAKE</h2>
                    <p>My First Javascript Project</p>
                    <a href="https://github.com/Gaijin-AK/JSGAME" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://nimble-beignet-270815.netlify.app/"  target="_blank" rel="noopener noreferrer"
                    className={style.projectShow}>
                        <img src={snake} alt="snake" className={style.projectImg}/></a>
                </div>
                <div className={style.projectDiv}>
                    <h2>SilverHand's Fateless</h2>
                    <p>This is a E-commerce frontend app</p>
                    <a href="https://github.com/Gaijin-AK/Resto"  target="_blank"rel="noopener noreferrer">Github</a>
                    <a href = "https://sprightly-kringle-870a59.netlify.app/" target="_blank" rel="noopener noreferrer"   className={style.projectShow}>
                    <img src={SH} alt="fateless" className={style.projectImg} />
                    </a>
                </div>
                <div className={style.projectDiv}>
                    <h2>To-Do-App</h2>
                    <p>Simple To-Do-App</p>
                    <a href="https://github.com/Gaijin-AK/To-Do-App"  target="_blank" rel="noopener noreferrer">Github</a>
                    <a href = "https://frabjous-macaron-59e032.netlify.app/" target="_blank" rel="noopener noreferrer" className={style.projectShow}>
                    <img src={Todo} alt="fateless" className={style.projectImg} />
                    </a>
                </div>
                <div className={style.projectDiv}>
                    <h2>Hapag</h2>
                    <p>This is a Social Media App for Recipes</p>
                    <a href="https://github.com/Caspian3119/github-project7" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fhapag.netlify.app%2F%3Ffbclid%3DIwAR0ZOk3Zs4qcyj7JJdi-yhQA8A0dBnb0q1-tVBYYrAwWMcRkAphgyXf6g7U&h=AT1YuJeEbvLA3rkTuq1bDrsTI-UXEdqOxoPpsEz9zqEbD-qnHJ5SWIRem1tRCmzkFfOqsa3RYmUKZX0vyMgtieIAk8v26K1258UUlyOkzvh8Y8Xtv8jFy0wahgk7z9yJeDTozm5ujS7HZH4"  target="_blank"
                    className={style.projectShow} rel="noopener noreferrer">
                    <img src={hapag} alt="hapag" className={style.projectImg} />
                    </a>
                </div>
            </div>
                <div className={style.links}>
                <Link to='/about' >About</Link>
                <Link to='/contact' >Contact</Link>
                </div>
        </>
    )
}

export default Projects