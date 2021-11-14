## README 바로가기

- [HTML](https://github.com/MEAJIN/Web-Study/blob/main/README/HTML.md)
- [CSS](https://github.com/MEAJIN/Web-Study/blob/main/README/CSS.md)

## JavaScript / jQuery

- 기본

  - [추상화](#추상화)
  - [작명](#작명)

- LV.1

  - 자바스크립트의 목적과 셀렉터(Selector)
    - [목적](#목적)
      - 조작과 변경
      - 응용
    - [셀렉터, Selector](#셀렉터,-Selector)

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
    
<br />
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
향후 복잡한 프로그램을 짜게 되면 변수와 함수를 여기저기서 적절히 활용해야 하는데, 이름이 a, b, c, d처럼 의미 없이 설정되어 있으면 어떤 값을 저장해뒀는지 찾기도 어렵고 활용하기도 어렵다. 또한 프로그램의 가독성이 떨어져서 나중에 스스로 프로그램을 살펴볼 때, 그리고 공동 작업을 할 때 매우 불편한 상황이 발생한다. 그래서 프로그래밍 초반부터 적절한 이름을 짓는 습관을 들이는 것이 좋다!

```js

let a, b, c, d;
```

__2. 너무 추상적인 이름은 좋지 않다.__
상황에 따라 그냥 name이라는 변수명이 적합한 상황도 있을 수 있겠지만, 긴 프로그램을 쓰다 보면 다양한 '이름'들이 있기 때문에 name은 너무 추상적일 수 있다. 그럴 때는 조금 더 구체적인 이름으로 이해하기 쉽게 만들어주자!

```js

let name; // 너무 추상적인 이름
```

__3. 모든 변수 이름은 'camelCase'로 쓰는 것이 좋다.__
변수명에는 띄어쓰기가 불가능하기 때문에, 띄어쓰기 역할을 대신 할 무언가가 필요하다. 그중 하나가 `camelCase`라는 것인데, __첫 번째 글자는 소문자로 하고 띄어쓰기가 있는 각 단어의 첫 문자를 대문자로 표기하는 방식__ 이다. 중간중간의 대문자가 낙타(camel)의 혹처럼 생겨서 camelCase라고 부른다.

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

> ### 셀렉터, Selector

`셀렉터(Selector)`는 HTML __요소를 찾기 위해 사용__ 된다.

`innerHTML.style.color`는 메소드(또는 함수)라고 부르는데, 이는 HTML __요소의 어떤 속성을 변경할지 결정하기 위해 사용__ 한다.

그런데 HTML요소의 변경가능한 속성들은 무궁무진하게 많다. `src`, `href`, `font-size` 등 수없이 많다는 것이다.

그 속성들을 바꾸려면 셀렉터 뒤에 정확한 메소드이름을 붙여주어야 하는데, 메소드는 종류가 수백개이기 때문에 전부 외워서 사용할 수 없다.

그렇기 때문에 필요할 때마다 구글에 검색해서 찾아쓰는게 초보의 올바른 자바스크립트 활용법이다.

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

