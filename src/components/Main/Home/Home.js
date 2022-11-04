
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.css';

const Home = () => {
    return (
        <>
            <div className={style.home}>
                <h1>HI! , I'm AK</h1>
                <h2>Full Stack Web Developer in the making</h2>
                <Link to='/about' className={style.about}>Click Here</Link>
            </div>
        </>
    )
}

export default Home