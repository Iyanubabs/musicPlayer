const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progresss')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

//Song titles
const songs = ['Shawn Mendes-Cold In', 'Shawn Mendes-Nothing Holding Me Back', 'Fill my cup Lord']

//keep track of songs
let songIndex = 2

//Intially load song info DOM
loadSong(songs[songIndex])

//Update song details
function loadSong(song) {
    title.innerText = song
    audio.src= `C:/Projects/Music Player${song}.mp3`
    cover.src= `C:/Projects/Music Player/${song}.jpg`
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

//Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})