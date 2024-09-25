<script setup lang="ts">
import { useTodoStore } from "../store/todoStore";

import Checkbox from "../ui/Checkbox.vue";
import ChangeButton from "../ui/ChangeButton.vue";
import DeleteButton from "../ui/DeleteButton.vue";

import { defineEmits, ref } from "vue";

import { Todo } from "../types";

const task = defineProps<Todo>();
const emit = defineEmits(['todoDeleted', 'todoChange']);
const todoStore = useTodoStore();
const isChecked = ref<boolean>(task.isDone);

const handleChangeStatus = () => {
    todoStore.changeTask(task.id, !task.isDone);
}

const handleDeleteTask = () => {
    todoStore.deleteTask(task.id)
}

const handleChangeTitle = async () => {
    const changedTitle = prompt('Изменение заметки', task.title);
    
    if (changedTitle !== task.title) {
        todoStore.changeTask(task.id, task.isDone, changedTitle);
    }
}

const isTaskDone = (isDone: boolean) => {
    console.log(isDone + ' ' + task.id)
    return isDone ? 'task-card complete-task' : 'task-card';
}
</script>

<template>
    <div :class="isTaskDone(task.isDone)">
        <Checkbox v-model="isChecked" @change="handleChangeStatus"/>
        <p class="task-card__content">
            {{ task.title }}
        </p>
        <div class="task-card__btn-box">
            <ChangeButton @click="handleChangeTitle"></ChangeButton>
            <DeleteButton @click="handleDeleteTask"></DeleteButton>
        </div>
    </div>
</template>

<style lang="scss">
.task-card {
    width: 370px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 8px 8px 8px 12px;
    word-wrap: break-word;

    &__content {
        width: 65%;
        text-align: left;
    }

    &__btn-box {
        width: 25%;
        display: flex;
        gap: 10px
    }
}

.complete-task {
    & .task-card {
        &__content {
            color: grey;
            text-decoration: line-through;
        }
    }
}
</style>
