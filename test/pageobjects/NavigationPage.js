import {$,browser,expect} from '@wdio/globals'
class NavigationPage {

get header() { return $('h1');}
get resultcount(){return $('.ht-z')} //'span[@ht-z]'

get NavMen(){
    return $('//a[@data-shyguy="navMen"]');
}


get NavmenuMenShoesLinks(){
 return $('//ul[@data-component-name="subNavMenu"]/li/a');
}


get NavmenuMenClothing(){
return $('//ul[@data-component-name="subNavMenu"]/li/a');

}

get NavmenuMenAccessories(){
    return $('//ul[@data-component-name="subNavMenu"]/li/a');
}

get TrendingBrands(){
    return $('//ul[@data-component-name="subNavMenu"]/li/a');
}

async openMenMenu() {
    await browser.url('https://www.zappos.com/')
    await this.NavMen.waitForClickable({timeout:10});
    await this.NavMen.click();
    await browser.pause(1000);
}

async clickMenuOptionByText(linkText) {
    const link = await $('='+linkText);
    
    await expect(link).toHaveText(linkText);
    await link.waitForClickable({timeout:10});    
    await link.click();
}

async validateNavigation(linkText){
    await this.header.waitForDisplayed({timeout:10});
    const h1 = await this.header.getText();
    //const term = linkText.split('')[0].toLowerCase();
    const countText= await this.resultcount.getText();
    const match = countText.match(/\d+/);
    const resultcount =match ? parseInt(match[0]) : 0;
    expect(resultcount).toBeGreaterThan(0);
    
    /*if (linkText.includes("All ")) {
        linkText = linkText.replace("All ", "");
    }*/

    //We need to validate we have ended up in the right place. The Menu Items are coded into a script on each you visit.
    const scriptContent = await $('script').getText();
    expect(scriptContent.includes(linkText));
    // The above two lines fixes the problem we had with expect(h1.toLowerCase()).toContain(linkText.toLowerCase());
    
    await browser.pause(10);
}
   
}
export default new NavigationPage;