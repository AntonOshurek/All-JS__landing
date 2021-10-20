export default function customVideo() {
  const video = document.querySelector('.player__video');
  const playBtn = document.querySelector('.player__play');
  const replayBtn = document.querySelector('.player__replay');
  const progressBar = document.querySelector('.player__status-bar');
  const playerTime = document.querySelector('.player__time');

  const getZero = (num) => {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  const toggleVideoStatus = () => {
    if (video.paused) {
      video.play();
      playBtn.classList.add('player__stop');
    } else {
      video.pause();
      playBtn.classList.remove('player__stop');
    }
  };
  playBtn.addEventListener('click', toggleVideoStatus);
  video.addEventListener('click', toggleVideoStatus);

  replayBtn.addEventListener('click', () => {
    video.currentTime = 0;
    video.pause();
  });

  video.addEventListener('timeupdate', () => {
    progressBar.value = (video.currentTime / video.duration) * 100;

    let minutes = Math.floor(video.currentTime / 60);
    let seconds = Math.floor(video.currentTime % 60);

    playerTime.textContent = `${getZero(minutes)} : ${getZero(seconds)}`;
  });

  progressBar.addEventListener('change', () => {
    video.currentTime = (progressBar.value * video.duration) / 100;
  });
};
