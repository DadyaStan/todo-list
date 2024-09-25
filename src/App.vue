<script setup lang="ts">
import { onMounted } from 'vue';
import { useTodoStore } from './store/todoStore';
import CreateTaskForm from './components/CreateTaskForm.vue';
import Nav from './components/Nav.vue';

const todoStore = useTodoStore();

onMounted(async () => {
  await todoStore.fetchTodo();
});
</script>

<template>
  <main class="container">
    <CreateTaskForm />
    <Nav />
    <router-view />
  </main>
</template>

<style scoped></style>

