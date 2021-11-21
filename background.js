chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.query({}, tabs => {
    tabs.reverse().some((_tab, i) => {
      if (_tab.id == tab.id) {
        return true;
      } else if (_tab.active == false) {
        chrome.tabs.remove(_tab.id);
      }
    });
  });
});
