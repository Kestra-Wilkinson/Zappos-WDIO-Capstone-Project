class SearchPage{

get searchInput()  {return $('[data-ui="site-header-site-search-input"]');}
get searchButton() {return $('button[data-ui="site-header-search-button"]');}
get searchResultTitle() {return $('h1');}
get searchcount() {return $('span.ht-z');}





    async performSearch(term){
        await this.searchInput.waitForExist({  timeout: 10 });
        await this.searchInput.setValue(term);
        await this.searchButton.click();
        await this.searchResultTitle.waitForExist({ timeout: 10});
        await browser.pause(3000);
    }




    async ValidateResults(term,shouldFindResults =true) {
        await browser.url('https://www.zappos.com/')
        const titleText =await this.searchResultTitle.getText();
        const countText =await this.searchcount.getText();
        const match =countText.match(/\d+/);
        const resultcount =match ? parseInt(match[0]) :0;

        if (shouldFindResults) {
            expect(titleText.toLowercase()).toContain(term.toLowercase());
            expect(resultcount).toBeGreaterThan(0);
            } else {
            expect(resultcount).toBe(0);
            }
        }   
}

export default  new SearchPage;