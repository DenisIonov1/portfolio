import { Project } from '../types/Project';

export const projects: Project[] = [
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
