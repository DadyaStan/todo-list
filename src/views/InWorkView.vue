<script setup lang="ts">
import { computed } from 'vue';
import { useTodoStore } from '../store/todoStore';

import TaskCard from '../components/TaskCard.vue';

import { Todo } from "../types";

const todoStore = useTodoStore();
const allTasks = computed<Todo[]>(() => todoStore.tasks.filter((task: { isDone: any; }) => !task.isDone));
</script>

<template>
    <div class="tasks-list">
        <TaskCard v-for="task of allTasks" :key="task.id" :id="task.id" :title="task.title" :created="task.created"
            :isDone="task.isDone" />
    </div>
</template>

<style lang="scss">
.tasks-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
}

.loading {
    margin-top: 50px;
}
</style>