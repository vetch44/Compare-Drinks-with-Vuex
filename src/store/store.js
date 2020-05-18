import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: false,
    state: {
        showAlc: false,
        showNonAlc: false,
        drinkName: "",
        alcoholicDrinks: [],
        nonAlcoholic: []
    },
    getters: {
        alcoholicDrinks: (state) => {
            let alcoholicDrinks = state.alcoholicDrinks.map( drink => {
                return {
                    name: '! ' + drink.name + ' Drink Responsibly!',
                    instructions: drink.instructions ,
                    ingredients: drink.ingredients
                };
            });
            return alcoholicDrinks;
        }
    },
    mutations: {
        Alc: state => {
            state.showAlc = !state.showAlc
        },          
        nonAlc: state => {
            state.showNonAlc = !state.showNonAlc
        },
        chooseRandom: state => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php` )
                .then(res => res.json())
                .then(data => {
                    if (data.drinks[0].strAlcoholic === "Alcoholic"){
                    state.alcoholicDrinks = [...state.alcoholicDrinks, {name: data.drinks[0].strDrink, instructions: data.drinks[0].strInstructions, ingredients: data.drinks[0].strIngredient1+" "+data.drinks[0].strIngredient2+" "+data.drinks[0].strIngredient3, type: data.drinks[0].strAlcoholic}]}
                    else {state.nonAlcoholic = [...state.nonAlcoholic, {name: data.drinks[0].strDrink, instructions: data.drinks[0].strInstructions, ingredients: data.drinks[0].strIngredient1+" "+data.drinks[0].strIngredient2+" "+data.drinks[0].strIngredient3, type: data.drinks[0].strAlcoholic}]}})
        },
        updateDrinkName (state, drinkName) {
            state.drinkName = drinkName    
        },
        clear: state => {
            state.drinkName = ""
        },
          addDrink: state => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${state.drinkName}`)
            .then(res => res.json())
            .then(data => {
                if(data.drinks[0].strAlcoholic === "Alcoholic"){
                state.alcoholicDrinks = [...state.alcoholicDrinks, {name: data.drinks[0].strDrink,ingredients: data.drinks[0].strIngredient1+" "+data.drinks[0].strIngredient2+" "+data.drinks[0].strIngredient3, instructions: data.drinks[0].strInstructions, type: data.drinks[0].strAlcoholic}]}
                else {state.nonAlcoholic = [...state.nonAlcoholic, {name: data.drinks[0].strDrink, instructions: data.drinks[0].strInstructions,ingredients: data.drinks[0].strIngredient1+" "+data.drinks[0].strIngredient2+" "+data.drinks[0].strIngredient3, type: data.drinks[0].strAlcoholic}]}})
          }
    },
    actions: {
        chooseRandom: (context, payload) => {
            setTimeout(function(){ 
                context.commit('chooseRandom', payload);
            }, 500);
        }
    }
});