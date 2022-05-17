'use strict'

module.exports = (data, props) => {
    return {
        type: "flex",
        direction: "vertical",
        fillParent: true,
        children: [
            {
                type: "widget",
                name: "menu",
                query: {
                    "$find": {
                        "_datastore": "_users",
                        "_id": "@me"
                    }
                }
            },
            {
                type: "flex",
                direction: "horizontal",
                mainAxisAlignment: "center",
                fillParent: true,
                padding: {
                    top: 2
                },
                children: [
                    {
                        type: "container",
                        padding: {
                            top: 2,
                            bottom: 2,
                            left: 2,
                            right: 2
                        },
                        constraints: {
                            maxWidth: 500,
                            maxHeight: 250
                        },
                        decoration: {
                            borderRadius: {
                                bottomLeft: { x: 10, y: 10 },
                                bottomRight: { x: 10, y: 10 },
                                topLeft: { x: 10, y: 10 },
                                topRight: { x: 10, y: 10 },
                            },
                            errorText: data.error_message
                        },
                        border: {
                            bottom: {
                                color: 0xFFBBDEFB,
                                width: 3
                            },
                            top: {
                                color: 0xFFBBDEFB,
                                width: 3
                            },
                            left: {
                                color: 0xFFBBDEFB,
                                width: 3
                            },
                            right: {
                                color: 0xFFBBDEFB,
                                width: 3
                            },
                        },
                        child: {
                            type: "flex",
                            direction: "vertical",
                            crossAxisAlignment: "center",
                            spacing: 1.5,
                            children: [
                                {
                                    type: "text",
                                    value: "Setting"
                                },
                                {
                                    type: "flex",
                                    direction: "horizontal",
                                    children: [
                                        {
                                            type: "text",
                                            value: "Change pseudo :"
                                        },
                                        {
                                            type: "flexible",
                                            child: {
                                                type: "textfield",
                                                value: data[0].pseudo
                                            }
                                        },
                                        {
                                            type: "button",
                                            text: "save",
                                            // onPressed: {
                                            //     action: "save",
                                            //     props: {
                                            //         action: "changed_pseudo"
                                            //     }
                                            // }
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            }
        ]
    }


}

