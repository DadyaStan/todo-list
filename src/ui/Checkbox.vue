<script lang="ts" setup>
import { defineProps } from 'vue';

// Определяем props и emit
defineProps<{
  modelValue: boolean; 
}>();
</script>

<template>
    <div class="checkbox-box">
        <input 
            type="checkbox" 
            :checked="modelValue" 
        />
    </div>
</template>

<style lang="scss">

</style>
