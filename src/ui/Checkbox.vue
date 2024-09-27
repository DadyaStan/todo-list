<script lang="ts" setup>
import { defineProps } from 'vue';

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
