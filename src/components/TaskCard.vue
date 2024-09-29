<script setup lang="ts">
import Checkbox from "../ui/Checkbox.vue";
import ChangeButton from "../ui/ChangeButton.vue";
import DeleteButton from "../ui/DeleteButton.vue";
import ResetButton from "../ui/ResetButton.vue";

import { defineEmits, ref } from "vue";

import { Todo } from "../types";
import AcceptButton from "../ui/AcceptButton.vue";

const task = defineProps<Todo>();
const emit = defineEmits(['deleteTodo', 'changeTodoStatus', 'changeTodoTitle']);

const isChecked = ref<boolean>(task.isDone);
const isTodoTitleChanging = ref<boolean>(false);
const changingTodoValue = ref<string>(task.title)


const handleChangeStatus = () => {
    emit('changeTodoStatus', task.id, !task.isDone);
}

const handleDeleteTask = () => {
    emit('deleteTodo', task.id);
}

const handleChangeTitle = () => {
    emit('changeTodoTitle', task.id, task.isDone, changingTodoValue.value);
    isTodoTitleChanging.value = false;
}

const handleResetChanging = () => {
    isTodoTitleChanging.value = false;
    changingTodoValue.value = task.title;
}

const isTaskDone = (isDone: boolean) => {
    return isDone ? 'task-card complete-task' : 'task-card';
}
</script>

<template>
    <div :class="isTaskDone(task.isDone)">
        <div class="task-card__status-box">
            <Checkbox 
                v-model="isChecked" 
                @change="handleChangeStatus" 
            />
            <input 
                v-if="isTodoTitleChanging" 
                v-model="changingTodoValue"
                class="task-card__input task-card__content" 
                type="text"
            >
            <p v-else class="task-card__content">
                {{ task.title }}
            </p>
        </div>
        <div class="task-card__btn-box">
            <AcceptButton v-if="isTodoTitleChanging" @click="handleChangeTitle" />
            <ChangeButton v-else-if="!isTodoTitleChanging" @click="isTodoTitleChanging = true"></ChangeButton>

            <DeleteButton v-if="!isTodoTitleChanging" @click="handleDeleteTask"></DeleteButton>
            <ResetButton v-else-if="isTodoTitleChanging" @click="handleResetChanging"></ResetButton>
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
        text-align: left;
    }

    &__input {
        width: 70%;
        outline: none;
        border: none;
        border-bottom: 1px solid #555;
    }

    &__status-box {
        width: 100%;
        display: flex;
        gap: 10px
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
