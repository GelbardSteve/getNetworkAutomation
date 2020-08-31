const f = require("../../exportsFunction");
f.deleteFromFolder(`../getNetworkAutomation/reports/console_data`);
f.deleteFromFolder(`../getNetworkAutomation/reports/networkData`);
f.deleteFromFolder(`../getNetworkAutomation/reports/summaryData`);
module.exports = {
  deleteReports: async function (testNum) {},
};
