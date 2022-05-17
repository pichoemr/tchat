'use strict'

const user_data_service = require("../services/user_data_service");

module.exports = async (props, event, api) => {
    var user_data = await user_data_service.get(api);
    switch (props.action) {
        case 'pseudo_changed':
            return user_data_service.put(api, user_data._id, {
                ...user_data,
                pseudo: event.value,

            });
        case "validate":
            if (user_data.pseudo != undefined) {
                return user_data_service.put(api, user_data._id, {
                    ...user_data,
                    nav: "home",
                });
            } else {
                return user_data_service.add_error(api, user_data._id, "pseudo cannot be blank !")
            }

    }



}