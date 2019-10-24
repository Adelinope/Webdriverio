const {  waitElement,isElementPresent } = require('./basePage.js');
const mapsAB = require('../maps/mapsAB.js');
const Constants =  require('../core/constants.js');
module.exports = {
    validateLoad() {
        waitElement(mapsAB.abText(),Constants.TIME_TO_WAIT);
        if (!isElementPresent(mapsAB.abText())) {
            console.log("Erro ao validar AB page");
        }
    }
};