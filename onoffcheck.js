//차단 체크

const script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js';
chrome.storage.local.get(["onoff"]).then((result) => {
if(result.onoff == "ON") {

    document.getElementsByClassName("switch_label")[0].style.background = "#c44";
    document.getElementsByClassName("switch_label")[0].style.border = "2px solid #c44";

    document.getElementsByClassName("onf_btn")[0].style.left= "33px";
    document.getElementsByClassName("onf_btn")[0].style.background= "#fff";
    document.getElementsByClassName("onf_btn")[0].style.boxShadow= "1px 2px 3px #00000020";
 

    //$('#switch:checked+.switch_label .onf_btn ').css({'left':'33px','background':'#fff', 'box-shadow': '1px 2px 3px #00000020'});


}

}
)


