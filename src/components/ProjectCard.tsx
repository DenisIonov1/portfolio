import React from 'react';
import { Project } from '../types/Project';

interface ProjectCardProps {
    project: Project;
    isGitHubProject?: boolean;
    githubLink?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, isGitHubProject, githubLink }) => (
    <div className="project-card-item">
        <h3>{project.title}</h3>
        <p>{project.description || 'Нет описания'}</p>
        <p>Технологии: {project.technologies.join(', ')}</p>
        {isGitHubProject && githubLink && (
            <p>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    Ссылка на репозиторий
                </a>
            </p>
        )}
        <img src={project.image} alt={project.title} />
    </div>
);