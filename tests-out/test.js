"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('index page has expected h1', async ({ page }) => {
    await page.goto('/');
    await (0, test_1.expect)(page.getByRole('heading', { name: 'Hey, I am Simon Bernabeu!' })).toBeVisible();
});
(0, test_1.test)('index page has navbar', async ({ page }) => {
    await page.goto('/');
    await (0, test_1.expect)(page.getByRole('link', { name: 'Blog' })).toBeVisible();
    await (0, test_1.expect)(page.getByRole('link', { name: 'Experience' })).toBeVisible();
    await (0, test_1.expect)(page.getByRole('link', { name: 'Socials' })).toBeVisible();
});
//# sourceMappingURL=test.js.map