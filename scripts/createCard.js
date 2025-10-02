import products from "../data/data.js"

const cardsGrid = document.querySelector('.cards-grid')


function createCard(product) {
    const cardTemplate = document.querySelector('#card')
    const card = cardTemplate.content.cloneNode(true)
    const cardTitle = card.querySelector('.card-title')
    const cardImg = card.querySelector('.card-image img')
    const cardAvailabilityText = card.querySelector('.card-availability-text')
    const cardAvailabilityImg = card.querySelector('.card-availability-img')

    cardTitle.textContent = product.title
    cardImg.src = product.img
    cardImg.alt = product.title

    if (product.availability === "В наличии") {
        cardAvailabilityImg.src = './img/Frame 301.svg'
        cardAvailabilityText.textContent = `${product.availability} ${product.length.toString()} м.`
    }

    else {
        cardAvailabilityImg.src = './img/Frame 301r.svg'
        cardAvailabilityText.textContent = product.availability
    }

    return card
}

products.forEach(item => {
    const card = createCard(item)
    cardsGrid.appendChild(card)
})