import React, {useState, useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import { projectStore } from '../store/ProjectStore';
import { Technology } from '../store/ProjectStore';
import '../styles/Projects.css';
import { AddProject } from '../components/AddProject';

export const Projects = observer(() => {
    const [isFormVisible, setFormVisible] = useState(false);
    const { filteredProjects, setSelectedTech } = projectStore;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true);
            setError(null);
            try {
                await projectStore.fetchProjects('DenisIonov1');
            } catch (err) {
                console.error('Ошибка получения проекта:', err);
                setError('Не удалось загрузить проекты. Попробуйте еще раз.');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

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
                <button onClick={() => projectStore.fetchProjects('DenisIonov1', true)}>
                    Обновить проекты
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
                    {loading && <div className="spinner"></div>}
                    {error && <p className="error-message">{error}</p>}
                    {!loading && !error && (
                        <>
                            <h3>Проекты с GitHub</h3>
                            {projectStore.githubProjects.map((project) => (
                                <div key={project.id} className="project-card-item">
                                    <h3>{project.title}</h3>
                                    <p>{project.description || 'Нет описания'}</p>
                                    <p>Технологии: {project.technologies.join(', ')}</p>
                                    <p><a href={`https://github.com/DenisIonov1/${project.title}`}
                                          target="_blank"
                                          rel="noopener noreferrer">Ссылка на репозиторий</a></p>
                                    <img src={project.image} alt={project.title}/>

                                </div>
                            ))}
                        </>
                    )}

                </div>
            </section>
        </div>
    );
});


