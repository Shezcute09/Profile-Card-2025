// Profile Card Functionality
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
    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!validTypes.includes(file.type)) {
      alert("Please select a valid image file (JPEG, PNG, or GIF)");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Please select an image smaller than 5MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      const avatar = document.querySelector('[data-testid="test-user-avatar"]');
      avatar.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// Add avatar upload functionality
document.addEventListener("DOMContentLoaded", function () {
  const avatar = document.querySelector('[data-testid="test-user-avatar"]');

  if (avatar) {
    // Make avatar clickable for upload
    avatar.style.cursor = "pointer";
    avatar.setAttribute("title", "Click to upload new profile picture");
    avatar.setAttribute(
      "aria-label",
      "Profile picture. Click to upload a new image"
    );

    avatar.addEventListener("click", function () {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = handleAvatarUpload;
      input.click();
    });

    // Keyboard accessibility for avatar
    avatar.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = handleAvatarUpload;
        input.click();
      }
    });
  }
});
