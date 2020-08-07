// vertical(scrollY) axis
window.addEventListener('keydown', function (e) {
    if ((e.code == 'KeyW' || e.code == 'KeyS') && document.querySelector('*:focus') == null) {
        if (window.scrollY > 0) {
            if (e.code == 'KeyW') {
                //window.scrollBy(0, -100);
                //window.scrollTo({
                //    top: window.scrollY - 200,
                //    behavior: "smooth"
                //});
                window.scrollTo({
                    top: window.scrollY - 200
                });
            }
        }
        else this.window.screenY = 0;
    }
}, false);