import { makeAutoObservable, runInAction } from 'mobx';
import { Project } from '../types/Project';
import { fetchRepos } from '../services/githubService.ts'
export enum Technology {
    All = 'All',
    React = 'React',
    TypeScript = 'TypeScript',
    NodeJS = 'Node.js',
    CSS = 'CSS',
    HTML = 'HTML',
    JavaScript = 'JavaScript',
    Figma = 'Figma',
}
class ProjectStore {
    projects: Project[] = [];
    githubProjects: Project[] = [];
    selectedTech: Technology = Technology.All;

    status: 'idle' | 'loading' | 'succeeded' | 'failed' = 'idle';
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
        this.loadInitialProjects();
    }

    loadInitialProjects() {
        const savedProjects = localStorage.getItem('projects');
        if (savedProjects) {
            try {
            this.projects = JSON.parse(savedProjects);
        } catch (error) {
            console.error('Ошибка', error);
            this.projects = [];
            }
        }
        else {
            this.projects = [
                {
                    id: '1',
                    title: 'Одностраничный сайт',
                    description: 'Разработка сайта по макету',
                    technologies: [Technology.CSS, Technology.HTML, Technology.JavaScript],
                    image: '../src/assets/mouth-site-full.jpg',
                },
                {
                    id: '2',
                    title: 'Сайт для клуба',
                    description: 'Проект для разработки сайта для яхт-клуба.',
                    technologies: [Technology.React, Technology.NodeJS],
                    image: '../src/assets/sail-club.jpg',
                },
                {
                    id: '3',
                    title: 'Онлайн-магазин',
                    description: 'Дизайн магазин с корзиной и системой оплаты.',
                    technologies: [Technology.Figma],
                    image: "../src/assets/design-vlru.jpg",
                },
                {
                    id: '4',
                    title: 'Социальная сеть',
                    description: 'Создание сайта для общения пользователей.',
                    technologies: [Technology.React, Technology.NodeJS],
                    image: '../src/assets/social-site.jpg',
                },
            ];
        }
    }
    fetchProjects = async ( username : string, forceRefresh: boolean = false) => {
        if (!forceRefresh && this.githubProjects.length > 0) {
            console.log('Проекты уже загружены');
            return;
        }
        this.status = 'loading';
        this.error = null;
        try {
            const fetchedProjects = await fetchRepos(username);
            runInAction(() => {
                this.githubProjects = fetchedProjects;
                this.status = 'succeeded';
            })
        } catch (error: unknown) {
            runInAction(() => {
                this.status = 'failed';
                this.error = (error as Error).message;
            })
        }
    }

    addProject(project: Project) {
        const projectExists = this.projects.some(existingProject =>
            existingProject.id === project.id || existingProject.title === project.title
        );
        if (projectExists) {
            console.log('Проект уже существует');
            return;
        }
        this.projects.push(project);
        this.saveToLocalStorage();
    }

    setSelectedTech(tech: Technology) {
        this.selectedTech = tech;
    }

    get filteredProjects() {
        return this.selectedTech === Technology.All
            ? this.projects
            : this.projects.filter(project =>
                project.technologies.includes(this.selectedTech)
            );
    }

    private saveToLocalStorage() {
        localStorage.setItem('projects', JSON.stringify(this.projects));
    }
}

export const projectStore = new ProjectStore();
