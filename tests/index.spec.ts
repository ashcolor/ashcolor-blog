import { test, expect } from "@playwright/test";

test("TOPページの表示", async ({ page }) => {
    await page.goto("./");
    await page.waitForLoadState("domcontentloaded");
    await expect(page).toHaveTitle("あしゅログ | システムエンジニア / DTMerのブログ");
});
