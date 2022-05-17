'use strict'

const { default: axios } = require("axios");

module.exports = {
    get(api, MessageId) {
        return axios.get(`${api.url}/app/datastores/Messages/data/${MessageId}`, { headers: { Authorization: `Bearer ${api.token}` } }
        ).then((value) => {
            return value.data
        });
    },
    put(api, Message) {
        return axios.put(`${api.url} / app / datastores / Messages / data / ${Message._id}`, chat, { headers: { Authorization: `Bearer ${api.token}` } });
    },
    new(api, text, pseudo, refs, refby) {
        return axios.post(`${api.url} / app / datastores / Messages / data`, { "text": text, "pseudo": pseudo, "_refs": refs, "_refBy": refby }, { headers: { Authorization: `Bearer ${api.token}` } });
    },
    delete(api, MessageId) {
        return axios.delete(`${api.url} / app / datastores / Messages / data / ${MessageId}`, { headers: { Authorization: `Bearer ${api.token}` } });

    },
    createDatastore(api) {
        return axios.post(`${api.url} / app / datastores`, { "name": "Messages" }, { headers: { Authorization: `Bearer ${api.token}` } });
    }
}
