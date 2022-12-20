

const init = function() {  
if (message.body === 'Oi') {
    client.sendListMessage(message.from, {
        buttonText: 'Cardápio',
        description: 'Faça seu pedido aqui!',
        sections: [
            {
                title: 'Hamburguer',
                rows: [
                    {
                        rowId: '1',
                        title: 'X-Tudo (R$22,99)',
                        description: 'alface, tomate, ovo, frango, bacon, milho',
                    },
                    {
                        rowId: '2',
                        title: 'X-Tonelada (R$25,99)',
                        description: 'alface, tomate, ovo, frango, bacon, milho, ovo, frango, bacon, milho',
                    },
                    {
                        rowId: '3',
                        title: 'X-Egg (R$10,59)',
                        description: 'alface, tomate, ovo, bife'
                    }
                ],
            },
        ],
    })
        .then((result) => {
            console.log('Result: ', result);
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro);

        });
} else if (message.body === 'Ola') {
    client.sendText(message.from, 'WPPConnect message with buttons', {
        useTemplateButtons: true,
        title: 'Title text',
        footer: 'Footer text',
        buttons: [
            {
                url: 'https://wppconnect.io/',
                text: 'WPPConnect Site'
            },
            {
                phoneNumber: '+55 11 22334455',
                text: 'Call me'
            },
            {
                id: 'your custom id 1',
                text: 'Some text'
            },
            {
                id: 'another id 2',
                text: 'Another text'
            }
        ],

    }

    );
}
else if (message.body === 'Olá') {
    client
        .sendLinkPreview(
            message.from,
            'https://www.youtube.com/watch?v=6Ir9AtNasaY&ab_channel=Delacruz',
            'Olha essa video'
        )
        .then((result) => {
            console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
}
else if (message.body === 'Image') {
    client
        .sendImage(
            message.from,
            './Pagamento.png',
            'Formas de pagamento',
            'Caption text'
        )
        .then((result) => {
            console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
}
else if (message.body === 'Video') {
    client
        .sendFile(
            message.from,
            './Alfa1.mp4',
            'file_name',
            'See my file in pdf'
        )
        .then((result) => {
            console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
}
else if (message.body === 'Audio') {

    client.sendPtt(message.from, "./alfredo.mp3")
        .then((result) => {
            console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
        });
}
}

module.exports = init;
