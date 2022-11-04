
import React from 'react';
import style from './Contacts.module.css';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className={style.contact}>
            <div className={style.contact__container}>
                <div className={style.social}>
                    <h1 >Contacts</h1>
                    <h2>Reach Out to Me!</h2>
                <p>Send me an E-mail if you have something in mind.
                     My Socials are also Open.</p>
                </div>
                <div className={style.socialContainer}>
                    <div className={style.contact__container__socials__item}>
                        <a href="https://www.facebook.com/GaijinisME/" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="facebook" target="_blank" />
                        </a>
                    </div>
                    <div className={style.socialContainer}>
                        <a href="https://www.instagram.com/moonfenxgaijin/" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram" target="_blank" />
                        </a>
                    </div>
                    <div className={style.socialContainer}>
                        <a href="https://www.linkedin.com/in/a-k-2a4a18212/" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" target="_blank" />
                        </a>
                    </div>
                    <div className={style.socialContainer}>
                        <a href="https://twitter.com/Gaijin1130/" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" target="_blank" />
                        </a>
                    </div>
                </div>
                <div>
                    <h2>Email Me</h2>
                    <form action='/action_page.php' className={style.email}>
                        <input type="text" placeholder="Name"  className={style.input}/>
                        <input type="email" placeholder="Email" className={style.input}/>
                        <textarea placeholder="Message" className={style.input}></textarea>
                        <button type="submit" className={style.button}>Send</button>
                    </form>
                </div>
                <Link to='/' className={style.home}>Back to Home</Link>
            </div>
        </div>
    )
}

export default Contact;
