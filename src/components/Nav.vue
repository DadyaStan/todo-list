<script setup lang="ts">
import { computed } from 'vue';
import { useTodoStore } from '../store/todoStore';

const todoStore = useTodoStore();

// Тут подло использовал GPT 
const todoInfo = computed(() => {
    return {
        all: todoStore.info ? todoStore.info.all : '−',
        inWork: todoStore.info ? todoStore.info.inWork : '−',
        completed: todoStore.info ? todoStore.info.completed : '−',
    };
}); 
</script>

<template>
    <nav class="nav">
        <router-link class="nav__el" to="/">
            Все ({{ todoInfo.all }})
        </router-link>
        <router-link class="nav__el" to="/inWork">
            В работе ({{ todoInfo.inWork }})
        </router-link>
        <router-link class="nav__el" to="/completed">
            Сделано ({{ todoInfo.completed }})
        </router-link>
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

        &_active {
            text-decoration: underline;
        }
    }
}

.router-link-active {
    color: $main-aqua;
    text-decoration: underline;
}
</style>
