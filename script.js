document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("background-audio");
    const toggleAudioBtn = document.getElementById("toggle-audio");
    const sideAudioBtn = document.getElementById("side-audio");
    const sideSourcesBtn = document.getElementById("side-sources");
    const sideToggle = document.getElementById("side-toggle");
    const sideOptions = document.getElementById("side-options");
  
    // Toggle audio function
    function toggleAudio() {
      if (audio.paused) {
        audio.play();
        toggleAudioBtn.textContent = "Pause Audio";
        sideAudioBtn.textContent = "Pause Audio";
      } else {
        audio.pause();
        toggleAudioBtn.textContent = "Play Audio";
        sideAudioBtn.textContent = "Play Audio";
      }
    }
  
    toggleAudioBtn.addEventListener("click", toggleAudio);
    sideAudioBtn.addEventListener("click", toggleAudio);
  
    // Side panel toggle
    sideToggle.addEventListener("click", function() {
      sideOptions.classList.toggle("visible");
    });
  
    // Side panel "Sources" button smooth scroll
    sideSourcesBtn.addEventListener("click", function() {
      document.getElementById("sources").scrollIntoView({ behavior: "smooth" });
    });
  
    // Lightbox functionality
    const lightbox = document.getElementById("lightbox");
    const lightboxContent = document.querySelector("#lightbox .lightbox-content");
    const lightboxClose = document.querySelector("#lightbox .close");
    const images = document.querySelectorAll(".lightbox-image");
  
    images.forEach(img => {
      img.addEventListener("click", function() {
        lightbox.classList.add("visible");
        lightboxContent.src = this.src;
      });
    });
  
    if (lightboxClose) {
        lightboxClose.addEventListener("click", function() {
            lightbox.classList.remove("visible");
        });
    } else {
        console.error("Element with class '.lightbox .close' not found!");
    }
    
    // Hide lightbox when clicking outside the image
    lightbox.addEventListener("click", function(e) {
      if (e.target !== lightboxContent) {
        lightbox.classList.remove("visible");
      }
    });
  });
  