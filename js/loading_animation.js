function loading_animation() {
    const loader = document.querySelector(".loading_animation")

    setTimeout(() => {
        loader.style.opacity = "0"
        document.body.style.overflowY = "scroll"
        
        setTimeout(() => {
            loader.style.display = "none"
        }, 2000)
    }, 3000)
}

document.addEventListener("DOMContentLoaded", loading_animation)
