'use strict'

module.exports = (data, props) => {
    return {
        type: "flex",
        direction: "horizontal",
        fillParent: true,
        mainAxisAlignment: "center",
        children: [
            {
                type: "flex",
                direction: "vertical",
                crossAxisAlignment: "center",
                children: [
                    {
                        type: "flex",
                        direction: "horizontal",
                        mainAxisAlignment: "center",
                        children: [
                            {
                                type: "button",
                                text: "Home",
                                disabled: data[0].nav == "home",
                                onPressed: {
                                    action: "navigation",
                                    props: {
                                        action: "home"
                                    }
                                }
                            },
                            {
                                type: "button",
                                text: "Setting",
                                disabled: data[0].nav == "setting",
                                onPressed: {
                                    action: "navigation",
                                    props: {
                                        action: "setting"
                                    }
                                }
                            },
                        ]
                    },
                    {
                        type: "text",
                        value: `Logged as ${data[0].pseudo}`
                    },
                ]
            }
        ]
    }
}

