const f = require("../../exportsFunction");
f.deleteFromFolder(`../Automation_Task/reports/console_data`);
f.deleteFromFolder(`../Automation_Task/reports/networkData`);
f.deleteFromFolder(`../Automation_Task/reports/summaryData`);
module.exports = {
  deleteReports: async function (testNum) {},
};
