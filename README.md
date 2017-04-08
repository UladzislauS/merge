# Merge function
This function merges two objects. Non-primitive properties are merged recursively. Other properties are overridden by assignment.
Sourse objects are not changed.

# Using
Install:
```
npm i deep-merge-objects
```
Require:
```javascript
let merge = require('deep-merge-objects');

console.log(merge({a:'a'}, {b: 'b'}));
```
