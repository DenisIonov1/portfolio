import React from 'react';
import '../styles/Skills.css'
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {

    return <div className={'skills-page'}>

        <section className='skills-card'>
            <p>Навыки</p>
            <ul className='list-of-skills'>
                {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Python', 'C++', 'SQL', 'Figma'].map((skill, index) => (
                    <motion.li
                        key={skill}
                        className='skills-card-item'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    </div>;
};

