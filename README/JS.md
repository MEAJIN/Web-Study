## README 바로가기

- [HTML](https://github.com/MEAJIN/Web-Study/blob/main/README/HTML.md)
- [CSS](https://github.com/MEAJIN/Web-Study/blob/main/README/CSS.md)
- [삽질](https://github.com/MEAJIN/Web-Study/blob/main/README/%EC%82%BD%EC%A7%88.md)

## JavaScript / jQuery

- 기본
  - [추상화](#추상화)
  - [작명](#작명)

- LV.1

  - 자바스크립트의 목적과 셀렉터(Selector)
    - [목적](#목적)
      - 조작과 변경
      - 응용
    - [Selector](#Selector)
      - [종류](#종류)

  - onclick
    - [버튼 기능](#버튼-기능)
    - [Alert 박스 만들기](#Alert-박스-만들기)
      - 응용

  - function
    - [사용법](#사용법)
    - [에러 체크](#에러-체크)
    - [파라미터와 인자](#파라미터와-인자)
      - 사용 이유
      - 응용
    - [Dom addEventListener](#JS-addEventListener)
      - 응용
      - 참고
      - [oninput 이벤트](#oninput-이벤트)
      - [onchange 이벤트](#onchange-이벤트)
      - 참고
    - [scroll addEventListener 주의 사항](#scroll-addEventListener-주의-사항)
    - [이벤트 함수](#이벤트-함수)

  - jQuery 기초
    - [쓰는 이유](#쓰는-이유)
    - [설치 방법](#설치-방법)    
    - [기본 문법](#기본-문법)
    - [셀렉터](#셀렉터)
    - [힘수/메소드](#함수/메소드)
    - [jQuery addEventListener](#jQuery-addEventListener)
      - [input 이벤트](#input-이벤트)
      - [change 이벤트](#change-이벤트)
    - [toggle 함수](#toggle-함수)
    
  - 조건문
    - 응용
      - [if](#if)
      - [else-if](#else-if)

- LV.2

  - 변수
    - [변수의 쓰임새](#변수의-쓰임새)
    - [선언과 할당](#선언과-할당)
    - [변수의 범위](#변수의-범위)
    - [let과 const 변수](#let과-const-변수)
    - [변수의 Hoisting](#변수의-Hoisting)

  - jQuery Animate 함수
    - [Animate](#Animate)
      - Animate 함수 사용법
    - [Query 함수를 순서대로 동작시키고 싶은 경우](#Query-함수를-순서대로-동작시키고-싶은-경우)
    - [애니메이션을 프로처럼 개발 하기](#애니메이션을-프로처럼-개발-하기)

  - 정규식
    - [정규식 사용법](#정규식-사용법)
    - [정규식 문법](#정규식-문법)
    - [자주 쓰이는 정규식 유형](#자주-쓰이는-정규식-유형)

  - 이벤트 버블링
    - [버블링이란?](#버블링)

  - dataset
    - [HTML 문법](#HTML-문법)
    - [JS에서 접근하기](#JS에서-접근하기) 
    - [CSS에서 접근하기](#CSS에서-접근하기) 
    - [문제점](#문제점)
    - [jQuery 스타일로 dataset 사용하는 법](#jQuery-스타일로-dataset-사용하는-법)

- LV.3

  - 자료형
    - [Array 자료형](#Array-자료형)
    - [Object 자료형](#Object-자료형)
      - 예제
    - [문자자료형에 변수 넣기](#문자자료형에-변수-넣기)

  - 콜백함수
    - [Arrow Function](#Arrow-Function) 

  - MVC 패턴
    - [MVC 구조](#MVC-구조)
    - [Model](#Model)
    - [View](#View)
    - [Controller](#Controller)
    - [MVC 패턴 흐름](#MVC-패턴-흐름)
    - [Controller ㅡ Model](#Controller-ㅡ-Model)
    - [Controller ㅡ View](#Controller-ㅡ-View)
    
  - 데이터바인딩
    - [단방향 데이터 바인딩](#단방향-데이터-바인딩)
      - 장점
      - 단점
    - [양방향 데이터 바인딩](#양방향-데이터-바인딩)
      - 장점
      - 단점
    - [데이터 바인딩 관련 웹 프레임워크 3대장](#데이터-바인딩-관련-웹-프레임워크-3대장)
    - [결론](#결론)

<br />

# ⚙ JavaScript / jQuery ⚙

## 기본

> ### 추상화
`추상화(abstraction)`는 복잡한 것들을 목적에 맞게 단순화하는 것이다. 예를 들면 영화 줄거리, 책 줄거리 등이 있다.

<br />

> #### 추상화 3원칙

- 목적을 명확히
- 불필요한 것들은 숨기기
- 핵심만 드러내기

<br />

> ### 작명
변수를 만들 때 이름을 아무렇게나 지으면 안 된디. 이름을 지을 때는 아래와 같이 몇 가지 룰을 따라주면 좋다.

<br />

> #### 꼭 지켜야 하는 룰 (지키지 않으면 오류)

- JavaScript 식별자는 '문자(a-z, A-Z)', '밑줄( _ )', '달러 기호($)'로 시작해야 한다. 두 번째 글자부터는 '숫자(0-9)'도 가능하다.
- '대문자'와 '소문자'는 구별해야한다. myname과 myName은 다른 이름이다.
- '예약어(JavaScript가 찜해놓은 단어)'는 사용하면 안 된다. 예를 들어 if, for, let 같은 것들이 있다.

<br />

> #### 지키면 좋은 룰 (더 좋은 스타일을 위해)

__1. 의미 없는 이름은 좋지 않다.__

향후 복잡한 프로그램을 짜게 되면 변수와 함수를 여기저기서 적절히 활용해야 하는데, 이름이 a, b, c, d처럼 의미 없이 설정되어 있으면 어떤 값을 저장해뒀는지 찾기도 어렵고 활용하기도 어렵다. 

또한 프로그램의 가독성이 떨어져서 나중에 스스로 프로그램을 살펴볼 때, 그리고 공동 작업을 할 때 매우 불편한 상황이 발생한다. 

그래서 프로그래밍 초반부터 적절한 이름을 짓는 습관을 들이는 것이 좋다!

```js

let a, b, c, d;
```

__2. 너무 추상적인 이름은 좋지 않다.__

상황에 따라 그냥 name이라는 변수명이 적합한 상황도 있을 수 있겠지만, 

긴 프로그램을 쓰다 보면 다양한 '이름'들이 있기 때문에 name은 너무 추상적일 수 있다. 

그럴 때는 조금 더 구체적인 이름으로 이해하기 쉽게 만들어주자!

```js

let name; // 너무 추상적인 이름
```

__3. 모든 변수 이름은 'camelCase'로 쓰는 것이 좋다.__

변수명에는 띄어쓰기가 불가능하기 때문에, 띄어쓰기 역할을 대신 할 무언가가 필요하다. 

그중 하나가 `camelCase`라는 것인데, __첫 번째 글자는 소문자로 하고 띄어쓰기가 있는 각 단어의 첫 문자를 대문자로 표기하는 방식__ 이다. 

중간중간의 대문자가 낙타(camel)의 혹처럼 생겨서 camelCase라고 부른다.

```js

let bad_variable_name; // 비추천 방식
let goodVariableName; // 추천 방식
```

<br />

> ### 코딩 컨벤션(스타일 가이드) 참고 사이트

- [Airbnb의 자바스크립트 스타일 가이드](https://github.com/ParkSB/javascript-style-guide)
- [Google의 자바스크립트 스타일 가이드](https://google.github.io/styleguide/jsguide.html)
- [w3schools.com 스타일 가이드](https://www.w3schools.com/js/js_conventions.asp)
- [StandardJS](https://standardjs.com/rules-kokr.html)
- [Idiomatic.JS](https://github.com/rwaldron/idiomatic.js/tree/master/translations/ko_KR)

<br />

## LV.1

## 자바스크립트의 목적과 셀렉터 (Selector)

> ### 목적
자바스크립트 문법의 존재 목적은 __HTML 조작과 변경__ 이다. 이를 통해 웹상에 있는 모든 UI 기능들을 HTML 조작으로 구현이 가능하기 때문이다.

<br />

> #### 조작과 변경
특정 HTML을 원하는대로 변경 하려면 아래 문법을 사용하면 된다.

<br />

아래 예시와 같은 코드를 작성하게 되면 `<h3>` 태그의 내부 글자가 __바보__ 로 바뀌게 된다. 즉, HTML을 변경하고 싶을 때 아래 코드를 응용하여 사용하면 된다.

```html
<h3 id="hello">안녕하세요</h3>
```

```js
document.getElementById('hello').innerHTML = '바보';
```

<br />

#### `코드 해석`

- document : 그냥 웹문서 (HTML문서)를 뜻한다.

- 마침표(.) : ~의 

- getElementById('어쩌구') : 아이디가 '어쩌구'인 요소를 찾으셈 

- innerHTML : 내부의 HTML

- = : 등호는 오른쪽걸 왼쪽에 대입하라는 뜻.

- '바보' : 바보라는 글자. 모든 글자는 따옴표 안에 담는다. (큰따옴표, 작은따옴표 둘다 가능)

<br />

> #### 응용

위의 `<h3>` 내부의 글자를 빨간색으로 바꾸고 싶다면 어떻게 하는가?

```js
document.getElementById('hello').style.color = 'red';
```

<br />

`<h3>` 내부의 글자를 다른 단어로 바꾸는 방법은 쉽지만, 위 응용처럼 `style.color`를 붙여야되는걸 도대체 어떻게 알까?
아래 `셀렉터(Selector)`를 참고하자.

<br />

## Selector

`셀렉터(Selector)`는 HTML __요소를 찾기 위해 사용__ 된다.

`innerHTML.style.color`는 메소드(또는 함수)라고 부르는데, 이는 HTML __요소의 어떤 속성을 변경할지 결정하기 위해 사용__ 한다.

그런데 HTML요소의 변경가능한 속성들은 무궁무진하게 많다. `src`, `href`, `font-size` 등 수없이 많다는 것이다.

그 속성들을 바꾸려면 셀렉터 뒤에 정확한 메소드이름을 붙여주어야 하는데, 메소드는 종류가 수백개이기 때문에 전부 외워서 사용할 수 없다.

그렇기 때문에 필요할 때마다 구글에 검색해서 찾아쓰는게 초보의 올바른 자바스크립트 활용법이다.

<br />

> ### 종류

- document.getElementsByClassName()
  - class selector 
  - 몇번째 클래스인지 선택해주어야 함

```js
document.getElementsByClassName('hello')[2].style.color = "red";
```

<br />

- document.getElementsByTagName()
  - tag selector
  - class selector랑 다를거 없음
  - 몇번째 태그인지 선택해주어야 함

```js
document.getElementsByTagName('p')[5].style.color = "red";
```

<br />

- document.getElementsById()
  - id selector
  - id는 특성상 재사용을 하면 안된다.
  - 따라서, `getElements`가 아닌 `getElement`를 사용
  - 태그 선택 필요 없음 (고유한 값 이기 때문)

```js
document.getElementById('hello').style.color = "red";
```

<br />

- document.querySelector()
  - query selector
  - 클래스는 앞에 `.`
  - 아이디는 앞에 `#`
  - 첫 번째 요소를 반환
  - 요소 선택 안 됨

```js
document.querySelector('.hello').style.color = "blue";
document.querySelector('p').style.color = "red";
document.querySelector('#hello').style.color = "yellow";
```

<br />

- document.querySelectorAll()
  - query selectorall
  - 클래스는 앞에 `.`
  - 아이디는 앞에 `#`
  - 모든 요소를 반환 (단, 배열 형태로 반환 == nodelist)
  - 요소 선택 됨 (index를 이용하여 특정 요소를 선택)

```html
<p>Hello World</p>
<p class="hello">Hello World</p>
<p class="hello">Hello World</p>
<p id="hello">Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
<p>Hello World</p>
```

```js
document.querySelectorAll('.hello')[0].style.color = "blue";
document.querySelectorAll('.hello')[1].style.color = "blue";
document.querySelector('#hello').style.color = "yellow";
document.querySelectorAll('p')[4].style.color = "red";
document.querySelectorAll('p')[5].style.color = "red";
```

<br />

## onclick
`onclick`은 클릭시 발생하는 이벤트 또는 클릭시 자바스크립트를 수행해주는 속성이다.

<br />

> ### 버튼 기능
자바스크립트를 사용하면 버튼을 눌렀을 때 UI 같은게 동작하도록 할 수 있다. 바로 HTML 속성을 하나만 추가해주면 된다.

<br />

모튼 HTML 태그 내에 `onclick` 이라는 속성을 넣을 수 있는데, 이걸 넣을경우 해당 HTML을 눌렀을 때 `onclick` 내부의 자바스크립트를 실행하게 된다.

```html
<button onclick="여기에 자바스크립트 작성"> 버튼 </button>
```

<br />

> ### Alert 박스 만들기
자바스크립트를 이용하면 특정 HTML을 사라지거나 보이게 만들 수 있다.

[조작과 변경](#조작과-변경)에서 사용했었던 "document~"로 시작하는 코드를 사용하면 된다.

참고로 HTML을 뭔가 변경할땐 항상 "document~"로 시작하는 코드를 사용한다. 

그렇다면 버튼을 눌렀을 때 "alert 창을 보여주세요!" 라는 코드를 작성하려면 어떻게 해야할까?

<br />

`display = 'block';` 값을 주면 된다.

```html, js
<div class="alert-box" id="alert-box-appear">Alert 박스</div>
<button onclick = "document.getElementById('alert-box-appear').style.display = 'block' ;">버튼</button>
```

```css

.alert-box {
  background: rgb(2, 2, 126);
  color: white;
  padding: 20px;
  border-radius: 10px;
  display: none;
}
```

<br />

#### `출력화면` 

<br />

<p align='center'><img src="https://user-images.githubusercontent.com/75716255/141121998-50783837-6e45-4d7f-b0a3-736ff4adf338.gif"></p>

<br />

> #### 응용
 닫기 버튼을 눌렀을 때 "alert 창을 닫아주세요!" 라는 코드를 작성하려면 어떻게 해야할까?
 
 <br />
 
`display = 'none';` 값을 주면 된다.

```html, js
<div class="alert-box" id="alert-box-appear">Alert 박스
  <button onclick = "document.getElementById('alert-box-appear').style.display = 'none' ;">닫기</button>
</div>

<button onclick = "document.getElementById('alert-box-appear').style.display = 'block' ;">버튼</button>
```

```css
.alert-box {
  background: rgb(2, 2, 126);
  color: white;
  padding: 20px;
  border-radius: 10px;
  display: none;
}
```

<br />

#### `출력화면`

<br />

<p align='center'><img src="https://user-images.githubusercontent.com/75716255/141122070-c5035f12-bde9-4c85-907d-5cbd49357cc1.gif"></p>

<br />

## function
`function`은 함수라는 문법이다. 함수라는건 여러가지 용도가 있지만 우선 가장 기본적인 __긴 코드 하나로 묶기__ 에 대해 알아보려 한다.

<br />

> ### 사용법
긴 코드를 하나로 묶는 다는 것은 쉽게 말해 __긴 코드를 한 단어로 축약__ 한다는 것 이다. 사용법은 아래와 같다.

<br />

- `function` 이라는 키워드를 사용하여 함수를 만들 수 있다.
- `function` 오른쪽엔 함수의 이름을 작명해주면 된다. (직관적이게)
- {} 중괄호 안에는 축약하고 싶은 코드를 넣으면 된다.

```js
function alertOpen(){
  document.getElementById('alert-box-appear').style.display = 'block';
}

function alertClose(){
  document.getElementById('alert-box-appear').style.display = 'none';
}
```

<br />

이제 위에서 만들어둔 함수의 이름을 아래처험 사용하면 [Alert 박스 만들기](#Alert-박스-만들기) 에서 사용했던 방법보다 훨씬 간편하고 깔끔한 코딩을 할 수 있게된다.

<br />

```html
<div class="alert-box" id="alert-box-appear">Alert 박스
    <button onclick = "alertClose()">닫기</button>
  </div>
  <button onclick = "alertOpen()">버튼</button>
```

<br />

> ### 에러 체크
가장 흔한 에러들

<br />

1. cannot read property '어쩌구' of null <br />
: 'innerHTML을 쩜찍어서 붙이고 싶은데 null입니다' 라는 뜻인데 셀렉터가 제대로 요소를 못찾고 있다는 에러이다.

<p align='center'><img src="https://user-images.githubusercontent.com/75716255/141297488-c4115eab-2869-43bf-b6ff-417b65667e11.png"></p>

<br />

2. 어쩌구 is not a function <br />
: 셀렉터, 메소드, 함수의 이름이 잘못된거다.

<p align='center'><img src="https://user-images.githubusercontent.com/75716255/141297506-d99a0e82-0949-497f-85ea-60447813794e.png"></p>

<br />

3. 함수 이름을 잘못 썼을 경우 <br />
: 예를 들면 getElementById 인데 getElementByid 라고 작성했을 경우 에러가 난다.

```js
document.getElementByid();
```

<br />

4. 따옴표를 안붙인 경우 <br />
: 아래처럼 작성하는경우가 흔하다. 문자를 집어넣을 땐 항상 따옴표를 붙여야한다.

```js
document.getElementById(alert);
document.getElementById(alert).style.display = block;
```

<br />

5. 세미콜론이나 마침표를 빼먹은 경우 <br />
: 찾기도 힘들다. 빼먹지 말자. 

<br />

6. 셀렉터를 찾으려는 HTML요소보다 위에 작성한 경우 <br />
: 셀렉터는 찾으려는 HTML 요소보다 밑에다가 script 태그 열고 작성해야 정상적으로 요소를 찾을 수 있다. <br />
: 안그러면 요소를 못찾겠다고 null 어쩌구라고 에러를 띄운다.

<br />

> ### 파라미터와 인자

- 함수 선언에서 활용하기 위하여 사용하는 변수를 __파라미터(parameter, 매개변수)__ 라고 부른다.
- 함수를 호출할 때 매개 역할을 한다.

- 함수를 호출할 때 사용하는 것을 __인자(argument)__ 라고 부른다.
- 즉, '전달인자'를 뜻한다.

<br />

```js
function 함수이름(매개변수1, 매개변수2, ...) {
    실행문;
}
 
함수이름(인자1, 인자2, ...);
```

<br />

> #### 사용 이유

- 함수 재사용 가능
  - 코드 단축 가능

- 함수 내부에 하나의 기능이 아닌, 다양한 기능을 넣어 수행하게 만들 수 있다

<br />

> #### 응용
버튼1과 버튼2를 누르면 각각 다른 이름의 alert 창이 나오도록 하자.

<br />

`조건`
- 버튼1을 누르면 '아이디를 입력하세요' 라는 alert 창이 등장
- 버튼2를 누르면 '비밀번호를 입력하세요' 라는 alert 창이 등장

<br />

```html
<div class="alert-box" id="alert">
  <p id="title">Alert 박스</p>
  <button onclick = "alertclose('none')"> 닫기</button>
</div>
<button onclick = "alertopen('아이디를 입력하세요')">버튼1</button>
<button onclick = "alertopen('비밀번호를 입력하세요')">버튼2</button>
```

```js
function alertopen(text){
  document.getElementById('title').innerHTML = text;
  document.getElementById('alert').style.display = 'block';
}

function alertclose(close){
  document.getElementsByClassName('alert-box')[0].style.display = close;
}
```

<br />

- `getElementsByClassName`의 경우 해당 클래스 전체 값을 찾기 때문에 배열로 몇번째 값을 찾을지 지정해줘야 함
- 
  - 있길래 그냥 써본거임

<br />

#### `출력화면`

<p align='center'><img src="https://user-images.githubusercontent.com/75716255/141685122-f54e5955-31c1-4aba-ba62-ddc8b114bc76.gif"></p>

<br />

> #### 웃픈SULL

- 버튼1,2를 눌렀을 때 닫기 버튼이 계속 안보여서 대체 왜 그런건지 삽질 시작

- 알고보니 `alertopen 함수`가 문제였다.

  - alert 창 내용을 바꿀 때 `class="alert-box"`의 모든 내용을 '아이디/비번을 입력하세요'로 바뀌게 해놔서 그런거였음
  - 즉, 버튼이 텍스트로 덮어씌워진거임 ㅋㅋ
  
- 아래 코드 참고

<br />

```html
<div class="alert-box" id="alert-box">Alert 박스
  <button onclick = "alertClose('none')">닫기</button>
</div>
<button onclick = "alertOpen('아이디를 입력하세요')">버튼1</button>
<button onclick = "alertOpen('비밀번호를 입력하세요')">버튼2</button>
```

```js
function alertOpen(text){
  document.getElementsByClassName('alert-box')[0].style.display = 'block';
  document.getElementsByClassName('alert-box')[0].innerHTML = text;
}

function alertClose(close){
  document.getElementById('alert-box').style.display = close;
}
```

<br />

> ### JS addEventListener
이벤트가 발생했을 시, 특정 함수를 실행할 수 있게 해주는 기능

<br />

- `onclick`은 늙은이만 쓰는거래요
-  HTML이 깔끔해 진대요

<br />

```js
document.getElementById('어쩌구').addEventListener('발생이벤트', function(){
    //실행할 코드 
});
```

<br />

> #### 응용
alert 박스에 addEventListener 넣어보기

<br />

```html
<div class="alert-box" id="alert">
   <p id="title">Alert 박스</p>
   <button id="close"> X </button>
</div>
<button onclick = "alertOpen('아이디를 입력하세요')">버튼1</button>
<button onclick = "alertOpen('비밀번호를 입력하세요')">버튼2</button>
```

```js
function alertOpen(text){
  document.getElementById('title').innerHTML = text;
  document.getElementById('alert').style.display = 'block';
}


document.getElementById('close').addEventListener('click', function(){
  document.getElementById('alert').style.display = 'none'
});
```

<br />

> #### 다른 이벤트

- 셀렉터로찾은요소에 마우스를 스윽 갖다대면 특정 코드를 실행
```js
셀렉터로찾은요소.addEventListener('mouseover', function(){ 
  실행할코드
});
```

<br />

- 셀렉터로찾은요소가 스크롤되면 특정 코드를 실행 (당연히 그 요소에 스크롤바가 있어야됨)
```js
셀렉터로찾은요소.addEventListener('scroll', function(){ 
  실행할코드
});
```

<br />

- 셀렉터로찾은요소에 키보드로 글자를 입력하면 특정 코드를 실행 (그 요소가 글자를 입력할 수 있는 input 이런거여야 함)
```js
셀렉터로찾은요소.addEventListener('keydown', function(){ 
  실행할코드
});
```

<br />

> ### 참고 사이트

- https://developer.mozilla.org/en-US/docs/Web/Events (모든 브라우저내의 이벤트 리스트)

<br />

> ### oninput 이벤트
요소에 내용을 입력할 때 발생 (값이 변경될 때 마다)

- 요소 값 변경 직후에 이벤트 발생
- `<select>` 요소에서는 작동 하지 않는다.
- IE9 이상 주요 최신 브라우저 지원

<br />

> ### 구문

```html, js 
// abc : 실행 함수명
// addEventLister() 방식 주의사항 2가지 : 이벤트명에 on 안 붙임. / 실행함수명 뒤에 소괄호 안 붙임

// HTML 속성 방식
<element oninput="abc()"> 
  
// JS 속성 방식
object.oninput = function(){abc()};

//JS 메서드 방식
object.addEventListener("input", abc);
```

<br />

> #### 예제
지정 범위 중 선택 값 표시

```html
<input type="range" oninput="homzzang(this.value)">                             
<p id="demo"></p>
```

```js
function homzzang(val) {
  document.getElementById("demo").innerHTML = val; 
}
```

#### [`결과 보러 가기`](https://codepen.io/sinbi/pen/GRKyVbP)

<br />

> ### onchange 이벤트
요소의 값이 변경될 때 발생

- 요소 값 변경 후 요소가 포커스를 잃으면 발생
- `<select>` 요소에서도 작동 한다.
- 모든 브라우저 지원

<br />

> #### 예제1
HTML 구문 안 (입력 내용을 대문자로 변환)

```html
<input type="text" id="hz" onchange="abc()">
```

```js
function abc() {
  var x = document.getElementById("hz");
  x.value = x.value.toUpperCase();
}
```

#### [`결과 보러 가기`](https://codepen.io/sinbi/pen/OBoOyp)

<br />

> #### 예제2
JS 구문 안 (입력 내용을 대문자로 변환)

```html
아이디 입력: <input type="text" id="hz">
```

```js
document.getElementById("hz").onchange = function() {abc()};

function abc() {
  var x = document.getElementById("hz");
  x.value = x.value.toUpperCase();
}
```

#### [`결과 보러 가기`](https://codepen.io/sinbi/pen/pxOdbK)

<br />

> #### 예제3
input 입력 내용 변경 감지

```html
<input type="text" name="hz" value="abc" onchange="hz(this.value)">
```

```js
function hz(val) {
  alert("입력내용 변경됨 : " + val);
}
```

#### [`결과 보러 가기`](https://codepen.io/sinbi/pen/qBdVBON)

<br />

> ### 참고 사이트

- https://homzzang.com/b/js-1338
- https://homzzang.com/b/js-1316

<br />

## jQuery
2006년에 어떤혼모노가 JS로 개발을 하다가 "아 코드 개길어서 귀찮네"라는 생각을 했다. (실화)

그래서 JS 코드를 짧고 쉽게 쓸 수 있는 코드를 발명해내는데, 그 코드 덩어리를 jQuery라고 이름짓고 웹에 공개해버렸다고 한다. 

그래서 이 코드 덩어리만 있으면 JS 쉽고 짧게 작성가능하다. 참고로 남이 개발해놓은 이런 코드 덩어리들을 전문용어로 __라이브러리__ 라고 부른다. 

<br />

> ### 쓰는 이유

__1. 코드가 매우 짧아진다.__

__2. 여러개의 요소를 한번에 싸잡아서 바꿀 수 있다.__

<br />

`<p>` 태그가 3개 있다고 가정해보자.

```html
<p class="greeting">안녕하세요</p>
<p class="greeting">안녕하세요</p>
<p class="greeting">안녕하세요</p>
```

<br />

자바스크립트의 경우 3줄의 코드를 입력해야 하며, 몇번째 자료를 바꿀건지 각각 지정해 주어야 한다는 불편함이 있다.

```js
document.getElementsByClassName('greeting')[0].innerHTML = '안녕';
document.getElementsByClassName('greeting')[1].innerHTML = '안녕';
document.getElementsByClassName('greeting')[2].innerHTML = '안녕';
```

<br />

반면 jQuery를 쓴다면 셀렉터 하나로 한번에 처리가 가능하다. 즉, 요소가 여러개 있어도 그냥 한번에 다 바꿔준다는 것!

참고로, jQuery로 찾은 여러 요소 중 맨 위의 것만 바꾸고 싶은 경우 $('.greeting').eq(0) 이렇게 하면 된다. 

```js
$('.greeting').html('안녕')
```

<br />

버튼이 여러개 있어도 이벤트리스너를 여러개 한번에 부착해버릴 수 있다.

```html
<button class="btn">버튼btn</button>
<button class="btn">버튼btn</button>
<button class="btn">버튼btn</button>
```

```js
<script>
  $('.btn').on('click', function(){ 버튼누르면 실행할 코드~~ } );
</script>
```

<br />

__3. 애니메이션을 쉽게 부착할 수 있다.__

요소를 사라지기 / fade out / 접어올리기 이런 간단한 애니메이션을 주고 싶을 때

쌩자바스크립트로 구현하려면 CSS를 잘 하던가 JS로 코드를 5줄 정도 짜야하는데, jQuery를 사용하면 한줄 컷이다.

<br />

```js
$('어쩌구').hide(); 
$('어쩌구').show(); 
$('어쩌구').slideUp(); 
$('어쩌구').slideDown(); 
$('어쩌구').fadeOut(); 
$('어쩌구').fadeIn(); 
```

<br />

> ### 설치 방법

> #### 1. CDN 사이트를 이용해서 첨부하기
Query 파일을 호스팅 해주는 CDN 사이트들이 있다. 거기서 jQuery 파일을 따면 쉽게 설치가 가능하다.

거기서 나에게 맞는 jQuery 버전을 선택하면 이상한 script 태그를 줄 텐데 이걸 HTML 파일에 그대로 복붙하면 설치가 끝난다.

보통 3.X 버전을 설치하면 되고, 인터넷 익스플로러 8이하 호환성을 잡는 사이트를 만들고 있다면 1.X 버전을 설치하면 된다.

(CDN은 content delivery network의 약자로, 자주 사용하는 css, js 라이브러리 파일들을 호스팅해주는 사이트를 뜻함)

<br />

```js
<script
  src="https://code.jquery.com/jquery-3.5.1.min.js"
  integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
  crossorigin="anonymous"></script>
```

<br />

> #### 2. 직접 다운받아서 첨부하기 

위에서 첨부한 스크립트 태그를 잘보면 src 속성 내에 무슨 사이트 주소가 하나 있다 .

예를 들어 https://code.jquery.com/jquery-3.4.1.js 이런건데 이 사이트로 접속하시면 js 파일이 하나 열린다. 

이걸 우클릭 > 자신의 작업폴더에 다른이름으로 저장한다음 아래 스크립트를 적어주면 된다.

<br />

```js
<script src="아까 다운받은 그 파일 경로"></script>
```

<br />

> ### 기본 문법
jQuery는 자바스크립트랑 다른건 아니다. 그저 HTML 변경에 있어 코드를 더 짧게 작성할 수 있을 뿐 이다. 특히 셀렉터가 조금 더 쓰기 쉽게 되어있다.

<br />

```js, jquery
// js
document.getElementById('title').innerHTML = '바보';

// jquery
$('#title').html('바보');
```

<br />

> ### 셀렉터
jQuery는 HTML찾는 셀렉터를 $() 를 이용해 사용한다. 그리고 따옴표 안에 CSS 스타일의 셀렉터를 적어주면 된다.

예를 들면 CSS에서 ID로 뭔가를 선택할 때 #기호를 붙이는 것 처럼 jQuery도 #title이라고 적어주면 된다.

그렇다면 클래스명이 box인 요소를 찾으려면 어떻게 할까? $('.box')라고 쓰면 된다.

<br />

```js
$('#title'); 
$('.box') 
```

<br />

> ### 함수/메소드
내가 원하는 세부 속성을 바꿀 때 자바스크립트처럼 메소드를 뒤에 붙여주면 된다. 하지만 자바스크립트와 이름이 약간 다르다.

- .text 는 안에있는 모든 텍스트를 변경하라

- .html 은 안에있는 모든 내용을 변경하라 (HTML 태그 포함)

- .css 는 스타일속성을 변경하라 

라는 뜻이다.

<br />

```js
$('#title').text('바보'); 
$('#title').html('<p>바보</p>'); 
$('#title').css('color', 'red');  
```

<br />

참고로,

자바스크립트로 찾은 HTML요소는 자바스크립트 함수/메소드를 뒤에 붙여야하며

jQuery 셀렉터로 찾은 HTML요소는 jQuery 함수/메소드를 붙여야한다. 

나머지 메소드들은 필요할 때 구글에서 찾아써도 무방하다. 

<br />

> ### jQuery addEventListener

아래 두개 코드는 같은 기능을 하는 코드이다.

```js
$('어쩌구').click(function(){
  //어쩌구를 클릭시 실행할 코드
});

$('어쩌구').on('click', function(){
  //어쩌구를 클릭시 실행할 코드
});
```

<br />

> ### scroll addEventListener 주의 사항

스크롤 이벤트 리스너는 왼쪽에 오는 요소가 스크롤이 될 때마다 내부 코드를 실행해주는 함수이다.

1초에 최대 60번 실행시키기 때문에 실행횟수가 많아 브라우저가 간혹 부담을 느끼곤 한다.

스크롤 이벤트리스너가 많으면 스크롤 할 때마다 코드를 120개 360개 이렇게 실행해야해서 사이트가 느려질 수 있기 때문에 

scroll 이벤트 리스너와 내부의 코드는 최대한 줄여서 사용하는게 좋다.

scroll 이벤트 리스너는 하나면 충분하니 하나만 쓰자!

```js
$('어쩌구').on('scroll', function(){})
```

<br />

> ### 이벤트 함수
이벤트리스너 콜백 함수 내부에 파라미터를 추가하면 이벤트관련 함수들을 쓸 수 있다.

<br />

- 파라미터 이름은 아무렇게나 작명 한다. (보통 e 혹은 event라고 작명)

- `e.target`은 지금 실제 클릭한 요소

- `e.currentTarget`은 지금 이벤트리스너가 달린 곳 (참고로 `this`라고 써도 같은 의미)

- `e.preventDefault()`는 기본 동작을 막을 때 쓰고 

- `e.stopPropagation()`은 내 상위요소로의 이벤트 버블링을 중단할 때 쓴다.

참고로 위 이벤트 함수는 쌩js이다. jquery랑 병합해서 못 쓴다.

<br />

> ### input 이벤트
이벤트리스너 왼쪽에 있는 $('#email') 요소 내부에 입력된 값이 바뀔 때마다 내부 코드를 실행해준다. 

<br />

```js
$('#email').on('input', function(e){ 
  실행할 코드
});
```

<br />

> ### change 이벤트

마찬가지로 이벤트리스너 왼쪽에 있는 $('#email') 요소 내부에 입력된 값이 바뀔 때마다 내부 코드를 실행해준다.

하지만 change 이벤트는 $('#email') 요소에 __포커스를 잃었을 때 (커서가 다른곳에 찍힐 때)__ 실행된다.

<br />

```js
$('#email').on('change', function(e){ 
  실행할 코드
});
```

<br />

> ### toggle 함수
toggle 이라는 이름이 붙은 함수들은 '토글' 기능을 쉽게 개발할 수있게 도와준다. 

<br />

이걸 사용하면 버튼을 누를 때마다 한번씩 slideUp과 slideDown을 번갈아가며 적용시켜준다.

```js
$('버튼').click(function(){
  $('서브메뉴').slideToggle();
});
```

<br />

toggle 기능을 제공하는 함수는 아래와 같은 것들이 있다.

버튼을 누를 때마다 보임/안보임을 '토글' 해야하는 버튼을 만들고 싶을 때 이걸 적용해주면 개발이 매우 편리해진다.

```js
$('서브메뉴').slideToggle(); 
$('서브메뉴').fadeToggle(); 
$('서브메뉴').toggle(); 
```

<br />

쌩 자바스크립트로 구현하려면 곧 배울 if 조건문으로 구현하면 된다.

<br />

> ## 조건문

> #### 응용

> ### if

- 이메일 input이 공백이면 폼을 전송하지 않는다.

- 이메일 input이 공백이 아니면 폼을 전송해야한다.

- 전송이 되는지 여부는 새로고침/페이지 이동 여부로 알 수 있다. 

<br />

```html
<div class="modal-box">
    <div class="modal-alert">
      <p>로그인 하세요</p>

      <form action="login.php">
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Email" id="email">
          <p id="email-alert">이메일란이 빈칸입니다.</p>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" id="pw">
          <p id="pw-alert">비밀번호란이 빈칸입니다.</p>
        </div>
        <button type="submit" class="btn btn-primary">전송</button>
      </form>

      <button id="close"> 닫기 </button>
    </div>
</div>
```

```js
$('form').on('submit',function(e){ 
  if ($('#email').val() == ''){
    e.preventDefault(); // 폼 전송을 막아주는 코드
    $('#email-alert').show(); // 이벤트 발생 시, input 밑에 안내문을 보여줌 (없어도 되는 코드임)
  } 
});
```

<br />

> ### else-if
email 입력란 뿐만 아니라 password 입력란도 동시에 공백인지 검사하고 싶다면?

<br />

```js
$('form').on('submit',function(e){ 
  if ($('#email').val() == ''){
    e.preventDefault();
    $('#email-alert').show();
  }
  
  if ($('#pw').val() == '') {
      e.preventDefault();
      $('#pw-alert').show();
  }
});
```

<br />

- if 두개를 따로 쓰면 if문이 각각 독립적으로 동작

- else if로 if문을 두개 붙여쓰면 둘 중 하나만 동작 (또는 조건식이 둘다 틀리면 둘다 실행 안할 수도 있음)

<br />

## LV.2

## 변수
변수는 자료를 저장하기 위해 사용하는 문법이다.

<br />

- 변수라는 문법은 var이라는 키워드를 이용해서 만들어낸다.

- 변수 오른쪽에는 변수 이름을 지어주면 된다. (한글 가능)

- 등호를 이용해 원하는 값을 할당하면 된다.

```js
var 이름 = 'John';
var 나이 = 20;
```

<br />

> ### 변수의 쓰임새

> #### 긴 자료 사용 시

아래와 같이 긴 문자를 자주 쓰고 싶은데 매번 입력하기 귀찮을 떄 변수에 저장해서 사용하면 된다.

```js
var 이름 = 'John Barbatos Mercer';
```

<br />

> #### 셀렉터로 찾은 HTML 요소를 저장해놓을 때


- $('#alert') 라는걸 매번 해석하는게 아니라 이제는 안내창이라는 변수 이름을 해석하면 되니까 훨씬 직관적이다

- 자바스크립트 실행속도가 빨라진다.

```js
var 안내창 = document.getElementById('alert');
var 안내창 = $('#alert');

안내창.show();
```

<br />

> #### 속도가 빨라지는 이유

셀렉터를 쓰면 자바스크립트에게 명령을 내려 HTML을 탐색해서 원하는 요소를 찾는데,

HTML을 탐색하는 작업은 매우 오래걸린다. (있어보이는 말로 DOM 탐색)

셀렉터를 변수에 담아놓고 계속 사용하면 다시 셀렉터로 HTML을 탐색하지 않아도 되니 자바스크립트 동작속도가 매우 빨라진다.

예를 들어 아래 1번 2번 코드를 비교했을 때 2번 코드들이 훨씬 빠르게 동작한다.

2번 코드는 $() 셀렉터를 이용한 HTML(DOM) 탐색을 1번만 하기 때문!

```js
// 1번
$('#alert').show();
$('#alert').hide();
$('#alert').show();
$('#alert').hide();

vs

// 2번
var 안내창 = $('#alert');
안내창.show();
안내창.hide();
안내창.show();
안내창.hide();
```

<br />

> ### 선언과 할당

- var 이름 = 'john'; 이 코드는 실은 두개의 파트로 이루어져있던 코드이다.

  - 이름이라는 변수를 만들겠다~ 라는 __선언__
  - 이름이라는 변수에 'john'이라는 글자를 넣겠다~ 라는 __할당__

```js
var 이름; // 선언
이름 = 'john'; // 할당
```

<br />

> ### 변수의 범위
변수를 만들면 변수를 가져다 쓸 수 있는 범위가 존재한다.

<br />

- `var` 변수의 범위는 `function` 이다.

- `function`안에서 살고 죽는다.

<br />

예를 들어,

아래 함수 안에서 나이라는 변수를 만들어쓰고 있다고 해보자.

나이라는 변수는 함수안에서 자유롭게 쓸 수 있지만, 함수 밖에서 출력해보면 없다고 나온다.

```js
function 어쩌구() {
  어쩌구 코드들
  var 나이 = 20;
}

console.log(나이);
```

<br />

그 반대의 경우는 어떨까?

<br />

함수 바깥에서 나이라는 변수를 만들어쓰고 있다고 해보자.

그럼 함수 안에서 나이라는 변수를 찾으면 있다고 나올까 없다고 나올까?

```js
var 나이 = 20;

function 어쩌구() {
  console.log(나이);
}
```

<br />

정답은 '있다'고 나온다 이다.

왜냐면

자바스크립트에선 함수 밖에서 만든 변수는 함수 내에서도 자유롭게 사용가능하기 떄문이다.

즉, 밖에 있는 변수를 자유롭게 참조할 수 있다는 것이다.

또한 저렇게 함수 바깥에서, `<script>`태그 안에서 만든 변수는 흔히말하는 "전역변수" 라고 한다.

말그대로 모든 곳, 전역에서 쓸 수 있는 변수이다.

<br />

> ### let과 const 변수
let과 const는 자바스크립트 신문법(ES6) 이다.

2015년, 자바스크립트 문법이 대규모 빅뱅 쇼킹 업데이트가 되었고,

이 문법을 ES6라고 칭한다. (그래서 엣지 이상 최신 브라우저들만 ES6 문법을 해석할 수 있다.)

ES6문법에서는 var 뿐만 아니라 let과 const라는 키워드로도 변수를 만들어낼 수 있으며,

각각 변수의 범위, 재선언가능 여부, 재할당 가능 여부가 다르다.

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/142599143-9d7b68a3-c8d6-4fa3-a8f0-c4c9952bd842.png" width="70%"></p>

<br />

신문법에서는 일반적으로 let으로 변수를 많이 만들게 되며 

변하지 않는 값을 저장하고 싶을 때 const로 변수를 만들면 된다.

그리고 범위가 넓은 변수가 필요할 때는 var을 쓴다. 

하지만 꼭 써야하는 문법은 아니고 간단한 UI를 만들 땐 그냥 var 하나로도 전부 가능하다.

<br />

> ### 변수의 Hoisting

자바스크립트는 변수 선언부분을 항상 위로 강제로 끌어올려서 해석하는 습성이 있다. (할당은 아니고요 선언만)

함수 선언도 마찬가지로 코드 맨 위로 끌어올린 다음 해석을 한다.

이걸 Hoisting이라고 부른다. 

이 부분은 ES6 공부할 때 자세히 알아보겠다! 지금은 패스~

<br />

## jQuery Animate 함수

> ### Animate
`animate`는 특정 CSS 속성을 변경하기 위해서 사용하는 함수이다. 단, 변경을 아주 천천히 서서히 시켜주고 싶을 때 사용한다.

<br />

예를 들어, `.box`라는 요소에 `margin-left`를 100px 만큼 주고 싶을 땐 아래와 같이 사용한다.

하지만 서서히 1초에 걸쳐서 동작된다.

```js
$('.box').animate({ marginLeft : '100px' }); 
```

<br />

> ####  Animate 함수 사용법

<br />

```js
$('.box').animate({ marginLeft : '100px', marginTop : '90px' }, 1000); 
```

- `animate` 함수의 첫번째 파라미터엔 {} 중괄호를 집어넣고, 중괄호 안에는 애니메이션을 줄 CSS 속성들을 나열하면 된다.

- `margin-left` 같은 이름은 중간에 '-' 기호가 있는데 이걸 자바스크립트 상에선 쓸 수 없다.

  - '-' 기호를 없애고 대문자로 모든 단어들을 붙여서 적어주어야 한다. (카멜표기법)

- 우측엔 문자형태로 '100px' 이런 값을 입력하면 된다. 

- 콤마로 여러개의 속성들을 집어넣을 수 있다. 

 
- 번째 파라미터엔 1000 이렇게 ms 단위의 시간을 집어넣을 수 있는데 , 애니메이션 동작 속도를 의미한다. 

  - 1000이라고 작성하면 1000ms (1초) 동안 애니메이션을 동작시키라는 의미이다.


(참고로 { 어쩌구 : 저쩌구 } 이렇게 생긴걸 object 자료형이라고 한다)

<br />

> #### Query 함수를 순서대로 동작시키고 싶은 경우

아래처럼 코드를 두줄 나란히 쓴다고 해서 윗 코드가 먼저 실행된다는 보장이 없다.
왜 그런지는 자바스크립트의 `Event queue`, `Event loop`, `stack` 이라는 개념을 찾아보기!

```js
$('.black-background').show(); 
$('.black-background').animate({ marginTop : '0px' }); 
```

<br />

그래서 jQuery에서 어떤 함수들을 꼭 차례차례 실행시키고 싶은 경우엔 여러가지 방법이 있는데, 가장 쉬운 방법은 아래와 같다.


```js
$('.black-background').show().animate({ marginTop : '0px' });
```

<br />

이렇게 쓰면 `show()`를 먼저 해주고 `animate()`를 그 다음에 실행해준다.

그런데 같은 요소가 아니라

1. 이 요소를 animate 해준 다음에

2. 저 요소를 animate 해줘 라는 뜻이 된다.

<br />

만약, 각각 다른 요소를 차례로 `animate` 해주고 싶다면 아래와 같이 사용할 수 있다.

animate 함수의 세번째 파라미터로 function(){} 를 집어넣은 다음, 중괄호 안에 첫 animate가 끝났을 때 실행할 코드를 적어주면 된다.

```js
$('이 요소').animate({ width: '250px'}, 1000, function() {
  $('저 요소').animate({ height : '500px'}  });
});
```

<br />

> ### 애니메이션을 프로처럼 개발 하기

<br />

> ### 1. animate() 말고 CSS transition 쓰기 💻
`transition` 속성은 class안에 transition 속성을 넣어주면 된다.

<br />

그러면 .box라는 요소가 모든 CSS속성(all)이 변할 때 1초에 걸쳐서 스무스하게 변경해준다.

```css
.box {
  margin-top : 100px;
  transition : all 1s;
}
```

<br />

> ### transition 사용 이유

<br />

> #### 1. transition은 자바스크립트와 독립적으로 동작한다.

jQuery로 애니메이션을 주게 되면 매우 느리고 천천히 동작한다.

컴퓨터가 좋아서 빠르게 동작하는 것 같아 보이는 것이지 애니메이션이 조금만 복잡하거나 많으면 금방 버벅인다.

특히 브라우저에서 자바스크립트로 힘든 일을 시키고 있는데 여기다가 또 애니메이션까지 돌리라고 명령을 주면 100% 확률로 프레임 저하가 일어난다.

특히 자바스크립트로 많은 일을 해야하는 SPA 같은 사이트를 만든다면 애니메이션을 자바스크립트로 넣으면 안된다.

그러니 자바스크립트가 할 일이 많아도 빠르게 동작하는 transition을 사용하는게 좋다.

(혹은 애니메이션 전용 라이브러리 velocity.js 등을 따로 설치해서 쓰면 실행 속도 걱정이 해결된다.)

<br />

> #### 2. transition 쓰는게 훨씬 더 쉽다.

한줄만 추가하면 애니메이션이 완성되는데 animate() 어쩌구보다는 훨씬 쉽다.

그리고 커스터마이징도 쉽다.

애니메이션 동작 속도같은걸 선형이아니라 커브를 주고 싶으면 관련된 CSS 속성만 찾아넣으면 된다.

<br />

> ### 2. margin 말고 transform 속성 쓰기 💻
`margin`, `width`, `height`, `top`, `left`, `bottom`, `right` 이런 CSS 속성들은 페이지 레이아웃을 변경하는 속성이다.

브라우저는 레이아웃을 변경하면 렌더링시간이 매우 오래걸린다.

<br />

`transform`, `opacity` 이런 CSS 속성들은 페이지 레이아웃과 상관없는 쩌리 속성들이다.

브라우저는 쩌리 속성을 변경하는건 일도 아니다. 매우 빠르게 처리해준다.

(왜 속도가 빠른지 궁금하면 '브라우저의 css 렌더링 단계'라는걸 공부해보자)

그래서 스무스하게 동작하는 애니메이션을 만들고 싶다면 `margin` 이런거 쓰지 말고 `transform`을 쓰는게 좋다.

여러가지 세부속성들 덕분에 이동도 가능하고 회전도 가능하고 사이즈 조절도 가능하다.

<br />

```css
transform : translateX(100px);
transform : rotate(30deg);
transform : scale(2)
```

<br />

> ### 3. 최종화면으로 변하는건 class를 붙이는 방식으로 개발하자

간단한 속성 하나 바꿀 땐 매우 유용하지만 여러개 CSS 바꾸고 싶으면 코드가 길어져서 보기 싫지 않을까?

그러니 애니메이션 같은 거 개발할 땐 장기적으로 안쓰는게 좋을 것 같다.

`addClass()`, `removeClass()` 함수를 이용해서 미리 만들어놓은 CSS 클래스명을 붙여서 최종화면으로 변하게 만들도록 하자.

클래스로 짜놓으면 깔끔하고 수정도 쉽고 나중에 비슷한 애니메이션으로 재활용도 쉬워진다.

<br />

## 정규식
정규식은 문자를 검사하고 싶을 때 사용하는 식이다.

<br />

> ### 정규식 사용법

- 찾고자 하는 문자를 / / 안에 넣어준다.
-  .test() 함수 안에는 정규식으로 테스트해볼 글자를 넣어주면 된다.

```js
/abc/.test('abcdef')
```

<br />

> ### 정규식 문법

<br />

> ^ (caret)

라인의 처음이나 문자열의 처음을 표시

예 : ^aa (문자열의 처음에 aa를 포함하면 참, 그렇지 않으면 거짓)

<br />

> $ (dollar)

라인의 끝이나 문자열의 끝을 표시

예 : aaa$ (문자열의 끝에 aaa를 포함하면 참, 그렇지 않으면 거짓)

<br />

> . (period)

임의의 한 문자를 표시

예 : ^a.c (문자열의 처음에 abc, adc, aZc 등은 참, aa 는 거짓)

예 : a..b$ (문자열의 끝에 aaab, abbb, azzb 등을 포함하면 참)

<br />

> [] (bracket)

문자의 집합이나 범위를 나타냄, 두 문자 사이의 범위는 “-” 사용.

[]내에서 “^”이 선행되면 not을 나타냄

예 : [abc] (a, b, c 중 어떤 문자, “[a-c].”과 동일)

예 : [Yy] (Y 또는 y)

예 : [A-Za-z0-9] (모든 알파벳과 숫자)

예 : [-A-Z]. (“-“(hyphen)과 모든 대문자)

예 : [^a-z] (소문자 이외의 문자)

예 : [^0-9] (숫자 이외의 문자)

<br />

> {} (brace)

{} 내의 숫자는 직전의 선행문자가 나타나는 횟수,범위를 나타냄

예 : a{3} (‘a’의 3번 반복인 aaa만 해당됨)

예 : a{3,} (‘a’가 3번 이상 반복인 aaa, aaaa,  … 등을 나타냄)

예 : a{3,5} (aaa, aaaa, aaaaa 만 해당됨)

예 : ab{2,3} (abb와 abbb 만 해당됨)

예 : [0-9]{2} (두 자리 숫자)

예 : doc[7-9]{2} (doc77, doc87, doc97 등이 해당)

예 : [^Zz]{3} (Z와 z를 포함하지 않는 5개의 문자열, abc, ttt 등)

예 : .{3,4}er (‘er’앞에 세 개 또는 네 개의 문자를 포함하는 문자열이므로 Peter, mother 등이 해당)

<br />

> '*'(asterisk) (' ' 제외)

“*” 직전의 선행문자가 0번 또는 여러번 나타나는 문자열

예 : ab*c (‘b’를 0번 또는 여러번 포함하므로 ac, abc, abbbc 등)

예 : * (선행문자가 없는 경우이므로 임의의 문자열 및 공백 문자열)

예 : .* (선행문자가 “.”이므로 하나이상의 문자를 포함하는 문자열)

예 : ab* (‘b’를 0번 또는 여러번 포함하므로 a, accc, abb 등)

예 : a* (‘a’를 0번 또는 여러번 포함하므로 k, kd, a, aa, abb 등)

예 : doc[7-9]* (doc7, doc777, doc778989, doc 등이 해당)

예 : [A-Z].* (대문자로만 이루어진 문자열)

예 : like.* (직전의 선행문자가 ‘.’이므로 like에 0 또는 하나 이상의 문자가 추가된 문자열이 됨, like, likely, liker, likelihood 등)

<br />

> '+' (Plus Sign) (' ' 제외)

“+” 직전의 선행문자가 1번 이상 나타나는 문자열

예 : ab+c (‘b’를 1번 또는 여러번 포함하므로 abc, abcd, abbc 등)

예 : ab+ (‘b’를 1번 또는 여러번 포함하므로 ab, abcc, abb 등)

예 : [A-Z]+ (대문자로만 이루어진 문자열)

예 : like.+ (직전의 선행문자가 ‘.’이므로 like에 하나 이상의 문자가 추가된 문자열이 됨, likely, liker, likelihood 등, 그러나 like는 해당안됨)

<br />

> ? (question mark)

“?” 직전의 선행문자가 0번 또는 1번 나타나는 문자열

예 : ab?c (‘b’를 0번 또는 1번 포함하므로 abc, abcd 만 해당됨)

<br />

> () (parenthesis)

()는 정규식내에서 패턴을 그룹화 할 때 사용

<br />

> | (bar)

or를 나타냄

예 : a|b|c (a, b, c 중 하나, 즉 [a-c]와 동일함)

예 : yes|Yes (yes나 Yes 중 하나, [yY]es와 동일함)

예 : korea|japan|chinese (korea, japan, chinese 중 하나)

<br />

> \ (backslash)

위에서 사용된 특수 문자들을 정규식내에서 문자로 취급하고 싶을 때 ‘\’를 선행시켜서 사용하면됨

예 : filename\.ext (“filename.ext”를 나타냄)

예 : [\?\[\\\]] (‘?’, ‘[‘, ‘\’, ‘]’ 중 하나)

<br />

> ### 자주 쓰이는 정규식 유형

<br />

> 암호:

조건1. 6~20 영문 대소문자

조건2. 최소 1개의 숫자 혹은 특수 문자를 포함해야 함

/^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/

<br />

> 전자우편 주소:

/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/

<br />

> URL:

/^(file|gopher|news|nntp|telnet|https?|ftps?|sftp):\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/

<br />

> HTML 태그 – HTML tags:

/\<(/?[^\>]+)\>/

<br />

> 전화 번호 – 예, 123-123-2344 혹은 123-1234-1234:

/(\d{3}).*(\d{3}).*(\d{4})/

<br />

> 날짜 – 예, 3/28/2007 혹은 3/28/07:

/^\d{1,2}\/\d{1,2}\/\d{2,4}$/

<br />

> jpg, gif 또는 png 확장자를 가진 그림 파일명:

/([^\s]+(?=\.(jpg|gif|png))\.\2)/

<br />

> 1부터 50 사이의 번호 – 1과 50 포함:

/^[1-9]{1}$|^[1-4]{1}[0-9]{1}$|^50$/

<br />

> 16 진수로 된 색깔 번호:

/#?([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?/

<br />

## 이벤트 버블링

> ### 버블링
`버블링`이란 어떤 HTML 태그에 이벤트가 발생하면 그의 모든 상위요소까지 이벤트가 실행되는 현상이다. 

<br />

예를 들어,

아래 코드에서 `<p>` 태그를 클릭하면 브라우저는 사용자가 총 3번 클릭했다고 인식한다.

`<p>`, `<div>`, `<div>` 이렇게 말이다.

```html
<div>
  <div>
    <p>안녕</p>
  </div>
</div>
```

<br />

위와 같은 걸 이벤트 버블링 이라고 하는데,

브라우저는 이벤트 버블링이 항상 일어나도록 코드가 짜여져 있다. (기본값이 라는 것임)

<br />

## dataset

> ### HTML 문법

어느 엘리멘트에나 `data-`로 시작하는 속성은 무엇이든 사용할 수 있다.

화면에 안 보이게 글이나 추가 정보를 엘리멘트에 담아 놓는 용도로 사용한다. (개발자만 보임)

문법 및 사용법은 아래와 같다.

```html
// 문법
data-작명="값"

// 사용법1
<li class="tab-button" data-아무렇게나 작명하기="0">Products</li>

// 사용법2
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
</article>
```

<br />

> ### JS에서 접근하기
값을 읽으려면 js로 요소를 찾고, `.dataset.id`만 붙여주면 된다.

```js
// 사용법2에 따른 접근법
var article = document.getElementById('electriccars');

article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars
```

<br />

> ### CSS에서 접근하기
dataset은 순수 HTML이기 때문에 CSS에서도 접근이 가능하다.

<br />

예를 들어,

부모 데이터를 `article`에서 보여주려면 [`attr` 함수](https://developer.mozilla.org/en-US/docs/Web/CSS/attr())를 사용하면 된다.

```css
article::before {
  content: attr(data-parent);
}
```

<br />

CSS의 [속성 선택자](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) 또한

데이터에 따라 스타일을 바꾸는데 사용할 수 있다.

```css
article[data-columns='3'] {
  width: 400px;
}
article[data-columns='4'] {
  width: 600px;
}
```

<br />

> ### 문제점
`dataset`의 경우 IE 11+ 에서 이용이 가능하나,

이전 버전들은 `dataset`을 지원하지 않는다.

IE 10 이하에서는 `dataset`대신 [` getAttribute()`](https://developer.mozilla.org/ko/docs/Web/API/Element/getAttribute)를 사용해야한다.

아니면 호환성이 좋은 jquery 버전으로 사용해야 한다.

또한,

웹 상에서 노출이 되어야 하고, 접근이 가능해야 하는 내용은

`dataset`을 적용하면 안 된다.

`dataset`이 적용된 요소에 접근 할 수 없을 뿐 더러,

검색 크롤러가 `dataset`의 값을 찾지 못 하기 때문이다.

<br />

> ### jQuery 스타일로 dataset 사용하는 법

아래 처럼 코드를 짜면 `name`이라는 이름으로 `kim`이라는 자료를 저장할 수 있다.

이걸 꺼내서 출력하거나 어딘가에 사용하고 싶으면 `.data('자료이름')` 을 쓰면 된다.

```js
$(HTML요소).data('name', 'kim')
$(HTML요소).data('name')
```

<br />

## 자료형

> ### Array 자료형 
Array 자료형은 여러가지 자료를 한곳에 저장하고 싶을 때 사용하는 자료형이다.

<br />

- 대괄호를 열고 자료를 집어 넣으면 된다. (변수에 저장해서 쓰는게 일반적)
- 내부 자료들을 콤마로 하나씩 구분해서 집어넣는다.

```js
var A = ['233', 'ABC', 'apple'];
console.log(A[1]);

// 결과
ABC
```

<br />

> ### Object 자료형
Object 자료형은 여러가지 자료를 한곳에 저장하고 싶을 떄 사용하는 자료형이다.

<br />

- 중괄호를 열고 자료를 집어넣으면 된다. (변수에 저장해서 쓰는게 일반적)

- 자료 왼쪽에 자료의 이름과 콜론을 붙여서 저장해야한다.
  - 자료의 이름은 보통 key 라는 용어로 칭하고, 실제 자료는 value라고 칭한다. 

- 마침표를 찍고 자료의 이름(key)를 불러주면 자료를 뽑을 수 있다.
  - 또는, ob.['brand'] 이런 식으로도 자료를 뽑을 수 있다.

```js
var ob = { brand : 'BMW', model : 520 };
console.log(ob.brand);

// 결과
BMW
```

<br />

> #### 예제

자료라는 변수에 저장된 BMW라는 데이터와 520이라는 데이터를 꺼내

상품제목 h4태그, 상품내용 p태그 안에 채워넣으려고 할 때,

js코드를 어떻게 짜야하는가? (html 코드는건들이지 않는다.)

```js
<h4 id="title">상품제목</h4>
<p id="text">상품내용</p>

<script>
  var 자료 = [ { brand : 'BMW' }, { model : 520 } ];
</script>
```

> #### 정답

아래와 같은 js로 데이터를 html에 꽂아 넣는 작업을 __데이터바인딩__ 이라고 한다.
```js
var 자료 = [ { brand : 'BMW' }, { model : 520 } ];

$('#title').html(자료[0].brand);
```

<br />

> ### 문자자료형에 변수 넣기

JS 역따옴표로 만든 문자자료형에 변수 등을 집어넣고 싶다면 

`${}` 기호를 이용해 집어넣을 수 있다. 

중괄호 안에 넣고싶은 변수 이름을 써주면 된다. 

<br />

## 콜백함수
이름 그대로 나중에 호출되는 함수를 뜻 한다.

코드를 통해 명시적으로 호출하는 함수가 아니라, 단지 함수를 등록하기만 하고

어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출하는 함수를 말한다.

즉, 콜백함수는 문법적 특징이 있는 것이 아닌 호출방식에 의한 구분이다.

<br />

> ### Arrow Function
`Arrow Function`을 사용하면 `function`이라는 키워드 대신 `=>` 라는 화살표 이용이 가능해진다.

ES6 문법이라 브라우저 호환성 측면에서 안 좋을 수 있으나, 코드가 보기 좋게 깔끔해진다.

<br />

> #### 사용이유 및 특징

- 파라미터가 하나면 `(), 소괄호` 생략이 가능하다.

```js
var 두배만들기 = x => { return x * 2 }

console.log( 두배만들기(4) );
console.log( 두배만들기(8) );
```

<br />

- `{}, 중괄호` 안에 `return` 값이 한줄 뿐이라면 `{}, 중괄호`와 `return`도 생략가능

```js
var 두배만들기 = x => x * 2 ;

console.log( 두배만들기(4) );
console.log( 두배만들기(8) );
```

<br />

- 함수 바깥에 있던 `this`를 내부에서도 사용이 가능하다.
  - 즉, 어디서 쓰든간에 내부의 `this` 값을 변화시키지 않음
  - 참고로 `function` 문법 내에선 `this`라는 키워드의 값이 새롭게 변함 (쓰는 위치에 따라 내부 `this` 값이 바뀜)
  - 그래서 `function` 내에서 `this`값을 쓰고 싶을 때 `arrow function`을 쓸지 말지를 잘 생각해야함

```js
var 오브젝트1 = {
  함수 : () => { console.log(this) }
}

오브젝트1.함수()
```

<br />

## MVC 패턴

`모델-뷰-컨트롤러(Model–View–Controller, MVC)`는 소프트웨어 공학에서 사용되는 소프트웨어 디자인 패턴이다.

이 패턴을 사용하면 페이지를 구성하는 요소들(시각적인 요소, 데이터를 담당하는 요소)끼리의 간섭 없이

각각 독립적으로 개발함으로서 큰 효율을 낼 수 있다. (사용자인터페이스로부터 비즈니스 로직을 분리)

<br />

> ### MVC 구조

1. User(Uses) : 사용자가 웹 사이트에 접속한다.
2. Controller(Mainpulates) : 사용자가 요청한 웹 페이지를 제공하기 위해 `Model`에서 데이터를 호출한다.
3. Model : DB나 파일과 같은 데이서 소스를 제어 후, 그 결과를 반환한다.
4. Controller(Updates) : `Model`이 반환한 결과를 `View`에 반영한다.
5. View(Sees) : 반영된 데이터를 화면으로 보여준다.

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/147973301-e4633e8b-2608-42cb-bac6-379b52c21af1.png" width="40%"></p>

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/147980572-e490fba1-27d5-41ce-868e-17e1d3174503.png" width="40%"></p>

<br />

> ### Model
>> #### 데이터를 다루는 주방장

- 데이터를 처리하는 역할을 담당한다.
  - 프로그램이 목표하는 작업을 원활하게 수행하기 위해 필요한 물리적 개체, 규칙, 작업 등의 요소들을 구분하는 역할

- `Controller`에서 명령을 받고 `DataBase`에서 데이터를 저장하거나 삭제, 업데이트, 변환등의 작업을 수행한다.

<br />

> #### Model의 세 가지 규칙

1. 사용자가 편집하길 원하는 모든 데이터를 소유하고 있어야 한다.
  - 사용자가 박스에 글자 표현이 되도록 설정하였다면 박스의 크기, 위치, 글자 내용 등의 정보를 갖고 있어야 한다.

2. `View`나 `Controller`에 관한 어떤 정보도 몰라야 한다.
  - `Model`은 오직 데이터와 관련된 작업을 하기 때문에 `UI`에 관한 권한은 없다.

3. 변경이 발생하면 변경 통지에 대한 처리 방법을 구현해야 한다.
  - 누군가 모델을 변경하는 이벤트 요청을 보냈을 때, 이를 받을 수 있는 방법을 구현해야 한다.
  - 단, 재사용이 가능해야 하며 다른 인터페이스에서도 정적이어야 한다. 

<br />

> ### View
>> #### 주방장이 내온 데이터를 세팅하는 직원

- 시각적인 부분, 화면을 담당하는 역할을 한다.
  - `Model`의 데이터를 어떤 방식으로 사용자에게 보여줄지 연구하는 요소이다.

- 객체를 전달받아 상태를 바로 출력하는 역할만 담당해야 한다.

- 입출력의 순서나 데이터 양식은 `Controller`에 종속되어 결정된다.
  - 도메인 모델의 상태를 변환하거나, 받아서 렌더링 하는 역할을 한다.

- 도메인 객체의 상태를 따로 저장하고 관리하는 클래스 변수나 인스턴스 변수가 필요없다.

- `HTML`, `CSS`, `JS`를 이용하여 `View`를 만들어 낸다.

<br />

<p align="center"><img src="https://user-images.githubusercontent.com/75716255/147976207-beffc2c4-e330-4e23-9559-db57c37c6c52.png" width="50%"></p>

<br />

> ### Controller
>> #### 데이터의 흐름을 관리하는 매니저

- `Model`과 `View`를 연결시켜주는 다리 역할을 한다. (라우터)

- 도메인들 객체들의 조합을 통해 프로그램의 작동 순서나 방식을 제어한다.

- `Model`과 `View`가 각각 어떤 역할과 책임이 있는지 알고 있어야 한다.
  - 사용자가 접근하려는 URL에 따른 요청사항을 파악 후, <br />
    그 요청에 맞는 `Model`의 데이터를 의뢰하고 데이터를 `View`에 반영해서 사용자에게 알려야 한다. 
    - 예시를 들어보자면, <br />
      사용자가 네이버에 접속을 하고, 화면에 보이는 사이트는 `View`에 의해 다루어진다. <br />
      사용자는 사이트를 통해 쇼핑을 하려고 하는데, 쇼핑과 관련 된 데이터는 `Model`로 부터 불러와야 한다. <br />
      이렇게 `View`와 `Model` 사이에서 사용자의 요청을 분석하고 이에 맞는 데이터를 불러오는 요소이다.

- `Model`과 `View`에게 직접 지시가 가능하다.

<br />

> ### MVC 패턴 흐름

`Controller`는 `Model`, `View`에게 직접 지시할 수 있다.

하지만 `Model`, `View`는 독립되어야 하기에 서로 소통할 수 없고 `Controller`를 통해 소통이 진행된다.

그렇다면 어떻게 소통할 수 있을까?

<br />

> ### Controller ㅡ Model

- `Controller`는 `Model`에게 언제든지 이야기 할 수 있다.
  - 모델의 모든 것을 알고있고, 보내고 싶은 메시지를 보낼 수 있다.

- `Model`은 `Controller`에게 이야기할 방법이 없다.
  - 왜? `Controller`는 `UI`로직을 다루지만, `Model`과 `UI`는 별개이기 때문이다.
  - 하지만 `U`I와 상관없는 `Model`이 값이 바뀌는 데이터를 가지고 있다면, `Notification`, `KVO` 를 이용하여 컨트롤러와 소통할 수 있다.
  - 단, `Controller`에게 직접 말하는 방식이 아닌 방송처럼 그들에게 전달해주는 방식이다.

<br />

> ### Controller ㅡ View

- `Controller`와 View 연결은 대부분 Outlet을 통해 이루어진다.

- `View`와 `Controller` 역시 이야기를 해야한다.
  - 왜? `View`는 `Controller`의 하위종속자이고, `UI`안에서 일어나는 것들을 `Controller`에게 전달해야하기 때문이다.

- 따라서 `View`는 `Controller`에게 이야기할때 눈에 보이지 않고 구조화되어야 한다.
  - 눈에 보이지 않는다는 건 뷰에 있는 객체는 자신이 어떤 클래스에게 이야기하고 있는지 모른다는 뜻
  - 구조화되어야 한다는 건 객체에 대해 아는 바가 없기에 제대로 미리 서술되어 있는 방식으로 의사소통 해야한다는 뜻

- `target-action`
  - `Controller`가 `@IBAction` 코드로 메서드를 생성한다. (타겟)
  - `View`의 하위종속자 객체를 `Controller`가 생성한 타겟메서드와 연결해서 이야기하고 싶을 때 간단하게 타겟메서드를 호출하면 된다.

- `delegate`
  - 가끔 `View`는 단순히 터치되는 것 이상으로 더 복잡한 의사소통을 하기도 한다.
  - 예를 들어 `View`의 하위종속자인 스크롤 뷰는 다양한 정보들을 `Controller`에게 이야기한다.
  - 왜냐하면 `Controller`는 그것에 대해 알고 반응해야 하고, 정보가 `Model`에 영향을 줄 수도 있기 때문이다.
  - 따라서 주고받는 정보들이 많을 것이고, `should`, `will`, `did` 같은 말이 포함될 것 이다.
  - `View`의 하위종속자들은 다양한 질문을 하고 싶어하는데 `should`, `will`, `did` 같은 말이 포함되면 `delegate`라는 것을 통해 이뤄진다.
  - `delegate`는 위임이라는 뜻인데, `View`의 하위종속자들이 컨트롤러에게 어떤 책임을 위임하고 있기 때문에 이러한 단어를 사용한다.
  - `delegate`는 `View` 안에 있는 프로퍼티다.

- `datasource`
  - `View`는 자신이 보여주고 있는 데이터를 소유할 수 없다.
  - `View`는 `Controller`에게 매번 물어보고, 컨트롤러는 모델에서 데이터를 가지고 와서 표시한다.
  - 이것은 `delegate`와 다른종류의 프로토콜이다.
  - `should`, `will`, `did` 대신 다른 프로토콜의 메시지를 받는다.
  - `View`는 이곳에 있는 데이터를 달라고하거나, 데이터의 개수와 현상태를 파악 후, 그걸 화면에 보여준다.
  - 이것 또한 델리게이션 과정으로 이루어지는데 여기서 쓰이는 `delegate`가 바로 데이터소스다.

<br />

> ### 출처

- [🎀](https://newindow.tistory.com/66)
- [🎁](https://velog.io/@hayeon/MVC-%EA%B5%AC%EC%A1%B0%EC%97%90-%EB%8C%80%ED%95%B4-%EA%B0%81-%EC%97%AD%ED%95%A0%EA%B3%BC-%ED%9D%90%EB%A6%84%EC%9D%84-%EC%84%A4%EB%AA%85%ED%95%98%EC%8B%9C%EC%98%A4)

<br />

## 데이터바인딩

- 웹 페이지를 구현할 때 서버에서 변경된 데이터를 실시간으로 프론트앤드에 반영시켜 주는 것 (동기화)
  - 화면에 보이는 데이터와 브러우저 메모리에 있는 데이터를 일치시키는 기법 
  - 데이터 값이 변경 되면 페이지 전환 없이 변경된 데이터가 바로 랜더링 된다.

- `MVC 구조`를 가진다.
  - `Model`과 `View`를 묶어 `Controller`가 동기화 시켜주는 것과 유사
 
<br />

> ### 단방향 데이터 바인딩

- `Data`와 `Template`을 결합해 `View`를 생성하는 것
  - `JS` -> `HTML`만 가능 

- `Data` 흐름이 단방향(부모->자식)으로 이루어 지기 때문에 `View`이 바로 업데이트 되지 않는다.

<br />

> #### 장점

- 데이터 변화에 따른 성능 저하 없이 `DOM객체` 갱신이 가능하다.

- 흐름이 단방향이기 때문에 코드를 이해하기 쉽고, 데이터의 추적과 디버깅이 쉽다.

<br />

> #### 단점

- 변화를 감지하고 화면을 업데이트하는 코드를 매번 작성해야 한다.

<br />

> ### 양방향 데이터 바인딩

- 프론트/백앤드의 양쪽 `Data`가 모두 일치하여 `View`에서 같게 보이는 것
  - `JS` <-> `HTML` 가능 

- `Data`의 변화를 감지해 `Template`과 결합하여 `View`를 갱신하며, 갱신되는 `View`에 따라 `Data`도 같이 갱신된다.
  - `Data` 변경에 따라 프레임워크를 통해 양방향(부모<->자식)으로 이러어지며 `View`가 즉각 업데이트 된다. 

<br />

> #### 장점

- 코드량을 크게 줄여준다.

- 유지보수 및 코드 관리가 쉬워 진다.

<br />

> #### 단점

- 변화에 따라 `DOM 객체` 전체를 렌더링 해주거나 실시간으로 데이터를 바꿔주기 때문에 성능이 감소되는 경우가 있다.

<br />

> ### 데이터 바인딩 관련 웹 프레임워크 3대장

<br />

🛑 Angulat

- 앵귤러 프레임워크는 데이터의 흐름에 따라 단방향 바인딩, 양방향 바인딩이 존재한다.

- 단방향 바인딩인 경우 삽입식, 프로퍼티 바인딩, 이벤트 바인딩이 있다.

<br />

🌐 React

- 리액트 프레임워크는 단방향 바인딩이 존재하며 단방향 바인딩의 구동 원리는 다음과 같다.

- Javascript -> HTML 방향으로 데이터 바인딩이 가능하며, JSX 언어를 사용해 DOM을 생성한다.

<br />

🔰 Vue

- 뷰 프레임임워크는 리액트와 앵귤러의 장점을 결합한듯 단방향 바인딩, 양방향 바인딩이 존재한다.

- React에 비해 렌더링 시스템이 빠르고 효율적이다.

- 그러나 재구조화가 쉽지 않으므로 큰 규모의 웹앱 상에서는 불편함을 느낄 수 있다.

<br />

> ### 결론

웹 애플리케이션의 복잡도가 갈수록 향상되면서 브라우저 메모리가

자바스크립트 객체와 화면에 있는 데이터를 맞추는데 큰 어려움이 생기고 있다.

이러한 상황을 쉽게 해결 해주기 위해 '데이터 바인딩'이 있는 것이다.
