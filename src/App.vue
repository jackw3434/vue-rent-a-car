<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header style="text-align: center;">
    <h1 style="text-decoration: underline;">Rent A Vehicle</h1>
    <h2>Find the car you need</h2>
  </header>
  <div style="padding: 10px;">
   
    <RouterView />
  </div>
</template>

