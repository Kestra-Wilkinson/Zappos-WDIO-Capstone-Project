import {$,$$,browser,expect} from '@wdio/globals'
class NavigationPage {

get header() { return $('h1');}
get resultcount(){return $('span.ht.z')}
get NavMen(){
    return $('//a[@data-shyguy="navMen"]');
}

get NavmenuMenShoesLinks(){
 return $('//ul[@data-component-name="subNavMenu"]')
}


get NavmenuMenClothing(){
return $('//ul[@data-component-name="subNavMenu"]');

}

get NavmenuMenAccessories(){
    return $('//ul[@data-component-name="subNavMenu"]');
}

get TrendingBrands(){
    return $('//ul[@data-component-name="subNavMenu"]');
}

async openMenMenu() {
await browser.url('https://www.zappos.com/')
await this.NavMen.waitForClickable({timeout:1000 });
await this.NavMen.click();
await browser.pause(1000);
}

async clickMenuOptionByText(linkText) {
const link =await $(`=${linkText}`);
await link.waitForDisplayed({timeout: 10000});
await link.click();
await browser.pause(1000);
}

async validateNavigation(linkText){
    await this.header.waitForDisplayed({timeout:10000 });
    const h1 =await this.header.getText()
    const term = linkText.split('')[0].toLowerCase();
    const countText= await this.resultcount.getText();
    const match = countText.match(/\d+/);
    const resultcount =match ? parseInt(match[0]) : 0;

    expect(h1.toLowerCase()).toContain(term)
    expect(resultcount).toBeGreaterThan(0);
     await browser.pause(5000);
}
   
}
export default new NavigationPage;