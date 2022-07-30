
//Using guide from "SankThomas" for javascript submit
/*Main Changes"
1. using hover/focus states for button in css instead of js
2. ratings.forEach function:
    for each btn, whenever clicked, the function changes the actual rating content to
    id rating containing a number
    note that ratings refers to the btns, actualRating fefers to var made by #ratings
 */

const submitButton = document.getElementById('sub-rating')
const ratings = document.querySelectorAll('.btn')
const actualRating = document.getElementById('rating')
const rateContainer = document.querySelector('.rate-container')
const thanksContainer = document.querySelector('.thank-container')


submitButton.addEventListener('click', () =>{
    submitButton.addEventListener('click', () => {
        rateContainer.style.display = 'none'
        thanksContainer.classList.remove('hidden')
            })

    ratings.forEach((rating) => {
        rating.addEventListener('click', () => {
            actualRating.textContent = rating.textContent
        })
    })
})