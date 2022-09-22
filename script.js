
// Klik dumgeta na tastaturi pusta zvuk
window.addEventListener("keydown", function(event){
    let tipka = event.keyCode
    let provera = document.querySelector(`div[data-key="${tipka}"]`)

    if(!provera){
        return
    }

    let audio = document.querySelector(`audio[data-key="${tipka}"]`)
    audio.currentTime = 0
    audio.play()
})






