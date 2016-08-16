# promise-any

[ ![Codeship Status for m0ppers/promise-any](https://codeship.com/projects/82cc13e0-f2e0-0131-e5b7-4a729fc31f8d/status?branch=master)](https://codeship.com/projects/27744)

ES6 promises don't provide any(). A small library to implement them. Will convert arguments to promises if not already a promise.

```javascript
var promiseAny = require('promise-any');

promiseAny([
    Promise.reject('✗'),
    Promise.resolve('✓'),
]).then(function(value) {
    // value is '✓' :)
});

promiseAny([
    Promise.reject('✗'),
    Promise.reject('✗'),
]).catch(function(reasons) {
    // reasons is ['✗', '✗'] :(
});
```
