const panels=document.querySelectorAll(".panel")

panels.forEach(panel => {
    panel.addEventListener("click",() =>{
        removeClassList();
        panel.classList.add("active")
    })
})

function removeClassList(){
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}