import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { projectStore } from '../store/ProjectStore';
import { Technology } from '../store/ProjectStore';
import { Project } from '../types/Project';
import '../styles/AddProject.css';
import { v4 as uuidv4 } from 'uuid';

export const AddProject: React.FC = observer(() => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        technologies: [],
        image: '',
        error: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { title, description, technologies, image } = formData;
        if (!title || !description || !technologies.length || !image) {
            setFormData(prevData => ({
                ...prevData,
                error: 'Все поля должны быть заполнены!'
            }));
            return;
        }

        const newProject: Project = {
            id: uuidv4(),
            title,
            description,
            technologies,
            image,
        };

        projectStore.addProject(newProject);

        setFormData({
            title: '',
            description: '',
            technologies: [],
            image: '',
            error: ''
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleTechChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTech = e.target.value as Technology;
        setFormData(prevData => ({
            ...prevData,
            technologies: [...prevData.technologies, selectedTech]
        }));
    };

    return (
        <div className="add-project">
            <p className="header">Добавить новый проект</p>
            <form onSubmit={handleSubmit} className="add-project-form">
                <label>Название проекта</label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <label>Описание</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />

                <label>Технологии</label>
                <select name="technologies" onChange={handleTechChange}>
                    <option value={Technology.All}>Все</option>
                    <option value={Technology.React}>React</option>
                    <option value={Technology.TypeScript}>TypeScript</option>
                    <option value={Technology.NodeJS}>Node.js</option>
                    <option value={Technology.CSS}>CSS</option>
                    <option value={Technology.HTML}>HTML</option>
                    <option value={Technology.JavaScript}>JavaScript</option>
                    <option value={Technology.Figma}>Figma</option>
                </select>

                <label>Ссылка на изображение</label>
                <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    required
                />

                {formData.error && <p className="error-message">{formData.error}</p>}

                <button type="submit" disabled={!(formData.title && formData.description && formData.technologies.length && formData.image)}>
                    Добавить проект
                </button>
            </form>
        </div>
    );
});
