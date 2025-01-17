const sounds = {
    boom: new Audio("./sounds/boom.wav"),
    clap: new Audio("./sounds/clap.wav"),
    hihat: new Audio("./sounds/hihat.wav"),
    kick: new Audio("./sounds/kick.wav"),
    openhat: new Audio("./sounds/openhat.wav"),
    ride: new Audio("./sounds/ride.wav"),
    snare: new Audio("./sounds/snare.wav"),
    tink: new Audio("./sounds/tink.wav"),
    tom: new Audio("./sounds/tom.wav")
}
const playSound = (sound) => {
    sounds[sound].currentTime = 0
    sounds[sound].play()
}
const buttons = document.querySelectorAll(".drum");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        playSound(button.dataset.sound)
    })
})
document.addEventListener("keydown", (event) => {
    const key = event.key.toUpperCase()
    const button = document.querySelector(`.drum[data-key="${key}"]`)
    if(button){
        const sound = button.getAttribute("data-sound")
        playSound(sound)
    }
})