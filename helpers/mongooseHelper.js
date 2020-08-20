const { isObject } = require('../helpers/helper');

const getMongooseDataType = (prop) => {
    return isObject(prop) ?
        "Schema.Types.Mixed" :
        (typeof prop).toString().charAt(0).toUpperCase() + (typeof prop).slice(1)
}

module.exports.getMongooseDataType = getMongooseDataType;