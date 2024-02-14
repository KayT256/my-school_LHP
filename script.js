// Change the schedule table based on the dropdown #session
document.getElementById("session").addEventListener("change", function() {
    var selectedSession = this.value;
    if (selectedSession === "morning") {
        document.getElementById("morning").style.display = "";
        document.getElementById("afternoon").style.display = "none";
    } else if (selectedSession === "afternoon") {
        document.getElementById("morning").style.display = "none";
        document.getElementById("afternoon").style.display = ""
    }
})

// Change the photos when click #next or #back
document.addEventListener("DOMContentLoaded", function() {
    var photos = document.querySelectorAll(".photo");
    var currentIndex = 0;
  
    function changePhoto(index) {
        photos.forEach(function(photo, i) {
            if (i === index) {
                photo.classList.add("active");
            } else {
                photo.classList.remove("active");
            }
        });
    }
  
    document.getElementById("next").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % photos.length;
        changePhoto(currentIndex);
    });
  
    document.getElementById("back").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        changePhoto(currentIndex);
    });
  
    changePhoto(currentIndex);
})

// Autoplay the video when it is in the view. Stop it when out of view.
document.addEventListener("scroll", function() {
    var video = document.getElementById("video");
    var videoPosition = video.getBoundingClientRect();
  
    if(videoPosition.top >= 0 && videoPosition.bottom <= window.innerHeight) {
        video.play();
    } else {
        video.pause();
    }
});
  
  