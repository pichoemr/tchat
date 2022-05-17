'use strict'

const { default: axios } = require("axios");
const message_service = require("../services/message_service");
const salonService = require("../services/salonService");
const user_data_service = require("../services/user_data_service");

module.exports = async (props, event, api) => {
    var user_data = await user_data_service.get(api);

    switch (props.action) {
        case "send_message":
            let salon = await salonService.query(api, props.salon);
            let res = await message_service.new(api, user_data.temp_message, user_data.pseudo, [salon.data[0]._id], []);
            return user_data_service.put(api, user_data._id, {
                ...user_data,
                temp_message: "",
            });
        case "temp_message":
            return user_data_service.put(api, user_data._id, {
                ...user_data,
                temp_message: event.value
            });
    }

}