const { clicarAB } = require('../../pages/pageHome');
const Constants =  require('../../core/constants.js')
const{validateLoad} =  require('../../pages/pageAB.js')
/**
 * Teste de Clicar em links
 * 20/09/2018
 * @author Adelino Pessanha
 */
describe('Acessar a pagina inicial do buscador', () => {
    it('Clicar no link A/B', () => {
        browser.maximizeWindow();
        browser.url(Constants.URL);
        browser.takeScreenshot();
        clicarAB();
        validateLoad();
    });
});