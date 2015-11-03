function loadHandler(e)
{
   document.getElementById("pbi_id").innerHTML = localStorage["PBI_id"];
   document.getElementById("tags").innerHTML = localStorage["PBI_tags"];
   document.getElementById("title").innerHTML = localStorage["PBI_title"];
   document.getElementById("description").innerHTML = localStorage["PBI_description"];
   document.getElementById("dod").innerHTML = localStorage["PBI_dod"];

   window.print();
}

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('load', loadHandler);
});
