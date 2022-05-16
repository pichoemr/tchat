'use strict'

const user_data_service = require("../services/user_data_service");


module.exports = async (props, event, api) => {
    var user_data = await user_data_service.get(api);

    return user_data_service.put(api, user_data.data.data[0]._id, {
        register: false,
    });
}