export default function customVideo() {
  const video = document.querySelector('.player__video');
  const playBtn = document.querySelector('.player__play');
  const stopBtn = document.querySelector('.player__stop');
  const replayBtn = document.querySelector('.player__replay');
  const progressBar = document.querySelector('.player__status-bar');

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

    /*let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
      minutes = '0' + String(minutes);
    }*/

    //let seconds = Math.floor(video.currentTime % 60);

    //time.innerHTML = `${minutes} : ${seconds}`;
  }

  video.addEventListener('timeupdate', updateProgress);
};
