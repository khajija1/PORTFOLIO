const musicTitles = document.querySelector("#music-titles");
const progressBar = document.querySelector("#progress-bar");
const currentTimeElem = document.querySelector("#current-time");
const finalTimeElem = document.querySelector("#final-time");
const playButton = document.querySelector(".play");
const pauseButton = document.querySelector(".pause");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const shuffleButton = document.querySelector(".shuffle");
const musicImg = document.querySelector(".music-img img");


const songs = [
  {
    title: "Mercy",
    artist: "No Name",
    url: "https://unsplash.com/photos/red-rose-flower-with-fire-NxTs_QPtA6M",
    thumbnail:
       "https://images.unsplash.com/photo-1535119403-61b2d00d6c20?auto=format&fit=crop&w=1000&q=60", 
    duration: "3:57",
  },
  {
    title: "Humphries",
    artist: "No Name",
    url: "https://github.com/khajija1/mp3-samples/raw/main/Les%20Humphries%20Singers%20-%20Mexico.mp3",
    thumbnail:
      "https://images.unsplash.com/photo-1535119403-61b2d00d6c20?auto=format&fit=crop&w=1000&q=60",
    duration: "3:57",
  },
  {
    title: "Valensico",
    artist: "No Name",
    url: "https://github.com/khajija1/mp3-samples/raw/main/Gary%20Valenciano%20-%20Where%20Do%20I%20Begin,%20(Love%20Story)%60%60%60%60.mp3",
    thumbnail:
      "https://images.unsplash.com/photo-1513180950021-b9ff91bb5e5b?auto=format&fit=crop&w=1000&q=60",
    duration: "3:37",
  },
  {
    title: "Freddie",
    artist: "No Name",
    url: "https://github.com/khajija1/mp3-samples/raw/main/Freddie%20Mercury%20&%20Montserrat%20Caball%C3%A9%20-%20The%20Golden%20Boy%20(a%20cappella%20featuring%20gospel%20choir)%20(2).mp3",
    thumbnail:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=60",
    duration: "5:00",
  },
  {
    title: "Bethel",
    artist: "No Name",
    url: "https://github.com/khajija1/mp3-samples/raw/main/Bethel%20Music%20-%20One%20Thing%20Remains.mp3",
    thumbnail:
      "https://images.unsplash.com/photo-1535119403-61b2d00d6c20?auto=format&fit=crop&w=1000&q=60",
    duration: "6:12",
  },
];

let currentSongIndex = 0;
let isPlaying = false;
let audio = new Audio(songs[currentSongIndex].url);

function loadSong(song) {
  audio.src = song.url;
  finalTimeElem.textContent = song.duration;
  musicImg.src = song.thumbnail;
}

function playSong() {
  audio.play();
  isPlaying = true;
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(songs[currentSongIndex]);
  playSong();
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(songs[currentSongIndex]);
  playSong();
}

function updateProgress() {
  progressBar.value = (audio.currentTime / audio.duration) * 100;
  currentTimeElem.textContent = formatTime(audio.currentTime);
}

function shuffleSong() {
  currentSongIndex = Math.floor(Math.random() * songs.length);
  loadSong(songs[currentSongIndex]);
  playSong();
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

playButton.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

pauseButton.addEventListener("click", pauseSong);
nextButton.addEventListener("click", nextSong);
prevButton.addEventListener("click", prevSong);
shuffleButton.addEventListener("click", shuffleSong);

audio.addEventListener("timeupdate", updateProgress);

songs.forEach((song, index) => {
  const button = document.createElement("button");
  button.textContent = song.title;
  const span = document.createElement("span");
  span.textContent = song.duration;
  button.appendChild(span);
  musicTitles.appendChild(button);

  button.addEventListener("click", () => {
    currentSongIndex = index;
    loadSong(song);
    playSong();
  });
});



