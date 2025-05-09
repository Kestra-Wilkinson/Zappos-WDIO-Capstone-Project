import {$,browser,expect} from '@wdio/globals'
class NavigationPage {



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
    return $('//ul[[@data-component-name="subNavMenu"]/li/a');
}








async NavmenuMen(){
    const  menulinks =[this.NavMen,this.NavmenuMenShoesLinks,this.NavmenuMenClothing,this.NavmenuMenAccessories]
    for (let index = 0; index < menulinks.length; index++) {
   
    await this.NavMen.click();
    await browser.pause(5000);
    await this.NavmenuMenShoesLinks.click();
    await this.NavmenuMenClothing.click();
    await this.NavmenuMenAccessories.click();
    await browser.pause(5000);
} 

    }

get NavWomenbutton(){
return $('//span[@class="pointer-events-none"]');
}
 get NavWomen(){
 return $('//div[@class="pj-z"]');
 } 
 

async NavmenuWomen(){
 await this.NavWomenbutton.click();
await this.NavWomen.click()


}
}
export default new NavigationPage;