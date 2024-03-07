<template lang="pug">
.containerBooks
  .FeatureBook(v-for="book in books" :key="book.id")
    .img
      i.pi.pi-book(style="font-size: 4rem; color: var(--color-border-hover);")
    .info-book-1
      label.title-book {{ book.name }}
      .info-book-2
        label(:class="book.status") {{ book.status }}
        label Vol
          label.vol {{ book.vol }}
</template>

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
</script> 

<style scoped>
  .containerBooks {
    display: flex;
    background-color: var(--color-background-soft);
    justify-content: space-evenly;
  }
  .FeatureBook {
    width: 300px;
    height: 350px;
    background-color: var(--color-background);
    box-shadow: 0 2px 2px 1px var(--color-contrast);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    border-radius: 5px;
  }

  .img {
    width: 230px;
    height: 300px;
  }
  
  .info-book-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    box-shadow: 0 0 1px 1px var(--color-contrast);
    height: 70px;
    width: 95%;
  }
  .info-book-2 {
    font-size: small;
    padding-top: 5px;
    width: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
  }

  label {
    font-family: var(--font-text);
    border-radius: 30px;
    padding: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title-book {
    box-shadow: 0  2px 1px 0 var(--color-contrast);
    font-family: var(--font-text);
    font-size: 17px;
    color: var(--color-text-light);
    width: 50%;
  }

  label .vol {
    background-color: var(--color-background-mute);
  }
</style>