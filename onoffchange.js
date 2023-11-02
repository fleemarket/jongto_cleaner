//차단 ON/OFF 설정
  
  let onoff_switch = document.querySelector('#switch');
  let onoff_check = document.querySelector('.switch_label');
  let onoff = "OFF"
  onoff_switch.addEventListener('click', function() {
    onoff_check = document.querySelector("#switch:checked+.switch_label .onf_btn");
    if(onoff_check) {
      onoff = "ON"
      document.getElementsByClassName("switch_label")[0].style.background = "#c44";

      document.getElementsByClassName("onf_btn")[0].style.left= "33px";
      document.getElementsByClassName("onf_btn")[0].style.background= "#fff";
      document.getElementsByClassName("onf_btn")[0].style.boxShadow= "1px 2px 3px #00000020";
    }
    else{
      onoff = "OFF"
      document.getElementsByClassName("switch_label")[0].style.background = "#fff";

      document.getElementsByClassName("onf_btn")[0].style.left= "3px";
      document.getElementsByClassName("onf_btn")[0].style.boxShadow= "";
    }
    chrome.storage.local.set({ "onoff" : onoff }).then(() => {
      console.log("차단 " + onoff);
    })});
