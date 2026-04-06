#!/usr/bin/env node
// generate-pdf.mjs — Convert HTML CV to PDF using Playwright

import { chromium } from 'playwright';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, basename } from 'path';

const args = process.argv.slice(2);
const inputFile = args[0] || 'output/cv-latest.html';
const outputFile = args[1] || inputFile.replace('.html', '.pdf');

if (!existsSync(inputFile)) {
  console.error(`Error: ${inputFile} not found`);
  process.exit(1);
}

const html = readFileSync(inputFile, 'utf-8');

console.log(`Generating PDF: ${inputFile} → ${outputFile}`);

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle' });

await page.pdf({
  path: outputFile,
  format: 'A4',
  margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' },
  printBackground: true,
});

await browser.close();
console.log(`✅ PDF saved: ${outputFile}`);
