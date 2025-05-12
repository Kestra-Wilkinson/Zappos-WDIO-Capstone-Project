class SearchPage{

    get searchInput()  {return $('//input[@id="searchAll"]');}
    get searchButton() {return $('//button[@type="submit"]');}
    get searchResultTitle() {return $('h1');}
    get searchcount() {return $('.ht-z');}

    async performSearch(term){
        await browser.url('https://www.zappos.com/');
        await this.searchInput.waitForClickable({  timeout: 10 });
        await this.searchInput.setValue(term);
        await this.searchButton.click();
        await this.searchResultTitle.waitForExist({ timeout: 10});
     
    }

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