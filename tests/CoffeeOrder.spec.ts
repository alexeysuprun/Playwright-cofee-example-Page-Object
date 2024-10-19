const { test, expect } = require('@playwright/test');
import { MenuPage } from "../Project/pages/MenuPage";



test.beforeEach(async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.navigateTo();
});

test.afterEach(async ({ page }) => {
  const menuPage = new MenuPage(page);
  const paymentDetailsModal = await menuPage.clickTotalButton();
  await paymentDetailsModal.submitOrder("test-1", "test@gmail.ts");

  expect(await menuPage.getTotal()).toContain("$0.00");
  expect(await menuPage.getSuccessMessage()).toContain("Thanks for your purchase. Please check your email for payment.");
});

test('Order Espresso coffee drink - check that order recieved', async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.addDrinkToCart('Espresso');
})

test('Order Espresso Macchiato coffee drink - check that order recieved', async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.addDrinkToCart('Espresso Macchiato');
})

test('Order Cappuccino coffee drink - check that order recieved', async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.addDrinkToCart('Cappuccino');
})

test('Order Mocha coffee drink - check that order recieved', async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.addDrinkToCart('Mocha');
})

test('Order Flat White coffee drink - check that order recieved', async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.addDrinkToCart('Flat White');
})

test('Order Americano coffee drink - check that order recieved', async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.addDrinkToCart('Americano');
})

test('Order Cafe Latte coffee drink - check that order recieved', async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.addDrinkToCart('Cafe Latte');
})

test('Order Espresso Con Panna coffee drink - check that order recieved', async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.addDrinkToCart('Espresso Con Panna');
})

test('Order Cafe Breve coffee drink - check that order recieved', async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.addDrinkToCart('Cafe Breve');
})

