import NavigationPage from '../pageobjects/NavigationPage.js';
import WomenSNavigation from '../pageobjects/Women\'s Navigation.js';



describe('Zappos Men Menu Navigation',() => {
  
           NavigationPage.itemsandTerms.forEach(({menuItem, resultName}) => {
          it(`should navigate to: ${menuItem}`, async () => {
            await NavigationPage.openMenMenu();
            await NavigationPage.clickMenuOptionByText(menuItem,resultName);
            await NavigationPage.validateNavigation(resultName);
          });
     });  
 });


 
 

 
 
 
 
 describe('Zappos Women Menu Navigation',() => {
          WomenSNavigation.itemsandTerms.forEach(({menuItem, resultName}) => {
          it(`should navigate to: ${menuItem}`, async () => { 
            await WomenSNavigation.openWomenMenu();
            await WomenSNavigation.clickMenuOptionByText(menuItem,resultName);
            await WomenSNavigation.validateNavigation(resultName);
          });
     });  
 });


