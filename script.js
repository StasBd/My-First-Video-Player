const videoPlayer = document.getElementById('videoPlayer');

// Function to play/pause the video
function togglePlayPause() {
    if (videoPlayer.paused) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
}

// Function to stop the video and reset it to the beginning
function stopVideo() {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}

// Event listeners for play/pause and stop buttons
videoPlayer.addEventListener('click', togglePlayPause);
videoPlayer.addEventListener('dblclick', stopVideo);
