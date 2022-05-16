'use strict'

const { default: axios } = require("axios");

module.exports = {
    get(api, salonId) {
        return axios.get(`${api.url}/app/datastores/Salon/data/${salonId}`, { headers: { Authorization: `Bearer ${api.token}` } }
        );
    },
    put(api, salon) {
        return axios.put(`${api.url}/app/datastores/Salon/data/${counter._id}`, salon, { headers: { Authorization: `Bearer ${api.token}` } });
    },
    new(api, name, message) {
        return axios.post(`${api.url}/app/datastores/Salon/data`, { "name": name }, { headers: { Authorization: `Bearer ${api.token}` } });
    },
    delete(api, salonId) {
        return axios.delete(`${api.url}/app/datastores/Salon/data/${salonId}`, { headers: { Authorization: `Bearer ${api.token}` } });

    },
    createDatastore(api) {
        return axios.post(`${api.url}/app/datastores`, { "name": "Salon" }, { headers: { Authorization: `Bearer ${api.token}` } });
    },
    query(api, name) {
        return axios.post(`${api.url}/app/query`, { "$find": { "_datastore": "Salon", "name": name } }, { headers: { Authorization: `Bearer ${api.token}` } })
    }
}
