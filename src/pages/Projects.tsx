import React, {useState} from 'react';
import { observer } from 'mobx-react-lite';
import { projectStore } from '../store/ProjectStore';
import { Technology } from '../store/ProjectStore';
import '../styles/Projects.css';
import { AddProject } from '../components/AddProject';

export const Projects = observer(() => {
    const [isFormVisible, setFormVisible] = useState(false);
    const { filteredProjects, setSelectedTech } = projectStore;

    const handleTechChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTech(e.target.value as Technology);
    };
    const toggleFormVisibility = () => {
        setFormVisible(!isFormVisible);
    };

    return (
        <div className="projects-page">
            <section className="projects-card">
                <p className="header">Мои проекты</p>

                <div className="filter">
                    <label htmlFor="tech-filter">Выберите технологии: </label>
                    <select
                        id="tech-filter"
                        value={projectStore.selectedTech}
                        onChange={handleTechChange}
                    >
                        <option value={Technology.All}>Все</option>
                        <option value={Technology.React}>React</option>
                        <option value={Technology.TypeScript}>TypeScript</option>
                        <option value={Technology.NodeJS}>Node.js</option>
                        <option value={Technology.CSS}>CSS</option>
                        <option value={Technology.HTML}>HTML</option>
                        <option value={Technology.JavaScript}>JavaScript</option>
                        <option value={Technology.Figma}>Figma</option>
                    </select>
                </div>
                <button onClick={toggleFormVisibility}>
                    {isFormVisible ? 'Закрыть' : 'Добавить проект'}
                </button>
                {isFormVisible && <AddProject/>}

                <div className="projects-card-list">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="project-card-item">
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
});


