if (document.querySelector('div#profile.profile_content')) {
    const id = parseInt(document.querySelector('body > script:last-of-type').innerText.split('{"user_id":')[1].split(',')[0]);
    const div = document.createElement('div');
    div.style.fontFamily = 'monospace';
    div.innerHTML = `id: ${id}`;
    document.querySelector('div#profile_short').prepend(div);
}