const mapsHome = require('../maps/mapsHome.js');
const { clickElemento } = require('./basePage.js');

module.exports = {
    /**
     * Método para clicar no link A/B
     * Data: 19/09/2019
     * @author Adelino Pessanha
     */
    clicarAB() {
        clickElemento(mapsHome.abTestingButton());
    }
};