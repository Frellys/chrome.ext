window.addEventListener('keydown', function (e) {
    if ((e.code == 'KeyW' || e.code == 'KeyS') && document.querySelector('*:focus') == null) {
        console.log(e);
    }
}, false);