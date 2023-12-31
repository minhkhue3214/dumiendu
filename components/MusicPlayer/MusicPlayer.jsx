import { useEffect, useRef, useState } from 'react'
import './style.css'

const MusicPlayer = () => {
  const musicContainer = useRef(null);
  const audioRef = useRef(null);
  const titleRef = useRef(null);
  const coverRef = useRef(null);
  const progressRef = useRef(null);
  const progressContainerRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);

  const songs = ["ItNhungDaiLauCover-ChuThuyQuynh", "Vai-Lan-Don-Dua-Cover-SOOBIN-Touliver"];
  let songIndex = 0;
  console.log("audio", audioRef.current);

  function loadSong(song) {
    titleRef.current.innerText = getSongTitle(song);
    audioRef.current.src = `../public/${song}.mp3`;
    coverRef.current.src = `../../public/img/${song}.jpg`;
  }

  function getSongTitle(song) {
    return song.charAt(0).toUpperCase() + song.slice(1);
  }

  function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progressRef.current.style.width = `${progressPercent}%`;
  }

  function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (clickX / width) * duration;
  }

  useEffect(() => {
    const audio = document.getElementById("audio");
    const progressContainer = document.getElementById("progress-container");

    audio.addEventListener("timeupdate", updateProgress);

    const songs = ["ItNhungDaiLauCover-ChuThuyQuynh", "Vai-Lan-Don-Dua-Cover-SOOBIN-Touliver"];
    let songIndex = 0;

    function loadSong(song) {
      titleRef.current.innerText = getSongTitle(song);
      audioRef.current.src = ``;
      audioRef.current.src = `../public/${song}.mp3`;
      coverRef.current.src = `../../public/img/${song}.jpg`;
    }

    function getSongTitle(song) {
      return song.charAt(0).toUpperCase() + song.slice(1);
    }

    // Init
    loadSong(songs[songIndex]);
  }, [])

  function playSong() {
    setIsPlay(true)
    audio.play();
  }

  function pauseSong() {
    setIsPlay(false)
    audio.pause();
  }

  const handleMusic = () => {
    isPlay ? pauseSong() : playSong();
  }

  function prevSong() {
    songIndex--;
    if (songIndex < 0) songIndex = songs.length - 1;
    loadSong(songs[songIndex]);
    playSong();
  }

  function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) songIndex = 0;
    loadSong(songs[songIndex]);
    playSong();
  }
  return (
    <>
      <div className={`music-container ${isPlay ? "play" : ""}`} id="music-container" ref={musicContainer}>
        <div className="music-info">
          <h2 id="title" className="title" ref={titleRef}></h2>
          <div className="progress-container" id="progress-container" ref={progressContainerRef}>
            <div className="progress" id="progress" ref={progressRef} onClick={(e) => setProgress(e)}></div>
          </div>
        </div>
        <audio
          ref={audioRef}
          src="../public/music/ItNhungDaiLauCover-ChuThuyQuynh.mp3"
          id="audio"
        ></audio>
        <div className="navigation">
          <button id="prev" className="action-btn" onClick={() => prevSong()}>
            <i className="fas fa-backward"></i>
          </button>
          <button id="play" className="action-btn action-btn-big" onClick={() => handleMusic()}>
            <div className="img-container">
              <img
                ref={coverRef}
                src="../public/images/ItNhungDaiLauCover-ChuThuyQuynh.jpg"
                alt="music-cover"
                id="cover"
              />
            </div>
          </button>
          <button id="next" className="action-btn" onClick={() => nextSong()}>
            <i className="fas fa-forward"></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default MusicPlayer