function main() {
    generateStars(document.getElementById("facts_section"), 35)
    generateStars(document.getElementById("hero_banner"), 35)
    generateStars(document.getElementById("pollution_section"), 35)
}

// functions
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateStars(section, numStars) {
    if (numStars > 50) return
    const container = section.getBoundingClientRect()

    let maxHeight = container.height - 5
    let maxWidth = container.width - 5

    if (maxWidth <= 635)
        numStars -= 15

    for (let i = 0; i < numStars; i++) {
        // creazione div stella
        const star = document.createElement("div")
        star.classList.add("star")

        // posizione casuale
        const topPos = getRandomNumber(5, maxHeight) + "px"
        const leftPos = getRandomNumber(5, maxWidth) + "px"
        star.style.top = topPos
        star.style.left = leftPos

        // dimensioni (uguali sia in larghezza che in altezza)
        const size = getRandomNumber(5, 10) + "px"
        star.style.width = size
        star.style.height = size

        section.appendChild(star)
    }
}

// listeners
document.addEventListener("DOMContentLoaded", main)