# promise-any

ES6 promises don't provide any(). A small library to implement them.

```javascript
var promiseAny = require('promise-any');
var promises = [Promise.resolve('p1'), Promise.reject('p2')];

promiseAny(promises).then(function(value) {
    // value is p1 :)
});
```
