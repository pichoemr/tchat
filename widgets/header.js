'use strict'

module.exports = (counters, props) => {
    return {
        type: "flex",
        direction: "vertical",
        spacing: 2,
        children: [
            {
                type: "flex",
                direction: "horizontal",
                fillParent: true,
                mainAxisAlignment: "center",
                children: [
                    {
                        type: "image",
                        src: "logo-vertical.png"
                    }],
            },
            {
                type: "flex",
                direction: "horizontal",
                fillParent: true,
                mainAxisAlignment: "center",
                children: [
                    {
                        type: "text",
                        value: "Welcome on the Lenra Chat App."
                    },
                ]
            },
            {
                type: "flex",
                direction: "horizontal",
                fillParent: true,
                mainAxisAlignment: "center",
                children: [
                    {
                        type: "image",
                        src: "colored-line.png"
                    },
                ]
            }
        ]
    }




}

