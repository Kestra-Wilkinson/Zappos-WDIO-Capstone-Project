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

    async clickMenuOptionByText(linkText) {
        const link = await $("="+linkText);
        await expect(link).toHaveText(linkText);
        await link.waitForClickable({timeout: 2000});    
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
