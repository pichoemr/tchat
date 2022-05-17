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
                type: "widget",
                name: "salon",
                props: {
                    pseudo: data[0].pseudo
                },
                query: {
                    "$find": {
                        "_datastore": "Messages",
                        "_refs": { "$contains": 1 }
                    }
                }
            },
            {
                type: "flex",
                direction: "horizontal",
                mainAxisAlignment: "spaceEvenly",
                children: [
                    {
                        type: "text",
                        value: "Message: "
                    },
                    {
                        type: "flexible",
                        fit: "tight",
                        child: {
                            type: "textfield",
                            value: data[0].temp_message,
                            maxLength: 200,
                            onChanged: {
                                action: "send_message",
                                props: {
                                    action: "temp_message"
                                }
                            },
                            onSubmitted: {
                                action: "send_message",
                                props: {
                                    action: "send_message",
                                    salon: "main"
                                }
                            }
                        }
                    },
                    {
                        type: "button",
                        text: "Send",
                        onPressed: {
                            action: "send_message",
                            props: {
                                action: "send_message",
                                salon: "main"
                            }
                        }
                    }
                ]
            }
        ]


    }
}

