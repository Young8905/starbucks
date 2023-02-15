var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'Ak_o5yHsx-c', // c최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, //자동재생유무
      loop: true, //반복재생유무
      playList: 'Ak_o5yHsx-c' // 반복 재생할 유튜브 영상 ID목록  
    },
    events: {
      onReady: function (event) {
        event.target.mute() //음소거
        
      }
    }
  });
}


 
