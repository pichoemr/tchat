'use strict'

module.exports = (data, props) => {
    if (data[0].register) {
        return {
            type: "widget",
            name: "home",
            query: {
                "$find": {
                    "_datastore": "_users",
                    "_id": "@me"
                }
            }
        }
    } else {
        return {
            type: "widget",
            name: "register",
            query: {
                "$find": {
                    "_datastore": "_users",
                    "_id": "@me"
                }
            }
        }
    }
}

