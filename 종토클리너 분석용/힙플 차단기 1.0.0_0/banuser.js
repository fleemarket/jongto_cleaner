let ban_button = document.querySelector('#banbutton');
let ban_input = document.querySelector('#baninput');
chrome.storage.local.get(["banlist"]).then((result) => {
    console.log(result.banlist)
    if(result.banlist != undefined){
        ban_input.value = result.banlist
    }


})

ban_button.addEventListener('click', function() {
    let theText = ban_input.value;

    chrome.storage.local.set({ "banlist" : theText }).then(() => {
        console.log("Ban list is " + theText);
      })

})