import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (currentTime) {
  const currentSec = currentTime.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentSec));
};


player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time' || 0))
);
player.on('timeupdate', throttle(onPlay, 1000));
