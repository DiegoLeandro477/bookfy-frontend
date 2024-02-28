<template lang="pug">
.main
  .my-books
    .book(v-for="book in books" :key="book.id")
      .img
        i.pi.pi-book
      p Nome
  .create-book 
    .created 
      i.pi.pi-book 
      h2 Criar um livro
</template>

<script lang="ts" setup>
  import FeatureBook from '@/components/FeatureBook.vue';
  import ListBook from '@/components/ListBook.vue';

  import type { Book } from '@/types/book';

  const books: Book[] = [
    {
      id: 1,
      name: 'Book 1',
      vol: 1,
      user_id: 1,
      pages_id: [1, 2, 34],
      status: 'DESENVOLVIMENTO',
      date_create: '2024-02-15',
      date_update: '2024-02-15',
      date_publicated: '2024-02-15',
      sinopse: 'Primeiro livro já criado para entreter jogadores, esse texto é '
      +'só um teste para saber se a sinopse está configurada e desenhada corretamente,'
      +' repetindo texto:Primeiro livro já criado para entreter jogadores,'
      +'esse texto é só um teste para saber se a sinopse está configurada e'
      +'desenhada corretamente, repetindo texto:Primeiro livro já criado para entreter'
      +'jogadores, esse texto é só um teste para saber se a sinopse está configurada e'
      +'desenhada corretamente, repetindo texto:'
    },
    {
      id: 2,
      name: 'Book 2',
      vol: 2,
      user_id: 1,
      pages_id: [0, 1, 2, 3,4 ,5 ,6 ,9],
      status: 'COMPLETO',
      date_create: '2024-02-15',
      date_update: '2024-02-15',
      date_publicated: '2024-02-15',
      sinopse: 'Primeiro livro já criado para entreter jogadores, esse texto é '
      +'só um teste para saber se a sinopse está configurada e desenhada corretamente,'
      +' repetindo texto:Primeiro livro já criado para entreter jogadores,'
      +'esse texto é só um teste para saber se a sinopse está configurada e'
      +'desenhada corretamente, repetindo texto:'
    },
    {
      id: 3,
      name: 'Elite',
      vol: 1,
      user_id: 1,
      pages_id: [],
      status: 'DESENVOLVIMENTO',
      date_create: '2024-02-15',
      date_update: '2024-02-15',
      date_publicated: '2024-02-15',
      sinopse: 'Primeiro livro já criado para entreter jogadores, esse texto é '
      +'só um teste para saber se a sinopse está configurada e desenhada corretamente,'
      +' repetindo texto:Primeiro livro já criado para entreter jogadores,'
      +'esse texto é só um teste para saber se a sinopse está configurada e'
      +'desenhada corretamente, repetindo texto:Primeiro livro já criado para entreter'
      +'jogadores, esse texto é só um teste para saber se a sinopse está configurada e'
      +'desenhada corretamente, repetindo texto:Primeiro livro já criado para entreter'
      +'jogadores, esse texto é só um teste para saber se a sinopse está configurada e'
      +'desenhada corretamente, repetindo texto:'
    },
    {
      id: 4,
      name: 'Book 4',
      vol: 5,
      user_id: 1,
      pages_id: [],
      status: 'DESENVOLVIMENTO',
      date_create: '2024-02-15',
      date_update: '2024-02-15',
      date_publicated: '2024-02-15',
      sinopse: 'Primeiro livro já criado para entreter jogadores, esse texto é '
      +'só um teste para saber se a sinopse está configurada e desenhada corretamente,'
      +' repetindo texto:Primeiro livro já criado para entreter jogadores,'
      +'esse texto é só um teste para saber se a sinopse está configurada e'
      +'desenhada corretamente, repetindo texto:Primeiro livro já criado para entreter'
      +'jogadores, esse texto é só um teste para saber se a sinopse está configurada e'
      +'desenhada corretamente, repetindo texto:Primeiro livro já criado para entreter'
      +'jogadores, esse texto é só um teste para saber se a sinopse está configurada e'
      +'desenhada corretamente, repetindo texto:'
    }
  ]
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
</style>