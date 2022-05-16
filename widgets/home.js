'use strict'

module.exports = (data, props) => {
    return {
        type: "flex",
        direction: "vertical",
        fillParent: true,
        children: [
            {
                type: "text",
                value: `Logged as ${data[0].pseudo}`
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
                            value: "",
                            maxLength: 150,
                            onChanged: {
                                action: "send_message",
                                props: {
                                    action: "temp_message"
                                }
                            },
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

