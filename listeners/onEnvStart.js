'use strict'

const message_service = require("../services/message_service");
const salonService = require("../services/salonService");


module.exports = async (props, event, api) => {
    await salonService.createDatastore(api).catch((e => { console.log(e) }));
    await message_service.createDatastore(api).catch((e => { console.log(e) }));;
    return salonService.new(api, "main").catch((e => { console.log(e) }));
}