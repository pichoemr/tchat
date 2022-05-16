'use strict'

module.exports = (data, props) => {
    return {
        type: "flex",
        direction: "horizontal",
        mainAxisAlignment: "center",
        fillParent: true,
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
                    }
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
                    type: "wrap",
                    direction: "vertical",
                    alignment: "center",
                    runAlignment: "center",
                    spacing: 1.5,
                    children: [
                        {
                            type: "text",
                            value: "Please enter your pseudo !"
                        },
                        {
                            type: "container",
                            // decoration: {
                            //     color: 0xFF0000B2
                            // },
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
                                        filled: true,
                                        fillColor: 0xFFBBDEFB,
                                        // border: {
                                        //     type: "outline",
                                        // },
                                        labelText: "My pseudo",
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
        ]
    }




}

