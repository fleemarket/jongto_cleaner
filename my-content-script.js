function save() { chrome.storage.local.get(["onoff"]).then((result) => {

  if (result.onoff == "ON"){


  
    chrome.storage.local.get(["mute"]).then((result) => {
    if (result.mutelist){
      mute = result.mutelist.split(',')
    }
  })
  }
// let last = mutelist.pop()

      // console.log(mute)

if (mute){
/* 종목토론방 => 개발자도구에서 태그명 또는 id, class 찾아서
   쿼리셀렉터 인자 바꿀것 */
  let authors = Array.from(document.querySelectorAll(".p11"))
  // authors = 배열
  for (let i = 0; i < authors.length; i++) {
    let data = authors[i]


  for (let j = 0; j < mute.length; j++){

  if (data.includes(mute[j])){
    data.parentNode.parentNode.removeChild(data.parentNode)


  }
}
  }
}
})
}
  save();

