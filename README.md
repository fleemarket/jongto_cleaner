# 개인프로젝트

**네이버 종목토론방을 거닐면서 덜 불쾌하게 도와주는 확장 프로그램**

-   네이버 주식 종목토론방을 더 클린하게 이용할 수 있도록 도와주는 크롬 확장프로그램
-   [바로 가기](https://store.whale.naver.com/detail/piaoiniokbncjjkehgjkdohdemaobnpf)

## 패치노트

### ver 1.0.0 (230716)

확장프로그램 기초 틀 잡음.
깃허브 저장소 개설.
README.md 작성.

---

### ver 1.0.1 (230717)

콘텐츠 스크립트와 백그라운드 스크립트 추가로 인한 manifest 수정

### ver 1.0.2 (231031)

용도변경 : SSAFY 확장프로그램 => 네이버 주식 종목토론방 개선을 위한 프로그램

파일 3개 추가(banuser.js, onoffchange.js, onoffcheck.js)
해당 파일 추가에 따른 파일 경로 조정 필요.

---

### ver 1.0.3 (231031)

개념어 통일 : ban => mute
파일명 변경 ( banuser.js => muteuser.js)

---

### ver 1.0.4 (231101)

매니페스트 V2 => V3으로 수정
로고 이미지 16 _ 16, 128 _ 128 추가, 이에 따른 매니페스트 경로 추가
파일명 변경 (dpopup.html => popup.html, dpopup.js => popup.js)
popup.html 수정
에러트래킹 이미지 추가

---

### ver 1.0.5 (231102)

popup.html 잘못된 경로 참조 수정
자바스크립트 수정중, 먼저 차단 리스트에 명단을 넣고, 차단을 껐다 켜더라도 삭제하기 전까지는 명단이 계속 저장되어 있도록 하는 기능 구현 필요 확인
onoffcheck.js 파일 제거, 예비파일 보유중.
11월 2일 동안 삭제된 파일이 영향을 미치는 지 확인 (이에 따라 popup.html 수정)
my-content-script.js 중괄호 에러 여부 확인 (중요)

---

### ver 1.0.6 (240806)

개발 방향 변경.
종토방 유저 차단 기능 => 종토방 자체를 가림.
종토방이 표시되던 컨테이너 자리에 도지 이미지를 넣음. [해당 링크](https://img8.yna.co.kr/etc/inner/KR/2021/06/12/AKR20210612027700009_02_i_P2.jpg)
일단 PC 페이지에 대하여 작업함.

---

### ver 1.0.7 (240806)

웨일 앱 반려 건에 대한 조치.

---

### ver 1.0.8 (241001)

1. 적자/흑자 회사 표시.(eps 기반)

--- 

### ver 1.0.9 (예정)

메인화면에서만 적자/흑자가 표시되던 오류를 수정

---

### ver 1.1.0 (예정)

시총 단위별로 마커 표시 (ex: ~ 500억, ~ 3000억, ~1조, 1조 이상)
위험 종목 표시 (eps가 주가의 -100% 이상)

제작자 : fleemarket
