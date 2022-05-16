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
                    type: "container",
                    child: {
                        type: "text",
                        value: props.text
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
                        color: 0xFFBBDEFB,
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
                },
                {
                    type: "container",
                    padding: {
                        top: 1,
                        bottom: 1,
                        left: 2,
                        right: 2
                    },
                    child: {
                        type: "text",
                        value: props.pseudo
                    }
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
                    type: "container",
                    padding: {
                        top: 1,
                        bottom: 1,
                        left: 2,
                        right: 2
                    },
                    child: {
                        type: "text",
                        value: props.pseudo
                    }
                },
                {
                    type: "container",
                    child: {
                        type: "text",
                        value: props.text
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
                        color: 0xFFce33ff,
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
    }

}

