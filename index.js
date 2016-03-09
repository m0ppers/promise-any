'use strict';

function reverse(promise) {
    return new Promise((resolve, reject) => promise.then(reject, resolve));
}

module.exports = function promiseAny(iterable) {
    return reverse(Promise.all([...iterable].map(reverse)));
};
