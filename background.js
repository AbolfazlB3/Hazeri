

let color = '#3aa757';

chrome.storage.sync.set({ color });
//console.log('Default background color set to %cgreen', `color: ${color}`);




/*
chrome.browserAction.onClicked.addListener(function(tab) {
  
  chrome.tabs.executeScript(tab.id, {
    code: `
      var cn = 'btn btn-flat icon-button'
      var cmd = document.getElementsByClassName('chat')[0].getElementsByClassName('commands-box')[0].children[2]
      const msg = 'this is a test ' + Math.random()

      var txtbox = cmd.children[0]
      var btn = cmd.children[2].children[0]

      txtbox.innerHTML = msg;
      btn.click();

      console.log(txtbox);
      console.log(btn)
    `
  });
});

*/
