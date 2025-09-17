const modalFunc = () => {
    const modal = document.querySelector('.cart__modal-overlay')
    const closeModalButton = modal.querySelector('.cart__modal-header-close')
    const headerBox = document.querySelector('.header__box')
    const cartModalButton = headerBox.querySelector('.button--outline')




    const openModal = (modal) => {
        modal.classList.add('open')

    }


    const closeModal = (modal) => {
        modal.classList.remove('open')
    }


    const closeModalByOverlay = (evt) => {
        if (evt.target.classList.contains('open')) {
            closeModal(evt.target)
        }
    }


    modal.addEventListener('click', closeModalByOverlay)


    cartModalButton.addEventListener('click', () => {
        openModal(modal)
    })


    closeModalButton.addEventListener('click', () => {
        closeModal(modal)
    })

}




const restsFunc = () => {
    const container = document.querySelector('#rest-container')

    const restArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            link: 'pizza-plus.jpg'
        },
        {
            id: 1,
            title: 'Тануки',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            link: 'tanuki.jpg'
        },
        {
            id: 2,
            title: 'FoodBand',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            link: 'food-band.jpg'
        },
        {
            id: 3,
            title: 'Жадина-пицца',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            link: 'zhadina-pizza.jpg'
        },
        {
            id: 4,
            title: 'Точка еды',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            link: 'eat-point.jpg'
        }, {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            link: 'pizza-burger.jpg'
        },

    ]

    const renderRests = (array) => {
        container.innerHTML = ''
        array.forEach(card => {
            container.insertAdjacentHTML('beforeend',
                `
 <a href="./goods.html?id=${card.id}" class="card">
                            <img src="./images/restaraunt-cards-image/${card.link}" alt="" class="card__image">
                            <div class="card__description">
                                <div class="card__main">
                                    <h4 class="card__title">${card.title}</h4>
                                    <span class="card__bage">${card.time}</span>
                                </div>
                                <div class="card__extra">
                                    <div class="card__info">
                                        <div class="card__raiting"><img src="./images/icons/star.svg"
                                                alt=""><span>${card.rating}</span></div>
                                        <div class="card__price">${card.price}</div>
                                        <div class="card__group">${card.type}</div>
                                    </div>
                                </div>
                            </div>
                        </a>
            `)
        });

    }

    setTimeout(() => {
        renderRests(restArray)
    }, 1000);

  container.innerHTML = '<p style="width: 100%; text-align: center; grid-column: 2 / 3; justify-content: center;">Загрузка...</p>'


}

restsFunc()
modalFunc()

