import { expect } from '@playwright/test';
import { test } from '@utils/test/playwright';

test('should not have visual regressions', async ({ page, skip }) => {
  skip.mode('ios', 'ion-grid does not have different styling per-mode');
  await page.goto(`/src/components/grid/test/offsets`);

  await page.setIonViewport();

  await expect(page).toHaveScreenshot(`grid-offsets-${page.getSnapshotSettings()}.png`);
});