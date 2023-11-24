<script setup lang="ts">
//import Toolbar from '@/components/Toolbar.vue';
import VehicleCard from '@/components/VehicleCard.vue';

const carImage = "https://assets.heycar.co.uk/image/upload/t_with-stock-placeholder/$aspratio_1.333/t_fit-to-aspect-ratio-blur,f_auto,q_auto,w_800/application_assets/vehicles/pictures/7848417d4453e4793679bcf25970928c/8671eede10adfcc42488659cebb0a64f.webp";

const toolbarOptions = [
  {
    value: "Small",
    text: "Small",
  },
  {
    value: "Estate",
    text: "Estate",
  },
  {
    value: "Van",
    text: "Van",
  },
]

let selectedCarType = '';
const id = "selectCarType";

function updateValue(value: any) {
  selectedCarType = value;
}

function onSearch() {

}

const startDate = new Date();
</script>

<template>
  <main>
    <!-- <Toolbar id="selectCarType" :options="toolbarOptions" label="What type of Vehicle" type=selectedCarType />
             -->
    <div
      style="display: flex; justify-content: space-evenly; border: 1px solid grey; border-radius: 20px; margin-bottom: 50px;">

      <div style="padding-right: 20px;">
        <h3>what type of vehicle</h3>
        <div style="display: flex; flex-direction: row;">
          <div v-for="(option, index) in toolbarOptions as any" :key="option.text">
            <input :id="id + index" :name="id" type="radio" :value="option.value"
              :checked="option.value === selectedCarType" @change="updateValue(option.value)" />
            <label :for="id + index">{{ option.text }}</label>
            <slot v-if="option.value === selectedCarType" :name="option.value" />
          </div>
        </div>
      </div>
      <div style="padding-right: 20px;">
        <h3>Pick up Date</h3>
        <div>
          <v-date-picker v-model="startDate" />
        </div>
      </div>

      <div style="padding-right: 20px;">
        <h3>Return Date</h3>
        <div>

        </div>
      </div>

      <div style="align-self: center;">
        <button @click="() => onSearch()">Search</button>
      </div>
    </div>

    <VehicleCard make="Volkswagon" model="Golf" fuelType="Petrol" cost-per-day="£25 / per day" v-bind:image="carImage"
      category-of-vehicle="small" reg-number="1234" />
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>