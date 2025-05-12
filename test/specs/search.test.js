import SearchPage from '../pageobjects/SearchPage';

describe('Zappos Search Tests', () => {
    const tests =[
        {term: 'Sports',valid:true},
        {term: 'Sunglasses',valid:true},
        {term: 'Mules',valid: true},
        {term: 'Hiking', valid:true}
    ];

         tests.forEach(({term, valid }) => {
            it(`should ${valid ? 'return':'not return'} results for "${term}`,async () =>{
                await SearchPage.performSearch(term);
                await SearchPage.ValidateResults(term,valid);
            })   
        });   
 });
    

