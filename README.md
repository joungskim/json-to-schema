json-to-schema

### Schema Builder
```Description:```

Builds a schema from json data.  Inspired by a huge D&D Json file that had all different kinds of properties in a huge array of monsters.  It will retrieve all the unique keys, and find the data types for all of those keys and print out the intended model class.  See example below for better description.

### Mongoose/MongoDB Parsing - Outputs Code for the Model Class

Location: ```./json-to-schema/index.js```

```js
// Takes a URL and the name of the schema and prints out the code in console.
printMongooseModel(url, name)

// Takes a URL and the name of the schema and returns an array of code for front end use.
getMongooseModelArray(url, name)
``` 
### Setting Up:

In the index.js file you can call on the functions above (Will be an api/npm package eventually). Change the URL to your URL.  Change the SCHEMA_NAME to the name you wish the schema to be named.

```js
//modify the values below.
const URL = 'https://jsonplaceholder.typicode.com/users';
const SCHEMA_NAME = "YOUR SCHEMA NAME"


//Uncomment/comment which functions you wish to use.
printMongooseModel(URL, SCHEMA_NAME);
//testFunction(URL, SCHEMA_NAME)

```

### Console:
Use the command ```node index.js``` and hit enter.  A printed out Model of code will be displayed for Mongoose.

```
PS C:\json-to-schema> node index.js
```



Example: 

```JSON Input```

```js
[
    {
        a: "a",
        b: "b"
    },
    {
        c: 1,
        d: [1, 2, 3]
    },
    {
        e: {test: "object"}
        a: "foo"
        b: "bar"
    }
]
```

```OUTPUT```
```js
const mongoose = require('mongoose');
const newSchema = new mongoose.Schema({
a: {
type: String,
required: false,
},
b: {
type: String,
required: false,
},
c: {
type: Number,
required: false,
},
d: {
type: Schema.Types.Mixed,
required: false,
},
e: {
type: Schema.Types.Mixed,
required: false,
},
});
module.exports = mongoose.model('new', userSchema);

Properties Count: 5

```
