<template>
  <main>
    <div class="container-search">
      <div class="search-book">
        <button class="filter-button" type="button">Filtro</button>
        <input class="search-text" type="text" name="search" id="search" placeholder="pesquise livros">
        <button class="search-button" type="button">Search</button>
      </div>
    </div>
    <div class="containerBooks">
      <div v-for="book in books" :key="book.id" class="FeatureBook">
        <div class="img"></div>
        <div class="info-book">
          <Label>Name:</Label> {{ book.name }} -- <label>Vol:</label>{{ book.vol }} -- <label>   Ano:</label> {{ book.vol }}
          <label>Pages:</label> [{{ book.pages_id.length }}]
        </div>
      </div>
    </div>
  </main>
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

  .filter-button {
    border-radius: 40px 0 0 40px;
  }
  .search-text {
    width: 300px;
  }
  .search-button {
    border-radius: 0 40px 40px 0;
  }
  
  button {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    width: 60px;
    border: 1px solid black;
    box-shadow: 0 0 1px 1px gray;
  }

  button:hover {
    background-color: brown;
    color: white;
    cursor: pointer;
    height: 28px;
    transition: .4s;
  }
  .container-search {
    margin: 10px 0;
    width: 100%;
    height: 70px;
    background-color: rgb(235, 235, 235);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-book {
    width: 500px;
    height: 50px;
    background-color: white;
    gap: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 26px;
  }

  label {
    color: black;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-color: white;
    border-radius: 10px;
    padding: 0 10px;
  }
  .containerBooks {
    display: flex;
    gap: 5px;
  }
  .FeatureBook {
    width: 300px;
    height: 300px;
    background-color: brown;
    box-shadow: 0 2px 2px 1px black;
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
    border: 1px solid black;
    border-radius: 5px;
  }
  .info-book {
    padding: 0 5px;
    border-radius: 3px;
    border: 1px solid black;
    height: 50px;
    width: 95%;
    color: white;
  }
</style>