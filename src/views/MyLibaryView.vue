<template lang="pug">
.main
  .my-books
    .book(v-for="book in myBooks" :key="book.id")
      .img
        i.pi.pi-book
      p Nome
  .create-book 
    .created 
      i.pi.pi-book 
      h2 Criar um livro
</template>

<script setup lang="ts">
import books from '@/assets/books';
import type { Book } from '@/types/InterfacesData';

const myBooks: Book[] = books;
</script>

<style scoped>
  
  .main {
    display: flex;
    direction: row;
    min-height: 500px;
  }
  .my-books {
    width: 100%;
    background-color: var(--color-text-night);
    border: 1px solid var(--color-background-soft);
    margin-top: 20px;
    border-radius: 15px;
    display: grid;
    gap: 40px;
  }
  .book {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .img {
    width: 180px;
    height: 250px;
  }
  .create-book {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .created {
    background-color: var(--color-background-soft);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: .6s;
  }
  .created:hover {
    cursor: pointer;
    background-color: var(--color-background-mute);
    box-shadow: 0 4px 0 .3px var(--color-contrast);
    color: var(--color-text-night);
    width: 230px;
    height: 230px;
    transition: .6s;
    font-size: 18px;
  }
  i.pi.pi-book {
    font-size: 62px;
  }
</style>@/types/InterfacesData