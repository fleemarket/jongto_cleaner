function sayHello(){
    document.body.style.backgroundColor = "yellow";
}

const element = $("body");

const shown = true;



setInterval(toggle, 500);


 



function toggle() {
// 깜빡거림
   if(shown) {

       element.hide();

       shown = false;

   } else {

       element.show();

       shown = true;

   }

}




// 페이지가 완전히 로딩된 후 함수 실행
window.onload = sayHello;