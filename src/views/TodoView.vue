<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { fetchAllTodo, fetchFilteredTodo, createNewTodo, deleteTask, changeTodo } from '../api/todoApi';

import CreateTaskForm from '../components/CreateTaskForm.vue';
import Nav from '../components/Nav.vue';
import TaskCard from '../components/TaskCard.vue';

import { MetaResponse, Todo, TodoInfo, TodoRequest } from "../types/todo";

import {
  UserOutlined,
  UnorderedListOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';

const selectedKeys = ref<string[]>(['1']);
const collapsed = ref<boolean>(false);

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
    <div class="wrapper">
        <a-layout>
            <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
                <div class="logo" />
                <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
                    <router-link to="/todo-list/todo">
                        <a-menu-item key="1">
                            <unordered-list-outlined />
                            <span>Todo</span>
                        </a-menu-item>
                    </router-link>

                    <router-link to="/todo-list/profile">
                        <a-menu-item key="2">
                            <user-outlined />
                            <span>Profile</span>
                        </a-menu-item>
                    </router-link>
                </a-menu>
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0">
                    <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
                    <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
                </a-layout-header>
                <a-layout-content
                    :style="{ margin: '24px 16px', padding: '24px', minHeight: '100vh' }">
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
                        <div v-else class="content">
                            <div class="tasks-list">
                                <TaskCard v-for="task of todoList" :key="task.id" :id="task.id" :title="task.title"
                                    :created="task.created" :isDone="task.isDone" @deleteTodo="handleDeleteTodo"
                                    @changeTodoStatus="handleChangeTodo" @changeTodoTitle="handleChangeTodo" />
                            </div>
                        </div>
                    </div>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>

<style lang="scss">
.content {
    width: 100%;
    display: flex;
    justify-content: center;
}

.tasks-list {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px 0;

    &__loading {
        margin-top: 50px;
    }
}
</style>