{
    let peers = document.querySelectorAll('div._im_ui_peers_list > a > span > span._im_r_tx');
    for (let pdx = 0; pdx < 10; pdx++) {
        let span = document.createElement('span');
        span.style.fontFamily = 'monospace';
        span.innerHTML = pdx + '&nbsp;';
        peers[pdx].prepend(span);
    }
}