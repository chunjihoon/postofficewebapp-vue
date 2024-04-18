# postofficewebapp-vue

## Vue.js 를 이용한 WebApp 제작 목표

---

1. Vue를 사용하는 이유
    - 리액트와의 차이, 장단점 비교
    - Vue를 사용하기 적합한 규모 및 실제 적용 사례
2. Vue의 특징
    - 구조, 패턴, 문법, 2 → 3 차이점, CompositionAPI, Vue 관련 프레임워크, 모듈 사용 이유, 장점…
3. 앱 주제 선정
    - 주제 선정 이유
        1. Open API 를 활용 가능한가?
        2. 실용적인가?
        3. 그 외 이유 …
4. 화면 구성
    - 네비게이션 기능
        1. 상품목록
            1. 상품리스트 조회
                1. 예금
                2. 카드
                3. 보험
                4. 펀드
            2. 상품상세 - 개별 아이템 선택 시 상품상세 페이지로 이동
                - 개별상품 즐겨찾기 추가/삭제 기능 - 서버에 저장
        2. 즐겨찾기
            1. 즐겨찾기가 없는 경우: “즐겨찾기 한 상품이 없습니다.”
            2. 즐겨찾기가 있는 경우
                - 즐겨찾기 데이타 서버 조회 후 표출
                    - 즐겨찾기 데이타 선택 시 상품상세 페이지로 이동
5. UI 작업에 드는 공수를 어떻게 하면 더 줄일 것인가? 에 대한 고민
    - 작업 비용이 적으면서 더 효율적이고 생산적으로 UI를 처리할 수 있는 방법 모색 → HTML FlexLayout 학습
6. 학습 및 사용기술
    1. Vue.js
        - vite, axios(통신)
    2. Swift
    3. javascript
    4. HTML
    5. Firebase (서버, 디비)
    6. git (https://docs.github.com/ko/desktop)

99. 진행사항

- 상품 상세 페이지 이동, 상품별 카테고리 변경 시 페이지 이동 (라우팅 처리)
- vscode 에서 npm run serve 해서 웹에서 결과 확인하기
- 네비게이션바 고정: [https://velog.io/@yujunsun0/nav-bar-화면-상단에-고정하기](https://velog.io/@yujunsun0/nav-bar-%ED%99%94%EB%A9%B4-%EC%83%81%EB%8B%A8%EC%97%90-%EA%B3%A0%EC%A0%95%ED%95%98%EA%B8%B0)
- Axios를 이용하여 통신API 호출 및 응답값 수신, 저장 처리
- 뷰프로젝트의 구조 파악하기 - 뷰 공식 사이트 참조
    - npm init vue@latest → npm install → npm run dev
    - https://v3-docs.vuejs-korea.org/guide/quick-start.html#creating-a-vue-application
- 깃 레파지토리 생성하고 내용 업데이트 하기
    - 깃데스크톱앱 사용방법: https://docs.github.com/ko/desktop (공식문서 참조)
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/98afc0a3-ad59-4b89-af15-37224ea659bd/aced20a3-63b6-4dc6-bb11-1ba347c28b4d/Untitled.png)
    
100. TO-DO
    - 맨 첫 메인화면에 네비게이션바만 뜨는 현상 수정
    - 페이지 이동 시, 뷰의 SPA 방식으로 도메인 이동 없이 이동 가능한지 확인
    - 통신 응답값의 포맷대로 model을 만들고 상품 카테고리 별로 데이터 표출하기


## 참고자료

---

1. vue.js 관련
    - 템플릿 제공 사이트: https://vuejsexamples.com/
    - 관련 참고사이트 모음: https://gtilog.netlify.app/devLogs/javascript/vuejs/20180120-vuejs-info
    - 뷰의 라이프사이클, 구조 정리: https://velog.io/@chaerin00/vue-instance-lifecycle
    - 페이지 이동 방법: **push, replace, go**
        - [https://velog.io/@mauv2sky/Vue-router로-페이지-이동하기-push-replace-go](https://velog.io/@mauv2sky/Vue-router%EB%A1%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9D%B4%EB%8F%99%ED%95%98%EA%B8%B0-push-replace-go)
2. HTML 레이아웃 잡기
    - https://codingbroker.tistory.com/115
    - https://codingbroker.tistory.com/117 (flex, grid)
    - https://codingbroker.tistory.com/50 (flexLayout)
    - https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Flexbox
3. 네이티브에서 웹뷰로 웹페이지 로드하는 방법
    - iOS WKWebView 사용: https://jingyu.tistory.com/2
    - 안드로이드 공식 문서: https://developer.android.com/develop/ui/views/layout/webapps/webview?hl=ko
