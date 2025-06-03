import {$,browser,expect} from '@wdio/globals'

class NavigationPage {

get KidsNav(){
return $('//a[@data-shyguy="navKids"]');}

get header() { return $('h1');}
get resultcount(){return $('.yu-z');}



itemsandTerms = [
{menuItem:"All Boys",resultName:"Boys"},
{menuItem:"Sneakers",resultName:"Boy's Sneakers & Athletic Shoes"},
{menuItem:"Sandals",resultName:"Boy's Sandals"},
{menuItem:"Shirts & Tops",resultName:"Boy's Shirts & Tops"},
{menuItem:"Shorts",resultName:"Boy's Shorts"},
{menuItem:"Swimwear",resultName:"Boy's Kids Swimwear"},
{menuItem:"Loafers",resultName:"Boy's Loafers"},
{menuItem:"Pants", resultName:"Boy's Pants"},
{menuItem:"Jeans", resultName: "Boy's Jeans"},
{menuItem:"Coats & Jackets", resultName:"Boys' Coats"},
{menuItem: "Boots", resultName:  "Boy's Boots"},
{menuItem:"Pajamas", resultName:"Boy's Sleepwear"},
{menuItem:"Adaptive", resultName: "Boy's Adaptive Products"},
{menuItem:"All Girls",resultName: "girls"},
{menuItem: "Sneakers"  ,resultName: "Girls Sneakers & Athletic Shoes"},
{menuItem:  "Sandals",resultName:   "Girls Sandals"},
{menuItem:  "Shirts & Tops",resultName: "Girls Shirts & Tops"},
{menuItem:"Shorts",resultName:"Girls Shorts" },
{menuItem:"Dresses",resultName:"Girls Dresses"},
{menuItem:"Swimwear",resultName:"Girls Swimwear"},
{menuItem:"Flats",resultName:"Girls Flats"},
{menuItem:"Pants",resultName: "Girls Pants"},
{menuItem:"Jeans",resultName:"Girls Jeans"},
{menuItem:"Coats & Jackets",resultName:"Girls Coats & Outerwear"},
{menuItem:"Boots",resultName: "Girls Boots"},
{menuItem:"Pajamas",resultName:"Girls Sleepwear" },
{menuItem:"Adaptive",resultName:"Girls Adaptive Products"},
{menuItem:"All Kids' Accessories",resultName:"Kids Accessories"},
{menuItem:"Backpacks",resultName:"Kids Backpacks"},
{menuItem:"Hats",resultName: "Kids Hats"},
{menuItem:"Big Kid (7-12 yrs.)",resultName:"Shoes"},
{menuItem:"Little Kid (4-7 yrs.)",resultName:"Shoes"},
{menuItem:"Toddler (9 mos.-4 yrs.)",resultName:"Shoes"},
{menuItem: "Infant (0-9 mos.)",resultName:"Shoes"}
]

async openKidsMenu(){
await browser.url('https://www.zappos.com/')
await this.KidsNav.waitForClickable({timeout:2000});
await this.KidsNav.click();
}

async clickMenuOptionByText(linkText) {
const link = await $("="+linkText);
await expect(link).toHaveText(linkText);
await link.waitForClickable({timeout:1000});    
await link.click();

}

async validateNavigation(resultName){
await this.header.waitForDisplayed({timeout:1000});
const h1 = await this.header.getText();
await expect((h1.toLowerCase()).includes(resultName.toLowerCase()));

const countText = await this.resultcount.getText();

expect(countText.includes("items found"));
}

}
export default new NavigationPage;