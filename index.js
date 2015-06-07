module.exports = function(promises) {
    return promises.reduce(function(anyPromise, promise) {
        return anyPromise.catch(function(reason) {
            return promise.then(function(result) {
                return result;
            });
        });
    }, Promise.reject("Promise array is empty"));
};
