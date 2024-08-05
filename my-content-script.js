function mute() {
    const tabJongto = document.querySelectorAll(".tabs_submenu li");
    const containerJongto = document.querySelectorAll(".new_bbs .right");
    console.log(containerJongto);
    const indexToHide = 6;

    if (indexToHide < tabJongto.length) {
        tabJongto[indexToHide].style.display = "none";
        containerJongto[0].style.display = "none";
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
    }
}

mute();
