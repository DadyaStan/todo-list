import { defineStore } from 'pinia';
import { BASE_URL } from '../api/baseUrl';

import { Todo } from "../types";

export const useTodoStore = defineStore('todo', {
  state: (): any => ({
    tasks: [],
    info: null,
    meta: null,
  }),
  actions: {
    async fetchTodo() {
      try {
        const response = await fetch(`${BASE_URL}/todos`);
        const result = await response.json();

        this.tasks = result.data;
        this.info = result.info;
        this.meta = result.meta;
      } catch (error) {
        console.error(error);
      }
    },
    async addTask(inputValue: string) {
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

      const result: Todo = await response.json();
      this.tasks.push(result)
      this.info.all++;
      this.info.inWork++;
    },
    async changeTask(taskId: number, taskStatus: boolean, taskChangedTitle?: string | null) {

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

        this.tasks = this.tasks.map((task: { id: any; }) => task.id === result.id ? result : task);

        if (!taskChangedTitle && !taskStatus) {
          this.info.inWork++;
          this.info.completed--;
        } else if (!taskChangedTitle) {
          this.info.inWork--;
          this.info.completed++;
        }
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTask(taskId: number) {
      this.tasks.map((task: { id: number; isDone: any; }) => {
        if (task.id === taskId) {
          if (task.isDone) {
            this.info.completed--
          } else {
            this.info.inWork--;
          }
        }
      });

      this.tasks = this.tasks.filter((task: { id: number; }) => task.id !== taskId);
      this.info.all--;

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
    }
  },
});