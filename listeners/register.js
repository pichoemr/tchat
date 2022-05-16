'use strict'

const user_data_service = require("../services/user_data_service");

module.exports = async (props, event, api) => {
    var user_data = await user_data_service.get(api);
    console.log(props)
    console.log(event)
    switch (props.action) {
        case 'pseudo_changed':
            return user_data_service.put(api, user_data.data.data[0]._id, {
                pseudo: event.value,
                register: false,
            });
        case "validate":
            console.log(user_data.data.data[0]);
            return user_data_service.put(api, user_data.data.data[0]._id, {
                pseudo: user_data.data.data[0].pseudo,
                register: true,
            });
    }



}