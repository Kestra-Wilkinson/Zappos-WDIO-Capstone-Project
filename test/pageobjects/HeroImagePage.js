import {$,browser} from '@wdio/globals';

class HeroImage {







get HeroImageBanner(){
   return $('//a[@data-eventlabel="Hero"]')
}



















async open(browser){
return browser.url('https://www.zappos.com/')

}
}
export default new HeroImage;