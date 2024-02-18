<template>
  <div class="containerBooks">
      <div v-for="book in books" :key="book.id" class="FeatureBook">
        <div class="img"><i class="pi pi-book" style="font-size: 4rem; color: var(--color-border-hover);"></i></div>
        <div class="info-book">
          <Label>Name:</Label> {{ book.name }} -- <label>Vol:</label>{{ book.vol }} -- <label>   Ano:</label> {{ book.vol }}
          <label>Pages:</label> [{{ book.pages_id.length }}]
        </div>
      </div>
    </div>
</template>

<script lang="ts">
interface Book {
  id: number;
  name: string,
  vol: number;
  pages_id: number[];
  user_id: number;
  date_create: string;
  date_update: string;
  date_publicated: string;
}

export default {
  data() {
    return {
      books: [] as Book[],
    }
  },
  created() {
    this.books = [
        {
          id: 1,
          name: 'Book 1',
          vol: 1,
          user_id: 1,
          pages_id: [1, 2, 34],
          date_create: '2024-02-15',
          date_update: '2024-02-15',
          date_publicated: '2024-02-15'
        },
        {
          id: 2,
          name: 'Book 2',
          vol: 1,
          user_id: 1,
          pages_id: [0, 1, 2, 3,4 ,5 ,6 ,9],
          date_create: '2024-02-15',
          date_update: '2024-02-15',
          date_publicated: '2024-02-15'
        },
        {
          id: 3,
          name: 'Elite',
          vol: 1,
          user_id: 1,
          pages_id: [],
          date_create: '2024-02-15',
          date_update: '2024-02-15',
          date_publicated: '2024-02-15'
        },
        {
          id: 4,
          name: 'Book 4',
          vol: 1,
          user_id: 1,
          pages_id: [],
          date_create: '2024-02-15',
          date_update: '2024-02-15',
          date_publicated: '2024-02-15'
        },
        // Adicione mais objetos conforme necessário
      ]
  }
}

</script>

<style scoped>
  .containerBooks {
    display: flex;
    gap: 5px;
  }
  .FeatureBook {
    width: 300px;
    height: 350px;
    background-color: var(--color-contrast-mute);
    box-shadow: 0 2px 2px 1px var(--color-border-mute);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    border-radius: 5px;
  }

  .img {
    margin: 5px;
    background-color: white;
    width: 70%;
    height: 70%;
    border: 1px solid var(--color-border-mute);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .info-book {
    padding: 0 5px;
    border-radius: 3px;
    box-shadow: 0 0 1px 1px var(--color-border-mute);
    height: 50px;
    width: 95%;
    color: white;
  }

  label {
    color: black;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-color: var(--color-contrast-soft);
    padding: 0 10px;
  }
</style>