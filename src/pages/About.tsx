import React from 'react';
import '../styles/About.css'

const About: React.FC = () => {
    return <div className='about-page'>

        <section className="section-about">
            <p>Немного о себе</p>
            <ul className='about-list'>
                <li className='about-list-item 1'>Привет! Я Денис, студент и начинающий веб-разработчик, увлеченный созданием красивых и функциональных сайтов</li>
                <li className='about-list-item 2'>Основные навыки и технологии, которые я использую: HTML, CSS, JavaScript, React, TypeScript</li>
                <li className='about-list-item 3'>В свободное время я люблю играть в баскетбол. Эта игра учит командной работе, стратегии и всегда помогает оставаться в тонусе</li>
                <li className='about-list-item 4'>Всегда открыт к интересным проектам и предложениям! Если у вас есть вопросы или предложения, свяжитесь со мной</li>
            </ul>
        </section>
    </div>
};

export default About;