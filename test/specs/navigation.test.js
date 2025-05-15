import NavigationPage from '../pageobjects/NavigationPage.js';



describe('Zappos Men Menu Navigation',() => {
  
           NavigationPage.itemsandTerms.forEach(({menuItem, resultName}) => {
          it(`should navigate to: ${menuItem}`, async () => {
            await NavigationPage.openMenMenu();
            await NavigationPage.clickMenuOptionByText(menuItem,resultName);
            await NavigationPage.validateNavigation(resultName);
          });
     });  
 });


 
 
 
 
 
 
 