import axios from 'axios';
import { Project } from '../types/Project';
import { RepoData } from '../types/RepoData';


const axiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
});

export const fetchRepos = async (username: string, token?: string): Promise<Project[]> => {
    try {
        const response = await axiosInstance.get<RepoData[]>(`/users/${username}/repos`, {
            headers: token ? { Authorization: `token ${token}` } : {},
        });

        return response.data.map((repo) => ({
            id: repo.id.toString(),
            title: repo.name,
            description: repo.description || 'Нет описания',
            technologies: repo.language ? [repo.language] : [],
            image: `https://opengraph.githubassets.com/1/${username}/${repo.name}`,
        }));
    } catch (error) {
        console.error('Ошибка получения репозиториев:', error);
        throw new Error('Ошибка получения');
    }
};