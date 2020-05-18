<template>
  <div id="app">
      <search></search>
      <alcoholic-drinks v-show="showAlc"></alcoholic-drinks>
      <non-alcoholic v-show="showNonAlc"></non-alcoholic>
      <Menu></Menu>
  </div>
</template>

<script>
import Search from './components/search.vue'
import AlcoholicDrinks from './components/alcoholicDrinks.vue'
import NonAlcoholic from './components/nonAlcoholic.vue'
import Menu from './components/menu.vue'

export default {
    name: 'app',
    components: {
        'search': Search,
        'alcoholicDrinks': AlcoholicDrinks,
        'non-alcoholic': NonAlcoholic,
        'Menu': Menu
    },
    computed:{
        showAlc(){return this.$store.state.showAlc},
        showNonAlc(){return this.$store.state.showNonAlc}
    }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300&display=swap');
body{
    font-family: 'Dosis', sans-serif;
    background-image: url('./assets/background.jpg');
    background-size: cover;
    font-size: larger;
}
</style>