window.addEventListener('click', function (e) {
    if (e.target.className === 'item_market_action_button_contents') {
        const links = document.querySelectorAll('a[href*="https://steamcommunity.com/market/listings"]');
        const item_link = Array.from(links).filter(el => el.offsetParent).pop();
        if (item_link) {
            fetch(item_link.href).then(r => r.text()).then(html => {
                const id = html.split('ItemActivityTicker.Start(').pop().split(')').shift().trim();
                const order_link = new URL('https://steamcommunity.com/market/itemordershistogram');
                const params = {
                    country: 'RU',
                    language: 'russian',
                    currency: 5,
                    item_nameid: id,
                    two_factor: 0
                };
                Object.entries(params).forEach(([key, value]) => {
                    order_link.searchParams.append(key, value);
                });
                fetch(order_link.href).then(r => r.json()).then(data => {
                    const graph = data.buy_order_graph;
                    if (graph && graph.length) {
                        const price = data.buy_order_graph[0][0];
                        document.querySelector('#market_sell_buyercurrency_input').value = price;
                        const accept = document.querySelector('#market_sell_dialog_accept_ssa');
                        if (!accept.checked) {
                            accept.checked = true;
                        }
                    }
                    else {
                        console.log('oops! smth went wrong while getting prices');
                    }
                });
            });
        }
    }
}, false);