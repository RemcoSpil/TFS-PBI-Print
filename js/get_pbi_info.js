//Determine if this content script is loaded in a TFS page
if(typeof document.querySelectorAll('.hubs a')[0] !== 'undefined')
{
    //If we are on a TFS page, enable the page action
    chrome.runtime.sendMessage({
      from:    'content',
      subject: 'showPageAction'
   });
}


chrome.runtime.onMessage.addListener(function(msg, sender, response){
	console.log('pbi_info:bericht ontvangen');
if((msg.from === 'popup' && msg.subject === 'PBIInfo'))
 {  

  var details = {};
  
  if (typeof document.querySelectorAll('.info-text-wrapper')[0] !== 'undefined') 
  {
	  //Get the info from TFS
	  details.pbi_id = document.querySelectorAll('.info-text-wrapper a')[0].innerText;
	  details.tags = document.querySelectorAll('.work-item-view .tfs-tags .tags-items-container')[0].innerText;
	  details.title = document.querySelectorAll('.info-text')[0].innerHTML;
	  details.description = document.querySelectorAll('.workitemcountingtab[rawtitle=Description] iframe')[0].contentWindow.document.body.innerHTML;
	  details.dod = document.querySelectorAll('.workitemcountingtab[rawtitle="Acceptance Criteria"] iframe')[0].contentWindow.document.body.innerHTML;
	  
	  //Send the information to popup
	  response(details);
  }
  else
  {
	  alert("There is no PBI selected for printing!");
  }
 }
});  