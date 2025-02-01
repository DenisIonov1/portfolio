import axios from 'axios';
import { Project } from '../types/Project';
import { RepoData } from '../types/RepoData';
import AxiosInstance = Axios.AxiosInstance;

export class GitHubService {
    private axiosInstance: AxiosInstance;

    constructor() {
        const apiUrl = import.meta.env.VITE_GITHUB_API_URL;
        const apiVersion = import.meta.env.VITE_GITHUB_API_VERSION;

        this.axiosInstance = axios.create({
            baseURL: apiUrl,
            headers: {
                Accept: `application/vnd.github.${apiVersion}+json`,
            },
        });
    }


    public async fetchRepos(username: string, token?: string): Promise<Project[]> {
        try {
            const response = await this.axiosInstance.get<RepoData[]>(`/users/${username}/repos`, {
                headers: token ? { Authorization: `token ${token}` } : {},
            });
            return response.data.map((repo) => ({
                id: repo.id.toString(),
                title: repo.name,
                description: repo.description || 'Нет описания',
                technologies: repo.language ? [repo.language] : [],
                image: `${import.meta.env.VITE_IMAGE_URL}${username}/${repo.name}`,
            }));
        } catch (error) {
            if (error.response) {
                console.error(`Ошибка при получении репозиториев. Статус: ${error.response.status}`);
                if (error.response.status === 404) {
                    throw new Error('Репозиторий не найден (404)');
                } else if (error.response.status === 500) {
                    throw new Error('Ошибка сервера (500). Попробуйте позже.');
                }
                throw new Error(`Ошибка при получении данных: ${error.response.statusText}`);
            } else if (error.request) {
                console.error('Ошибка сети: не получен ответ от сервера.');
                throw new Error('Ошибка сети. Проверьте соединение.');
            } else {
                console.error('Неизвестная ошибка:', error.message);
                throw new Error(`Неизвестная ошибка: ${error.message}`);
            }
        }
    }
}