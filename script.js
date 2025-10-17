function updateTime() {
  const timeElement = document.getElementById("currentTime");
  if (timeElement) {
    timeElement.textContent = `Current time: ${Date.now()} ms`;
  }
}

// Update time immediately and then every second
updateTime();
setInterval(updateTime, 1000);

// Handle avatar upload functionality
function handleAvatarUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const avatar = document.querySelector('[data-testid="test-user-avatar"]');
      avatar.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// Add avatar upload functionality (optional enhancement)
document.addEventListener("DOMContentLoaded", function () {
  const avatar = document.querySelector('[data-testid="test-user-avatar"]');

  //   Make avatar clickable for upload (optional feature)
  //   avatar.style.cursor = "pointer";
  //   avatar.addEventListener("click", function () {
  //     const input = document.createElement("input");
  //     input.type = "file";
  //     input.accept = "image/*";
  //     input.onchange = handleAvatarUpload;
  //     input.click();
  //   });

  //   avatar.title = "Click to upload new profile picture";
});
