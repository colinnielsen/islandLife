const listURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
const smoothieURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=smoothie"

var pTag = document.createElement('p')
var h1Tag = document.createElement('h1')
var ulTag = document.createElement('ul')
var liTag = document.createElement('li')
var divTag = document.createElement('div')
var imgTag = document.createElement('img')
fetch(listURL)
    .then(function(response){
       return response.json();
    })
    .then(function(response){
      var drinkList = ulTag
      console.log(response);
      response.drinks.reduce(acc, drink => {
        liTag.textContent = drink.strDrink
        acc += liTag
      }, [])
    })


fetch(smoothieURL)
    .then(function(response){
       return response.json();
    })
    .then(function(response){
      console.log(response);
    })