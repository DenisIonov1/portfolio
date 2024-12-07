import React, { useState } from 'react';
import { projects } from '../data/Projects';
import '../styles/Projects.css';

const Projects: React.FC = () => {
    const [selectedTech, setSelectedTech] = useState<string>('All');

    const filteredProjects = projects.filter((project) =>
        selectedTech === 'All' ? true : project.technologies.includes(selectedTech)
    );

    return (
        <div className='projects-page'>
            <section className='projects-card'>
                <p className='header'>Мои проекты</p>

                <div className='filter'>
                    <label htmlFor="tech-filter">Выберите технологии: </label>
                    <select
                        id="tech-filter"
                        value={selectedTech}
                        onChange={(e) => setSelectedTech(e.target.value)}
                    >
                        <option value="All">Все</option>
                        <option value="React">React</option>
                        <option value="TypeScript">TypeScript</option>
                        <option value="Node.js">Node.js</option>
                    </select>
                </div>
                <div className='projects-card-list'>


                    {filteredProjects.map((project) => (
                        <div key={project.id} className='project-card-item'>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p>Технологии: {project.technologies.join(', ')}</p>
                            <img src={project.image} alt={project.title}/>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
