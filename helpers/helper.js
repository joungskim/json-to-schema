const isObject = (prop) => typeof prop === 'object';

const getKeys = (jsonData) => {
    return Object.keys(jsonData.reduce((result, obj) => {
        return Object.assign(result, obj);
    }))
}

const createObject = (keys, jsonData) => {
    let dataObject = {};
    keys.map((key) => {
        jsonData.map((data) => {
            let keyFound = false;
            for (var k of Object.keys(data)) {
                if (k === key && data[k].length !== 0) {
                    dataObject[key] = data[k];
                    keyFound = true;
                    break;
                }
            }
            if (keyFound) return;
        })
    })
    return dataObject;
}

module.exports.isObject = isObject;
module.exports.getKeys = getKeys;
module.exports.createObject = createObject;