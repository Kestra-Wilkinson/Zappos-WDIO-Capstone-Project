import {$,browser, expect} from '@wdio/globals';

class HeroImagePage {
   get HeroImage(){ return $('img');}
   
   get HeroImageBanner(){ return $('//a[@data-eventlabel="Hero"]')}

   async openHomePage() {
      await browser.url('https://www.zappos.com/')
      await this.HeroImageBanner.waitForDisplayed({timeout:1000});
   }
  
    async validateHeroImageLoaded() {
        const isDisplayed = await this.HeroImage.isDisplayed();
        const naturalWidth = await browser.execute(function (img) {
            return img.naturalWidth;
        }, await this.HeroImage);

        expect(isDisplayed).toBe(true);
        expect(naturalWidth).toBeGreaterThan(0);
    }
}

export default new HeroImagePage;