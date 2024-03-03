function main() {
    generateStars(100)
}

// functions
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateStars(numStars) {
    if (numStars > 200) return

    for (let i = 0; i < numStars; i++) {
        // creazione div stella
        const star = document.createElement("div")
        star.classList.add("star")

        // posizione casuale
        const topPos = getRandomNumber(5, document.documentElement.scrollHeight - 100) + "px"
        const leftPos = getRandomNumber(5, window.innerWidth) + "px"
        star.style.top = topPos
        star.style.left = leftPos

        // dimensioni (uguali sia in larghezza che in altezza)
        const size = getRandomNumber(5, 15) + "px"
        star.style.width = size
        star.style.height = size

        document.body.appendChild(star)
    }
}

// listeners
document.addEventListener("DOMContentLoaded", main)