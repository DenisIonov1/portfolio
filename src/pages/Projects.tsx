import React, {useState, useEffect} from 'react';
import { observer } from 'mobx-react-lite';
import { projectStore } from '../store/ProjectStore';
import { Technology } from '../store/ProjectStore';
import '../styles/Projects.css';
import { AddProject } from '../components/AddProject';
import { ProjectCard } from '../components/ProjectCard';

const username = 'DenisIonov1';

export const Projects = observer(() => {
    const [isFormVisible, setFormVisible] = useState(false);
    const { filteredProjects, setSelectedTech } = projectStore;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;
        const fetchProjects = async () => {
            setLoading(true);
            setError(null);
            try {
                await projectStore.fetchProjects(username);
                if (isMounted) {
                    setLoading(false);
                }
            } catch (err) {
                console.error('Ошибка получения проекта:', err);
                if (isMounted) {
                    setError('Не удалось загрузить проекты. Попробуйте еще раз.');
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }

            }
        };

        fetchProjects();
        return () => {
            isMounted = false;
        };
    }, []);

    const handleTechChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (Object.values(Technology).includes(value as Technology)){
            setSelectedTech(value as Technology)
        }
        else {
            console.warn(`Недопустимое значение технологии: ${value}`)
        }
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
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    {loading && <div className="spinner"></div>}
                    {error && <p className="error-message">{error}</p>}
                    {!loading && !error && (
                        <>
                            <h3>Проекты с GitHub</h3>
                            {projectStore.githubProjects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    isGitHubProject={true}
                                    githubLink={`https://github.com/${username}/${project.title}`}
                                />
                            ))}
                        </>
                    )}

                </div>
            </section>
        </div>
    );
});


