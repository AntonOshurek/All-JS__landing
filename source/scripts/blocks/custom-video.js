export default function customVideo() {
  const video = document.querySelector('.player__video');
  const playBtn = document.querySelector('.player__play');
  const replayBtn = document.querySelector('.player__replay');
  const progressBar = document.querySelector('.player__status-bar');
  const playerTime = document.querySelector('.player__time');

  function getZero (num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  function toggleVideoStatus() {
    if (video.paused) {
      video.play();
      playBtn.style.backgroundImage = 'url("../../img//custom-video/pause.svg")';
    } else {
      video.pause();
      playBtn.style.backgroundImage = 'url("../../img//custom-video/play.svg")';
    }
  };
  playBtn.addEventListener('click', toggleVideoStatus);
  video.addEventListener('click', toggleVideoStatus);

  function stopVideo() {
    video.currentTime = 0;
    video.pause();
  };
  replayBtn.addEventListener('click', stopVideo);

  function updateProgress() {
    progressBar.value = (video.currentTime / video.duration) * 100;

    let minutes = Math.floor(video.currentTime / 60);

    let seconds = Math.floor(video.currentTime % 60);

    playerTime.textContent = `${getZero(minutes)} : ${getZero(seconds)}`;
  }

  video.addEventListener('timeupdate', updateProgress);
};
