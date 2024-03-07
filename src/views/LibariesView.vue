<template lang="pug">
main
  .container-search
    .search-book
      button.filter-button(type="button") Filtro
        i.pi.pi-filter
      input.search-text#search(type="text" placeholder="Digite o nome do livro")
      button.search-button(type="button")
        span.pi.pi-search
  FeatureBook(:books="books")
  ListBook(:books="books")
</template>

<script setup lang="ts">
  import books from '@/assets/books';
import FeatureBook from '@/components/FeatureBook.vue';
  import ListBook from '@/components/ListBook.vue';

  import type { Book } from '@/types/InterfacesData';

  const myBooks: Book[] = books;
</script>

<style scoped>
  .container-search {
    background-color: var(--color-background-soft);
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-book {
    width: 500px;
    height: 50px;
    background-color: var(--color-background);
    gap: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 26px;
  }

  .filter-button {
    border-radius: 40px 0 0 40px;
  }
  .search-text {
    height: 29px;
    width: 300px;
    color: var(--color-text-light);
    border: 2px solid var(--color-border);
  }
  .search-button {
    border-radius: 0 40px 40px 0;
  }
  
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    background-color: var(--color-background-soft);
    font-family: var(--font-text);
    width: 60px;
    height: 28px;
    border: 1px solid var(--color-border);
    box-shadow: 0 0 1px 1px var(--color-contrast);
    color: var(--color-text-light);
    transition: .4s;  
  }

  button:hover {
    background-color: var(--color-background-mute);
    color: var(--color-text-night);
    cursor: pointer;
    height: 30px;
    transition: .4s;
    box-shadow: 0 0 2px 2px var(--color-contrast);
  }
</style>@/types/InterfacesData