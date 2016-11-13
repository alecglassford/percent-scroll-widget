'use strict';

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'js/inject.js'
  });
  chrome.tabs.insertCSS({
    file: 'css/inject.css'
  });
});
