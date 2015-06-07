# promise-any

[ ![Codeship Status for m0ppers/promise-any](https://codeship.com/projects/ee131b90-ef40-0132-5ad8-428b5d81b233/status?branch=master)](https://codeship.com/projects/84325)

ES6 promises don't provide any(). A small library to implement them.

```javascript
var promiseAny = require('promise-any');
var promises = [Promise.resolve('p1'), Promise.reject('p2')];

promiseAny(promises).then(function(value) {
    // value is p1 :)
});
```
