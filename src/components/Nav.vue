<script setup lang="ts">
import { computed, ref, defineEmits } from 'vue';
import { TodoInfo } from '../types';


const emit = defineEmits(['filterChanged']);
const todoCount = defineProps<TodoInfo>();
const currentTodoFilter = ref<string>('all');

const actualNavLink = computed(() => ({
    all: currentTodoFilter.value === 'all' ? 'nav__el nav__el_active' : 'nav__el',
    inWork: currentTodoFilter.value === 'inWork' ? 'nav__el nav__el_active' : 'nav__el',
    completed: currentTodoFilter.value === 'completed' ? 'nav__el nav__el_active' : 'nav__el',
}));

const handlerChangeTodoFilter = (clickedTodoFilter: string) => {
    if (clickedTodoFilter !== currentTodoFilter.value) {
        currentTodoFilter.value = clickedTodoFilter;
        emit('filterChanged', clickedTodoFilter);
    }
}
</script>

<template>
    <nav class="nav">
        <div :class="actualNavLink.all" @click="handlerChangeTodoFilter('all')">
            Все ({{ todoCount.all ? todoCount.all : '-' }})
        </div>
        <div :class="actualNavLink.inWork" @click="handlerChangeTodoFilter('inWork')">
            В работе ({{ todoCount.inWork ? todoCount.inWork : '-' }})
        </div>
        <div :class="actualNavLink.completed" @click="handlerChangeTodoFilter('completed')">
            Сделано ({{ todoCount.completed ? todoCount.completed : '-' }})
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
