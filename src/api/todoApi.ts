export const BASE_URL = 'https://easydev.club/api/v1';

export const fetchAllTodo = async () => {
    try {
        const response = await fetch(`${BASE_URL}/todos`);
        const result = await response.json();

        if (!response.ok) {
            throw new Error('Ошибка при загрузки всех задач');
        }

        return result;
    } catch (error) {
        console.error(error);
    }
};

export const fetchFilteredTodo = async (newFilter: string) => {
    try {
        const response = await fetch(`${BASE_URL}/todos?filter=${newFilter}`);
        const result = await response.json();

        if (!response.ok) {
            throw new Error('Ошибка при загрузки всех задач');
        }

        return result;
    } catch (error) {
        console.error(error);
    }
}

export const createNewTodo = async (inputValue: string): Promise<void> => {
    try {
        const response = await fetch(`${BASE_URL}/todos`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ isDone: false, title: inputValue })
        });

        if (!response.ok) {
            throw new Error('Ошибка при создании задачи');
        }

    } catch (error) {
        console.error(error);
    }
};

export const changeTodo = async (taskId: number, taskStatus?: boolean, taskChangedTitle?: string): Promise<void> => {
    try {
        const response = await fetch(`${BASE_URL}/todos/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ isDone: taskStatus, title: taskChangedTitle })
        });

        if (!response.ok) {
            throw new Error('Ошибка при удалении');
        }

        const result = await response.json();
        return result;

    } catch (error) {
        console.error(error);
    }
};

export const deleteTask = async (taskId: number): Promise<void> => {
    try {
        const response = await fetch(`${BASE_URL}/todos/${taskId}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Ошибка при удалении');
        }

    } catch (error) {
        console.error(error);
    }
};