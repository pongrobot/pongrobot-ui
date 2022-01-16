/**
 * Generic service that allows callbacks to be registered.
 */
class BaseSubscriptionService {
    constructor() {
        this.subscriptions = {};
    }

    subscribe(subscription, id, func) {
        if (!Object.prototype.hasOwnProperty.call(this.subscriptions, subscription)) {
            this.subscriptions[subscription] = {};
        }
        this.subscriptions[subscription][id] = func;
    }

    unsubscribe(subscription, id) {
        if (Object.prototype.hasOwnProperty.call(this.subscriptions, subscription)) {
            if (Object.prototype.hasOwnProperty.call(this.subscriptions[subscription], id)) {
                this.subscriptions[subscription][id] = null;
                delete this.subscriptions[subscription][id];
            }
        }
    }

    _callSubscribers(subscription, data, expandObject = true) {
        if (Object.prototype.hasOwnProperty.call(this.subscriptions, subscription)) {
            Object.values(this.subscriptions[subscription]).forEach((func) => {
                if (func) {
                    if (!expandObject) {
                        return func(data);
                    }
                    if (data === null) {
                        func(null);
                    } else if (typeof data === 'object' && !Array.isArray(data)) {
                        // Expand/reconstruct the object to force react state to update
                        // Otherwise, the hook will not update components since it sees the
                        // new object as being identical.
                        func({
                            ...data
                        });
                    } else if (Array.isArray(data)) {
                        func(data.slice());
                    } else {
                        func(data);
                    }
                }
            });
        }
    }
}

export default BaseSubscriptionService;