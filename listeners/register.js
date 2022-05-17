'use strict'

const user_data_service = require("../services/user_data_service");

module.exports = async (props, event, api) => {
    var user_data = await user_data_service.get(api);

    switch (props.action) {
        case 'pseudo_changed':
            return user_data_service.put(api, user_data.data.data[0]._id, {
                pseudo: event.value,
                register: false,
            });
        case "validate":
            if (user_data.data.data[0].pseudo.length > 0) {
                return user_data_service.put(api, user_data.data.data[0]._id, {
                    pseudo: user_data.data.data[0].pseudo,
                    register: true,
                });
            } else {
                user_data_service.add_error(api, user_data.data.data[0]._id, "pseudo cannot be blank !")
            }

    }



}