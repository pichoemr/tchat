'use strict'

const chatService = require("../services/chatService");
const salonService = require("../services/salonService");
const user_data_service = require("../services/user_data_service");

module.exports = async (props, event, api) => {
    let salon = await salonService.query(api, "main")
    let res = await chatService.new(api, props.text, props.pseudo, [salon._id], [])
    console.log(res)
    return res
}