<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { fetchAllTodo, fetchFilteredTodo, createNewTodo, deleteTask, changeTodo } from '../api/todoApi';

import CreateTaskForm from '../components/CreateTaskForm.vue';
import Nav from '../components/Nav.vue';
import TaskCard from '../components/TaskCard.vue';

import { MetaResponse, Todo, TodoInfo, TodoRequest } from "../types";

const isLoading = ref<boolean>(false);
const todoList = ref<Todo[] | null | undefined>(null);
const todoInfo = ref<TodoInfo | null | undefined>(null);
//как организовать в данном случае ENUM?
const currentFilter = ref<string>('all');

onMounted(async () => {
    try {
        isLoading.value = true;
        const todos: MetaResponse<Todo, TodoInfo> | undefined = await fetchAllTodo();
        isLoading.value = false;
        todoList.value = todos?.data;
        todoInfo.value = todos?.info;
    } catch {
        isLoading.value = false;
        throw new Error('Ошибка запроса с сервера ' + Error);
    }
});

const loadNewTodoList = async (newFilter: string) => {
    const result: MetaResponse<Todo, TodoInfo> | undefined = await fetchFilteredTodo(newFilter);
    todoList.value = result?.data;
    todoInfo.value = result?.info;
}

const handleChangeFilter = async (clickedTodoFilter: string) => {
    isLoading.value = true;
    todoList.value = null;
    todoInfo.value = null;
    currentFilter.value = clickedTodoFilter;
    await loadNewTodoList(clickedTodoFilter);
    isLoading.value = false;
}

const handleDeleteTodo = async (taskId: number) => {
    await deleteTask(taskId);
    await loadNewTodoList(currentFilter.value);
}

const handleChangeTodo = async (taskId: number, changedTodo: TodoRequest) => {
    await changeTodo(taskId, changedTodo);
    await loadNewTodoList(currentFilter.value);
}

const handleCreateNewTodo = async (newTodoTitle: string) => {
    await createNewTodo(newTodoTitle);
    await loadNewTodoList(currentFilter.value);
}
</script>

<template>
    <div class="tasks-list">
        <CreateTaskForm @createNewTodo="handleCreateNewTodo" />
        <Nav :todoCount="{
            all: todoInfo?.all || 0,
            completed: todoInfo?.completed || 0,
            inWork: todoInfo?.inWork || 0
        }" @filterChanged="handleChangeFilter" />
        <div v-if="isLoading" class="tasks-list__loading">
            Loading...
        </div>
        <div v-else class="tasks-list">
            <TaskCard v-for="task of todoList" :key="task.id" :id="task.id" :title="task.title" :created="task.created"
                :isDone="task.isDone" @deleteTodo="handleDeleteTodo" @changeTodoStatus="handleChangeTodo"
                @changeTodoTitle="handleChangeTodo" />
        </div>
    </div>
</template>

<style lang="scss">
.tasks-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;

    &__loading {
        margin-top: 50px;
    }
}
</style>