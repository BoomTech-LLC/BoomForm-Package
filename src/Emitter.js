import { EventEmitter } from "fbemitter";

const Emitter = new EventEmitter()
const listenners = [];

Emitter.fieldListener = function (ids, ...args) {
    listenners.push(ids)

    const eventType = ids.join(',');

    console.log("eventType", eventType);

    return Emitter.addListener.apply(this, [eventType, ...args])
}

Emitter.fieldEmit = function (id, ...args) {
    for (let i = 0; i < listenners.length; i++) {
        if (listenners[i].includes(id))
            Emitter.emit(listenners[i].join(','), ...args)
    }
}

export default Emitter
