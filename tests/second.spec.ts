const { test, expect } = require('@playwright/test');
import { MenuPage } from "../Project/pages/MenuPage";



test.beforeEach(async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.navigateTo();
});


test('Get cartPreview visible', async ({ page }) => {
  const menuPage = new MenuPage(page);
  expect(await menuPage.isCartPreviewVisible());
})

test('Add one more coffee', async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.addDrinkToCart('Espresso');
  await menuPage.addOneMoreCoffee();

  expect(await menuPage.getCartPreview()).toContain("Espresso x 2");
  expect(await menuPage.getTotal()).toContain("$20.00");
})

test('Remove one coffee', async ({ page }) => {
    const menuPage = new MenuPage(page);
    await menuPage.addDrinkToCart('Espresso');
    await menuPage.removeOneCoffee();
  
    expect(await menuPage.getTotal()).toContain("$0.00");
  })

  test('Show discount message', async ({ page }) => {
    const menuPage = new MenuPage(page);
    await menuPage.addDrinkToCart('Espresso');
    await menuPage.addDrinkToCart('Espresso Macchiato');
    await menuPage.addDrinkToCart('Cappuccino');
  
    expect(await menuPage.getDiscountMessage()).toContain("It's your lucky day! Get an extra cup of Mocha for $4.");
  })

  