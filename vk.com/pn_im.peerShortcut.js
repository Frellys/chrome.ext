{
    //setShortcuts();
    //function setShortcuts() {
    //    let peers = document.querySelectorAll('div._im_ui_peers_list > a > span > span._im_r_tx');
    //    for (let pdx = 0; pdx < 10; pdx++) {
    //        let span = document.createElement('span');
    //        span.className = 'peerNum';
    //        span.style.fontFamily = 'monospace';
    //        span.innerHTML = pdx + '&nbsp;';
    //        peers[pdx].prepend(span);
    //    }
    //}
    document.querySelectorAll('div._im_ui_peers_list > a > span > span._im_r_tx').forEach(function (peer, pdx) {
        if (peer.querySelector('span.peerNum')) {
            peer.querySelector('span.peerNum').remove();
        }
        if (pdx < 10) {
            let span = document.createElement('span');
            span.className = 'peerNum';
            span.style.fontFamily = 'monospace';
            span.innerHTML = pdx + '&nbsp;';
            peer.prepend(span);
            console.log(span);
        }
    });
}