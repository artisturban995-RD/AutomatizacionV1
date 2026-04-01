import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByText('Forgot your password?').click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('ramon123');
  await page.getByRole('button', { name: 'Reset Password' }).click();
});