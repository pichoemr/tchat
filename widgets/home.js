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
                type: "flexible",
                child:
                {
                    type: "flex",
                    direction: "vertical",
                    scroll: true,
                    children: Array(50).fill().map((x, i) => (
                        {
                            type: "flex",
                            direction: "horizontal",
                            fillParent: true,
                            children: [
                                {
                                    type: "text",
                                    value: `var ${i}`
                                }
                            ]
                        }

                    ))
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
                                action: "register"
                            },
                        }
                    },
                    {
                        type: "button",
                        text: "Send",
                        onPressed: {
                            action: "send_message",
                            props: {
                                text: "test",
                                pseudo: "test"
                            }
                        }
                    }
                ]
            }
        ]


    }
}

