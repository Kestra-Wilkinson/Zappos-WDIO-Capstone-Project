class NavigationPage {


get NavWomen(){
return $('//a[@data-shyguy="navWomen"]');}
get NavWomenCloseWomensButton(){
return $('//button[@aria-label="Close Women Menu"]');}
get header() { return $('h1');}
get resultcount(){return $('.ht-z');}

itemsandTerms = [
{menuItem: "All Women's Shoes",resultName:" Women's Shoes"},
{menuItem:"Sneakers & Athletic",resultName:"Women's Sneakers & Athletic Shoes"},
{menuItem:"Boots & Booties",resultName: "Womens Boots"},
{menuItem:"Clogs",resultName:"Women's Clogs"},
{menuItem:"Flats",resultName: "Women's Flats"},
{menuItem:"Slippers",resultName: "Women's Slippers"},
{menuItem:"Mules",resultName: "Women's Mules Shoes"},
{menuItem:"Loafers",resultName:"Women's Loafers"},
{menuItem:"Sandals",resultName: "Womens Sandals"},
{menuItem:"Cowboy Boots",resultName:"Women's Western Cowboy Boots"},
{menuItem:"Safety Shoes",resultName: "safety shoes"},
{menuItem:"Adaptive",resultName:"Women's Adaptive Shoes"},
{menuItem:"Heels",resultName: "Women's Heels"}, 
{menuItem: "All Women's Clothing",resultName:"Womens Clothing"},
{menuItem: "Dresses",resultName:  "Women's Dresses"},
{menuItem: "Shirts & Tops",resultName:"Women's Shirts & Tops"},
{menuItem: "Jeans & Denim",resultName: "Women's Jeans"},
{menuItem: "Jumpsuits & Rompers",resultName:"Women's Jumpsuits & Rompers"},
{menuItem:  "Shorts",resultName:"Women's Shorts"},
{menuItem: "Skirts",resultName:"Women's Skirts"},
{menuItem: "Swimwear & Cover Ups",resultName: "Women's Swimwear"},
{menuItem: "Pants",resultName: "Women's Pants"},
{menuItem: "Activewear",resultName: "Women's Athletic Clothing"},
{menuItem:  "Sleepwear", resultName: "Women's Sleepwear"},
{menuItem: "Coats & Outerwear",resultName:  "Women's Coats & Outerwear"},
{menuItem:  "Plus Size",resultName: "Women's Plus Size Clothing"},
{menuItem:  "Work & Duty Apparel",resultName:"Women's Work & Duty Clothing"}
]
async openWomenMenu() {
    await browser.url('https://www.zappos.com/')
    await this.NavWomen.waitForClickable({timeout:1000});
    await this.NavWomen.click();

}
    async closewomensmenu(){
        await this.NavWomenCloseWomensButton.click();
    }
    async clickMenuOptionByText(linkText) {
        const link = await $("="+linkText);
        await expect(link).toHaveText(linkText);
        await link.waitForClickable({timeout:2000});    
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
export default new NavigationPage