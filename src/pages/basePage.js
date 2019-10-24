const Constants = require('../core/constants.js');
/**
 * Método para esperar um eleménto
 * Data: 19/09/2019
 * @author Adelino Pessanha
 * @param {Elemento a ser esperado} element 
 * @param {*} timeMs Tempo a ser esperado em milisegundos 
 */
function waitElement(element, timeMs) {
    element.waitForExist(timeMs);
    element.waitForDisplayed(timeMs);
    element.waitForEnabled(timeMs);
}
/**
 * Método para clicar em um elemento
 * Data: 19/09/2019
 * @author Adelino Pessanha
 * @param {*} elemento Elemento a ser clicado 
 */
function clickElemento(elemento) {
    waitElement(elemento, Constants.TIME_TO_WAIT);
    elemento.click();
    browser.takeScreenshot();
    console.info("Clicou elemento: " + elemento);
}

/**
 * Método para verificação de presença de um elemento
 *  Data: 20/09/2019
 *  @param {*} elemento Elemento a ser verificado
 *  Retorna {True ou False}
 */
function estaPresente(elemento) {
    wait(elemento, Constants.TIME_TO_WAIT);
    if (elemento.isDisplayed()) {
        return true;
    } else {
        return false;
    }
}

/**
 * Seleciona CheckBox
 * @author Adelino Pessanha
 * Data 25/09/2019
 * @param {*} elemento 
 */
function selecionaCheckBox(elemento) {
    clickElemento(elemento);
    console.info("Selecionou Checkbox " + elemento);
}

module.exports = { clickElemento, waitElement, estaPresente, selecionaCheckBox };