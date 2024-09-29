<script setup lang="ts">
import { ref } from 'vue';
import MediumButton from '../ui/MediumButton.vue';

const todoInputValue = ref<string>('');

const emit = defineEmits(['createNewTodo']);

const handleAddTask = async () => {
    if (todoInputValue.value) {
        await emit('createNewTodo', todoInputValue.value);
        todoInputValue.value = '';
    }
}
</script>

<template>
    <div class="create-task-form">
        <input v-model="todoInputValue" class="create-task-form__input" type="text" placeholder="Task To Be Done..." />
        <MediumButton @click="handleAddTask">
            Add
        </MediumButton>
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
