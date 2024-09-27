<script setup lang="ts">
import { onMounted, ref } from 'vue';

import { fetchAllTodo, fetchFilteredTodo, createNewTodo, deleteTask, changeTodo } from '../api/todoApi';

import CreateTaskForm from '../components/CreateTaskForm.vue';
import Nav from '../components/Nav.vue';
import TaskCard from '../components/TaskCard.vue';

import { MetaResponse, Todo, TodoInfo } from "../types";

const response = ref<boolean>(false)
const allTodo = ref<MetaResponse<Todo, TodoInfo> | null>(null);
const currentTodoList = ref<string>('all');

onMounted(async () => {
    const todos: MetaResponse<Todo, TodoInfo> = await fetchAllTodo();
    response.value = true;
    allTodo.value = todos;
});

const loadNewTodoList = async (newFilter: string) => {
    const result = await fetchFilteredTodo(newFilter);
    allTodo.value = result;
}

const handleChangeFilter = async (clickedTodoFilter: string) => {
    allTodo.value = null;
    currentTodoList.value = clickedTodoFilter;
    await loadNewTodoList(clickedTodoFilter)
}

const handleDeleteTodo = async (taskId: number) => {
    await deleteTask(taskId);
    await loadNewTodoList(currentTodoList.value);
}

const handleChangeTodoStatus = async (taskId: number, newTaskStatus: boolean) => {
    await changeTodo(taskId, newTaskStatus);
    await loadNewTodoList(currentTodoList.value);
}

const handleChangeTodoTitle = async (taskId: number, taskStatus: boolean, newTaskTitle: string) => {
    await changeTodo(taskId, taskStatus, newTaskTitle);
    await loadNewTodoList(currentTodoList.value);
}

const handleCreateNewTodo = async (newTodoTitle: string) => {
    await createNewTodo(newTodoTitle);
    await loadNewTodoList(currentTodoList.value);
}
</script>

<template>
    <div class="tasks-list">
        <CreateTaskForm 
            @createNewTodo="handleCreateNewTodo"
        />
        <Nav 
            :all="allTodo?.info?.all || 0" 
            :completed="allTodo?.info?.completed || 0"
            :inWork="allTodo?.info?.inWork || 0" 

            @filterChanged="handleChangeFilter" 
        />
        <div v-if="response === null" class="tasks-list__loading">
            Loading...
        </div>
        <div v-if="allTodo" class="tasks-list">
            <TaskCard 
                v-for="task of allTodo.data" 
                :key="task.id" 
                :id="task.id" 
                :title="task.title"
                :created="task.created" 
                :isDone="task.isDone" 

                @deleteTodo="handleDeleteTodo"
                @changeTodoStatus="handleChangeTodoStatus"
                @changeTodoTitle="handleChangeTodoTitle"
            />
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