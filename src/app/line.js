const axios = require('axios');
require('dotenv').config();

const channelAccessToken = process.env.channelAccessToken;

module.exports = {
    sendLindMsgBroadcast: async (message, token = channelAccessToken) => {
        try {
            const { status } = await axios({
                method: 'post',
                url: 'https://api.line.me/v2/bot/message/broadcast',
                Headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ${token}',
                },
                data: { messages }
            });
            
            return status;
        } catch (e) {
            throw Error(e);
        }
    }
};