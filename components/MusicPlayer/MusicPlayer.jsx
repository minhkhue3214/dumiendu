import { useEffect, useRef, useState } from 'react'
import './style.css'

const MusicPlayer = () => {
  // const musicContainer = useRef(null);
  const audioRef = useRef(null);
  // // const titleRef = useRef(null);
  const coverRef = useRef(null);
  // // const progressRef = useRef(null);
  // // const progressContainerRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);

  const songs = ["ItNhungDaiLauCover-ChuThuyQuynh", "Vai-Lan-Don-Dua-Cover-SOOBIN-Touliver"];
  let songIndex = 0;
  // console.log("audio", audioRef.current);

  function loadSong(song) {
    // titleRef.current.innerText = getSongTitle(song);
    audioRef.current.src = `../public/${song}.mp3`;
    coverRef.current.src = `../../public/img/${song}.jpg`;
  }

  // function getSongTitle(song) {
  //   return song.charAt(0).toUpperCase() + song.slice(1);
  // }

  // function updateProgress(e) {
  //   const { duration, currentTime } = e.srcElement;
  //   const progressPercent = (currentTime / duration) * 100;
  //   progressRef.current.style.width = `${progressPercent}%`;
  // }

  // function setProgress(e) {
  //   const width = this.clientWidth;
  //   const clickX = e.offsetX;
  //   const duration = audioRef.current.duration;
  //   audioRef.current.currentTime = (clickX / width) * duration;
  // }

  useEffect(() => {
    const audio = document.getElementById("audio");
    // const progressContainer = document.getElementById("progress-container");

    // audio.addEventListener("timeupdate", updateProgress);

    const songs = ["ItNhungDaiLauCover-ChuThuyQuynh", "Vai-Lan-Don-Dua-Cover-SOOBIN-Touliver"];
    let songIndex = 0;

    function loadSong(song) {
      // titleRef.current.innerText = getSongTitle(song);
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
  // return (
  //   <>
  //     {/* <div className={`music-container ${isPlay ? "play" : ""}`} id="music-container" ref={musicContainer}> */}
  //       {/* <div className="music-info">
  //         <h2 id="title" className="title" ref={titleRef}></h2>
  //         <div className="progress-container" id="progress-container" ref={progressContainerRef}>
  //           <div className="progress" id="progress" ref={progressRef} onClick={(e) => setProgress(e)}></div>
  //         </div>
  //       </div> */}
  //       <audio
  //         ref={audioRef}
  //         src="../public/music/ItNhungDaiLauCover-ChuThuyQuynh.mp3"
  //         id="audio"
  //       ></audio>
  //       {/* <div className="navigation"> */}
  //         {/* <button id="prev" className="action-btn" onClick={() => prevSong()}>
  //           <i className="fas fa-backward"></i>
  //         </button> */}
  //         <button id="play" className="action-btn action-btn-big" onClick={() => handleMusic()}>
  //           <div className="img-container">
  //             <img
  //               ref={coverRef}
  //               src="../public/images/ItNhungDaiLauCover-ChuThuyQuynh.jpg"
  //               alt="music-cover"
  //               className='music-cover'
  //               id="cover"
  //             />
  //           </div>
  //         </button>
  //         {/* <button id="next" className="action-btn" onClick={() => nextSong()}>
  //           <i className="fas fa-forward"></i>
  //         </button> */}
  //     {/* </div> */}
  //       {/* </div> */}
  //   </>
  // )

  return (
    <>
      <audio
        ref={audioRef}
        src="../public/music/ItNhungDaiLauCover-ChuThuyQuynh.mp3"
        id="audio"
      ></audio>
      <div className='music_container'>
        <div className="backward-btn" onClick={()=>prevSong()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 24 24" fill="red">
            <path d="M13.9783 5.31877L10.7683 8.52877L8.79828 10.4888C7.96828 11.3188 7.96828 12.6688 8.79828 13.4988L13.9783 18.6788C14.6583 19.3588 15.8183 18.8688 15.8183 17.9188V12.3088V6.07877C15.8183 5.11877 14.6583 4.63877 13.9783 5.31877Z" fill="white" />
          </svg>
        </div>
        <div className='play-btn'  onClick={() => handleMusic()}>
          <img
            ref={coverRef}
            src="../../public/img/ItNhungDaiLauCover-ChuThuyQuynh.jpg"
            alt="music-cover"
            className={`music-cover ${isPlay ? "play" : "pause"}`}
            // className='music-cover'
            id="cover"
          />
          <div className="dot"></div>
        </div>
        <div className="forward-btn" onClick={()=>nextSong()}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 24 24" fill="white">
            <path d="M15.1997 10.4919L13.2297 8.52188L10.0197 5.31188C9.33969 4.64188 8.17969 5.12188 8.17969 6.08188V12.3119V17.9219C8.17969 18.8819 9.33969 19.3619 10.0197 18.6819L15.1997 13.5019C16.0297 12.6819 16.0297 11.3219 15.1997 10.4919Z" fill="white" />
          </svg>
        </div>
      </div>
    </>
  )
}

export default MusicPlayer
