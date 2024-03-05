<template lang="pug">
div
  
</template>

<script setup lang="ts">
import axiosInstance from '@/services/http.js';




const postU = () => {
  axiosInstance.post("/users/register", {name:"diego", email:"diego@gmail.com", password:"123"})
}
</script>

<style scoped>
  
</style>