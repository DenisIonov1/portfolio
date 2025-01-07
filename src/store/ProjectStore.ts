import { makeAutoObservable } from 'mobx';
import { Project } from '../types/Project';

class ProjectStore {
    projects: Project[] = [];
    selectedTech: string = 'All';

    constructor() {
        makeAutoObservable(this);
        this.loadInitialProjects();
    }

    loadInitialProjects() {
        const savedProjects = localStorage.getItem('projects');
        if (savedProjects) {
            this.projects = JSON.parse(savedProjects);
        } else {
            this.projects = [
                {
                    id: 1,
                    title: 'Одностраничный сайт',
                    description: 'Разработка сайта по макету',
                    technologies: ['CSS', 'HTML', 'JavaScript'],
                    image: '../src/assets/mouth-site-full.jpg',
                },
                {
                    id: 2,
                    title: 'Сайт для клуба',
                    description: 'Проект для разработки сайта для яхт-клуба.',
                    technologies: ['React', 'Node.js'],
                    image: '../src/assets/sail-club.jpg',
                },
                {
                    id: 3,
                    title: 'Онлайн-магазин',
                    description: 'Дизайн магазин с корзиной и системой оплаты.',
                    technologies: ['Figma'],
                    image: "../src/assets/design-vlru.jpg",
                },
                {
                    id: 4,
                    title: 'Социальная сеть',
                    description: 'Создание сайта для общения пользователей.',
                    technologies: ['React', 'Node.js'],
                    image: '../src/assets/social-site.jpg',
                },
            ];
        }
    }

    addProject(project: Project) {
        this.projects.push(project);
        this.saveToLocalStorage();
    }


    setSelectedTech(tech: string) {
        this.selectedTech = tech;
    }

    get filteredProjects() {
        return this.selectedTech === 'All'
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
