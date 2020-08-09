// vertical(scrollY) axis
window.addEventListener('keydown', function (e) {
    if ((e.code == 'KeyW' || e.code == 'KeyS') && document.querySelector('*:focus') == null) {
        if (window.scrollY > 0) {
            if (e.code == 'KeyW') {
                // request animation frame here
            }
        }
        else this.window.screenY = 0;
    }
}, false);