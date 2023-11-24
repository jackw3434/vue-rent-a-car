<script setup lang="ts">
import { ModalsContainer, useModal } from 'vue-final-modal'
import ModalConfirm from './ModalConfirm.vue'

const props = defineProps<{
    make: string,
    model: string,
    costPerDay: string,
}>()

const { open, close } = useModal({
    component: ModalConfirm,
    attrs: {
        title: 'Confirm Bookin',
        onConfirm() {
            close()
        },
    },
    slots: {
        default: '<p>Are you sure you would like to book a "' + props.make + ' ' + props.model + ' from the start date to end date for total cost?"</p>'
    },
})
</script>

<template>
    <div><button @click="() => open()">Hire Car</button></div>
    <ModalsContainer />
</template>
