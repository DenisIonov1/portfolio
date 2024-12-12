import React from 'react';
import '../styles/Skills.css'
const Skills: React.FC = () => {
    return <div className='skills-page'>
        <section className='skills-card'>
            <p>Навыки</p>
            <ul className='list-of-skills'>
                <li className='skills-card-item'>HTML</li>
                <li className='skills-card-item'>CSS</li>
                <li className='skills-card-item'>JavaScript</li>
                <li className='skills-card-item'>TypeScript</li>
                <li className='skills-card-item'>React</li>
                <li className='skills-card-item'>Python</li>
                <li className='skills-card-item'>C++</li>
                <li className='skills-card-item'>SQL</li>
                <li className='skills-card-item'>Figma</li>
            </ul>
        </section>
    </div>;
};

export default Skills;