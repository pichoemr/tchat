'use strict'

const chatService = require("../services/chatService");
const salonService = require("../services/salonService");


module.exports = async (props, event, api) => {
    await salonService.createDatastore(api).catch((e => { console.log(e) }));
    await chatService.createDatastore(api).catch((e => { console.log(e) }));;
    return salonService.new(api, { name: "main" }).catch((e => { console.log(e) }));
}