'use strict'

const { default: axios } = require("axios");
const message_service = require("../services/message_service");
const salonService = require("../services/salonService");
const user_data_service = require("../services/user_data_service");

module.exports = async (props, event, api) => {
    var user_data = await user_data_service.get(api);

    switch (props.action) {
        case "send_message":
            if (user_data.temp_message.length > 0) {
                let salon = await salonService.query(api, props.salon);
                console.log(salon)
                let res = await message_service.new(api, user_data.temp_message, user_data.pseudo, [salon.data[0]._id], []);
                console.log(res)
                return user_data_service.put(api, user_data._id, {
                    ...user_data,
                    temp_message: "",
                });
            }
            break;
        case "temp_message":
            return user_data_service.put(api, user_data._id, {
                ...user_data,
                temp_message: event.value
            });
    }

}