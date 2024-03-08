<template lang="pug">
nav.header
  h2.logo BOOK.FY
  #div-menu
    ul.menu
      router-link.menu-link(to="/") BIBLIOTECA
      router-link.menu-link(to="/dashboard") MEUS LIVROS
      router-link.menu-link(to="/ContactMe") CONTACTE-ME
  #user
    label(v-if="auth.token && auth.user", @click="logout") {{ auth.user.name }}
    i.pi.pi-user.icon-user(style="font-size: 1.5rem")
</template>
<script setup lang="ts">
import { useAuth } from '@/stores/AuthStore';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RouterLink, useRouter } from 'vue-router';

const auth = useAuth();
const router = useRouter();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const logout = () => {
  auth.cleanToken();
  router.push('/Login');
}
</script>

<style scoped>
  .header {
    height: 60px;
    width: 100%;
    background-color: var(--color-background);
    display: flex;
    align-items: center;
    padding: 20px 50px;
    justify-content: space-between;
  }

  .logo {
    font-size: 24px;
    color: var(--color-text-light);
    width: 100%;
  }

  .menu {
    display: flex;
    justify-content: space-around;
    gap: 10px;
    background-color: var(--color-background-soft);
    border-radius: 10px;
    padding: 4px 10px;
    font-family: var(--font-text);
    font-size: 12px;
    width: 400px;
    box-shadow: 0 0 1px 1px var(--color-contrast);
  }

  #div-menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  a {
    display: flex;
    align-items: center;
    transition: .4s;
  }

  a:hover {
    background-color: var(--color-background-mute);
    color: var(--color-text-night);
    border-radius: 5px;
    cursor: pointer;
    transition: .4s;
  }

  .menu-link {
    color: var(--color-text-light); /* Cor padrão dos links */
    text-decoration: none; /* Remover sublinhado padrão */
    padding: 6px 12px;
    border-radius: 5px;
  }

  .menu-link.router-link-active {
    background-color: var(--color-background);
    box-shadow: 0 0 1px 1px gray;
    color: var(--color-text-light); /* Cor do texto para a rota ativa */
  }

  .icon-user {
    border-radius: 100%;
    border: 1px solid var(--color-border);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-background-soft);
  }

  #user {
    gap: 4px;
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
  }

  #user label:hover {
    cursor: pointer;
  }
</style>