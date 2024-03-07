<template lang="pug">
div
  h2 Login
  form(@submit.prevent="login")
    input(type="text" v-model="email" placeholder="Email")
    input(type="password" v-model="password" placeholder="Senha")
    input(type="submit" value="enviar")
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import type { Login } from '@/types/Login';
  
  const email = ref('');
  const password = ref('');
  
  const login = () => {
    const loginInfo: Login = {
      email: email.value,
      password: password.value
    };
    console.log("login", loginInfo);
  };
  </script>
  
  <style scoped>
  </style>
  