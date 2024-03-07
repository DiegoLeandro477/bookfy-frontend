<template>
  <NavBar />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<style>
  .DESENVOLVIMENTO {
    background-color: var(--color-development);
    box-shadow: 0  2px 1px 0 var(--color-contrast);
  }
  .COMPLETO {
    background-color: var(--color-completed);
    box-shadow: 0  2px 1px 0 var(--color-contrast);
  }
  .img {
    border: 1px solid var(--color-border-mute);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    background-color: white;
    width: min-content;
    height: min-content;
    padding: 5px;
  }
</style>
