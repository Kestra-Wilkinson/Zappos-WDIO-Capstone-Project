import {$,browser,expect} from '@wdio/globals'
class NavigationPage {

    get header() { return $('h1');}
    get resultcount(){return $('.ht-z')}

    get NavMen(){
        return $('//a[@data-shyguy="navMen"]');
    }

    async openMenMenu() {
        await browser.url('https://www.zappos.com/')
        await this.NavMen.waitForClickable({timeout:1000});
        await this.NavMen.click();
    
    }
 itemsandTerms = [
{menuItem: "All Men's Shoes", resultName: "Men's Shoes"},
{menuItem: "Sneakers & Athletic", resultName: "Men's Sneakers & Athletic Shoes"},
{menuItem: "Boots", resultName: "Men's Boots"},
{menuItem: "Loafers" ,resultName: "Men's Loafers"},
{menuItem: "Oxfords", resultName: "Men's Oxfords"},
{menuItem: "Sandals", resultName: "Men's Sandals"},
{menuItem: "Slippers", resultName: "Men's Slippers"},
{menuItem: "Hiking", resultName: "Men's Hiking"},
{menuItem: "Work & Safety Sneakers", resultName: "Work Shoes"},
{menuItem: "Work & Duty Boots", resultName: "Men's Work and Safety Boots"},
{menuItem: "Adaptive", resultName: "Men's Adaptive Products"},
{menuItem: "Wide", resultName: "Men Shoes"},
{menuItem: "All Men's Clothing", resultName: "Men's Clothing"},
{menuItem: "Shirts & Tops", resultName: "Men's Shirts & Tops"},
{menuItem: "Pants", resultName: "Men's Pants"},
{menuItem: "Coats & Outerwear", resultName: "Men's Coats & Outerwear"},
{menuItem: "Jeans", resultName: "Men's Jeans"},
{menuItem: "Hoodies & Sweatshirts", resultName: "Men's Hoodies & Sweatshirts"},
{menuItem: "Shorts", resultName: "Men's Shorts"},
{menuItem: "Big & Tall", resultName: "Men's Big & Tall Size Clothing"},
{menuItem: "Activewear", resultName: "Men's Athletic Clothing"},
{menuItem: "Work & Duty Apparel", resultName: "Men's Work & Duty Clothing"},
{menuItem: "Sleepwear", resultName: "Men's Sleepwear"},
{menuItem: "All Men's Accessories", resultName: "Men's Accessories"},
{menuItem: "Hats", resultName: "Men's Hats"},
{menuItem: "Bags", resultName: "Men's Bags"},
{menuItem: "Belts", resultName: "Men's Belts"},
{menuItem: "Watches", resultName: "Men's Watches"},
{menuItem: "Sunglasses & Eyewear", resultName: "Men's Eyewear"},
{menuItem: "Wallets", resultName: "Men's Wallets"},
{menuItem: "Gloves", resultName: "Men's Gloves "},
{menuItem: "adidas", resultName: "Men's adidas Products"},
{menuItem: "Birkenstock", resultName: "Men"},
{menuItem: "Brooks", resultName: "Men's Brooks Products"},
{menuItem: "Converse", resultName: "Men's Converse Shoes"},
{menuItem: "Hey Dude", resultName: "Men's Hey Dude Products"},
{menuItem: "Merrell", resultName: "Men's Merrell Shoes"},
{menuItem: "The North Face", resultName: "Men's The North Face Products"}

]

    async clickMenuOptionByText(linkText) {
        const link = await $("="+linkText);
        await expect(link).toHaveText(linkText);
        await link.waitForClickable({timeout: 2000});    
        await link.click();
        
    }

    async validateNavigation(resultName){
        await this.header.waitForDisplayed({timeout:2000});
        const h1 = await this.header.getText();
        await expect((h1.toLowerCase()).includes(resultName.toLowerCase()));

        const countText = await this.resultcount.getText();

        expect(countText.includes("items found"));
    }
    
}
export default new NavigationPage;
