<template>
    <div>
        <h1>Compare your Drinks</h1>
        <input v-model="drinkName" placeholder="Choose the name of your drink">
        <button class="clear" v-on:click="clear">x</button>
        <button v-on:click="AddDrink">Add Drink</button>
        <button v-on:click="chooseRandom">Add Random</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    computed: {
         drinkName: {
    get () {
      return this.$store.state.drinkName
    },
    set (value) {
      this.$store.commit('updateDrinkName', value)
    }
  }
    },
    methods: {
        AddDrink: function(){
            this.$store.commit('addDrink')
        },
        clear: function(){
            this.$store.commit('clear')
        },
        ...mapActions([
        'chooseRandom'
        ]),
    }
}
</script>

<style scoped>
h1{
    font-size: 12vh;
    color: white;
    margin-left: 28%;
    margin-top: 5vh;
}
input{
background: none;
color: slateblue;
font-size: x-large;
border: none;
margin-left: 20%;
width: 36vw;
text-align: center;
}
input:hover{
    border-bottom: saddlebrown;
    border-bottom-style: solid;
    border-bottom-width: thick;
}
button{
background-color: yellow;
border-radius: 28%;
margin-left: 4vw;
padding: 1vh;
cursor: pointer;
font-size: larger;
}
button:hover{
    background-color: greenyellow;
}
.clear{
    background-color: slateblue;
    padding: 2px;
    border-radius: 50%;
    font-size: medium;
}
.clear:hover{
    background-color: tomato;
}
</style>