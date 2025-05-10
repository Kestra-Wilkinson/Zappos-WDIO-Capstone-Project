import NavigationPage from '../pageobjects/NavigationPage.js';
const itemstoTest =[
"All Men's Shoes", "Sneakers & Athletic", "Boots", "Loafers" , "Oxfords", "Sandals",
"Slippers", "Hiking","Work & Safety Sneakers","Work & Duty Boots", "Adaptive", "Wide",
"All Men's Clothing", "Shirts & Tops", "Pants", "Coats & OuterWear", "Jeans",
"Hoodies & SweatShirts", "Shorts", "Big & Tall", "Active Wear", "Work & Duty Apparel", "Sleepwear",
"All Men's Accessories", "Hats", "Bags","Belts","Watches","Sunglasses & Eyewear", 
"Wallets","Gloves", "adidas", "Birkenstock","Brooks","Converse", "Hey Dude", "Merrell" , "The North Face"
];



describe('Zappos Men Menu Navigation',() => {
   before(async () => {
 
     });

   itemstoTest.forEach(linkText => {
          it(`should navigate to: ${linkText}`, async () => {
             await NavigationPage.openMenMenu();
            await NavigationPage.clickMenuOptionByText(linkText);
            await NavigationPage.validateNavigation(linkText);
            await NavigationPage.openMenMenu();
          });
     });  
 });