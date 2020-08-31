//pause function////////////////////////////////////////
module.exports = (browser, pauseIt) => {
  return new Promise((resolve) => {
    browser.pause(pauseIt, () => {
      resolve();
    });
  });
};
/////////////////////////////////////////////////////////
