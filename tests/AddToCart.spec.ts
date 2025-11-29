import { test } from '@playwright/test';
import { AddToCartPage } from  '../pages/AddToCartPage';
import { describe } from 'node:test';

test.describe('add product to the cart', () =>{

test('successfull addToCart', async ({page}) => {

    const addToCartPage = new AddToCartPage(page);
    await addToCartPage.goto();
    await addToCartPage.expectAddtoCart();
    await addToCartPage.expectAddtoCartSuccess();

});

});