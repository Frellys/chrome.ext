window.addEventListener('keydown', function (e) {
    if ((e.code == 'KeyW' || e.code == 'KeyS') && document.querySelector('*:focus') == null) {
        //if (window.scrollY > 0) {
        //    if (e.code == 'KeyW') {
        //        //window.scrollBy(0, -100);
        //        window.scrollTo({
        //            top: window.scrollY - 200,
        //            behavior: "smooth"
        //        });
        //        //window.scrollY -= 1;
        //    }
        //}
        //else this.window.screenY = 0;
        //console.log(new KeyboardEvent('keydown', { 'code': 'ArrowUp' }));
        //window.dispatchEvent(new KeyboardEvent('keydown', { 'code': 'ArrowUp' }));
        //customEvent = document.createEvent('KeyEvents');
        //customEvent.initKeyEvent('keydown', true, true, window, false,
        //    false, false, false, 38, 0);
        //document.dispatchEvent(customEvent);
        ////window.scrollY
        //console.log(e);
        //console.log(window.scrollY);
    }
}, false);