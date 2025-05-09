import {$,browser,expect} from '@wdio/globals'

class SearchPage{







get SearchBar(){
 return $('//input[@id="searchAll"]');
    
}



get searchButton(){
return $('//button[@class="k-z"]');

}
get VerifySportsResults(){
    return $('//span[@class="ht-z"]')
}

searchTerms =[
 "Sports","Sunglasses","Hiking","Shoes"]







async open(){
return browser.url('https://www.zappos.com/')

}

async searchTerms(){
 for (const searchTerms of this.searchTerms[searchTerms]) 
   
await this.SearchBar
await this.searchTerms
await this.searchButton
await expect(this.VerifySportsResults).toBeDisplayed()

}
}

export default new SearchPage;