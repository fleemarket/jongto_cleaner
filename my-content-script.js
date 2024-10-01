function mute() {
    const tabJongto = document.querySelectorAll(".tabs_submenu li"); // 종토방 탭 태그 찾기
    const indexToHide = 6; // tabjongto 배열에서 종토방 인덱스
    const containerJongto = document.querySelectorAll(".new_bbs .right"); // 종토방 미리보기 태그
    const company_name = document.querySelectorAll(".wrap_company h2 a"); // 종목 이름 태그
    const eps = document.querySelectorAll("#_eps")[0]?.innerText; // eps 문자열 추출
    const epsFloat = parseFloat(eps); // eps 실수 데이터로

    console.log(eps); // eps 값 확인
    console.log(epsFloat); // eps 실수 변환 값 확인
    console.log(company_name); // company_name 요소 확인

    tabJongto[indexToHide].style.display = "none";
    containerJongto[0].style.display = "none";
    // 종토방 탭 가리기
    const img = document.createElement("img");
    img.src =
        "https://img8.yna.co.kr/etc/inner/KR/2021/06/12/AKR20210612027700009_02_i_P2.jpg";
    img.alt = "doge Image";
    img.width = 320;
    img.style.marginLeft = "20px";
    img.style.marginTop = "10px";
    containerJongto[0].parentNode.insertBefore(
        img,
        containerJongto[0].nextSibling
    );
    // 종토방 미리보기 가리기

    if (isNaN(epsFloat) || epsFloat < 0) {
        company_name[0].style.setProperty("color", "red", "important"); // 적자

        console.log("yes");
    }
}

mute();
