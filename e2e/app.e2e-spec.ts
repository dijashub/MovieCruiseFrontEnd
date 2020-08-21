import { browser, element,by } from 'protractor'
import { AppPage } from './app.po';
import { protractor } from 'protractor/built/ptor';

describe('FrontEnd App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Title', () => {
    page.navigateTo();
    expect(browser.getTitle()).toEqual('FrontEnd');
//    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });


  it('should be redirected to /login route on opening the application ', () => {
    page.navigateTo();
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('should be redirected to /register router', () => {
    browser.element(by.css('.register-button')).click();
    expect(browser.getCurrentUrl()).toContain('/register');
  });

  it('should be register the user', () => {
    browser.element(by.id('firstName')).sendKeys('Super');
    browser.element(by.id('lastName')).sendKeys('Super Last name');
    browser.element(by.id('userId')).sendKeys('SuperUserId');
    browser.element(by.id('password')).sendKeys('SuperPassword');
    browser.element(by.id('registeruser')).click();
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('should be Login the user', () => {
    browser.element(by.id('userId')).sendKeys('SuperUserId');
    browser.element(by.id('password')).sendKeys('Super');
    browser.element(by.css('.login-user')).click();
    expect(browser.getCurrentUrl()).toContain('/movies/popular');
  });

  it('should be search user search', () => {
    browser.element(by.css('.movieSearch')).click();
    expect(browser.getCurrentUrl()).toContain('/movies/search');
    browser.element(by.id('movieSearch-input')).sendKeys('super');
    browser.element(by.id('movieSearch-input')).sendKeys(protractor.Key.ENTER);

    const searchItems = element.all(by.css('.mat-card-title'));
    expect(searchItems.count()).toBe(20);
    for (let i=0; i < 1; i+= 1){
      expect(searchItems.get(i).getText()).toContain("Super");
    }
  });

  it('should be able to add to watch list ', async () => {

    browser.driver.manage().window().maximize();
    browser.driver.sleep(1000);
    const searchItems = element.all(by.css('.movie-thumbnail'));
    searchItems.get(0).click();
    browser.element(by.id('addwatchList')).click();

  });
  
});
