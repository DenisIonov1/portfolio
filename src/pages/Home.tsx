import React from 'react';
import '../styles/Home.css';
const Home: React.FC= () => {
    return (
        <section className='home-section'>
            <img className = "home-page-img" src="../src/assets/draw.jpg" alt="" />

            <div className='home-description'>
                <h1>Привет</h1>
                <h1>Я Денис</h1>
                <p>Учусь веб-разработке и дизайну</p>
            </div>
        </section>
    );

};
export default Home;