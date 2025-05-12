import {$,browser, expect} from '@wdio/globals';

class HeroImagePage {
get HeroImage(){ return $('img');}


   async openHomePage() {
   await browser.url('https://www.zappos.com/')
   await this.HeroImageBanner.waitForDisplayed({timeout:10000});
   await browser.pause(2000);
}

  



get HeroImageBanner(){
   return $('//a[@data-eventlabel="Hero"]')

}







}
export default new HeroImagePage;