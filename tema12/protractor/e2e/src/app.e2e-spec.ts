import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Deberia recoger España', () => {
    page.navigateTo();
    page.getButtonClick();
    expect(page.getFirstName()).toEqual("España");
  });

  it('Enviar pais Angola', () => {
    page.navigateTo();
    page.getNombre();
    page.getPoblacion();
    page.getUrl();
    page.getImagen();
    page.getEnviarPais();
    expect(page.getUltimoPais()).toEqual("Angola");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
