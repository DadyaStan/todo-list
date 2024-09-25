<script setup lang="ts">
import { ref } from 'vue';
import { BASE_URL } from '../api/baseUrl';
import MediumButton from '../ui/MediumButton.vue';

import { useTodoStore } from '../store/todoStore';

const todoStore = useTodoStore();

const inputValue = ref<string>('');

const handleAddTask = async () => {
    if (inputValue.value) {
        todoStore.addTask(inputValue.value);
        inputValue.value = '';
    }
}
</script>

<template>
    <div class="create-task-form">
        <input v-model="inputValue" class="create-task-form__input" type="text" placeholder="Task To Be Done..." />
        <MediumButton @click="handleAddTask"/>
    </div> 
</template>

<style lang="scss">
.create-task-form {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-bottom: 20px;

    &__input {
        border: none;
        outline: none;
        width: 100%;
        background-color: #F1F4F9;
        border-bottom: 1px solid grey;
        padding: 10px 10px;
    }
}
</style>
