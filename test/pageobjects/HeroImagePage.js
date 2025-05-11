import {$,browser, expect} from '@wdio/globals';

class HeroImagePage {
get HeroImage(){ return $('img');}


   async openHomePage() {
   await browser.url('https://www.zappos.com/')
   await this.HeroImage.waitForDisplayed({timeout:10});
   await browser.pause(2000);
}

   async validateHeroImageLoaded(){
       const isDisplayed =await this.HeroImage.isDisplayed();
      const naturalWidth =browser.execute(function (img) {
          return img.naturalWidth;
         }, await this.HeroImage);

       expect(isDisplayed).toBe(true);
       expect(naturalWidth).toBeGreaterThan(0);
   }



get HeroImageBanner(){
   return $('//a[@data-eventlabel="Hero"]')

}







}
export default new HeroImagePage;