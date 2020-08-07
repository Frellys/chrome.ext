window.addEventListener('keydown', function (e) {
    if (e.code == 'KeyW' && !document.hasFocus()) {
        console.log('yee');
        //console.log(document.hasFocus());
    }
    //console.log(e);
}, false);