<script setup lang="ts">
import router from '@/router';
import IconFuel from './icons/IconFuel.vue';
import { useSelectedCarStore } from '@/stores/selectedCar';

const props = defineProps<{
    make: string,
    model: string,
    fuelType: string,
    costPerDay: string,
    image: string,
    categoryOfVehicle: string,
    regNumber: string
}>()

const car = useSelectedCarStore()

const setCarState = () => {
    const { categoryOfVehicle, costPerDay, fuelType, image, make, model, regNumber } = props;
    car.$state = {
        car: {
            carPhoto: image,
            categoryOfVehicle,
            regNumber,
            make,
            model,
            fuelType,
            pricePerDay: costPerDay
        }
    }
}

const navToCarPage = function () {
    setCarState();
    router.push({ name: 'about' })
}

</script>

<template>
    <div
        style=" background-color: #F5F5F5; border: 1px solid grey; border-radius: 20px; width: fit-content; flex-direction: row; display: flex; align-items: center;">
        <div style="padding: 10px;">
            <h2>{{ make }}</h2>
            <h3>{{ model }}</h3>
            <b-row>
                <IconFuel />
                {{ fuelType }}
            </b-row>
            <p>{{ costPerDay }}</p>
        </div>
        <div v-if="image">
            <div style="display: flex; justify-content: flex-end; padding: 10px; margin-right: 5px;">
                <button @click="() => navToCarPage()">Hire Car</button>
            </div>
            <img v-bind:src="image" height="150" style="padding: 0px 10px; border-radius: 20px;" />
        </div>
    </div>
</template>
