const menuBtn = document.querySelector(".menu-btn")
const closeIcon = document.querySelector(".close")
const hamburgerIcon = document.querySelector(".hamburger")
const nav = document.querySelector(".nav")
const overlay = document.querySelector(".overlay")
const bookmark = document.querySelector(".bookmark")
const bookmarkIcon = bookmark.querySelector("svg")
const bookmarkText = bookmark.querySelector("span")
const thankYou = document.querySelector(".thankyou")
const btnDone = thankYou.querySelector(".btn-done")
const inputRadio = document.querySelectorAll("[type='radio']")
const boxes = document.querySelectorAll("form .box")
const modal = document.querySelector(".modal")
const openModalBtn = document.querySelector("#cta")
const closeModalBtn = modal.querySelector("img")
const form = modal.querySelector("form")
const hr = modal.querySelectorAll("hr")
const submit = modal.querySelectorAll("button[type='submit']")
const submitBox = modal.querySelectorAll(".submit")

const reward = document.querySelectorAll(".reward")
const dot = document.querySelectorAll(".radio-btn::before")
form.addEventListener("submit", e => {
    e.preventDefault()
})

menuBtn.addEventListener("click", () => {
    closeIcon.classList.toggle("hidden")
    hamburgerIcon.classList.toggle("hidden")
    nav.classList.toggle("show")
    overlay.classList.toggle("active")
})
overlay.addEventListener("click", () => {
    closeIcon.classList.toggle("hidden")
    hamburgerIcon.classList.toggle("hidden")
    nav.classList.remove("show")
    overlay.classList.remove("active")
    modal.classList.remove("scale")
    thankYou.classList.remove("done")

})
bookmark.addEventListener("click", (e) => {
    e.preventDefault()
    bookmarkIcon.classList.toggle("bookmarked")
    bookmarkText.classList.toggle("bookmarked")
})
inputRadio.forEach((e, i) => {
    e.addEventListener("change", () => {
        e.setAttribute("checked", true)
        e.classList.add("checked")
        boxes[i].classList.add("selected")
        boxes.forEach((box, index) => {
            if (index !== i) {
                box.classList.remove("selected")
                e.setAttribute("checked", false)
            }
        })
        hr[i].style.display = "block"
        hr.forEach((h, index) => {
            if (index !== i) {
                h.style.display = "none";
            }
        })
        submitBox[i].classList.add("flex")
        submitBox.forEach((h, index) => {
            if (index !== i) {
                h.classList.remove("flex")
            }
        })
    })
})
openModalBtn.addEventListener("click", (e) => {
    openModal()
    e.preventDefault()
})
const openModal = () => {
    modal.classList.add("scale")
    overlay.classList.add("active")
}
closeModalBtn.addEventListener("click", (e) => {
    e.preventDefault()
    modal.classList.remove("scale")
    overlay.classList.remove("active")
})
reward.forEach((el, index) => {
    el.addEventListener("click", () => {
        openModal()
        inputRadio[index].setAttribute("checked", true)
        inputRadio.forEach((r, i) => {
            if (index !== i) {
                r.removeAttribute("checked")
            }
        })
    })
})
submit.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        thankYou.classList.add("done")
        modal.classList.remove("scale")
    })
})
btnDone.addEventListener("click", (e) => {
    e.preventDefault()
    thankYou.classList.remove("done")
    overlay.classList.remove("active")
})