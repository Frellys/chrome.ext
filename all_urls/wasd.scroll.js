window.addEventListener('keydown', function (e) {
    if ((e.code == 'KeyW' || e.code == 'KeyS') && document.querySelector('*:focus') == null) {
        //if (window.scrollY > 0) {
        //    if (e.code == 'KeyW') {
        //        //window.scrollBy(0, -10);
        //        window.scrollTo({
        //            top: window.scrollY - 20,
        //            behavior: "smooth"
        //        });
        //        //window.scrollY -= 1;
        //    }
        //}
        //else this.window.screenY = 0;
        ////window.scrollY
        //console.log(e);
        //console.log(window.scrollY);
    }
}, false);