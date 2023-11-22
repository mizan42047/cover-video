document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelectorAll(".wp-block-cover-video-cover-video");
  if (container) {
    container.forEach((item) => {
      const data = JSON.parse(item.getAttribute("data-settings"));
      const video = item.querySelector("#video-markup");
      const videoContent = item.querySelector(".cover-video-content");

      // Function to create and initialize the YouTube player
      const initializeYoutubePlayer = () => {
        const player = new window.YT.Player('video-markup', {
          height: '100%',
          width: '100%',
          videoId: '51itZ0Y8hGw', // Replace with your video ID
          playerVars: {
            'autoplay': 0,
            'controls': 1,
            'rel': 0,
          },
          events: {
            'onReady': onPlayerReady,
          },
        });

        const playButton = item.querySelector('.cover-video-popup-btn'); // Use item here
        playButton.addEventListener('click', () => {
          videoContent.classList.remove('active');
          player.playVideo();
        });
      };

      // Callback function for when the player is ready
      const onPlayerReady = (event) => {
        // Additional customization or actions when the player is ready
      };

      // Check if the YouTube API script has already been loaded
      if (window.YT && window.YT.Player) {
        // If the API is already available, initialize the player immediately
        initializeYoutubePlayer();
      } else {
        // If the API is not yet available, add a listener for when it's ready
        window.onYouTubeIframeAPIReady = initializeYoutubePlayer;
      }
    });
  }
});

