window.addEventListener('keypress', (e) => {
    if (e.ctrlKey && e.code === 'KeyQ') {
        const table = document.querySelector('table.market_multi_table');
        const items = Array.from(table.querySelectorAll('tbody > tr')).map(node => {
            const [qty, price] = node.querySelectorAll('td > input');
            const name = node.querySelector('td > div > span > a').innerText.replace('(Trading Card)', '').trim();
            return { qty, price, name };
        });
        console.log(items);
        const custom_url = document.querySelector('a[href^="https://steamcommunity.com/id/"]').href.split('/').filter(Boolean).pop();
        const appid = document.querySelector('a.market_listing_item_name_link').href.split('/').pop().split('-').shift();
        fetch(`https://steamcommunity.com/id/${custom_url}/gamecards/${appid}/`).then(response => {
            response.text().then(html => {
                const doc = new DOMParser().parseFromString(html, 'text/html');
                const cards = Array.from(doc.querySelectorAll('div.badge_card_set_card')).map(node => {
                    const arr = node.querySelector(':scope > div.badge_card_set_title').outerText.trim().split('\n');
                    const name = arr.pop().replace(/\t/g, '').trim();
                    const qty = (arr.pop() || '(0)').replace(/[\(\)]/g, '');
                    return { name, qty };
                });
                cards.forEach(card => {
                    const item = items.find(el => card.name === el.name);
                    console.log({ card, item });
                    item.qty.value = (5 - parseInt(card.qty)).toString();
                    const [p_val, p_suff] = item.price.value.split(' ');
                    item.price.value = [
                        (parseFloat(p_val.replace(',', '.')) + 2).toFixed(2).toString().replace('.', ','),
                        p_suff
                    ].join(' ');
                });
            });
        });
    }
}, false);