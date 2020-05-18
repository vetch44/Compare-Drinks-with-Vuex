<template>
    <div id="Alcoholic">
        <h2>Alcoholic Drinks</h2>
        <ul>
            <li v-for="drink in alcoholicDrinks" v-bind:key="drink.name">
                <span class="name">{{ drink.name }}</span>
                <span class="ingredients">{{ drink.ingredients }}</span>
                <span class="instructions">{{ drink.instructions }}</span>             
            </li>
        </ul>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed: {
        alcoholicDrinks(){
            return this.$store.state.alcoholicDrinks;
        },
         ...mapGetters([
            'alcoholicDrinks'
        ])
    },
    }
</script>

<style scoped>
h2{
    font-size: 8vh;
    font-weight: bolder;
    color: saddlebrown;
}
#Alcoholic{
    background: #D1E4FF;
    opacity: .88;
    border-radius: 12%;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 5vh;
    margin-top: 5vh;
    padding: 10px 20px;
    text-align: center;
    width: 60vw;
    margin-left: 5vw;
    border-style: groove;
    border-width: thick;
}
ul{
    padding: 0;
    list-style-type: none;
}
li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: black;
    border-radius: 10%;
}
.name{
    font-weight: bold;
    font-size: xx-large;
    color: maroon;
    display: block;
}
.ingredients{
display: block;
color:goldenrod;
}
.instructions{
display: block;
color: white;
}
li:hover{
    background-color: teal;
}
</style>