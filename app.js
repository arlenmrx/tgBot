import TelegramBot from 'node-telegram-bot-api';

const token = '5693917479:AAE-xITOecrKr7tpZ8lLVrlW1uc3IVJWsDo';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
    console.log(msg)
    if(msg.text === '/start') {
        bot.sendMessage(msg.from.id, 'Выберите способ обучения', {
            reply_markup: {
                keyboard: [
                    [{
                        text: 'Выбрать стандартное обучение'
                    }],
                    [{
                        text: 'logout'
                    }],
                    [{
                        text: 'login'
                    }],
                ]
            }
        })
    }
})

console.log('bot started')