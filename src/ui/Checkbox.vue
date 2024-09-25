<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

// Определяем props и emit
const props = defineProps<{
  modelValue: boolean; 
}>();
const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void; 
}>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement; 
  emit('update:modelValue', target.checked);
};
</script>

<template>
    <div class="checkbox-box">
        <input 
            type="checkbox" 
            :checked="modelValue" 
            @change="handleChange" 
        />
    </div>
</template>

<style lang="scss">
.checkbox {}
</style>
