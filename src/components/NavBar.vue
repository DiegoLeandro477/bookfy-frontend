<template>
  <nav class="header">
    <h2 class="logo">Book.fy</h2>
    <div id="div-menu">
      <ul class="menu">
        <router-link class="menu-link" to="/">Biblioteca</router-link>
        <router-link class="menu-link" to="/MyLibaries">Meus Livros</router-link>
        <router-link class="menu-link" to="/ContactMe">Contate-me</router-link>
      </ul>
    </div>
    <div id="user" >Diego Leandro<i class="pi pi-user icon-user" style="font-size: 1.5rem" /></div>
  </nav>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
  .header {
    height: 60px;
    width: 100%;
    background-color: var(--color-contrast);
    display: flex;
    align-items: center;
    padding: 20px 50px;
    justify-content: space-between;
  }

  .logo {
    font-size: 24px;
    font-family: bold;
    color: white;
    width: 100%;
  }

  .menu {
    display: flex;
    justify-content: space-around;
    gap: 10px;
    background-color: var(--color-background);
    border-radius: 10px;
    padding: 4px 10px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 12px;
    width: 350px;
    box-shadow: 0 0 1px 1px var(--color-contrast-mute);
  }

  #div-menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  a {
    display: flex;
    align-items: center;
  }

  a:hover {
    background-color: var(--color-contrast-mute);
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: .4s;
  }

  .menu-link {
    color: #000000; /* Cor padrão dos links */
    text-decoration: none; /* Remover sublinhado padrão */
    padding: 6px 12px;
    border-radius: 5px;
  }

  .menu-link.router-link-active {
    border-bottom:4px solid var(--color-border); /* Cor de fundo para a rota ativa */
    border-top: 2px solid var(--color-contrast-soft);
    box-shadow: 0 0 1px 1px gray;
    color: black; /* Cor do texto para a rota ativa */
  }

  .icon-user {
    border-radius: 100%;
    border: 1px solid #000000;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-background);
  }

  #user {
    gap: 4px;
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
  }
</style>