import { test, expect } from '@playwright/test';
import { validateEldFileStructure } from '../utils/validateEldFile';

test('Detailed ELD file structure validation report', async () => {
  const filePath = './test-files/sample.eld.txt';
  const { results, valid } = validateEldFileStructure(filePath);

  // Print section-by-section result
  console.log('\n🔍 ELD File Structure Report:\n');
  results.forEach(r => {
    console.log(`${r.found ? '✅' : '❌'} ${r.section}`);
  });

  // Fail if any section is missing
  const missing = results.filter(r => !r.found).map(r => r.section);
  expect(valid, `Missing sections: ${missing.join(', ')}`).toBe(true);
});
