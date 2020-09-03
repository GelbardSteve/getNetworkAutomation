const { selectors } = require("./selectorsForTest");
const f = require("../../exportsFunction");
const { createNewReport, insertAllLogs } = require("../../utils/reportsCreate");

module.exports = {
  readNetwork: function (testNum, summaryTestName) {
    const test_name = `networkData/${testNum}`;
    createNewReport(test_name);

    f.readNetworkData(insertAllLogs, test_name, selectors.url, summaryTestName);
  },
};
