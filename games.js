document.addEventListener('DOMContentLoaded',() => {

        //card options
        const cardArray = [
            {
                name: 'fries',
                img: 'img/fries.png'
            },
            {
                name: 'fries',
                img: 'img/fries.png'
            },
            {
                name: 'cheeseburger',
                img: 'img/burger.jpeg'
            },
            {
                name: 'cheeseburger',
                img: 'img/burger.jpeg'
            },
            {
                name: 'hotdog',
                img: 'img/hotdog.png'
            },
            {
                name: 'hotdog',
                img: 'img/hotdog.png'
            },
            {
                name: 'ice-cream',
                img: 'img/ice-cream.jpeg'
            },
            {
                name: 'milkshake',
                img: 'img/shake.jpeg'
            },
            {
                name: 'milkshake',
                img: 'img/shake.jpeg'
            },
            {
                name: 'pizza',
                img: 'img/pizza.jpeg'
            },
            {
                name: 'pizza',
                img: 'img/pizza.jpeg'
            },

        ]




        const grid = document.querySelector('.grid')

        //Game Board
        function createBoard() {
            for (let i = 0; i < cardArray.length; i++) {
                var card = document.createElement('img')
                card.setAttribute('src', 'img/blank.png')
                card.setAttribute('dat-id', i)
                card.addEventListener('click', flipcard)
            }
        }


        function flipcard() {

        }

        createBoard()
})

