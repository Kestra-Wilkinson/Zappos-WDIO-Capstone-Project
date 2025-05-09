class NavigationPage {



get NavmenuMen(){
    return $('//a[data-shyguy="navMen"]');
}

get NavmenuMenShoesLinks(){
    return $$('//ul[@data-component-name="subNavMenu"]');
}


get NavmenuMenClothing(){
return $$('//ul[@data-component-name="subNavMenu"]/li');

}

get NavmenuMenAccessories(){
    return $$('//ul[[@data-component-name="subNavMenu"]/li')
}








async NavmenuMen(){
    const  menulinks =[this.NavmenuMen,this.NavmenuMenShoesLinks,this.NavmenuMenClothing,this.NavmenuMenAccessories,]
   
     for (let index = 0; index < menulinks.length; index++) {
        
        await this.NavmenuMen
     
     } 

    }

get NavWomenbutton(){
return $('//span[@class="pointer-events-none"]');
}
 get NavWomen(){
 return $('//div[@class="pj-z"]');
 } 
 

async NavmenuWomen(){



}
}
export default new NavigationPage;