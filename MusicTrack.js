const videos = document.querySelectorAll("iframe");

videos.forEach((video) => {
    video.src += "?autoplay=0";
});

videos.forEach((video) => {
    video.addEventListener("mouseenter", () => {
        video.style.boxShadow = "0px 0px 10px rgba(255, 255, 255, 1)";
    });

    video.addEventListener("mouseleave", () => {
        video.style.boxShadow = "0px 0px 5px rgba(255, 255, 255, 0.8)";
    });
});