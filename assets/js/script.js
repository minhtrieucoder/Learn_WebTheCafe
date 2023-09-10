const btnOpenEat = document.querySelector('.js-eat')
const eatMenu = document.querySelector('.js-eat-menu')
const btnOpenDrinks = document.querySelector('.js-drinks')
const drinksMenu = document.querySelector('.js-drinks-menu')


btnOpenEat.addEventListener('click', showEatMenu)

function showEatMenu() {
    eatMenu.classList.remove('close')
    eatMenu.classList.add('open')
    drinksMenu.classList.remove('open')
    drinksMenu.classList.add('close')

    btnOpenEat.classList.remove('btn-close')
    btnOpenEat.classList.add('btn-open')
    btnOpenDrinks.classList.remove('btn-open')
    btnOpenDrinks.classList.add('btn-close')
}


btnOpenDrinks.addEventListener('click', showDrinksMenu)

function showDrinksMenu() {
    drinksMenu.classList.remove('close')
    drinksMenu.classList.add('open')
    eatMenu.classList.remove('open')
    eatMenu.classList.add('close')

    btnOpenDrinks.classList.remove('btn-close')
    btnOpenDrinks.classList.add('btn-open')
    btnOpenEat.classList.remove('btn-open')
    btnOpenEat.classList.add('btn-close')
}