import { test, expect } from "@playwright/test";

test("TOPページの表示", async ({ page }) => {
    await page.goto("./");
    await page.waitForLoadState("domcontentloaded");
    await expect(page).toHaveTitle("あしゅログ | システムエンジニア / DTMerのブログ");
    await page.screenshot({ fullPage: true });
});

test("ブログ記事一覧の表示", async ({ page }) => {
    await page.goto("./blog/gadget");
    await page.waitForLoadState("domcontentloaded");
    await expect(page).toHaveTitle("ガジェット | あしゅログ");
    await expect(page.locator(".card.card-compact").first()).toBeVisible();
});

test("ブログ記事の表示", async ({ page }) => {
    await page.goto("./blog/gadget/desk-tour");
    await page.waitForLoadState("domcontentloaded");
    await expect(page.locator("h2[id]").first()).toBeVisible();
});

test("TOPページ→ブログ記事 画面遷移", async ({ page }) => {
    // TOPページに遷移
    await page.goto("./");
    await page.waitForLoadState("domcontentloaded");

    // 記事をクリック
    await page.locator(".card.card-compact").first().click();
    await page.waitForLoadState("domcontentloaded");
    await expect(page.locator("h2[id]").first()).toBeVisible();
});
