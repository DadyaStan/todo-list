<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { TodoInfo } from '../types/todo';


const emit = defineEmits(['filterChanged']);
const props = defineProps<{
    todoCount: TodoInfo
}>();

const currentTodoFilter = ref<string>('all');

const handlerChangeTodoFilter = (clickedTodoFilter: string) => {
    if (clickedTodoFilter !== currentTodoFilter.value) {
        currentTodoFilter.value = clickedTodoFilter;
        emit('filterChanged', clickedTodoFilter);
    }
}
</script>

<template>
    <nav class="nav">
        <div :class="{ nav__el: true, nav__el_active: currentTodoFilter === 'all' }" @click="handlerChangeTodoFilter('all')">
            Все ({{ props.todoCount.all ? props.todoCount.all : '-' }})
        </div>
        <div :class="{ nav__el: true, nav__el_active: currentTodoFilter === 'inWork' }" @click="handlerChangeTodoFilter('inWork')">
            В работе ({{ props.todoCount.inWork ? props.todoCount.inWork : '-' }})
        </div>
        <div :class="{ nav__el: true, nav__el_active: currentTodoFilter === 'completed' }" @click="handlerChangeTodoFilter('completed')">
            Сделано ({{ props.todoCount.completed ? props.todoCount.completed : '-' }})
        </div>
    </nav>
</template>

<style lang="scss">
@import "../style.scss";

.nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;

    &__el {
        font-size: 20px;
        color: grey;
        font-weight: 700;
        cursor: pointer;

        &_active {
            color: $main-aqua;
            text-decoration: underline;
        }
    }
}
</style>
