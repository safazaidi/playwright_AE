import { test, expect, Locator, Page } from '@playwright/test';

export class AddToCartPage {

    readonly page : Page;
    readonly productsBtn : Locator;
    readonly addtoCartBtn1 : Locator;
    readonly continueBtn : Locator;
    readonly addtoCartBtn : Locator;
    readonly viewBtn : Locator;
    readonly addAsText : Locator;

    constructor (page : Page){
        this.page = page;
        this.addtoCartBtn = page.locator('//a[contains(text(), "Add to cart")]');
        this.addtoCartBtn1 = page.locator('(//a[contains(text(),"Add to cart")])[3]');
        this.continueBtn = page.locator('//button[contains(@class,"btn-success") and contains(@class,"close-modal")]');
        this.productsBtn = page.locator('//a[contains(text(), "Products")]');
        this.viewBtn = page.locator('//u[normalize-space()="View Cart"]');
        this.addAsText = page.locator('//h4[normalize-space()="Added!"]');
    }

    async goto(){
        await this.page.goto('https://automationexercise.com');
    }

    async expectAddtoCart(){

        await this.productsBtn.click();
        await this.addtoCartBtn.click();
        await this.continueBtn.click();
        await this.addtoCartBtn1.click();
        await this.viewBtn.click();


    }

    async expectAddtoCartSuccess() {
         
            await expect(this.addAsText).toBeVisible();
        }
}