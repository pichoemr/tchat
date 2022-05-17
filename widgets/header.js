'use strict'

module.exports = (data, props) => {
    return {
        type: "flex",
        direction: "horizontal",
        mainAxisAlignment: "center",
        fillParent: true,
        padding: {
            bottom: 3
        },
        children: [
            {
                type: "flex",
                direction: "vertical",
                crossAxisAlignment: "center",
                spacing: 2,
                children: [
                    {
                        type: "image",
                        src: "logo-vertical.png"
                    },
                    {
                        type: "text",
                        value: "Welcome on the Lenra Chat App."
                    },
                    {
                        type: "image",
                        src: "colored-line.png"
                    }
                ]
            }
        ]

    }




}

