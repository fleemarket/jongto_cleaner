/*chrome.storage.local.set({ "ban" : "외힙린이" }).then(() => {
    console.log("Value is set to " + "외힙린이");
  });*/
function save() {chrome.storage.local.get(["onoff"]).then((result) => {

  
      if(result.onoff == "ON") {


  
    chrome.storage.local.get(["banlist"]).then((result) => {

ban = result.banlist.split(";")
var last = ban.pop()
console.log(ban)




/*const sections = document.querySelectorAll(".notice");
for ( var i = 0; i < sections.length; i++) {
  const item = sections.item(i);
  var author = String(item.childNodes[7].firstChild.firstChild.innerHTML)
  if(author.includes(result.ban)){
    item.parentNode.removeChild(item);
  }
}*/

var sections2 = document.querySelectorAll(".author")
for ( var i = 0; i < sections2.length; i++) {
data = sections2[i].innerHTML

const item = sections2.item(i);
for (var j =0; j<ban.length; j++){
if(data.includes(ban[j])){
    item.parentNode.parentNode.removeChild(item.parentNode);
}
}
}

      }  
      );
    }  
  }
    );
}
save();


// Select the element you want to remove
/*var element = document.querySelector('.element-class');

// Check if the element exists
if (element) {
  // Remove the element
  element.parentNode.removeChild(element);
}*/