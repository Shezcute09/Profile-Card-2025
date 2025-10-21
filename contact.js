document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("success-message");

  // Validation functions
  function validateName(name) {
    return name.trim().length > 0;
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateSubject(subject) {
    return subject.trim().length > 0;
  }

  function validateMessage(message) {
    return message.trim().length >= 10;
  }

  // Show error function
  function showError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    const fieldElement = document.getElementById(fieldId);

    errorElement.textContent = message;
    fieldElement.setAttribute("aria-invalid", "true");
    fieldElement.classList.add("error");
  }

  // Clear error function
  function clearError(fieldId) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    const fieldElement = document.getElementById(fieldId);

    errorElement.textContent = "";
    fieldElement.setAttribute("aria-invalid", "false");
    fieldElement.classList.remove("error");
  }

  // Real-time validation
  function setupRealTimeValidation() {
    const fields = ["name", "email", "subject", "message"];

    fields.forEach((field) => {
      const element = document.getElementById(field);

      element.addEventListener("blur", function () {
        validateField(field);
      });

      element.addEventListener("input", function () {
        // Clear error when user starts typing
        if (this.value.trim() !== "") {
          clearError(field);
        }
      });
    });
  }

  // Validate individual field
  function validateField(fieldId) {
    const value = document.getElementById(fieldId).value.trim();
    let isValid = true;
    let errorMessage = "";

    switch (fieldId) {
      case "name":
        if (!validateName(value)) {
          isValid = false;
          errorMessage = "Full name is required";
        }
        break;
      case "email":
        if (!validateEmail(value)) {
          isValid = false;
          errorMessage = "Please enter a valid email address";
        }
        break;
      case "subject":
        if (!validateSubject(value)) {
          isValid = false;
          errorMessage = "Subject is required";
        }
        break;
      case "message":
        if (!validateMessage(value)) {
          isValid = false;
          errorMessage = "Message must be at least 10 characters long";
        }
        break;
    }

    if (!isValid) {
      showError(fieldId, errorMessage);
    } else {
      clearError(fieldId);
    }

    return isValid;
  }

  // Form submission handler
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate all fields
    const fields = ["name", "email", "subject", "message"];
    let isFormValid = true;

    fields.forEach((field) => {
      if (!validateField(field)) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      // Show success message
      successMessage.hidden = false;
      successMessage.focus();

      // Reset form
      contactForm.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.hidden = true;
      }, 5000);
    } else {
      // Focus on first error
      const firstError = document.querySelector('[aria-invalid="true"]');
      if (firstError) {
        firstError.focus();
      }
    }
  });

  // Initialize real-time validation
  setupRealTimeValidation();
});
