import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root h2')).getText() as Promise<string>;
  }
  getButtonClick() {
    // Hacemos click en el botón de ordenar
    return element(by.id('ordenar')).click();
  }

  getFirstName() {
    // recogemos el primer nombre de la lista
    var nombre = element.all(by.id('test')).get(0).getText();
    return nombre;
  }

  getNombre() {
    var nombrepais = element(by.id('nombre')).sendKeys("Angola");
    return nombrepais;
  }

  getPoblacion() {
    var poblacion = element(by.id('poblacion')).sendKeys(30810000);
    return poblacion;
  }

  getUrl() {
    var url = element(by.id('url')).sendKeys("https://es.wikipedia.org/wiki/Angola");
    return url;
  }

  getImagen() {
    var imagen = element(by.id('imagen')).sendKeys("ang.png");
    return imagen;
  }

  getEnviarPais() {
    return element(by.id('enviarpais')).click();
  }

  getUltimoPais() {
    // recogemos el primer nombre de la lista
    var ultimopais = element.all(by.id('test')).get(4).getText();
    return ultimopais;
  }
}
