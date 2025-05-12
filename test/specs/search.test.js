import SearchPage from '../pageobjects/SearchPage';

describe('Zappos Search Tests', () => {
   

         tests.forEach(({term, valid }) => {
            it(`should ${valid ? 'return':'not return'} results for "${term}`,async () =>{
                await SearchPage.performSearch(term);
                await SearchPage.ValidateResults(term,valid);
            })   
        });   
 });
    

