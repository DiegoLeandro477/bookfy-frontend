<template>
  <main>
    <div class="container-search">
      <div class="search-book">
        <button class="filter-button" type="button">
          Filtro
          <i class="pi pi-filter"></i>
        </button>
        <input  type="text" 
          class="search-text" 
          id="search" 
          placeholder="Digite o nome do livro">
        <button class="search-button" type="button">
          <span class="pi pi-search"></span>
        </button>
      </div>
    </div>
    <FeatureBook />
  </main>
</template>

<script lang="ts" setup>
  import FeatureBook from '@/components/FeatureBook.vue';
</script>

<style scoped>

  .filter-button {
    border-radius: 40px 0 0 40px;
  }
  .search-text {
    height: 28px;
    width: 300px;
    color: var(--color-text);
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
    background-color: var(--color-contrast-soft);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    width: 60px;
    height: 28px;
    border: 1px solid var(--color-border);
    box-shadow: 0 0 1px 1px var(--color-border-hover);
    color: var(--color-text);
  }

  button:hover {
    background-color: var(--color-contrast);
    color: black;
    cursor: pointer;
    height: 30px;
    transition: .4s;
    box-shadow: 0 0 2px 2px var(--color-border-hover);
  }
  .container-search {
    background-color: var(--color-background-mute);
    width: 100%;
    height: 80px;
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

</style>