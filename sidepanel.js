console.log("sidepanel.js");

const iframe = document.createElement("iframe");
// iframe.setAttribute('hidden', 'hidden');
iframe.setAttribute("id", "permissionsIFrame");
iframe.setAttribute("allow", "microphone");
iframe.src = chrome.runtime.getURL("requestPermissions.html");
document.body.appendChild(iframe);
