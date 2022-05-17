'use strict'

const { default: axios } = require("axios");

module.exports = {
    get(api) {
        return axios.post(`${api.url}/app/query`, {
            "$find": {
                "_datastore": "_users",
                "_id": "@me"
            }
        }, { headers: { Authorization: `Bearer ${api.token}` } }).then((value) => {
            return value.data.data[0]
        });
    },
    put(api, user_data_id, data) {
        return axios.put(`${api.url}/app/datastores/_users/data/${user_data_id}`, data, { headers: { Authorization: `Bearer ${api.token}` } });
    },
    async add_error(api, user_data_id, message) {
        let user_data = await this.get(api)
        return this.put(api, user_data_id, {
            ...user_data,
            error_message: message
        })
    },
}
