const fetch = require('node-fetch');

const fetchData = async(url) => {
    try {
        return await Promise.all(await fetch(url)
            .then(res => res.json()));
    } catch (err) {
        console.log("Could not fetch json data from URL: " + err);
        throw err;
    }
}

module.exports.fetchData = fetchData