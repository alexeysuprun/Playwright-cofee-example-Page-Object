import { Locator, Page } from "@playwright/test";
import { PaymentModal } from "../modals/PaymentModal";


export class MenuPage {
    private readonly page: Page;
    readonly totalButton: Locator;
    readonly successMessage: Locator;
    readonly addButton: Locator;
    readonly removeButton: Locator;
    readonly cartPreview: Locator;
    readonly discountMessage: Locator;
    private readonly cupLocator = (drinkName: string) =>
        this.page.locator(`.cup-body[aria-label='${drinkName}']`);

    constructor(page: Page) {
        this.page = page;
        this.totalButton = page.locator(`[data-test='checkout']`);
        this.successMessage = page.locator(".success");
        this.addButton = page.locator(`button[aria-label='Add one Espresso']`);
        this.removeButton = page.locator(`button[aria-label='Remove one Espresso']`);
        this.cartPreview = page.locator(".cart-preview");
        this.discountMessage = page.locator(".promo");
    }

    async navigateTo() {
        await this.page.goto('https://coffee-cart.app/');
        return this
    }

    async addDrinkToCart(drinkName: string) {
        await this.cupLocator(drinkName).click();
        return this
    }

    async clickTotalButton() {
        await this.totalButton.click();
        return new PaymentModal(this.page);
    }

    async getTotal() {
        return this.totalButton.innerText()
    }

    async getSuccessMessage() {
        return this.successMessage.innerText()
    }

    async isCartPreviewVisible() {
        await this.totalButton.hover();
        return new PaymentModal(this.page);
    }

    async addOneMoreCoffee() {
        await this.totalButton.hover();
        await this.addButton.click();
        return this
        // return new PaymentModal(this.page);
    }

    async getCartPreview() {
        await this.totalButton.hover();
        return this.cartPreview.innerText()
    }


    async removeOneCoffee() {
        await this.totalButton.hover();
        await this.removeButton.click();
        return this
        // return new PaymentModal(this.page);
    }
    async getDiscountMessage() {
        return this.discountMessage.innerText()
    }
}