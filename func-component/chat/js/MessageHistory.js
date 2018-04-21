'use strict';

function MessageHistory({ list }) {
    // console.log(list);
    if (!list.length) return null;

    const messageList = list.map(msg => {
        const message = {
            time: msg.time,
            text: msg.text
        };

        switch (msg.type) {
            case 'message':
                return <Message key={msg.id} from={msg.from} message={message} />;
                break;
            case 'response':
                return <Response key={msg.id} from={msg.from} message={message} />;
                break;
            case 'typing':
                return <Typing key={msg.id} from={msg.from} message={message} />;
                break;
            default:
                return null;
                break;
        }
    });

    return <ul>{messageList}</ul>;
}
