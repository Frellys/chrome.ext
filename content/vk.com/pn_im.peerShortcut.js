{
    setShortcuts();
    let observer = new MutationObserver(function () {
        document.querySelectorAll('div._im_ui_peers_list > a > span > span._im_r_tx > span.peerNum').forEach(function (el) {
            el.remove();
        });
        setShortcuts();
    });
    observer.observe(document.querySelector('div._im_ui_peers_list'), {
        childList: true
    });
    function setShortcuts() {
        document.querySelectorAll('div._im_ui_peers_list > a > span > span._im_r_tx').forEach(function (peer, pdx) {
            if (peer.querySelector('span.peerNum')) {
                peer.querySelector('span.peerNum').remove();
            }
            if (pdx < 9) {
                let span = document.createElement('span');
                span.className = 'peerNum';
                span.style.fontFamily = 'monospace';
                span.innerHTML = (pdx + 1).toString() + '&nbsp;';
                peer.prepend(span);
            }
        });
    }
}