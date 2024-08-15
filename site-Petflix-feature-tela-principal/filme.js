document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('meuVideo');

    function enterFullscreen() {
        var video = document.getElementById('meuVideo');
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        } else {
            console.log("Tela cheia não suportada.");
        }
    }

    function tryEnterFullscreen() {
        setTimeout(() => {
            enterFullscreen();
        }, 1000);
    }

    video.addEventListener('canplay', function () {
        tryEnterFullscreen();
    });

    // Redirecionar quando o vídeo terminar
    video.addEventListener('ended', function () {
        console.log("Filme terminado, redirecionando...");
        window.location.href = 'filme_2.html';
    });
});
