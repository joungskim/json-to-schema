//local files:
const { toMongooseConsole, toMongooseArray } = require('./parsers/mongooseParser');
const { getKeys, createObject } = require('./helpers/helper');
const { fetchData } = require('./dataAccess/getJsonDA');

//test URLS
const DND_MONSTER_URL = 'https://dl.dropboxusercontent.com/s/iwz112i0bxp2n4a/5e-SRD-Monsters.json';
const DND_SPELLS_URL = 'https://dl.dropboxusercontent.com/s/121t7xstyyeofxw/5e-SRD-Spells.json';

//modify the values below.
const URL = 'https://jsonplaceholder.typicode.com/users';
const SCHEMA_NAME = "YOUR SCHEMA NAME"

//Prints the mongoose model class in the console.
const printMongooseModel = async(url, name) => {
    const jsonData = await fetchData(url);
    const jsonKeys = getKeys(jsonData);
    const jsonObject = createObject(jsonKeys, jsonData);
    toMongooseConsole(jsonObject, name);
}

//Gets the mongoose model class as an array. For front end use.
const getMongooseModelArray = async(url, name) => {
    const jsonData = await fetchData(url);
    const jsonKeys = getKeys(jsonData);
    const jsonObject = createObject(jsonKeys, jsonData);
    return toMongooseArray(jsonObject, name);
}


//Uncomment/comment which functions you wish to use.
printMongooseModel(URL, SCHEMA_NAME);
//testFunction(URL, SCHEMA_NAME)

const testFunction = async() => {
    console.log(await getMongooseModelArray(URL, SCHEMA_NAME));
}

module.exports.getMongooseModelArray = getMongooseModelArray;
module.exports.printMongooseModel = printMongooseModel;