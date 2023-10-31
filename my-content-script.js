function save() { chrome.storage.local.get(["onoff"]).then((result) => {

  if (result.onoff == "ON"){


  
    chrome.storage.local.get(["mute"]).then((result) => {

mute = result.mutelist.split(' ')

let last = mutelist.pop()

console.log(mute)


/* 종목토론방 => 개발자도구에서 태그명 또는 id, class 찾아서
   쿼리셀렉터 인자 바꿀것 */
let authors = document.querySelectorAll(".p11")
for (let i = 0; i < authors.length; i++) {
data = authors[i].innerHTML

const item = authors.item(i);

for (let i = 0; i < mute.length; i++){

if (data.includes(mute[j])){
  item.parentNode.parentNode.removeChild(item.parentNode)


}
}
}


    }
    );
  }
});


}
save();

