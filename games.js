document.addEventListener('DOMContentLoaded',() => {

        //card options
        const cardArray = [
            {
                name: 'fries',
                img: 'images/fries.png'
            },
            {
                name: 'fries',
                img: 'images/fries.png'
            },
            {
                name: 'cheeseburger',
                img: 'images/cheeseburger.png'
            },
            {
                name: 'cheeseburger',
                img: 'images/cheeseburger.png'
            },
            {
                name: 'hotdog',
                img: 'images/hotdog.png'
            },
            {
                name: 'hotdog',
                img: 'images/hotdog.png'
            },
            {
                name: 'ice-cream',
                img: 'images/hotdog.png'
            },
            {
                name: 'milkshake',
                img: 'images/milkshake.png'
            },
            {
                name: 'milkshake',
                img: 'images/milkshake.png'
            },
            {
                name: 'pizza',
                img: 'images/pizza.png'
            },
            {
                name: 'pizza',
                img: 'images/pizza.png'
            },

        ]




        const grid = document.querySelector('.grid')

        //Game Board
        function createBoard() {
            for (let i = 0; i < cardArray.length; i++) {
                var card = document.createElement('img')
                card.setAttribute('src', 'images/blank.png')
                card.setAttribute('dat-id', i)
                card.addEventListener('click', flipcard)
            }
        }


        function flipcard() {

        }

        createBoard()
})

