const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound =>{
    const btn=document.createElement("button")
    btn.classList.add('btn')

    btn.innerText=sound

    btn.addEventListener("click", () => {
        soundStops()

        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild
})

function soundStops(){
    sounds.forEach(sound => {
        const song=document.getElementById(sound)

        song.pause()
        song.currentTime= 0 
    })
}