const cards = () => {
    const cardsWrapper = document.querySelector('.content-cards')

    const searchInput = document.querySelector('#search-input')
    const searchButton = document.querySelector('#search-button')

    const films = [
        {
            id: 0,
            title: 'Марсианин-1',
            original: ', The Martian 2015',
            genre: 'Фантастика, приключения',
            rating: 7.8,
            link: './film.html',
            image: './assets/images/film.png',
        },
        {
            id: 1,
            title: 'Марсианин-2',
            original: ', The Martian 2015',
            genre: 'Фантастика, приключения',
            rating: 7.8,
            link: './film.html',
            image: './assets/images/film.png',
        },
        {
            id: 2,
            title: 'Марсианин-3',
            original: ', The Martian 2015',
            genre: 'Фантастика, приключения',
            rating: 7.8,
            link: './film.html',
            image: './assets/images/film.png',
        },
    ]

    const render = (array) => {
        cardsWrapper.innerHTML = ''

        array.forEach((item) => {
            cardsWrapper.insertAdjacentHTML(
                'beforeend',
                `
                <a href="${item.link}" class="content-cards__item">
                    <div class="content-cards__item--img">
                        <img src="${item.image}" alt="Film">
                    </div>

                    <div class="content-cards__item--title">
                        <h5>${item.title}</h5>
                        <span>${item.original}</span>
                    </div>

                    <p class="content-cards__item--description">
                        ${item.genre}
                    </p>

                    <p class="content-cards__item--rating">
                        ${item.rating}
                    </p>
                </a>
                `
            )
        })
    }

    searchButton.addEventListener('click', () => {
        render(films.filter((item) => item.title.includes(searchInput.value)))
    })

    render(films)
}

export default cards
