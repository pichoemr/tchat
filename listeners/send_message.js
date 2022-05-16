'use strict'

const { default: axios } = require("axios");
const message_service = require("../services/message_service");
const salonService = require("../services/salonService");
const user_data_service = require("../services/user_data_service");

module.exports = async (props, event, api) => {
    var user_data = await user_data_service.get(api);

    switch (props.action) {
        case "send_message":
            let salon = await salonService.query(api, props.salon)
            console.log(salon.data.data[0])
            let res = await message_service.new(api, user_data.data.data[0].temp_message, user_data.data.data[0].pseudo, [salon.data.data[0]._id], [])
            return res
        case "temp_message":
            return user_data_service.put(api, user_data.data.data[0]._id, {
                pseudo: user_data.data.data[0].pseudo,
                register: user_data.data.data[0].register,
                temp_message: event.value
            });
    }

}