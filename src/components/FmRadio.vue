<template>
  <audio ref="audioPlayer" controls autoplay>
    <track kind="captions" />
  </audio>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const audioPlayer = ref<HTMLAudioElement | null>(null);
let currentBitrate = 32;
let timer = -1;
const reconnectTime = 3000;

function play() {
  audioPlayer.value?.play();
}

function pause() {
  audioPlayer.value?.pause();
}

function initAudio() {
  if (!audioPlayer.value) {
    return;
  }

  audioPlayer.value.src = `http://bfmstream.bfm.ru:8004/fm${currentBitrate}`;
  audioPlayer.value.preload = 'none';
  audioPlayer.value.load();
}

function changeBitrate(bitrate: number) {
  console.log(bitrate);
  if (currentBitrate !== bitrate) {
    currentBitrate = bitrate;
    initAudio();
  }
}

function reconnect() {
  pause();
  setTimeout(() => initAudio(), reconnectTime);
}

function handleError() {
  console.log('Произошла ошибка при загрузке аудио');
  reconnect();
}

function handleCanPlay() {
  if (audioPlayer.value?.paused) {
    play();
  }
}

function handleTimeUpdate() {
  const currentTime = audioPlayer.value?.currentTime || 0;
  const duration = audioPlayer.value?.duration || 0;
  const remaining = duration - currentTime;
  if (remaining < 3 && !audioPlayer.value?.paused) {
    pause();
    setTimeout(() => play(), 3000);
  }
}

function updateBitrate() {
  const { connection }: any = navigator;
  if (connection && connection.downlink) {
    const downlinkMbps = connection.downlink * 0.7; // учитываем возможные потери
    if (downlinkMbps < 0.5) {
      changeBitrate(32);
    } else {
      changeBitrate(64);
    }
  }
}

onMounted(() => {
  initAudio();
  audioPlayer.value?.addEventListener('error', handleError);
  audioPlayer.value?.addEventListener('canplay', handleCanPlay);
  audioPlayer.value?.addEventListener('timeupdate', handleTimeUpdate);
  timer = setInterval(updateBitrate, 5000);
});

onUnmounted(() => {
  audioPlayer.value?.removeEventListener('error', handleError);
  audioPlayer.value?.removeEventListener('canplay', handleCanPlay);
  audioPlayer.value?.removeEventListener('timeupdate', handleTimeUpdate);
  clearInterval(timer);
});
</script>

<style>

audio {
  width: 100%;
}

</style>
