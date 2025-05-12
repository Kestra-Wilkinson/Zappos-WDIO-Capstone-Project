import {$,browser, expect} from '@wdio/globals';

class HeroImagePage {
get HeroImage(){ return $('img');}


   async openHomePage() {
   await browser.url('https://www.zappos.com/')
   await this.HeroImageBanner.waitForDisplayed({timeout:1000});

}

  



get HeroImageBanner(){
   return $('//a[@data-eventlabel="Hero"]')

}







}
export default new HeroImagePage;