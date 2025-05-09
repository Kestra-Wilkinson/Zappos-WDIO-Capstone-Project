import {$,browser,expect } from '@wdio/globals';
import NavigationPage from '../pageobjects/NavigationPage';






describe('Zappos Navigation Test', () => { 

it('should perform a Mens submenu  Navigation Test on the Zappos Website page',async () =>{
  await browser.url('https://www.zappos.com/')
  
  await NavigationPage.NavmenuMen();
})
})







describe('Zappos Navigation Test', () => { 

  it('should perform a Womens submenu Navigation Test on the  Zappos Website page',async () =>{
   
    await browser.url('https://www.zappos.com/')
  

      await NavigationPage.NavmenuWomen
  })
})