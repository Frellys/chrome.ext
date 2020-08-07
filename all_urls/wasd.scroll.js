window.addEventListener('keydown', function (e) {
    if (e.code == 'KeyW' && document.querySelector('*:focus') == null) {
        console.log(e);
    }
}, false);