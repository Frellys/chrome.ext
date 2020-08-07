window.addEventListener('keydown', function (e) {
    if (e.code == 'KeyW' && document.querySelector('*:focus') == null) {
        console.log(e);
        //console.log(document.hasFocus());
        //console.log(document.querySelector('input:focus'));
        //console.log(document.querySelector('*:focus'));
    }
    //console.log(e);
}, false);