<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'

defineProps<{
    title?: string
}>()

const emit = defineEmits<{
    (e: 'confirm'): void
}>()
</script>

<template>
    <VueFinalModal style="display: flex; justify-content: center; align-items: center; "
        class="flex justify-center items-center"
        content-class="flex flex-col max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2">
        <div style="border: 1px solid grey; background-color: white;">
            <h1 class="text-xl">
                {{ title }}
            </h1>
            <slot />
            <button class="mt-1 ml-auto px-2 border rounded-lg" @click="emit('confirm')">
                Confirm
            </button>
        </div>
    </VueFinalModal>
</template>
