"use strict";

// CODE

const formElem = document.querySelector('.table');
const url = 'https://discordapp.com/api/webhooks/818521962523131915/1eBC4KQ81Wjv0r0R7DkFWv5p8rSgkYsX9WqvJTZKHJO-0BxGnGmhtZrMNvbz0RN_ucUA';

formElem.addEventListener('submit', async (e) => {
    e.preventDefault()

    let data = {
        content: 'Данные',
        embeds: [
            {
                title: formElem.querySelectorAll('input')[0].value,
                footer:{
                    text: formElem.querySelectorAll('input')[2].value,
                },
                description: formElem.querySelectorAll('input')[1].value,
            }
        ]
    }

    let response = await fetch(url + "?wait=true", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })

    for(let i = 0; i < 3; i++){
        formElem.querySelectorAll('input')[i].value = '';
    }

    formElem.querySelectorAll('input')[3].value = 'Отправлено';
})