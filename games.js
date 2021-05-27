document.addEventListener('DOMContentLoaded',() => {

        //card options
        const cardArray = [
            {
                name: 'fries',
                img: 'img/fries.jpeg '
            },
            {
                name: 'fries',
                img: 'img/fries.jpeg'
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
                img: 'img/hot-dog.jpeg'
            },
            {
                name: 'hotdog',
                img: 'img/hot-dog.jpeg'
            },
            {
                name: 'ice-cream',
                img: 'img/ice-cream.jpeg'
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
        //cardArray.sort(() => 0.5 - Math.random ())

        const grid = document.querySelector('.grid')
        const resultDisplay = document.querySelector('#result')
        let cardsChosen = []
        let cardsChosenId = []
        let cardsWon = []
        //Game Board
        function createBoard() {
            for (let i = 0; i < cardArray.length; i++) {
                var card = document.createElement('img')
                card.setAttribute('src', 'img/blank.png')
                card.setAttribute('data-id', i)
                card.addEventListener('click', flipcard)
                grid.appendChild(card)
            }
        }

        //check for matchs
        function checkForMatch() {
            let cards = document.querySelectorAll('img')
            const optionOneId = cardsChosenId[0]
            const optionTwoId = cardsChosenId[1]
            if (cardsChosen[0] === cardsChosen[1]) {
                alert('You found a match')
                cards[optionOneId].setAttribute('src', 'img/white.png')
                cards[optionTwoId].setAttribute('src', 'img/white.png')
                cardsWon.push(cardsChosen)
            } else {
                cards[optionOneId].setAttribute('src', 'img/blank.png')
                cards[optionTwoId].setAttribute('src', 'img/blank.png')
                alert('Sorry, try again')
            }
            cardsChosen = []
            cardsChosenId = []
            resultDisplay.textContent = cardsWon.length
            if (cardsWon.length === cardArray.length/2) {
                resultDisplay.textContent = 'Congratulations!'
            }

        }

        //flip your card
        function flipcard() {
            let cardId = this.getAttribute('data-id')
            cardsChosen.push(cardArray[cardId].name)
            cardsChosenId.push(cardId)
            this.setAttribute('src', cardArray[cardId].img)
            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500)
            }

        }

        createBoard()
})

