<script setup lang="ts">
import router from '@/router';
import { useSelectedCarStore } from '@/stores/selectedCar';
import Modal from '../components/modal.vue';
const car = useSelectedCarStore()

if (!car.$state.car.make) {
  router.push({ name: 'home' })
}
const { carPhoto, categoryOfVehicle, fuelType, make, model, pricePerDay, regNumber } = car.$state.car;

</script>

<template>
  <RouterLink to="/">Back</RouterLink>
  <div>
    <h1>This is the car hire page</h1>
  </div>
  <div style="display: flex;">
    <img v-bind:src="carPhoto" height="350" style="padding: 0px 10px; border-radius: 20px;" />
    <div
      style="background-color: grey; border: 1px solid grey; border-radius: 30px; padding: 50px; display: flex; justify-content: space-between; width: 30%;">
      <div>
        <p>Car Type: {{ categoryOfVehicle }}</p>
        <p>Fuel Type: {{ fuelType }}</p>
        <p>Make: {{ make }}</p>
        <p>Model: {{ model }}</p>
        <p>Price Per Day: {{ pricePerDay }}</p>
        <p>Reg: {{ regNumber }}</p>
      </div>
      <Modal/>
    </div>
  </div>

</template>