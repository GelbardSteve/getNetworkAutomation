const { selectors } = require("./selectorsForTest");
const f = require("../../exportsFunction");
const { createNewReport, insertAllLogs } = require("../../utils/reportsCreate");

module.exports = {
  readNetwork: async function (testNum, summaryTestName) {
    return new Promise(async (done) => {
      const test_name = `networkData/${testNum}`;
      createNewReport(test_name);

      f.readNetworkData(
        insertAllLogs,
        test_name,
        selectors.url,
        summaryTestName
      );
    });
  },
};
