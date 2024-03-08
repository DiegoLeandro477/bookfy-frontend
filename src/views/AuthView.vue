<template lang="pug">
main
  .button_login.lateral(@click="changeController('login')", :class="{ 'inactive': controller === 'login' }")
    i.pi.pi-angle-left

  div(v-if="controller==='login'")
    h2 Login
    form.container(@submit.prevent="login")
      .input Email:
        input(type="text", v-model="email", placeholder="Email")
      .input Senha:
        input(type="password", v-model="password", placeholder="Senha")
      input.sub(type="submit", value="Log in")

  div(v-if="controller==='register'")
    h2 Register
    form.container(@submit.prevent="register")
      .input Nome de Usuário
        input(type="text", v-model="name", placeholder="Nome de Usuário")
      .input Email:
        input(type="text", v-model="email", placeholder="Email")
      .input Senha:
        input(type="password", v-model="password", placeholder="Senha")
      input.sub(type="submit", value="Sing in")

  .button_register.lateral(@click="changeController('register')", :class="{ 'inactive': controller === 'register' }")
    i.pi.pi-angle-right
  </template>
  
<script setup lang="ts">
  import { ref } from 'vue';
  import type { Login, Register } from '@/types/AuthInterface';
  import axiosInstance from "@/services/http.js";
  import { AxiosError } from 'axios';
  import { useAuth } from '@/stores/AuthStore';
  import { RouterLink, useRouter } from 'vue-router';

  const auth = useAuth;
  const router = useRouter();
  
  let controller = ref('login');
  const name = ref('');
  const email = ref('');
  const password = ref('');

  const changeController = (mode: string) => {
    
    console.log('Antes: ', controller)
    controller.value = mode;
    console.log('Depois: ', controller)
  }  
  const login = async () => {
    try {
      const login: Login = {
        email: email.value,
        password: password.value
      }
      const {data} = await axiosInstance.post('/users/login', login);
      console.log(data);
      auth().setToken(data.token)
      auth().setUser(data.user);

      router.push('/dashboard')
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            console.log(error.response.data);
        } else {
            console.log('Erro desconhecido:', error);
        }
    }
  };
  const register = async () => {
    try {
      const register: Register = {
        name: name.value,
        email: email.value,
        password: password.value,
        role: 'USER'
      }
      const {data} = await axiosInstance.post('/users/register', register);
      console.log(data);
      login();
    } catch (error) {
        if (error instanceof AxiosError && error.response) {
            console.log(error.response.data);
        } else {
            console.log('Erro desconhecido:', error);
        }
    }
  }
</script>
  
<style scoped>
  div { 
   text-align: center;
  }
  main {
    display: flex;
    width: 100%;
    height: 600px;
    justify-content: center;
    align-items: center;
    background-color: var(--color-background-soft);
  }

  .lateral {
    width: 70px;
    height: 300px;
    display: flex;
    align-items: center;
    border-radius: 15px;
  }

  i {
    font-size: 45px;
    color: var(--color-background);
  }

  .button_login {
    border-left: 3px solid var(--color-background);
    justify-content: left;
    transition: background 1.4s;
  }

  .button_register {
    border-right: 3px solid var(--color-background);
    justify-content: right;
    transition: background 1.4s;
  }

  .button_login:hover {
    border-left: 3px solid var(--color-background-mute);
    cursor: pointer;
    transition: background 1.4s;
    background: linear-gradient(to right, rgba(169,169,169,1) 0%, rgba(169,169,169,0) 60%);
  }

  .button_register:hover {
    border-right: 3px solid var(--color-background-mute);
    cursor: pointer;
    transition: background 1.4s;
    background: linear-gradient(to left, rgba(169,169,169,1) 0%, rgba(169,169,169,0) 60%);
  }

  .inactive {
    opacity: 0;
    pointer-events: none;
  }

  .container {
    background-color: var(--color-background);
    width: 250px;
    height: 300px;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
  }
  input {
    height: 25px;
    border-radius: 4px;
    border: none;
  }

  .input {
    width: 80%;
    display: flex;
    flex-direction: column;
    color: var(--color-text-light);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  .sub:hover{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: var(--color-contrast);
    color: var(--color-text-night);
    padding: 8px;
  }
</style>