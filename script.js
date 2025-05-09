const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".nav-links")

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active")
      hamburger.classList.remove("active")
    })
  })
}


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      })
    }
  })
})

document.addEventListener("DOMContentLoaded", () => {
  // Replace with actual image URLs when available
  const placeholderImages = {
    "event-poster.jpg": "/placeholder.svg?height=600&width=800",
    "speaker1.jpg": "/placeholder.svg?height=300&width=300",
    "speaker2.jpg": "/placeholder.svg?height=300&width=300",
    "speaker3.jpg": "/placeholder.svg?height=300&width=300",
    "speaker4.jpg": "/placeholder.svg?height=300&width=300",
  }


  document.querySelectorAll("img").forEach((img) => {
    const src = img.getAttribute("src")
    if (placeholderImages[src]) {
      img.setAttribute("src", placeholderImages[src])
    }
  })
})
