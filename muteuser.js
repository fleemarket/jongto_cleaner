let mute_button = document.querySelector('#mutebutton');
let mute_input = document.querySelector('#muteinput');
chrome.storage.local.get(["mutelist"]).then((result) => {
    console.log(result.mutelist)
    if(result.mutelist != undefined){
        mute_input.value = result.banlist
    }


})
mute_button.addEventListener('click', function() {
    let theText = mute_input.value;

    chrome.storage.local.set({ "mutelist" : theText }).then(() => {
        console.log("Mute list is " + theText);
      })

})