const { readNetwork } = require("../testCases/readData/readNetwork");
const { readConsole } = require("../testCases/readData/readConsole");
const { deleteReports } = require("../testCases/readData/deleteReports");
const { selectors } = require("../testCases/readData/selectorsForTest");

module.exports = {
  tags: ["readConsoleNetwork"],
  "Read Network Data": function (browser) {
    browser.windowMaximize().url(selectors.url, () => {
      deleteReports()
      browser.pause(selectors.timeToWait, () => {
        readConsole(browser, "0.console_Data", "0.Read Console And Network");
        readNetwork("0.networkData", "0.Read Console And Network");
      });
    });

    if (selectors.runMoreThanOnce) {
      for (let i = 1; i <= selectors.timeToReloadThePage; i++) {
        browser.refresh((res) => {
          if(res.status == 0) {
            browser.pause(selectors.timeToWait, () => {
              readConsole(browser, `${i}.console_Data`, `${i}.Read Console And Network`);
              readNetwork(`${i}.networkData`, `${i}.Read Console And Network`);
            });
          } else {
            browser.end(() => {
              process.exit()
            })
          }
        });
      }
    }
  },
};
