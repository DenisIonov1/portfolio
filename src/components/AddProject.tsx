
import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { projectStore } from '../store/ProjectStore';
import { Project } from '../types/Project';
import '../styles/AddProject.css';

const AddProject: React.FC = observer(() => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [technologies, setTechnologies] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [error, setError] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !description || !technologies || !image) {
            setError('Все поля должны быть заполнены!');
            return;
        }

        const newProject: Project = {
            id: Date.now(),
            title,
            description,
            technologies: technologies.split(',').map((tech) => tech.trim()),
            image,
        };

        projectStore.addProject(newProject);

        setTitle('');
        setDescription('');
        setTechnologies('');
        setImage('');
    };

    return (
        <div className="add-project">
            <p className="header">Добавить новый проект</p>
            <form onSubmit={handleSubmit} className="add-project-form">
                <label>Название проекта</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <label>Описание</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                <label>Технологии</label>
                <input
                    type="text"
                    value={technologies}
                    onChange={(e) => setTechnologies(e.target.value)}
                    placeholder="Через запятую"
                    required
                />

                <label>Ссылка на изображение</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />

                {error && <p className="error-message">{error}</p>}

                <button type="submit" disabled={!title || !description || !technologies || !image}>
                    Добавить проект
                </button>
            </form>
        </div>
    );
});

export default AddProject;
