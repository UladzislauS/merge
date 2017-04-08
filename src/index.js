module.exports = function merge(first, second) {
    // creating Object instances for primitives
    let firstObject = new Object(first);
    let secondObject = new Object(second);
    
    // copying initial object to protect from changing 
    let mergeObject = firstObject === first ? merge(null, firstObject) : firstObject;   

    for (let key in secondObject) {
        mergeObject[key] = mergeObject[key] instanceof Object && secondObject[key] instanceof Object
            ? merge(mergeObject[key], secondObject[key])
            : secondObject[key];
    }

    return mergeObject;
}
