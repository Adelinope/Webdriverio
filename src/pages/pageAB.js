const basePage = require('./basePage.js');
const mapsAB = require('../maps/mapsAB.js');
module.exports = {
    validateLoad() {
        basePage.waitElement(mapsAB.abText());
        if (!basePage.estaPresente(mapsAB.abText())) {
            console.log("Erro ao validar AB page");
        }
    }
}