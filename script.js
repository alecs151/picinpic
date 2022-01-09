const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Select media stream prompt

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.onplay();
    };
  } catch (error) {}
}

button.addEventListener("click", async () => {
  // Disable button
  button.disabled = true;
  // Start PIP
  await videoElement.requestPictureinPicture();
  // reset
  button.disabled = false;
});

selectMediaStream();
