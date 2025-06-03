import {$,browser,expect} from '@wdio/globals'
class SearchPage{

    get searchInput()  {return $('//input[@id="searchAll"]');}
    get searchButton() {return $('//button[@type="submit"]');}
    get searchResultTitle() {return $('h1');}
    get searchcount() {return $('.yu-z');}

   
    searchHistoryXbutton(searchItem){
       return $(`//button[@type="button"][@aria-label="Remove ${searchItem}"]`) 
    }
    async performSearch(term){
        await browser.url('https://www.zappos.com/');
        await this.searchInput.waitForClickable({  timeout: 1000});
        await this.searchInput.setValue(term);
        await this.searchButton.click();
        await this.searchResultTitle.waitForExist({ timeout: 2000});
    }
        async clearsearch(){
     
            await this.searchHistoryXbutton('sunglasses').click();
            await this.searchHistoryXbutton('mules').click();
            await this.searchHistoryXbutton('hiking').click();
            await this.searchHistoryXbutton('sports').click();
        }
   tests =[
        {term: 'Sports',valid:true},
        {term: 'Sunglasses',valid:true},
        {term: 'Mules',valid: true},
        {term: 'Hiking', valid:true}
    ];
    async ValidateResults(term,shouldFindResults =true) {
        const titleText =await this.searchResultTitle.getText();
        const countText =await this.searchcount.getText();
        const match =countText.match(/\d+/);
        const resultcount =match ? parseInt(match[0]) :0;

        if (shouldFindResults) {
            expect(titleText.toLowerCase()).toContain(term.toLowerCase());
            expect(resultcount).toBeGreaterThan(0);
            } else {
            expect(resultcount).toBe(0);
            }
        }   

 }
export default  new SearchPage;
