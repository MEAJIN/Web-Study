# Web_in_codeit
웹 프론트엔드를 공부하면서 실습했던 과제 및 프로젝트들을 담고 있습니다. 또한, 웹 프론트엔드를 공부하면서 알아두면 유용 할 것 같은 부분들은 README에 정리하며 기록하고 있습니다.

### 학습 기간
- 21.08.25 ~ 27 HTML/CSS 기초 (완)
- 21.08.28 ~ 09.16 HTML/CSS 핵심 개념 (완)
- 21.09.17 ~ HTML/CSS 반응형 웹 퍼블리싱 (공부중)

### 목차

## Web 관련 사이트

- 알아두면 유용한 WEB 기술 사이트

  - [영문](#영문)
  - [한글](#한글)

## HTML

- Tag

  - [Semantic Tags(or Semantic Markup)](#Semantic-Tags)
    - [Semantic Tags의 중요성 3대장](#Semantic-Tags가-중요한-이유-3가지)
  - [웹 사이트 구조를 이루는 태그들(Box Tag)](#웹-사이트-구조를-이루는-태그들)
  - [태그 참고 사이트](#태그-참고-사이트)

## CSS

- 폰트

  - [기본 폰트(default)](#기본-폰트)
  - [폰트 파일 사용법 (@font-face)](#폰트-파일-사용법)
  - [스타일 시트를 활용한 폰트 사용법 (@import)](#특정-스타일-시트에서-또-다른-스타일-시트를-활용한-폰트-사용법)
  - [폰트 참고 사이트](#폰트-참고-사이트)

- display property

  - [inline](#inline)
  - [block](#block)
  - [inline-block](#inline-block)
  - [display 참고 사이트](#display-참고-사이트)
  - [가운데 정렬](#가운데-정렬)
    - [가로 가운데 정렬](#가로-가운데-정렬)
      - [inline](#inline)
      - [block](#block)
    - [세로 가운데 정렬](#세로-가운데-정렬)
      - [가짜 요소 더하기](#가짜-요소-더하기)
        - [번외](#번외)
          - [띄어쓰기 없애기](#띄어쓰기-없애기)
          - [띄어쓰기 공간 만큼의 마이너스 여백 주기](#띄어쓰기-공간-만큼의-마이너스-여백-주기)
      - [line-height 사용](#line-height)
      - [그 외 다른 방식](#그-외-다른-방식)

- positioning
  
  - [static](#static)
  - [relative](#relative)
  - [absolute](#absolute)
  - [fixed](#fixed)

- float

  - [float](#float)
  - [clear](#clear)
  - [overflow](#overflow)
    - [overflow-x](#overflow-x)
    - [overflow-y](#overflow-y)
  - [float 한 눈에 보기](#float-한-눈에-보기)

- background

  - [배경 이미지 반복](#background-repeat)
  - [배경 이미지 사이즈](#background-size)
  - [배경 이미지 위치](#background-size)

- Selector(선택자)

  - [자식(children)](#자식)
  - [직속 자식 (direct children)](#직속-자식)
  - [복수 선택](#복수-선택)
  - [여러 조건](#여러-조건)
  - [Pseudo-class (가상 클래스)](#가상-클래스)
    - [n번째 자식](#n번째-자식)
    - [마우스 오버(hover)](#마우스-오버)

- 단위

  - [px](#px)
  - [rem](#rem)
  - [em](#em)
  - [%(퍼센트)](#퍼센트)

- 반응형

  - [@media](#반응형) (작성 중 입니다)

<br />

# 🔗 Web 관련 사이트 🔗

## 알아두면 유용한 WEB 기술 사이트

> ### 영문
  - https://developer.mozilla.org/en-US/docs/Web (all)
  - https://learn.shayhowe.com/html-css/ (html~css)
  - https://www.w3schools.com/ (all)

> ### 한글
  - https://ofcourse.kr/
  - https://www.daleseo.com/ (검색창에 메인키워드 검색 ex. html, css 등)
  - https://ko.learnlayout.com/toc.html (css, 번역.ver)
  - https://hianna.tistory.com/category/IT/HTML?page=3 (HTML)
  - https://hianna.tistory.com/category/IT/Javascript (JS)
  - http://tcpschool.com/ (all)
  - [margin 상쇄에 대하여](https://velog.io/@raram2/CSS-%EB%A7%88%EC%A7%84-%EC%83%81%EC%87%84Margin-collapsing-%EC%9B%90%EB%A6%AC-%EC%99%84%EB%B2%BD-%EC%9D%B4%ED%95%B4)
<br />

# 📄 HTML 📄

## Tag

> ### Semantic Tags
시맨틱(semantic) 태그란? __의미를 전달__ 할 수 있는 태그다. 예를 들어, 시맨틱 태그가 아닌 `<div>`, `<span>` 태그의 경우 그 이름만 들어서는 어떤 내용을 내포하고 있는지 알 수 없다. 그러나 시맨틱 태그인 `<header>`, `<nav>`, `<img>` 태그의 경우 이름만 들어도 `<header>=제목`, `<nav>=내비게이션`, `<img>=그림` 에 대한 내용을 내포 하고 있음을 짐작 할 수 있다. 이와 같이 사람들에게 의미를 전달 할 수 있는 태그를 `시맨틱(semantic) 태그` 라고 한다.

<br />

> #### Semantic Tags가 중요한 이유 3가지
 
__① 검색 엔진 최적화(search engine optimization, SEO)__
  - `SEO(검색 엔진 최적화)`는 __웹사이트가 검색 결과에 더 잘 보이도록 최적화하는 과정__ 이다. 검색 랭크 개선이라고도 한다.
  
  - `SEO`는 소비자가 자신(회사)의 홈페이지 혹은 콘텐츠를 쉽게 발견할 수 있도록 하는 것이다. `SEO`의 구체적인 방법을 알아보기 전에 기본적으로 필요한 이해는 바로 검색엔진에 관한 것이다. 검색엔진은 인터넷에 산재한 다양한 정보를 미리 수집, 정리한 후 검색 유저가 관련 내용을 검색했을 때 수시로 찾을 수 있도록 해주는 데이터베이스 관리 시스템이다. 대표적으로 ‘네이버’, ‘구글’ 등이 검색 엔진을 가지고 있다. 검색엔진은 ‘크롤링(웹 크롤러로 웹사이트 관련 데이터를 가져오는 과정)’과 ‘인덱싱(크롤링을 통해 얻은 정보를 검색 색인에 저장하는 과정)’을 통해 정보를 카테고리화한다. *([발췌](https://www.bloter.net/newsView/blt201805130001))*

<br />
   
__② 접근성(Accessibility)__
  - 사용자의 신체적 특성이나, 지역, 나이, 지식 수준, 기술, 체험과 같은 제한 사항을 고려하여 가능한 많은 사용자가 불편 없이 이용할 수 있도록 제품, 서비스를 만들어 제공하고 이를 평가 할 때 쓰이는 말이다.
     
  - 접근성이 `높다`?
    - 제한 사항을 가진 사용자도 불편 없이 사용할 수 있다는 것
      
  - 접근성이 `낮다`?
    - 어떠한 제한 때문에 사용하기 불편하거나 사용할 수 없다는 것
     
  - 특히 웹 디자인 분야에서 월드 와이드 웹의 창시자인 팀 버너스 리는 "웹의 힘은 그 광범위함에 있다. 장애에 관계 없이 모든 사람이 접근할 수 있다는 것이 절대적인 장점이다."라고 말했다. 일부 사용자는 시각, 활동, 지각, 청각 등에 장애가 있으며 장애인들이 다른 사람들과 동등하게 웹 탐색을 하고 컴퓨터를 사용하여 여기서 얻을 수 있는 혜택을 고루 누릴 수 있도록 해야 한다. 그러기 위해서는 특수 마우스/키보드/스위치/조이스틱, 음성 인식, 눈동자 인식 등의 장치및 기술을 사용하기도 하며 글자 크기를 크게 하거나 명암 대비를 크게하는 등의 소프트웨어적 방법도 함께 사용한다. *([발췌](https://ko.wikipedia.org/wiki/%EC%A0%91%EA%B7%BC%EC%84%B1))*

<br />
    
__③ For us, 유지보수성(Mainrainability)__
- 장비 또는 시스템이 서비스가 가능한 상태로 작동이 유지되거나 복원될 수 있는 것
    
- 유지보수성 5원칙

  __1. 코드는 쉽게 읽여햐 한다.__
    - 쉽게 읽히기 위해서 코드는 서술적으로 짜여져 있어야 한다. 예를 들어, 특정 함수에 이름을 정할 때 그 함수의 이름만 봐도 어떤 작업을 하는 지 알 수 있어야 한다는 것 이다. 이처럼 변수, 함수, 모듈, 패키지, 디렉토리 등등 다양한 수준에서의 좋은 이름은 코드를 쉽게 읽도록 도움을 줄 수 있다.
       
  __2. 코드는 짧아야 한다.__
    - 코드는 짧을 수록 이해하기 쉽다. 짧은 코드의 기준은 라인(line)수가 적은 것 이다. 라인수가 길어지면 하는 일도 많아지도 쉽게 복잡해지기 마련이다. 물론 전체적인 볼륨(Volume)으로 서의 라인수가 아닌, 프로그램을 구성하는 요소들의 라인수를 말하는 것 이다.
        
      - 함수의 라인수를 줄이면 함수 호출 횟수가 증가하여 성능에 악영향을 준다?
        
        - 그럴 수 있다. 그러나, 함수의 라인수가 늘어난다는 것은 결국 많은 일을 하고 있다는 뜻 이며, 함수가 넘겨받는 인자나 내부의 지역변수의 수가 늘어난다는 뜻 이다. 즉, 변수들이 레지스터를 이용하는 것 보다 스택에 할당될 확률이 놓아서 메모리 접근 시간이 추가적으로 더 필요하며, 전역 변수를 쓴다면 함수의 최적화(메모리 접근도 증가함)도 문제가 될 수 있다. 또한, 함수 자체가 길이가 길기 때문에 코드의 중복이 발생할 가능성이 높고, 재활용이 안 되기에 컴파일 된 실행 파일의 크기를 증가시킬 가능성도 있다.
         
        - 따라서, 함수의 크기를 작게 만드는 것이 크게 만드는 것 보다 유리한 점이 더 많다. 컴파일러도 결국 사람이 만들기에 복잡한 함수를 최적화 하는데는 한계를 가지며, 함수의 호출 오버헤드도 최적화의 중요한 고려 요소이기에 많은 신경을 써서 만들어 졌다. 함수를 크게 만들어서 최적화를 한다고 이야기하는 것은 올바르지 않다. 물론, 루프와 같은 반복문에서 잦은 함수 호출은 문제를 유발 할 수 있다. 그런 경우엔 함수내로 루프를 이동시키면 된다.
      
  __3. 코드는 복제된 것이 없어야 한다.__
    - 복제된 코드는 모든 오류의 원천과도 같다. 코드 자체의 복제도 있지만, 논리(Program Logic)의 복제도 포함해서 '복제'라고 생각할 수 있다. 복제를 없애는 것은 간단하지만, 생각외로 잘 고치지 않는 것이 일반적이다. 예를 들어, 새로운 모델을 만들기 위해 기존 모델의 코드와 비슷한 코드를 찾아 약간의 수정을 거친 후 사용 하는 것이 대표적이다. 이런 코드는 향후 수정이 어려우며 버그를 유발하는 경향으로 발전할 가능성이 높다. 그러므로 `DRY(Do not Repeat Yourself)` 원칙을 꾸준히 유지해야 할 것이다.
        
      - 복제된 코드를 검증하기 위해서 `CPD(Copy Paste Detecor)`라는 툴을 사용 할 수 있다. 그러나 해당 툴은 권장하지 않는다. 이유는 간단하다. 복제된 코드는 없어야 하기 때문이다.
       
  __4. 하나의 기능만 충실히 구현해야 한다.__
    - 기능을 많이 구현하려는 욕심은 언제나 복잡한 코드로 이어진다. 다양한 기능으로 이루어진 코드는 한 가지 기능에 문제가 생기면 나머지 기능들도 제대로 동작하지 않을 가능성이 높다. 또한, 기능간에 연결고리를 만들어 의존성을 높이게 된다. 
        
    - 위 같은 경우 차라리 인터페이스를 분리하고, 공용화 할 수 있는 부분을 뽑아내서 라이브러리 형태로 구축하는 것이 더 좋다.
      
      - 그 예로 상태의 변경을 일으키는 것(Behaviour, 행동)과 상태를 묻는 것(Query)을 나누는 방법이 있다. 쉽게 말해 특정 상태를 얻어 오는 것과 상태 변경을 발생하는 것을 각각 나누어서 함수로 구현하는 것 이다. 물론, 상태 변경은 한 번에 한 가지만 하는 것이 좋다. 그래야 짧은 코드에 도움이 되며, 파마리터(매개변수)의 갯수나 테스트 케이스도 간단하게 만들어 주기 때문이다. 또한, 성능 향상도 기대 할 수 있다.
          
  __5. 테스트에 대한 자동화가 되어있어야 한다.__
    - 테스트는 자동화를 높여야 할 부분이다. 사람이 반복적으로 비슷한 일을 해야 할 경우라면 자동화가 가장 빠른 해결책이다. 물론 모든 테스트를 자동화 할 수는 없지만 단위 테스트나 통합 테스트, 시스템 테스트의 일부는 자동화가 가능하다. 자동화의 이점은 과제의 후반으로 갈수록 더 높아지지만, 문제는 테스트 케이스 작성을 쉽게 하기 위해선 위에서 언급한 네 가지 핵심 또한 잘 지켜져야 한다는 것 이다.
          
    - 가독성이 떨어지며 하는 일이 많은 함수는 테스트 하기도 힘들다. 이는 테스트 케이스를 많이 만들어야 한다는 뜻이 되며, 테스트 되지 않는 코드가 많아질 가능성 또한 농후하다. 이는 코드간의 의존성이 높아서 테스트 자체보다는 부가적으로 구축해야 할 것들도 늘어나게 된다. 결국 생산성은 낮아지며 테스트 신뢰도 또한 같이 낮아지게 된다.
        
    - 따라서, 앞에서 열거한 것들을 충실히 지키는 척도로서도 테스트 커버리지(Test Coverage)와 같은 부분을 점검 할 수 있을 것 이다.
      
      - 테스트 커버리지(Test Coverage)? 테스트 대상의 전체 범위에서 테스트를 수행한 범위를 뜻 한다. 즉, 테스트 대상을 얼마만큼 테스트했나를 정의하는 것 으로, 테스트의 정확성을 판단하는 하나의 척도가 될 수 있다.

<br />

> ### 웹 사이트 구조를 이루는 태그들

웹 사이트를 만들 때, 아래 좌측 이미지 처럼 `<div>` 태그를 남발하는 경우가 있다. 이러한 방법 보단 우측 이미지와 같이 정해진 용도에 맞추어 의미 있는 태그를 사용 하는 것이 적절하다.

<br />

![33](https://user-images.githubusercontent.com/75716255/132693160-c0264553-8a42-4172-ad28-2ce8a8827efe.png)

<br />

- `<header>`
  - 소개 및 탐색에 도움을 주는 콘텐츠를 나타낸다. 제목, 로고, 검색 폼, 작성자 이름 등의 요소도 포함.
  - 웹 사이트의 브랜드를 나타대는 로고나, 사용자들을 위한 중요한 아이템이 들어있는 경우 사용
 
- `<nav>`
  - 문서의 부분 중 현재 페이지 내, 또는 다른 페이지로의 링크를 보여주는 구획을 나타낸다. 자주 쓰이는 예제는 메뉴, 목차, 색인이다.
  - `<header>` 내부에 여러가지 메뉴들이 모여있다면 `<nav>` 사용

- `<main>`
  - 문서 `<body>`의 주요 콘텐츠를 나타낸다. 주요 콘텐츠 영역은 문서의 핵심 주제나 앱의 핵심 기능에 직접적으로 연결됐거나 확장하는 콘텐츠로 이루어진다.
  - 현재 컨텐츠에서 중요한 내용을 가지고 있다면 `<main>` 사용

- `<article>`
  - 문서, 페이지, 애플리케이션, 또는 사이트 안에서 독립적으로 구분해 배포하거나 재사용할 수 있는 구획을 나타낸다.
  - 게시글 하나 자체를 보여줄 떄 사용. ex) 블로그 게시글
  - 독립적

- `<section>`
  - HTML 문서의 독립적인 구획을 나타내며, 더 적합한 의미를 가진 요소가 없을 때 사용한다.
  - `<main>` 이나 `<article>` 내부에서 연관있는 글들을 묶어줄 때 사용
  
- `<aside>`
  - 문서의 주요 내용과 간접적으로만 연관된 부분을 나타낸다. 주로 사이드바 혹은 콜아웃 박스로 표현한다.
  - 페이지 컨텐츠와 직접적으로 상관이 없으며, 부가적인 내용을 담고 있다면 `<aside>` 사용
 
- `<footer>`
  - 가장 가까운 구획 콘텐츠나 구획 루트의 푸터를 나타낸다. `<footer>`는 일반적으로 구획의 작성자, 저작권 정보, 관련 문서 등의 내용을 담는다.

<br />

> ### 태그 참고 사이트
- https://developer.mozilla.org/ko/docs/Web/HTML/Element

<br />

# ✨ CSS ✨

## 폰트

> ### 기본 폰트

```
- serif
  - 'Times New Roman'
  - 궁서체
  
- sans-serif
  - Arial
  - 굴림체
  
- monospace
  - courier
  - 'Courier New'
  
- cursive
  - 'Comic Sans MS'
  - 'Monotype Corsiva'
  
- fantasy
  - Impact
  - Haettenschweiler  
```

<br />

> ### 폰트 파일 사용법

```css
/* css */

@font-face {
  src : url("폰트 파일 경로");
  font-family: "폰트 별명";
}

p {
  font-family: "폰트 별명";
}
```

- #### @font-face, 이것 만은 알아두자!
  - `@font-face`를 사용함으로써 사이트에 추가적인 요청(HTTP)이 들어갈 수도 있음
  - 결과적으로 `'웹 사이트 속도가 느려짐'`
  
  - 따라서 font-weight 또는 font-style 기능을 최대한 적게 사용하고, character set을 가볍게 해서 파일 크기를 줄여야 함
  
    - *[character set](http://hell0-world.com/etc/2020/05/09/ChracterSet.html) : 정보를 표현하기 위한 글자들의 집합을 정의한 것 *

<br />

> ### 특정 스타일 시트에서 또 다른 스타일 시트를 활용한 폰트 사용법

<br />

```css
/* css */

1. @import ".css 파일명"; *문자 형식*
2. @import url(".css 파일명"); *url 형식*
```

<br />
    
 예를 들어, 아래와 같은 `@import 방식` 의 경우 test1.css를 불러온 뒤에 test2.css, test3.css를 차례로 불러온다.
 
  ```css
  /* css */
  
  @import "test1.css";  /* 1번째 */
  @import "test2.css";  /* 2번째 */
  @import "test3.css";  /* 3번째 */
  ```
  
<br />

즉, css를 하나하나 순차적(직렬 로딩)으로 불러오기 때문에 css의 양이 얼마 되지 않는다면 크게 상관이 없겠지만, __css의 양이 방대해진다면__ 페이지 로딩속도가 현저히 '느려질 것'이다.

<br />

반면 아래의 `link 방식` 의 경우, test1.css와 test2.css, test3.css가 동시에 로딩(병렬 로딩)하여 불러오기 때문에 페이지 로딩 속도가 @import 방식에 비해 빠르고 효율적이다.

  ```html
  /* html */ 

  <link rel="stylesheet" href="test1.css">
  <link rel="stylesheet" href="test2.css">
  <link rel="stylesheet" href="test3.css">
  ```

<br />

__결론 : 로딩 문제나 edge 브라우저 버그 문제 등을 고려한다면 link 방식을 사용하자.__

- #### @import & link, 이것 만은 알아두자!
  - Q : `@import 방식`과 `link 방식` 중 어떤 방법이 더 효율적일까? 
  - A : `link 방식(외부 스타일)` 방식이 더 `'효율적'` 이다.
  
  - Why?
    - `@import 방식`의 경우 @import 된 css들을 '직렬' 로딩 방식으로 불러오고,
    - `link 방식`의 경우 '병렬' 로딩 방식으로 css를 불러오기 때문.
 
 <br />

> ### 폰트 참고 사이트
- <https://fonts.google.com/> *영문체*
- https://fonts.google.com/earlyaccess *한글체, Ctrl+F > korean*

<br />

## display property
CSS에서 `display` 속성은 웹 페이지 상에서 엘리먼트들이 어떻게 보여지고 다른 엘리먼트와 어떻게 상호 배치되는지를 결정한다.

<br />

> ### inline
`display` 속성이 `inline`으로 지정된 엘리먼트는 전후 줄바꿈 없이 한 줄에 다른 엘리먼트들과 나란히 배치된다. 대표적인 `inline` 엘리먼트로 `<span>`이나 `<a>`, `<b>`, `<i>`, `<img>`, `<em>` 태그 등이 있다. 

<br />

예를 들어, 여러개의 `inline` 엘리먼트들을 아래와 같이 마크업하면 줄바꿈 없이 순서대로 한 줄에 보이게 된다.

```html
/* html */

before
<a>A</a>
<span>SPAN</span>
<em>EM</em>
after
```
```css
/* css */

span {
  background: yellow;
  width: 200px;
  height: 50px;
  margin: 20px;
  padding: 10px;
}
```

<br />

#### `출력 화면`
![inline](https://user-images.githubusercontent.com/75716255/131222899-03886dba-d14c-49c3-a316-62834b1b34f3.png)

- #### `inline`, 이것 만은 알아두자!
  - `inline` 엘리먼트는 `width`와 `height` 속성을 지정해도 무시된다.

  - Why?
    - 해당 태그가 마크업하고 있는 컨텐츠의 크기 만큼만 공간을 차지하도록 되어 있기 때문이다.
    - 또한, `margin`과 `padding` 속성은 __좌우 간격__ 만 반영이 되고, __상하 간격__ 은 반영 되지 않는다.

<br />

> ### block
`display` 속성이 `block`으로 지정된 엘리먼트는 전후 줄바꿈이 들어가 다른 엘리먼트들을 다른 줄로 밀어내고 혼자 한 줄을 차지한다. 대표적인 `block` 엘리먼트로, `<div>`이나 `<p>`, `<h1>`, `<nav>`, `<li>` 태그 등을 들 수 있다.

<br />

예를 들어, 여러 개의 `block` 엘리먼트들을 아래와 같이 마크업하면 매번 줄바꿈 되어 여러 줄에 보이게 된다.

```html
/* html */

before
<h1>H1</h1>
<div>DIV</div>
<p>P</p>
after
```
```css
/* css */

div {
  background: yellow;
  width: 200px;
  height: 50px;
  margin: 20px;
  padding: 10px;
}
```

<br />

#### `출력 화면`
![block](https://user-images.githubusercontent.com/75716255/131252531-91c5794b-cb61-4fdb-a310-cf2362949204.png)

- #### `block`, 이것 만은 알아두자!
  - `block` 엘리먼트는 `inline` 엘리먼트와 달리 `width`, `height`, `margin`, `padding` 속성이 모두 반영 된다.

<br />

> ### inline-block
`display` 속성이 `inline-block`으로 지정된 엘리먼트는 기본적으로 `inline` 엘리먼트처럼 전후 줄바꿈 없이 한 줄에 다른 엘리먼트들과 나란히 배치된다. 하지만 `inline` 엘리먼트에서 불가능하던 `width`와 `height` 속성 지정 및 `margin`과 `padding` 속성의 상하 간격 지정이 가능해진다.

<br />

대표적인 `inline-block` 엘리먼트로 `<button>`이나 `<input>`, `<select>` 태그 등을 들 수 있다.

```html
/* html */

before
<a>A</a>
<span>SPAN</span>
<em>EM</em>
after
```
```css
/* css */

span {
  display: inline-block;
  background: yellow;
  width: 200px;
  height: 50px;
  margin: 20px;
  padding: 10px;
}
```

<br />

#### `출력 화면`
![inline-block](https://user-images.githubusercontent.com/75716255/131252712-11105852-dd95-4cf1-902e-4ec2927b25c5.png)

- #### `inline-block`, 이것 만은 알아두자!
  - `inline-block` 엘리먼트는 위와 같이 명시적으로 헤당 엘리먼트의 스타일을 `display: inline-block`로 지정해줘야 한다.
  - `inline-block`을 이용하면 여러 개의 엘리먼트를 한 줄에 정확히 원하는 너비만큼 배치할 수 있기 때문에 레이아웃에 활용할 수 있다.

<br />

> ### etc
`<span>`로 마크업된 엘리먼트가 `inline` 속성값을 가지고, `<div>`로 마크업된 엘리먼트가 `block` 속성값을 가지는 이유는 소위 `user agent stylesheet`라고 불리는 브라우저의 내장 스타일이 적용(관리자 도구에서 확인 가능) 되어서 그렇다. 이렇게 HTML 태그 별로 기본적으로 적용되어 있는 `display` 속성값은 원하는 값으로 CSS를 이용하서 자유롭게 변경이 가능하다.

<br />

> ### display 참고 사이트
- <https://developer.mozilla.org/en-US/docs/Web/CSS/display>
  - 해당 링크 `Examples`로 가면 각 `display` 마다 적용 되는 예시를 직접 확인 할 수 있다.

<br />

> ### 가운데 정렬

<br />

> #### 가로 가운데 정렬
- `inline` 또는 `inline-block` 요소면 부모 태그에 `text-align: center;`를 사용하면 된다.

```html
/* html */

<div class="container">
  텍스트 <img src="https://i.imgur.com/CDPKjZJ.jpg" height="50">
</div>
```

```css
/* css */

.container {
  text-align: center;
  background-color: lime;
}
```

<br />

- `block` 요소면 `margin-left auto;`, `margin-right: auto;`를 사용하면 된다.

```html
/* html */

<div class="block-element"></div>
```

```css
/* css */

.block-element {
  width: 100px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  background-color: lime;
}
```

<br />

> #### 세로 가운데 정렬
CSS에서 모든 걸 한 번에 딱 가운데 정렬을 시키는 방법이 없기 때문에, 다양한 지식을 섞어서 해야 한다.

<br />

> #### 가짜 요소 더하기
`vertical-align: middle;`을 하면 해결이 되는가?' 에 대한 고찰*

<br />

우선 `vertical-align` 속성은 __인라인 또는 인라인 블록 요소에 적용__ 되기 때문에 `.info`를 인라인 블록으로 바꿔준다. 그리고 `vertical-align: middle;`을 설정해준다면?

```html
/* html */

<div class="container">
  
  <div class="info">
    <h1>Hello!</h1>
    <p>My name is hyejin.</p>
  </div>
  
</div>
```

```css
/* css */

.container {
  width: 300px;
  height: 400px;
  background-color: gray;
  text-align: center;
}

.info {
  background-color: lime;
  display: inline-block;
  vertical-align: middle;
}
```

<br />

#### `출력화면`
결과는 아래와 같다. `vertical-align: middle;`은 요소의 가운데(middle)를 부모 요소의 가운데와 맞추게 되어있다.

![1](https://user-images.githubusercontent.com/75716255/132643907-67084689-4f9a-4c23-bd81-0967f8589cf4.png)

<br />

좀 더 이해가 쉽도록 부모 요소인 `<div class="container">`에 소문자 'x' 를 입력하여 거운데가 맞는지 확인해 보겠다.

```html
/* html */

<div class="container">
  x
  
  <div class="info">
    <h1>Hello!</h1>
    <p>My name is hyejin.</p>
  </div>
  
</div>
```

```css
/* css */

.container {
  width: 300px;
  height: 400px;
  background-color: gray;
  text-align: center;
}

.info {
  background-color: lime;
  display: inline-block;
  vertical-align: middle;
}
```

<br />

#### `출력화면`
가운데가 맞다!

![2](https://user-images.githubusercontent.com/75716255/132644548-7f10c18b-1062-4ee3-9fc0-b9251cee40ff.png)

<br />

다음으로, `.info` 요소를 완전 가운데로 오게 하려면 소문자 'x'가 가운데로 와야 한다. __이유__ 는 위에서 말한 바와 같이 __자식 요소는 부모 요소의 중앙 지점을 기준으로 가운데 정렬이 되기 때문__ 이다. 

따라서 세로 길이가 100%인 자식 요소를 하나 더 만들고, 그 요소에도 vertical-align: middle; 값을 주게 될 경우, 부모 요소의 중앙 지점을 기준으로 자신의 세로 길이 중 절반인 50%의 높이에 정렬이 된다. (아래 코드와 출력 화면 참고)

```html
/* html */

  <div class="container">
  x
  
  <div class="helper"></div>
  
  <div class="info">
    <h1>Hello!</h1>
    <p>My name is hyejin.</p>
  </div>
  
</div>
```

```css
/* css */

.container {
  width: 300px;
  height: 400px;
  background-color: gray;
  text-align: center;
}

.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  
  /* 설명 및 가시성을 위해 임의적으로 추가 */
  width: 10px;
  background-color: red;
}

.info {
  background-color: lime;
  display: inline-block;
  vertical-align: middle;
}
```

<br />

#### `출력 화면`
아래 보이는 빨간 박스가 새로 생성한 세로 길이 100%인 자식 요소 이다.
![3](https://user-images.githubusercontent.com/75716255/132647430-449af534-cae5-43ef-b7ee-2a75ef0a9847.png)

<br />

이제 'x'를 지우고, `.helper` 요소의 가로 길이와 배경색을 없애주면 가로-세로 가운데 정렬이 완성된다.

```html
/* html */

<div class="container">
  
  <div class="helper"></div>
  
  <div class="info">
    <h1>Hello!</h1>
    <p>My name is hyejin.</p>
  </div>
  
</div>
```

```css
/* css */

.container {
  width: 300px;
  height: 400px;
  background-color: gray;
  text-align: center;
}

.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.info {
  background-color: lime;
  display: inline-block;
  vertical-align: middle;
}
```

<br />

#### `출력 화면`
![4](https://user-images.githubusercontent.com/75716255/132654490-e517be55-2611-4ca0-991d-4855117b468a.png)

<br />

> #### 번외
만약 자식요소(.info) 의 가로 길이가 100% 라면?

```html
/* html */

<div class="container">
  
  <div class="helper"></div>
  
  <div class="info">
    <h1>Hello!</h1>
    <p>My name is hyejin.</p>
  </div>
  
</div>
```

```css
/* css */

.container {
  width: 300px;
  height: 400px;
  background-color: gray;
  text-align: center;
}

.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.info {
  background-color: lime;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
}
```

<br />

#### `출력 화면`
갑자기 이상한 곳에 배치된다. 

![5](https://user-images.githubusercontent.com/75716255/132655018-83aa4774-4735-492c-a00b-c167b5ba2021.png)

<br />

그 이유는, `.helper` 와 `.info` 요소 사이에 띄어쓰기가 한 칸 있어서, 가로 길이 100%인 `.info` 요소는 자리 부족으로 다음 줄로 밀려나게 된 것 이다. 이 문제를 해결하기 위한 `두 가지 방법`이 있다.

<br />

> ##### 띄어쓰기 없애기

```html
/* html */

<div class="container">
  
  <!-- 스페이스 없애기 -->
  <div class="helper"></div><div class="info">
    <h1>Hello!</h1>
    <p>My name is hyejin.</p>
  </div>
  
</div>
```

```css
/* css */

.container {
  width: 300px;
  height: 400px;
  background-color: gray;
  text-align: center;
}

.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.info {
  background-color: lime;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
}
```

<br />

#### `출력 화면`
![6](https://user-images.githubusercontent.com/75716255/132656218-a4666e01-9f16-427e-845a-fbe0d41ab5a2.png)

<br />

- 다른 방법으로 띄어쓰기 없애는 방법
  - https://css-tricks.com/fighting-the-space-between-inline-block-elements/
 
<br />

> ##### 띄어쓰기 공간 만큼의 마이너스 여백 주기

```html
/* html */

<div class="container">

  <div class="helper"></div>

  <div class="info">
    <h1>Hello!</h1>
    <p>My name is hyejin.</p>
  </div>
  
</div>
```

```css
/* css */

.container {
  width: 300px;
  height: 400px;
  background-color: gray;
  text-align: center;
}

.helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.info {
  background-color: lime;
  display: inline-block;
  vertical-align: middle;
  width: 100%;

  /* 이 경우 띄어쓰기는 5~7px 정도였다 */
  margin-left: -6px;
}
```

<br />

#### `출력 화면`
![7](https://user-images.githubusercontent.com/75716255/132656762-de9a1051-7018-48d1-a195-9e8d55a5a42d.png)

- 주의 사항
  - 어떤 요소에 `height: 100%;`를 설정하기 위해서는 부모의 `height`가 설정되어 있어야 한다. 위 경우에는 `.helper`의 부모인 `.container`에 height가 설정되어 있었기 때문에 가능했던 것이다.

<br />

> #### line-height
`.info를` 인라인 블록으로 설정해주면, `line-height` 속성을 활용해볼 수도 있다.

부모인 `.container`에 `height`와 동일한 `line-height`를 줘보자.
참고로 `line-height` 속성은 자식들에게 상속되기 때문에 `.info`에는 `line-height: normal;`을 꼭 써주어야 한다.

```html
/* html */

<div class="container">
  x
  
  <div class="info">
    <h1>Hello!</h1>
    <p>My name is hyejin.</p>
  </div>
  
</div>
```

```css
/* css */

.container {
  width: 300px;
  height: 400px;
  background-color: gray;
  text-align: center;
  line-height: 400px;
}

.info {
  background-color: lime;
  display: inline-block;
  line-height: normal;
  vertical-align: middle;
}
```

<br />

#### `출력 화면`
![8](https://user-images.githubusercontent.com/75716255/132658132-a0cf79f5-47fa-4fc8-bf06-14a095b7c743.png)

<br />

> ### 그 외 다른 방식
포지셔닝을 이용할 수도 있고, [flexbox](https://www.w3schools.com/css/css3_flexbox.asp)를 이용할 수도 있다.

<br />

## positioning
`positioning` 이란 이름처럼 태그들의 위치를 결정하는 CSS이다.

> ### static
모든 태그들은 처음에 `position: static` 상태이다. 즉, 기본적으로 static이라 따로 써주지 않아도 된다. 또한 정적 위치 요소는 top, bottom, left, right 속성의 영향을 받지 않는다.

```html
/* html */

<span>span1</span>
<span>span2</span>
<span>span3</span>
<div>div1</div>
```

```css
/* css */

span, div {
  background: yellow;
  border: 1px solid red;
}
```

<br />

#### `출력화면`
차례대로 왼쪽에서 오른쪽, 위에서 아래로 쌓인다.

![1](https://user-images.githubusercontent.com/75716255/132990945-b443dc5a-c3b0-4ee2-95d3-1c98c185a546.png)

<br />

> ### relative
__태그의 위치를 살짝 변경__ 하고 싶을 때 `position: relative`를 사용한다. `relative`를 사용하면 top, right, bottom, lef 속성을 사용해 위치 조절이 가능하다.

```html
/* html */

<span class="top">top</span>
<span class="right">right</span>
<span class="bottom">bottom</span>
<div class="left">left</div>
```

```css
/* css */

span, div {
  background: yellow;
  border: 1px solid red;
}

.top {
  position: relative;
  top: 5px;
  z-index: 1;
}

.right {
  position: relative;
  right: 5px;
}

.bottom {
  position: relative;
  bottom: 5px;
}

.left {
  position: relative;
  left: 5px;
}
```

<br />

#### `출력화면`
각각의 태그가 기존 static이었을 때의 위치를 기준으로 top, right, bottom, left 방향으로 주어진 픽셀만큼 이동했다.

![2](https://user-images.githubusercontent.com/75716255/132991050-924a14c5-7451-43bc-b173-4109a6f9a723.png)

#### `주목할 부분`

__Q. #top 태그에 top: 5px를 줬는데 왜 아래로 이동했을까?__
> `relative`는 각각의 방향을 기준으로 태그 안쪽 방향으로 이동한다. 바깥쪽으로 이동하게 하고 싶으면 5px 대신 음수 -5px를 주면 된다.

<br />

__Q. 왜 #top이 #left보다 위에 있을까?__
> 보통 태그는 같은 `position`이면 나중에 나온 태그가 더 위에 배치된다. 하지만 `z-index`라는 속성을 #top 태그에 더 높게 주었기 때문에 #left태그보다 위로 올라간 것 이다.

__etc.__ `z-index`는 태그들이 겹칠 때 누가 더 위로 올라가는지를 결정하는 속성으로, 기본값은 0 이다. #top에 1을 주었기 때문에 다른 태그들보다 높게 위치한 것 이다.

<br />

> ### absolute
relative가 static인 상태를 기준으로 주어진 픽셀만큼 움직였다면, `absolute`는 __position: static 속성을 가지고 있지 않은 부모를 기준__ 으로 움직인다. 만약 부모 중에 포지션이 `relative`, `absolute`, `fixed`인 태그가 없다면 가장 위의 태그(body)가 기준이 된다.

```html
/* html */

<div>
  <div id="absolute">absolute</div>
</div>
<div id="parent">
  <div id="child">children</div>
</div>
```

```css
/* css */

#absolute {
  background: yellow;
  position: absolute;
  right: 0;
}

#parent {
  position: relative;
  width: 100px;
  height: 100px;
  background: skyblue;
}

#child {
  position: absolute;
  right: 0;
}
```

<br />

#### 출력화면
#absolute는 조상 태그 중 `postion: relative`인 것이 없기 때문에 body를 기준으로 가장 오른쪽으로 달라붙었다. 반면 #child는 조상 태그인 #parent가 `position: relative`이기 때문에 그것을 기준으로 가장 오른쪽으로 달라붙었다. 차이를 알겠는가? 참고로 `absolute`가 되면 div여도 더는 width: 100%가 아니다.

![3](https://user-images.githubusercontent.com/75716255/132991418-bab28e91-e9ab-4dcd-a6bc-59f10f1d148c.png)

<br />

> ### fixed
보통의 홈페이지를 보면 상단 로그인 메뉴와 좌측 내비게이션 메뉴는 항상 __특정 위치에 고정__ 되어 있다. 스크롤을 내려도 그 자리에 계속 있는 것 인데, 이는 바로 포지션이 `fixed`로 설정되어 있기 때문이다. `fixed`의 경우 top, right, bottom, left 속성은 요소의 위치를 지정하는 데 사용된다.

```html
/* html */

<div>
  <div id="fixed">fixed</div>
</div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
```

```css
/* css */

#fixed {
  background: yellow;
  position: fixed;
  right: 0;
}
```

<br />

#### `출력화면`
스크롤을 내려도 박스는 그 자리에 고정되어 있다. `fixed`도 `absolute`처럼 더는 div가 width: 100%가 아니다.

![4](https://user-images.githubusercontent.com/75716255/132991562-a4c88a26-ec34-4ed9-977e-94d79d425968.png)

<br />

## `float`

> ### float
`float` 라는 단어는 원래 ‘뜨다’ 라는 의미이며, 원래 웹페이지에서 이미지를 어떻게 띄워서 텍스트와 함께 배치할 것인가에 대한 속성이다. 즉, HTML 요소가 주변의 다른 요소들과 자연스럽게 어울리도록 만들어 준다. 현재는 웹 페이지의 레이아웃(layout)을 작성할 때 자주 사용한다.

```html
/* html */

<h1>float 속성을 이용한 위치 설정</h1>
<p><img src="/examples/images/img_flower.png" alt="flower" width="245" height="185">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare sapien suscipit tincidunt ullamcorper. Cras ac sem sed mauris maximus rhoncus vel in metus. Nam pharetra arcu sit amet dolor interdum, eget scelerisque libero finibus. Phasellus quis vulputate ante. Fusce sit amet viverra justo. Donec id elementum mauris. Nam id porttitor nisl, et suscipit nunc. Vestibulum sit amet volutpat quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis placerat sem eu facilisis ultricies. </p>
```

```css
/* css */

img {
  float: left;
  margin-right: 20px;
}
```

<br />

#### `출력화면`
![1](https://user-images.githubusercontent.com/75716255/133276016-70cb8dd8-61bc-4ac0-8b89-dc9b4b01b9f6.png)

<br />

> ### clear
`clear` 속성은 `float` 속성이 적용된 이후 나타나는 요소들의 동작을 조절해 준다. 

<br />

아래 예제를 보자. 컨테이너 요소에 `float` 속성이 적용되면 그 이후에 등장하는 모든 요소들은 정확한 위치를 설정하기가 매우 힘들어진다.

```html
/* html */

<h1>clear 속성을 이용한 위치 조정</h1>
<div>
  <div class="left">왼쪽 끝에 위치하고 싶은 요소</div>
  <div class="right">오른쪽 끝에 위치하고 싶은 요소</div>
</div>
<p>이 글자를 아래쪽에 제대로 출력하고 싶어요!</p>
```

```css
/* css */

.left {
   background-color: #FF8C00;
   width: 150px;
   height: 50px; 
   float: left;
}
.right {
   background-color: #9932CC;
   width: 150px;
   height: 50px; 
   float: right;
}
```

<br />

#### `출력화면`
![image](https://user-images.githubusercontent.com/75716255/133433366-fa0443f0-45f1-44a8-b91c-c64690f0ce73.png)

<br />

따라서 `float` 속성을 적용하고자 하는 요소가 모두 등장한 이후에는 `clear` 속성을 사용하여, 이후에 동작하는 요소들이 더는 `float` 속성에 영향을 받지 않도록 설정해주어야 한다.

```html
/* html */

<h1>clear 속성을 이용한 위치 조정</h1>
<div>
  <div class="left">왼쪽 끝에 위치하고 싶은 요소</div>
  <div class="right">오른쪽 끝에 위치하고 싶은 요소</div>
</div>
<p>이 글자를 아래쪽에 제대로 출력하고 싶어요!</p>
```

```css
/* css */
.left {
   background-color: #FF8C00;
   width: 150px;
   height: 50px; 
   float: left;
}

.right {
   background-color: #9932CC;
   width: 150px;
   height: 50px; 
   float: right;
}
```

<br />

#### `출력화면`
![image](https://user-images.githubusercontent.com/75716255/133433902-25de0260-e814-47b3-a77d-9d762d4e9892.png)

<br />

> ### overflow
`float` 속성이 적용된 HTML 요소가 자신을 감싸고 있는 컨테이너 요소보다 크면, 해당 요소의 일부가 밖으로 흘러넘치게 된다. 이때 `overflow` 속성값을 `auto`로 설정하면, 컨테이너 요소의 크기가 자동으로 내부의 요소를 감쌀 수 있을 만큼 커지게 된다. `scroll` 을 사용하는 방법도 있다.

```html
/* html */

<h1>overflow 속성을 이용한 크기 조정</h1>
<div>이미지와 함께 하고 싶은 내용
  <img src="/examples/images/img_flower.png" alt="flower" width="245" height="185">
</div>
<p id="second"><br>overflow 속성값을 auto로 주면 자동으로 컨테이너 요소의 크기도 함께 늘어납니다!</p>
<div class="good">이미지와 함께 하고 싶은 내용
  <img src="/examples/images/img_flower.png" alt="flower" width="245" height="185">
</div>
```

```css
/* css */

div {
  border: 3px solid #73AD21;
  padding: 5px;
}

img { 
  float: left; 
}

#second {
  clear: left;
}

.good {
  overflow: auto;
}
```

<br />

#### `출력화면`
![image](https://user-images.githubusercontent.com/75716255/133434806-cd1a7940-dbd7-4b06-8b8c-9418504b556d.png)

<br />

> ### overflow-x
내용(content)의 크기가 해당 요소의 수평 방향 박스(box)를 넘어갈 때 어떻게 처리할지를 설정함.

<br />

> ### overflow-y
내용(content)의 크기가 해당 요소의 수직 방향 박스(box)를 넘어갈 때 어떻게 처리할지를 설정함.

<br />

> ### float 한 눈에 보기

```html
/* html */

<h1>float 속성을 이용한 레이아웃</h1>
<div class="page">
		
<header>
  <h2>header 영역</h2>
</header>
	
<nav>
  <h2>nav 영역</h2>
  <p>여기에는 보통 메뉴가 들어갑니다.</p>
</nav>
	
<section>
  <h2>section 영역</h2>
  <p>여기에는 페이지에 해당하는 내용이 들어갑니다.<br>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare sapien suscipit tincidunt ullamcorper. Cras ac sem sed mauris maximus rhoncus vel in metus. Nam pharetra arcu sit amet dolor interdum, eget scelerisque libero finibus. Phasellus quis vulputate ante. Fusce sit amet viverra justo. Donec id elementum mauris. Nam id porttitor nisl, et suscipit nunc. Vestibulum sit amet volutpat quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis placerat sem eu facilisis ultricies.
  </p>
</section>
	
<footer>
  <h2>footer 영역</h2>
</footer>
	
</div>
```

```css
/* css */

div.page {
  border: 3px solid #CD5C5C;
  overflow: auto;
}

h2 { 
  text-align: center;
}

header{ 
  border: 3px solid #FFD700;
}

nav {
  border: 3px solid #FF1493;
  width: 150px;
  float: left;
}

section {
  border: 3px solid #00BFFF;
  margin-left: 156px;
}

footer{ 
  border: 3px solid #00FA9A;
}
```

<br />

#### `출력화면`
![image](https://user-images.githubusercontent.com/75716255/133435694-097582d2-e504-4324-81b0-984af6435ed9.png)

<br />

## background

> ### background-repeat
background-repeat는 이미지를 반복시킬 것인지 아닐 것인지, 그리고 반복시킨다면 어떤 방식으로 반복시킬 것인지 정해주는 속성이다.

```css
/* css */

/* 반복하지 않음 */
background-repeat: no-repeat;

/* 가로 방향으로만 반복 */
background-repeat: repeat-x;

/* 세로 방향으로만 반복 */
background-repeat: repeat-y;

/* 가로와 세로 모두 반복 */
background-repeat: repeat;

/* 반복할 수 있는 만큼 반복한 뒤, 남는 공간은 이미지 간의 여백으로 배분 */
background-repeat: space;

/* 반복할 수 있는 만큼 반복한 뒤, 남는 공간은 이미지 확대를 통해 배분 */
background-repeat: round;
```

<br />

> ### background-size
background-size는 배경 이미지의 사이즈를 정해주는 속성이다.

```css
/* css */

/* 원래 이미지 사이즈대로 출력 */
background-size: auto;

/* 화면을 꽉 채우면서, 사진 비율을 유지 */
background-size: cover;

/* 가로, 세로 중 먼저 채워지는 쪽에 맞추어서 출력 */
background-size: contain;

/* 픽셀값 지정 (가로: 30px, 세로: 50px로 설정) */
background-size: 30px 50px;

/* 퍼센트값 지정 (가로: 부모 요소 width의 60%, 세로: 부모 요소 height의 70%로 설정) */
background-size: 60% 70%;
```

<br />

> ### background-position
background-position은 배경 이미지의 위치를 정해주는 속성이다.

```css
/* css */

/* 단어로 지정해주기 (가로: left, center, right, 세로: top, center, bottom) */
/* 아래와 같은 총 9개의 조합이 가능 */
background-position: left top;
background-position: left center;
background-position: left bottom;
background-position: right top;
background-position: right center;
background-position: right bottom;
background-position: center top;
background-position: center center;
background-position: center bottom;

/* 퍼센트로 지정해주기 (가로: 전체 width의 25% 지점, 세로: 전체 height의 75% 지점 ) */
background-position: 25% 75%;

/* 픽셀로 지정하기 (가로: 가장 왼쪽 가장자리에서부터 오른쪽으로 100px 이동한 지점, 세로: 가장 상단 가장자리에서 아래로 200px 이동한 지점) */
background-position: 100px 200px;
```

<br />

## Selector(선택자)
CSS에서 스타일링 해줄 요소는 '선택자'로 결정한다.

<br />

> ### 자식

```html
/* html */

<i>Outside</i>
<div class="div1">
  <i>Inside 1</i>
  <p>Blah blah <i>Inside 2</i></p>
  <i>Inside 3</i>
</div>
```
```css
/* css */

/* 'div1' 클래스를 갖고 있는 요소의 자식 중 모든 <i> 태그 */
.div1 i {
  color: orange;
}
```

<br />

> ### 직속 자식

```html
/* html */

<i>Outside</i>
<div class="div1">
  <i>Inside 1</i>
  <p>Blah blah <i>Inside 2</i></p>
  <i>Inside 3</i>
</div>
```
```css
/* css */

/* 'div1' 클래스를 갖고 있는 요소의 직속 자식 중 모든 <i> 태그 */
.div1 > i {
  color: orange;
}
```

<br />

> ### 복수 선택

```html
/* html */

<p class="one">Outside 1</p>
<p class="two">Outside 2</p>
<div>
  <p class="one">Inside 1</p>
  <p class="two">Inside 2</p>
  <p class="three">Inside 3</p>
  <p class="four">Inside 4</p>
  <p class="five">Inside 5</p>
</div>
```
```css
/* css */

/* 'two' 클래스를 가지고 있는 태그 모두와 'four' 클래스를 가지고 있는 태그 모두 선택 */
.two, .four {
  color: orange;
}
```

<br />

> ### 여러 조건

```html
/* html */

<p class="outside one">Outside 1</p>
<p class="outside two">Outside 2</p>
<div>
  <p class="inside one">Inside 1</p>
  <p class="inside two">Inside 2</p>
  <p class="inside three">Inside 3</p>
  <p class="inside four">Inside 4</p>
  <p class="inside five">Inside 5</p>
</div>
```
```css
/* css */

/* 'outside' 클래스를 갖고 있으면서 'one' 클래스도 갖고 있는 태그 */
.outside.one {
  color: blue;
}

/* 'inside' 클래스를 갖고 있으면서 'two' 클래스도 갖고 있는 태그 */
.inside.two {
  color: orange;
}
```

<br />

> ### 가상 클래스
콜론(:)을 사용하면 몇 가지 '가상 클래스'를 선택할 수 있다.

<br />

> #### n번째 자식

```html
/* html */

<div class="div1">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
  <p>Paragraph 4</p>
  <p>Paragraph 5</p>
  <p>Paragraph 6</p>
</div>
```
```css
/* css */

/* .div1의 자식인 <p> 태그 중 3번째 */
.div1 p:nth-child(3) {
  color: blue;
}

/* .div1의 자식인 <p> 태그 중 첫 번째 */
.div1 p:first-child {
  color: red;
}

/* .div1의 자식인 <p> 태그 중 마지막 */
.div1 p:last-child {
  color: green;
}

/* .div1의 자식 중 마지막 자식이 아닌 <p> 태그 */
.div1 p:not(:last-child) {
  font-size: 150%;
}

/* .div1의 자식 중 첫 번째 자식이 아닌 <p> 태그 */
.div1 p:not(:first-child) {
  text-decoration: line-through;
}
```

<br />

> #### 마우스 오버

```html
/* html */

<h1>Hello World!</h1>
```
```css
/* css */

h1 {
  color: orange;
}

/* 마우스가 <h1> 태그에 올라갔을 때 */
h1:hover {
  color: green;
}
```

<br />

## 단위
CSS에는 px, rem, em, % 등 여러 단위가 있다. 폰트 크기 뿐만 아니라 padding, margin, width 등 다양한 속성들에 이 단위들을 사용할 수 있다.

<br />

> ### px
`px`는 __절대적인 값__이다. 다른 요소의 값에 영향을 받지 않는다.

```html
/* html */

<div class="container">
  Codeit
</div>
```
```css
/* css */

html {
  font-size: 20px;
}

.container {
  padding-top: 40px;
  background-color: lime;
}
```

<br />

> ### rem
`rem`은 __상대적인 값__ 이다. 하지만 오직 `<html>` 태그의 `font-size` 에만 영향을 받는다. 참고로, `2rem`은 `<html>` 태그의 `font-size`의 2배 크기이다.

```html
/* html */

<div class="container">
  Codeit
</div>
```

```css
/* css */

html {
  font-size: 20px;
}

.container {
  padding-top: 2rem; /* html의 font-size * 2 = 40px */
  background-color: lime;
}
```

<br />

> ### em
`em`은 __상대적인 값__ 이다. `em`은 자기 자신의 `font-size`를 기준으로 한다. `2em`은 자기 자신의 `font-size`의 2배 크기이다. 자기 자신의 `font-size`를 따로 정해주지 않으 경우, 상위 요소에서 상속받은 값을 기준으로 한다.

```html
/* html */
<div class="container">
  Codeit
</div>
```

```css
/* css */

html {
  font-size: 20px;
}

.container {
  /* 자동으로 html의 font-size 20px을 상속받음 */
  padding-top: 2em; /* 자신의 font-size * 2 = 40px */
  background-color: lime;
}
```

<br />

만약 자기 자신에게 정해진 `font-size`가 있다면 그 값을 기준으로 `em`이 결정된다.

```html
/* html */

<div class="container">
  Codeit
</div>
```

```css
/* css */

html {
  font-size: 20px;
}

.container {
  font-size: 40px;
  padding-top: 2em; /* 자신의 font-size * 2 = 80px */
  background-color: lime;
}
```

<br />

> ### 퍼센트
`%`는 __상대적인 값__ 이다. `%` 는 어느 항목에서 쓰이냐에 따라 다른 기준이 적용된다. 예를 들어, `font-size`에서 `%` 가 쓰일 경우, `font-size`에 곱해주는 방식으로 계산한다.

```html
/* html */

<div class="container">
  Codeit
  <p class="text">Codeit</p>
</div>
```

```css
/* css */

.container {
  font-size: 20px;
  background-color: lime;
}

.text {
  font-size: 180%; /* 상위 요소인 container의 font-size * 1.8 = 36px */
  background-color: skyblue;
  margin: 0;
}
```

<br />

`%`가 `margin`이나 `padding`의 단위로 사용될 경우, 상위 요소의 `width`를 기준으로 계산된다.

```html
/* html */

<div class="container">
  <p class="text">Codeit</p>
</div>
```

```css
/* css */

.container {
  width: 200px;
  background-color: lime;
}

.text {
  padding-left: 30%; /* 상위 요소의 width * 0.3 = 60px */
}
```

<br />

재미있는 점은 `margin-top` 이나 `padding-bottom` 등 세로(상하) 속성을 조절할 때에도 상위 요소의 `heigth`가 아닌 `width`를 기준으로 계산된다는 것 이다.

```html
/* html */

<div class="container">
  <p class="text">Codeit</p>
</div>
```

```css
/* css */

.container {
  width: 200px;
  background-color: lime;
}

.text {
  padding-top: 30%; /* 상위 요소의 width * 0.3 = 60px */
}
```

<br />

## 반응형

> ### @media
미디어 쿼리는 화면(screen), 티비(tv), 프린터(print)와 같은 미디어 타입(media type)과 적어도 하나 이상의 표현식(expression)으로 구성된다. 표현식은 width, height, color와 같은 미디어 특성(media feature)들을 이용하여 그 특성들의 상태에 따라 다른 스타일 시트를 적용할 수 있다. 미디어 쿼리는 CSS3에 포함되어 있으며, 컨텐츠의 변경없이 주로 화면의 크기에 따라 스타일 시트를 달리하여 적절한 모양을 보여줄 수 있다.
