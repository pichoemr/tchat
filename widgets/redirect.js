'use strict'

module.exports = (data, props) => {
    switch (data[0].nav) {
        case "home":
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
        case "register":
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

