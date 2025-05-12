import {$,browser, expect} from '@wdio/globals';

class HeroImagePage {
   get HeroImage(){ return $('img');}
   
   get HeroImageBanner(){ return $('//a[@data-eventlabel="Hero"]')}

   async openHomePage() {
      await browser.url('https://www.zappos.com/')
      await this.HeroImageBanner.waitForDisplayed({timeout:1000});
   }
   
}
export default new HeroImagePage;