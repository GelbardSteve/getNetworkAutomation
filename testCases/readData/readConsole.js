const f = require("../../exportsFunction");
const { createNewReport, insertAllLogs } = require("../../utils/reportsCreate");

module.exports = {
  readConsole: async function (browser, testNum, summaryTestName) {
    const test_name = `console_data/${testNum}`;
    createNewReport(test_name);
    createNewReport(`summaryData/${summaryTestName}`);

    await f.getLogFromConsole(
      browser,
      insertAllLogs,
      test_name,
      summaryTestName
    );
  },
};
