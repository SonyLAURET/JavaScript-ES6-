var pubService = require('./services/pubs.services.js');

function getListPub() {
    console.log(pubService.recupereJSON());
    return pubService.recupereJSON();
}

function getListPubOpen() {
    console.log(pubService.OpenDay());
};
console.log(pubService.recupereJSON());
module.exports = {
    services: {
        getListPub: getListPub,
        getListPubOpen: getListPubOpen
    }
}