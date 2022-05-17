'use strict'

module.exports = (data, props) => {
    console.log(props)
    if (props.my) {
        return {
            type: "flex",
            direction: "horizontal",
            mainAxisAlignment: "end",
            fillParent: true,
            children: [
                {
                    type: "flex",
                    direction: "vertical",
                    crossAxisAlignment: "end",
                    padding: {
                        right: 2
                    },
                    children: [
                        {
                            type: "container",
                            padding: {
                                top: 1,
                                bottom: 0.5,
                            },
                            child: {
                                type: "text",
                                value: (props.pseudo != undefined) ? props.pseudo : "anonyme"
                            }
                        },
                        {
                            type: "container",
                            child: {
                                type: "text",
                                value: (props.text != undefined) ? props.text : ""
                            },
                            padding: {
                                top: 1,
                                bottom: 1,
                                left: 1,
                                right: 1,
                            },
                            constraints: {
                                maxWidth: 500,
                            },
                            decoration: {
                                color: 0xFF70CBF2,
                                borderRadius: {
                                    bottomLeft: { x: 10, y: 10 },
                                    bottomRight: { x: 10, y: 10 },
                                    topLeft: { x: 10, y: 10 },
                                    topRight: { x: 10, y: 10 },
                                }
                            },
                            border: {
                                bottom: {
                                    color: 0xFF000000,
                                    width: 1
                                },
                                top: {
                                    color: 0xFF000000,
                                    width: 1
                                },
                                left: {
                                    color: 0xFF000000,
                                    width: 1
                                },
                                right: {
                                    color: 0xFF000000,
                                    width: 1
                                },
                            },
                        }
                    ]
                }
            ]
        }
    } else {
        return {
            type: "flex",
            direction: "horizontal",
            fillParent: true,
            children: [
                {
                    type: "flex",
                    direction: "vertical",
                    padding: {
                        left: 2
                    },
                    children: [
                        {
                            type: "container",
                            padding: {
                                top: 1,
                                bottom: 0.5
                            },
                            child: {
                                type: "text",
                                value: (props.pseudo != undefined) ? props.pseudo : "anonyme"
                            }
                        },
                        {
                            type: "container",
                            child: {
                                type: "text",
                                value: (props.text != undefined) ? props.text : ""
                            },
                            padding: {
                                top: 1,
                                bottom: 1,
                                left: 1,
                                right: 1
                            },
                            constraints: {
                                maxWidth: 500,
                            },
                            decoration: {
                                color: 0xFF57C0B3,
                                borderRadius: {
                                    bottomLeft: { x: 10, y: 10 },
                                    bottomRight: { x: 10, y: 10 },
                                    topLeft: { x: 10, y: 10 },
                                    topRight: { x: 10, y: 10 },
                                }
                            },
                            border: {
                                bottom: {
                                    color: 0xFF000000,
                                    width: 1
                                },
                                top: {
                                    color: 0xFF000000,
                                    width: 1
                                },
                                left: {
                                    color: 0xFF000000,
                                    width: 1
                                },
                                right: {
                                    color: 0xFF000000,
                                    width: 1
                                },
                            },
                        }
                    ]
                }

            ]
        }
    }

}

