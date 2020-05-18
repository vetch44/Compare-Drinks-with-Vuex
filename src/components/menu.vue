<template>
    <div id="menu">
        <button v-on:click="Alc"><span class="count">{{alcoholicDrinks.length}}</span> Alcoholic</button>
        <button v-on:click="nonAlc"><span class="count">{{nonAlcoholic.length}}</span> Alcohol Free</button>
    </div>
</template>

<script>

export default {
computed: {
alcoholicDrinks(){ 
    return this.$store.state.alcoholicDrinks
    },
nonAlcoholic(){
    return this.$store.state.nonAlcoholic
}
},
methods: {
nonAlc: function(){
            this.$store.commit('nonAlc')
        },
Alc: function(){
            this.$store.commit('Alc')
        }
}
}
</script>

<style scoped>
#menu{
  top: 36vh;
  width:12vw; 
  right:0; 
  bottom: 25vh;
  height: 32vh;
  background: whitesmoke; 
  position: fixed;
  opacity: .8;
  border-bottom-left-radius: 10%;
  border-top-left-radius: 10%;
}
#menu:hover{
    animation-duration: 1s;
    animation-name: Grow;
    width: 16vw;
    height: 42vh;
}
@keyframes Grow{
   from{
       height: 32vh;
       width:12vw;
   }
   to{
    width: 16vw;
    height: 42vh;}
}
button{
    background-color: green;
    cursor: pointer;
    border-radius: 15%;
    font-size: x-large;
    margin-top: 20%;
}
button:hover{
    background-color: greenyellow;
}
.count{
    background-color: maroon;
    color:mintcream;
    border-radius: 50%;
    padding: 3px;
}
</style>