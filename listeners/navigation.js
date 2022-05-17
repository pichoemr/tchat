'use strict'

const user_data_service = require("../services/user_data_service");


module.exports = async (props, event, api) => {
    var user_data = await user_data_service.get(api);
    switch (props.action) {
        case "home":
            return user_data_service.put(api, user_data._id, {
                ...user_data,
                nav: "home"
            });
        case "setting":
            return user_data_service.put(api, user_data._id, {
                ...user_data,
                nav: "setting"
            });
    }
}