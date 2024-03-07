<template lang="pug">
.books-container
  .book-container(v-for="book in books" :key="book.id")
    .img
      i.pi.pi-book(style="font-size: 4rem; color: var(--color-border-hover);")
    .info-book 
      .details
        h2.title {{ book.name }}
        .info-details 
          div {{ book.date_create }} || volume: {{ book.vol }}
          .info(:class="book.status") {{ book.status }}
      .sinopse
        h2 Sinopse
        p {{ book.sinopse }}
</template>

<<<<<<< HEAD
<script setup lang="ts">
  import { defineProps } from 'vue';
  import type Book from "@/types/book";

  const props = defineProps({
    books:{
      type: Array as () => Book[],
      required: true
    }
  });
=======
<script lang="ts">
import type { Book } from '@/types/book';
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    books: {
      type: Array as () => Book[],
      required: true,
    },
  }
})
>>>>>>> 5266221e4503a6dc40bfc645360d09655b5d83da
</script> 

<style scoped>
  .books-container {
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-background-soft);
  }
  .book-container:hover {
    cursor: pointer;
    width: 92%;
    height: 410px;
    box-shadow: 0.5px 2px 3px 0 var(--color-contrast);
    background-color: var(--color-background-mute);
    transition: .4s;
  }
  .book-container {
    width: 90%;
    height: 400px;
    margin-top: 20px;
    border-bottom: 1px solid black;
    box-shadow: 0 0 1px 0 var(--color-contrast);
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 10px;
    transition: .4s;
    background-color: var(--color-background);
  }
  .img {
    width: 350px;
    height: 370px;
  }

  .info-book {
    height: 100%;
    width: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .info-book .title {
    color: var(--color-text-light);
    font-family: var(--font-text);
  }
  .info-book .info-details {
    color: var(--color-text-light);
    display: flex;
    gap: 20px;
  }
  .info {
    padding: 0 10px;
    width: auto;
    box-shadow: 0 1px 0 1px var(--color-contrast);
    border-radius: 20px;
    font-family: var(--font-text);
  }
  .details {
    height: 100%;
  }
  .sinopse {
    padding: 10px;
    box-shadow: 1px 0 2px 1px var(--color-contrast);
    height: 100%;
  }
</style>