// open browser and go to choosen url//////////////////////////
module.exports = (browser, url, insertNewRepo, testName) => {
  return new Promise((resolve) => {
    browser
      .windowMaximize()
      .pause(1500)
      .url(url[1], (res) => {
        insertNewRepo("Open Window", res.status == 0, url, testName);
        browser.pause(210, () => {
          resolve();
        });
      });
  });
};
///////////////////////////////////////////////////////////////
