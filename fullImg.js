const lanImages = document.querySelectorAll('.imge');

lanImages.forEach(img => {
    img.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            if (img.requestFullscreen) {
                img.requestFullscreen();
            } else if (img.webkitRequestFullscreen) { 
                img.webkitRequestFullscreen();
            } else if (img.msRequestFullscreen) { 
                img.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) { 
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { z
                document.msExitFullscreen();
            }
        }
    });
});
