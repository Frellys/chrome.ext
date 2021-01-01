{
    if (document.querySelector('div#profile.profile_content')) {
        let id = parseInt(document.querySelector('body > script:last-of-type').innerText.split('{"user_id":')[1].split(',')[0]);
        let div = document.createElement('div');
        div.style.fontFamily = 'monospace';
        div.innerHTML = 'id: ' + id;
        document.querySelector('div#profile_short').prepend(div);
    }
}