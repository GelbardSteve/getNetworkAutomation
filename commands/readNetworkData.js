const puppeteer = require("puppeteer");
module.exports = (insertNewRepo, testName, url, summaryTestName) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on("response", (response) => {
      // if (textRegex.test(contentType)) {
      insertNewRepo(
        `
  Network Data:
  URL: ${response.url()}
  responseStaus: ${response._status}
  responseMethod: ${response._request._method}
  responseMethod: ${response._request._resourceType}
  responseMethod: ${response._statusText}
  
  `,
        testName,
        `summaryData/${summaryTestName}`
      );
      // }
    });

    await page.setDefaultNavigationTimeout(0);
    await page.goto(url);

    await page.close();
    await browser.close();
  })();
};
