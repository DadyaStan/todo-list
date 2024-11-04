import { defineStore } from 'pinia';
import { ref } from 'vue';
import router from '../router';
import { UserRegistration, AuthData, Profile, Token } from "../types/auth";

const BASE_URL = 'https://easydev.club/api/v1';

export const useAuthStore = defineStore('auth', () => {
    const userInfo = ref({
        accessToken: '',
        refreshToken: '',
    });
    const userError = ref('');
    const isLoading = ref(false);

    const signup = async (registrationData: UserRegistration) => {
        try {
            const response: Response = await fetch(`${BASE_URL}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registrationData)
            });

            if (response.ok) {
                const result: Profile = await response.json();
                console.log(result);
                return result;
            } else {
                // Обработка различных кодов статуса
                let errorMessage = 'Произошла ошибка.';

                switch (response.status) {
                    case 400:
                        errorMessage = 'Некорректные данные. Пожалуйста, проверьте введённые данные.';
                        return response.status;
                    case 409:
                        errorMessage = 'Пользователь с такими данными уже существует.';
                        return response.status;
                    case 500:
                        errorMessage = 'Серверная ошибка. Пожалуйста, попробуйте позже.';
                        return response.status;
                    default:
                        errorMessage = `Неизвестная ошибка: ${response.statusText}`;
                }

                throw new Error(errorMessage);
            }

        } catch (error) {
            console.error(error);
            return error;

            throw new Error('Ошибка при регистрации: ' + Error);
        }
    }
    const signin = async (loginData: AuthData) => {
        try {
            const response: Response = await fetch(`${BASE_URL}/auth/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData)
            });

            if (response.ok) {
                const result: Token = await response.json();

                userInfo.value.accessToken = result.accessToken;
                userInfo.value.refreshToken = result.refreshToken;

                localStorage.setItem('accessToken', result.accessToken);
                localStorage.setItem('refreshToken', result.refreshToken);

                await fetchProfile();
                await router.push('/todo-list/todo');

                console.log(userInfo.value)
            } else {
                let errorMessage = 'Произошла ошибка.';

                switch (response.status) {
                    case 400:
                        errorMessage = '400 Bad Request: Ошибка десериализации запроса или неверный ввод.';
                        return response.status;
                    case 401:
                        errorMessage = '401 Unauthorized: Неверные учетные данные.';
                        return response.status;
                    case 500:
                        errorMessage = '500 Internal Server Error: Внутренняя ошибка сервера.';
                        return response.status;
                    default:
                        errorMessage = `Неизвестная ошибка: ${response.statusText}`;
                }
                throw new Error(errorMessage);
            }

        } catch (error) {
            console.error(error);

            throw new Error('Ошибка при регистрации: ' + Error);
        }
    }
    const fetchProfile = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');

            const response: Response = await fetch(`${BASE_URL}/user/profile`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            if (response.ok) {
                const profile = await response.json();

                await localStorage.setItem('userData', JSON.stringify(profile));

                console.log(profile);
            } else {
                let errorMessage = 'Произошла ошибка.';

                switch (response.status) {
                    case 400:
                        errorMessage = '400 Bad Request: Ошибка десериализации запроса или неверный ввод.';
                        return response.status;
                    case 401:
                        errorMessage = '401 Unauthorized: Неверные учетные данные.';
                        return response.status;
                    case 500:
                        errorMessage = '500 Internal Server Error: Внутренняя ошибка сервера.';
                        return response.status;
                    default:
                        errorMessage = `Неизвестная ошибка: ${response.statusText}`;
                }
                throw new Error(errorMessage);
            }
        } catch {
            console.error(new Error);

            throw new Error('EroRCHIK');
        }
    }
    const logout = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            console.log('logout 2')
            const response: any = await fetch(`${BASE_URL}/auth/logout`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            console.log('Logout');

            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('userData');

            router.push('/todo-list/login');

            if (!response.ok) {
                throw new Error;
            }
        } catch (error) {
            throw new Error;
        }
    }

    return { userInfo, signup, signin, fetchProfile, logout, userError, isLoading }
});