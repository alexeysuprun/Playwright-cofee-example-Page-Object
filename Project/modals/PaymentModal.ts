import { Locator, Page } from "@playwright/test";

export class PaymentModal {
    private readonly page: Page;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly submitPayment: Locator;
    readonly cartPreview: Locator;
    readonly addButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.nameInput = page.locator(`#name`);
        this.emailInput = page.locator(`#email`);
        this.submitPayment = page.locator(`#submit-payment`);
        this.cartPreview = page.locator(".cart-preview.show")
        this.addButton = page.locator(`button[aria-label='Add one Espresso']`);
    }

    async submitOrder(name: string, email: string) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.submitPayment.click();
    }

    async getCartPreviewVisible() {
        await this.cartPreview.isVisible();
    }

    

}