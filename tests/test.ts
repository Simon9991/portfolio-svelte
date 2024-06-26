import { test, expect } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Hey, I am Simon Bernabeu!' })).toBeVisible();
});

test('index page has navbar', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('link', { name: 'Blog' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Experience' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Socials' })).toBeVisible();
});
