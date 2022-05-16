'use strict'

module.exports = (data, props) => {
    return {
        type: "flex",
        direction: "vertical",
        children: [
            {
                type: "text",
                value: "Please enter your pseudo !"
            },
            {
                type: "container",
                decoration: {
                    color: 0xFF0000B2
                },
                child: {
                    type: "textfield",
                    value: "",
                    onChanged: {
                        action: "register",
                        props: {
                            action: "pseudo_changed"
                        }
                    },
                    style: {
                        decoration: {
                            fillColor: 0xFFBBDEFB,
                        },
                    }

                },
                padding: {
                    bottom: 2,
                    top: 2,
                    left: 2,
                    right: 2
                },
            },
            {
                type: "button",
                text: "Validate",
                onPressed: {
                    action: "register",
                    props: {
                        action: "validate"
                    }
                }
            }
        ]
    }

}

