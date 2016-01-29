'use strict';

function RequestHeaderParser () {
    this.parseRequestHeader = function (req, res) {
        var aIPAddress = req.headers['x-forwarded-for'];
        var aLanguage = req.headers['accept-language'];
        var aLanguageArray = aLanguage.split(",");
        var aSoftware = req.headers['user-agent'];
        aSoftware = aSoftware.substring(aSoftware.indexOf('(') + 1, aSoftware.indexOf(')'));

        var returnObj = { 'ipaddress': aIPAddress, 'language': aLanguageArray[0], 'software': aSoftware };
        res.json(returnObj);
    };
}

module.exports = RequestHeaderParser;
