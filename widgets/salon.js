'use strict'

module.exports = (data, props) => {
    return {
        type: "flexible",
        child:
        {
            type: "flex",
            direction: "vertical",
            scroll: true,
            children: data.sort((a, b) => (a._id - b._id)).map((message) => (
                {
                    type: "widget",
                    name: "message",
                    props: {
                        my: props.pseudo == message.pseudo,
                        text: message.text,
                        pseudo: message.pseudo
                    }
                }
            ))
        }
    }
}

