module.exports = (browser, insertNewRepo, testName, summaryTestName) => {
  return new Promise((resolve) => {
    browser.getLog("browser", (logEntriesArray) => {
      logEntriesArray.forEach((log) => {
        insertNewRepo(
`
  Console Data:
  level: ${log.level},
  message: ${log.message},
  source: ${log.source},
  timestamp: ${log.timestamp}
`,
          testName,
          `summaryData/${summaryTestName}`
        );
      });
    });
    browser.pause(1000, () => {
      resolve();
    });
  });
};
