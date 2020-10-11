{
    //let profile = document.querySelector('div#profile.profile_content');
    //let id = document.querySelector('link[href*="https://m.vk.com/id"]');
    //if (id && profile) {
    //    let div = document.createElement('div');
    //    div.innerHTML = id.href.toString().split('/id')[1];
    //    document.querySelector('div#profile_short').prepend(div);
    //}
    let profile = document.querySelector('div#profile.profile_content');
    if (profile) {
        let id = parseInt([...document.querySelectorAll('script')].pop().innerText.split('{"user_id":')[1].split(',')[0]);
        let div = document.createElement('div');
        div.style.fontFamily = 'monospace';
        div.innerHTML = 'id: ' + id;
        document.querySelector('div#profile_short').prepend(div);
    }
}