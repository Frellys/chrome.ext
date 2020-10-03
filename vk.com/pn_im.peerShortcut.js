{
    setShortcuts();
    function setShortcuts() {
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
            }
        });
    }
}