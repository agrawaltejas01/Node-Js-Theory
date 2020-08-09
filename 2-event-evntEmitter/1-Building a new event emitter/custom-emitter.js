// A generic emitter, which will take events
function Emitter() {
    this.events = {};
}

// An event may have multiple listener, hence create an array
Emitter.prototype.on = function(type, listener) {
    // Check if array exists for the given event type, if not create one
    this.events[type] = this.events[type] || [];

    // push listener in the array
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) { 
    // Check if the given event type exists in the events
    if(this.events[type]) {

        // call each listener for given event type
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;