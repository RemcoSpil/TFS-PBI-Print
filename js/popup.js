function setPBIInfo(details)
{
   localStorage["PBI_id"] = details.pbi_id;
   localStorage["PBI_tags"] = details.tags;
   localStorage["PBI_title"] = details.title;
   localStorage["PBI_description"] = details.description;
   localStorage["PBI_dod"] = details.dod;

   chrome.tabs.create({'url': chrome.extension.getURL('print.html')});
}


window.addEventListener('DOMContentLoaded', function() {
 chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        /* ...and send a request for the DOM info... */
        chrome.tabs.sendMessage(
                tabs[0].id,
                {from: 'popup', subject: 'PBIInfo'},
                /* ...also specifying a callback to be called 
                 *    from the receiving end (content script) */
                setPBIInfo);
    });
      
});


