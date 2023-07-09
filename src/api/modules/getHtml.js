const cheerio = require('cheerio');
const axios = require('axios');


const getHtml = async (url) => {
    const { data } = await axios.get(url)
    return cheerio.load(data)
}


module.exports = {
    getHtml: getHtml
}