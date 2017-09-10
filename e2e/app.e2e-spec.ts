import { AngularFireModule } from 'angularfire2';
import { AppPage } from './app.po';
import { browser } from 'protractor';
import { environment } from '../src/environments/environment';

describe('App Tests', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.ignoreSynchronization = true;
  });

  afterEach(() => {
    browser.close();
  });

  it('should have browser title Angular Teamwork', (done) => {
    page.navigateTo('/');
    page.getBrowserTitle()
      .then((title) => {
        expect(title).toEqual('Angular Teamwork');
        done();
      })
      .catch((err) => {
        done.fail(err);
      });
  });

  it('should display user email after registration', (done) => {
    const user = {
      mail: 'test231@gmail.com',
      pass: '123456',
      firstName: 'Gosho231',
      lastName: 'Georgiev231'
    };
    page.navigateTo('/')
      .then(() => {
        const signUpEl = page.getElementById('signUp');
        return signUpEl.click();
      }).then(() => {
        const mailEl = page.getElementById('firstName');
        return mailEl.sendKeys(user.firstName);
      })
      .then(() => {
        const passEl = page.getElementById('lastName');
        return passEl.sendKeys(user.lastName);
      })
      .then(() => {
        const firstNameEl = page.getElementById('email');
        return firstNameEl.sendKeys(user.mail);
      })
      .then(() => {
        const lastNameEl = page.getElementById('password');
        return lastNameEl.sendKeys(user.pass);
      })
      .then(() => {
        browser.sleep(4000);
      })
      .then(() => {
        const submit = page.getElementByCSS('#content > app-register > div > form > div:nth-child(6) > div.col-md-6 > button');
        return submit.click();
      })
      .then(() => {
        browser.sleep(1000);
        const profileEl = page.getElementByCSS('#navbarDropdownMenuLink');
        return profileEl.click();
      })
      .then(() => {
        browser.sleep(1000);
        const myProfileEl = page.getElementByCSS('#navbarNavDropdown > ul > li.nav-item.dropdown.show > div > a:nth-child(1)');
        return myProfileEl.click();
      })
      .then(() => {
        browser.sleep(1000);
        // tslint:disable-next-line:max-line-length
        const displayMailEl = page.getElementByCSS('#content > app-profile > div > div > div.col-md-4 > div > div.card-content > p:nth-child(3)');
        return displayMailEl.getText();
      })
      .then((text) => {
        expect(text).toEqual(user.mail);
        done();
      })
      .catch((err) => {
        done.fail(err);
      });
  });
  it('should display user email after sign in', (done) => {
    const user = {
      mail: 'krasimir_zlatkov@mail.bg',
      pass: '123456'
    };
    page.navigateTo('/')
      .then(() => {
        const signUpEl = page.getElementById('login');
        return signUpEl.click();
      }).then(() => {
        const mailEl = page.getElementById('email');
        return mailEl.sendKeys(user.mail);
      })
      .then(() => {
        const passEl = page.getElementById('password');
        return passEl.sendKeys(user.pass);
      })
      .then(() => {
        browser.sleep(4000);
      })
      .then(() => {
        // tslint:disable-next-line:max-line-length
        const signInEl = page.getElementByCSS('#content > app-login > div > form > div:nth-child(5) > div.col-md-6 > button.btn.btn-success');
        return signInEl.click();
      })
      .then(() => {
        browser.sleep(1000);
        const profileEl = page.getElementByCSS('#navbarDropdownMenuLink');
        return profileEl.click();
      })
      .then(() => {
        browser.sleep(1000);
        const myProfileEl = page.getElementByCSS('#navbarNavDropdown > ul > li.nav-item.dropdown.show > div > a:nth-child(1)');
        return myProfileEl.click();
      })
      .then(() => {
        browser.sleep(1000);
        // tslint:disable-next-line:max-line-length
        const displayMailEl = page.getElementByCSS('#content > app-profile > div > div > div.col-md-4 > div > div.card-content > p:nth-child(3)');
        return displayMailEl.getText();
      })
      .then((text) => {
        expect(text).toEqual(user.mail);
        done();
      })
      .catch((err) => {
        done.fail(err);
      });
  });
  it('should display Welcome to The Little Secrets after logout', (done) => {
    const user = {
      mail: 'krasimir_zlatkov@mail.bg',
      pass: '123456'
    };
    page.navigateTo('/')
      .then(() => {
        const signUpEl = page.getElementById('login');
        return signUpEl.click();
      }).then(() => {
        const mailEl = page.getElementById('email');
        return mailEl.sendKeys(user.mail);
      })
      .then(() => {
        const passEl = page.getElementById('password');
        return passEl.sendKeys(user.pass);
      })
      .then(() => {
        browser.sleep(4000);
      })
      .then(() => {
        // tslint:disable-next-line:max-line-length
        const signInEl = page.getElementByCSS('#content > app-login > div > form > div:nth-child(5) > div.col-md-6 > button.btn.btn-success');
        return signInEl.click();
      })
      .then(() => {
        browser.sleep(1000);
        const profileEl = page.getElementByCSS('#navbarDropdownMenuLink');
        return profileEl.click();
      })
      .then(() => {
        browser.sleep(1000);
        const logOutEl = page.getElementByCSS('#navbarNavDropdown > ul > li.nav-item.dropdown.show > div > a:nth-child(2)');
        return logOutEl.click();
      })

      .then(() => {
        browser.sleep(1000);
        const textEl = page.getElementByCSS('#content > app-home > div > div > div > h1');
        return textEl.getText();
      })
      .then((text) => {
        expect(text).toEqual('Welcome to The Little Secrets');
        done();
      })
      .catch((err) => {
        done.fail(err);
      });
  });
});

