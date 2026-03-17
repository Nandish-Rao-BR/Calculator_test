const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('file://' + __dirname + '/index.html');

    // Test 2 + 3 = 5
    await page.click('text=2');
    await page.click('text=+');
    await page.click('text=3');
    await page.click('text==');

    const result = await page.$eval('#display', el => el.value);

    if(result === '5'){
        console.log('✅ Test Passed');
    } else {
        console.error('❌ Test Failed: Expected 5 but got ' + result);
        process.exit(1);
    }

    await browser.close();
})();