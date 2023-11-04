const chooseBtn = document.querySelectorAll(".choose__color-btn")
const contentItem = document.querySelectorAll(".content-item")




const chooseColor = (evt) => {
    const target = evt.currentTarget
    const color = target.dataset.button
    const activeColor = document.querySelectorAll(`.${color}`)
    
    chooseBtn.forEach((btn) => {
        btn.classList.remove("choose__color-btn-active")
    })
    target.classList.add("choose__color-btn-active")
    contentItem.forEach((item) => {
        item.classList.remove("content-item-active")
    })
    activeColor.forEach((item) => {
        item.classList.add("content-item-active")
    })
}    
chooseBtn.forEach((btn) => {
    btn.addEventListener('click', chooseColor)
})