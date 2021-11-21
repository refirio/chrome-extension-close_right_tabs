chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.getAllInWindow(tab.windowId, function(tabs){
    tabs.reverse().some(function(_tab, i){
      if (_tab.id == tab.id) {
        return true;
      } else {
        chrome.tabs.remove(_tab.id);
      }
    });
  });
});
