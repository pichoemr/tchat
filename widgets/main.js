'use strict'

module.exports = (data, props) => {
  return {
    type: "flex",
    direction: "vertical",
    fillParent: true,
    children: [
      {
        type: "widget",
        name: "header",
      },
      {
        type: "flexible",
        child: {
          type: "widget",
          name: "redirect",
          query: {
            "$find": {
              "_datastore": "_users",
              "_id": "@me"
            }
          }
        }
      },
    ]
  }
}

