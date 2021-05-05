// import hs from "hyperscript";

const videoContainer = document.getElementById("videoContainer");
// const youtubeIframeApi = "https://www.youtube.com/iframe_api";
// const youtubeVideoId = "miEJI0XQiN4";
// var player;
function buildVideo() {
  let player;
  let done = false;

  player = new YT.Player("video", {
    videoId: "miEJI0XQiN4",
    playerVars: {
      playsinline: 1,
    },
    events: {
      onReady: function (event) {
        event.target.playVideo();
      },
      onStateChange: function (event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(() => player.stopVideo(), 6000);
          done = true;
        }
      },
    },
  });
  // };
}

export default buildVideo;
