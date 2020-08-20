const { getMongooseDataType } = require('../helpers/mongooseHelper');

//Writes to console: Outputs the model class for mongoose based on the json data given.
const toMongooseConsole = (jsonObject, schemaName) => {
    let name;
    let count = 0;
    !schemaName ? name = "new" : name = schemaName.toLowerCase().replace(/\s+/g, '');
    console.log("const mongoose = require('mongoose');");
    console.log("const " + name + "Schema = new mongoose.Schema({");

    for (var key of Object.keys(jsonObject)) {
        console.log(key + ": {");

        console.log("type: " + getMongooseDataType(jsonObject[key]) + ',');
        console.log("required: false,");
        console.log("},");
        count++;
    }

    console.log("});");
    console.log("module.exports = mongoose.model('" + name + "', userSchema);");
    console.log("Properties Count: " + count);
}

//Returns an array: Outputs the model class for mongoose based on the json data given.
const toMongooseArray = (jsonObject, schemaName) => {
    let name;
    !schemaName ? name = "new" : name = schemaName.toLowerCase().replace(/\s+/g, '');
    let code = [];
    code.push("const mongoose = require('mongoose');");
    code.push("const " + name + "Schema = new mongoose.Schema({");

    for (var key of Object.keys(jsonObject)) {
        code.push(key + ": {");
        code.push("type: " + getMongooseDataType(jsonObject[key]) + ',');
        code.push("required: false,");
        code.push("},");
    }

    code.push("});");
    code.push("module.exports = mongoose.model('" + name + "', userSchema);");

    return code;
}


module.exports.toMongooseConsole = toMongooseConsole;
module.exports.toMongooseArray = toMongooseArray;