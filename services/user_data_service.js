'use strict'

const { default: axios } = require("axios");

module.exports = {
    get(api) {
        return axios.post(`${api.url}/app/query`, {
            "$find": {
                "_datastore": "_users",
                "_id": "@me"
            }
        }, { headers: { Authorization: `Bearer ${api.token}` } });
    },
    put(api, user_data_id, data) {
        return axios.put(`${api.url}/app/datastores/_users/data/${user_data_id}`, data, { headers: { Authorization: `Bearer ${api.token}` } });;
    },
}
