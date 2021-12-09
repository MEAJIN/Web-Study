## README 바로가기

- [HTML](https://github.com/MEAJIN/Web-Study/blob/main/README/HTML.md)
- [JS](https://github.com/MEAJIN/Web-Study/blob/main/README/JS.md)
- [삽질](https://github.com/MEAJIN/Web-Study/blob/main/README/%EC%82%BD%EC%A7%88.md)

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

- position
  
  - [static](#static)
  - [relative](#relative)
  - [absolute](#absolute)
  - [fixed](#fixed)
  - [flex](#flex)
  - [grid](#grid)

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

- Scroll

  - [scroll-behavior](#scroll-behavior)
  - [scroll-snap-type](#scroll-snap-type)

- 단위

  - [px](#px)
  - [rem](#rem)
  - [em](#em)
  - [%(퍼센트)](#퍼센트)
  - [vw, vh](#vw,-vh)

- 반응형

  - [@media](#반응형)

- Bootstrap(부트스트랩), (v5.0)

  - 그리드
    - [기본 구성원](#기본-구성원)
    - [기본 규격](#기본-규격)
    - [기본 사용법](#기본-사용법)
    - [한 행이 12칸을 넘어갈경우](#만약-한-행이-12칸을-넘어간다면?)
    - [다음 라인으로 행 옮기는 방법](#행을-다음-라인으로-옮기는-방법은?)
    - [왜 그리드는 12칸 일까?](#왜-12칸-일까?)
    - [그리드 참고 사이트](#그리드-참고-사이트)
   
  - 반응형 그리드
    - [반응형 구간](#부트스트랩에서-정해둔-반응형-구간)
    - [중단점](#중단점)
    - [컨테이너(container)](#Container)
    - [컨테이너 종류](#컨테이너-종류)
    - [열(column)](#Column)
    - [반응형 그리드 참고 사이트](#반응형-그리드-참고-사이트)

  - ::before & ::after
    - [Pseudo Element](#Pseudo-Element)
    - [::before & ::after](#before-와-after)

<br />
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

## position
`position` 이란 이름처럼 태그들의 위치를 결정하는 CSS이다.

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

## flex
- [flex 완벽 정리 블로그](https://studiomeal.com/archives/197)

- 콘텐츠가 레이아웃을 형성하게 할 경우 사용
  -[8:59 부터 시청](https://www.youtube.com/watch?v=18VLSXfsj94&t=523s)

<br />

## grid
- [grid 완벽 정리 블로그](https://studiomeal.com/archives/533)

- 레이아웃이 콘텐츠를 형성하게 할 경우 사용
  -[10:22 부터 시청](https://www.youtube.com/watch?v=18VLSXfsj94&t=523s)

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

## Scroll

<br />

> ### scroll-behavior

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)
- [CSS Tricks](https://css-tricks.com/almanac/properties/s/scroll-behavior/)

<br />

> ### scroll-snap-type

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type)
- [CSS Tricks](https://css-tricks.com/almanac/properties/s/scroll-snap-type/)

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

> ### vw, vh

- [vw, vh 정리 블로그](https://nykim.work/85)


<br />

## 반응형

> ### @media query
`@media query`는 화면(screen), 티비(tv), 프린터(print)와 같은 미디어 타입(media type)과 적어도 하나 이상의 표현식(expression)으로 구성된다. 표현식은 `width`, `height`, `color`와 같은 미디어 특성(media feature)들을 이용하여 그 특성들의 상태에 따라 다른 스타일 시트를 적용할 수 있다. 미디어 쿼리는 CSS3에 포함되어 있으며, 컨텐츠의 변경없이 주로 화면의 크기에 따라 스타일 시트를 달리하여 적절한 모양을 보여줄 수 있다. `@media query`는 `<link>` 요소로 사용하는 방법과, 스타일 시트 내에서 `@media`로 사용하는 방법이 있다.

<br />

우선 `<link>` 사용의 경우, 특성 조건이 맞을 때 css 파일을 불러오게 하는 방식이다. 아래 코드의 의미는 미디어 타입이 스크린이고, 화면의 최대 너비를 768px로 지정하라는 의미이다. 즉, 화면의 너비가 768px 이하 일때가 적용 된다는 뜻 이다.
```html
/* html */
/* <link> 요소 사용 */

<link rel="stylesheet" media="screen and (max-width: 768px)" href="mystyle.css" />
```

<br />

다음으로 스타일 시트 내에서 `@midia`를 사용하는 방법이다. 결과는 위의 코드와 동일하며, 조건이 맞을 시 {....} 안의 스타일이 적용되는 방식이다.
```css
/* css */
/* @media 사용 */

@media screen and (max-width: 768px) { 
    body { 
       background-color: lightgreen; 
       } 
}
```

<br />

#### 부가 설명

- `@media (max-width: 768px) {...}` 처럼 미디어 타입을 생략하면 all 이 기본값이 되어 모든 미디어 타입에 적용 된다. 미디어 타입에 사용되는 값은 여러종류가 있지만 웹 사이트를 만드는데는 screen을 사용하거나 all 을 사용하는것이 일반적이다.
	- 미디어 타입
		- all : 모든 장치
		- print : 프린터 미리보기 모드 일 때, 화면에서 볼 수 있는 [페이징](https://developer.mozilla.org/en-US/docs/Web/CSS/Paged_Media) 된 자료 및 문서에 사용
		- screen : 컴퓨터 화면
		- speach : 음성 합성기
		
- 미디어 특성에서 `max-width` 와 `min-width` 가 가장 일반적으로 쓰인다.. 그외 `height`, `color`, `orientation(화면의  가로 세로 방향)` 등이 있다.

- 반응형 웹을 만들때 스타일을 작성하는 기준으로 모바일을 우선할것인지, 데스크탑을 우선할 것인지가 먼저 고려되어지는 편이다.

- `and`, `or`, `not` 과 같은 연산자 사용 가능

<br />

## `Bootstrap`
*참고로 v4.- 은 xl 까지만 나옴. v5.0 부터 xxl 있음*

<br />

> ### 그리드

<br />

> #### 기본 구성원
부트스트랩(bootstrap) 그리드 시스템에는 `컨테이너 (container)`, `행 (row)`, `열 (column)` 이렇게 총 세 가지 구성원이 있다.

<br />

> #### 기본 규칙
- 행(`div class="row">`)은 꼭 컨테이너(`div class="container">`) 안에 넣어주자.
- 열(`div class="col">`)은 꼭 행(`div class="row">`)안에 넣어주자. 오직 열만 행의 직속 자식이 될 수 있다.
- 콘텐츠(그리드에 넣고 싶은 내용)는 꼭 열(`div class="col">`)안에 넣어주자.

<br />

> #### 기본 사용법
부트스트랩 그리드에는 한 줄에 기본적으로 12칸의 열(column)이 있다고 생각하면 편하다.
	
예를 들어서 한 줄을 정확히 3등분하고 싶으면 네 칸을 차지하는 열 세 개를 쓰면 되는 것 이다. 아래 예제에서 네 칸을 사용하는 열은 `<div class="col-4">`이다.

```html
/* html */

<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
</head>

<body>
  <div class="container">
    <div class="row">
      <!-- 정확히 3등분 -->
      <div class="col-4 first">first</div>
      <div class="col-4 second">second</div>
      <div class="col-4 third">third</div>
    </div>

    <div class="row">
      <!-- 정확히 2등분 -->
      <div class="col-6 first">first</div>
      <div class="col-6 second">second</div>
    </div>

    <div class="row">
      <!-- 1대 5 비율 -->
      <div class="col-2 first">first</div>
      <div class="col-10 second">second</div>
    </div>

    <div class="row">
      <!-- 1대 2대 1 비율 -->
      <div class="col-3 first">first</div>
      <div class="col-6 second">second</div>
      <div class="col-3 third">third</div>
    </div>
  </div>
</body>
```
```css
/* css */

<style>
  .container {
  text-align: center;
}

.first {
  background-color: yellow;
}

.second {
  background-color: lime;
}

.third {
  background-color: orange;
}
</style>
```

<br />

#### `출력화면`
![image](https://user-images.githubusercontent.com/75716255/134696874-219a6e33-875f-42dd-8310-13f9c6ccd94a.png)

<br />

> #### 만약 한 행이 12칸을 넘어간다면?
새로운 줄로 넘어가게 된다.

```html
/* html */

<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
</head>

<body>
  <div class="container">
    <div class="row">
      <div class="col-3 first">first</div>
      <div class="col-6 second">second</div>
      <div class="col-4 third">third</div>
      <div class="col-7 fourth">fourth</div>
    </div>
  </div>
</body>
```

```css
/* css */

.container {
  text-align: center;
}

.first {
  background-color: yellow;
}

.second {
  background-color: lime;
}

.third {
  background-color: orange;
}

.fourth {
  background-color: blue;
}
```

<br />

#### `출력화면`
![image](https://user-images.githubusercontent.com/75716255/134697170-075b0477-cf44-475c-bf38-ee870ce421be.png)

<br />

> #### 행을 다음 라인으로 옮기는 방법은?
`.w-100` 클래스를 사용하여 `column break` 값을 준다. 아래 예제를 보자.

```html
/* html */

<div class="container">
  <div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="w-100"></div> /* 이 부분  !! */
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
</div>
```

<br />

> #### 왜 12칸 일까?
12는 상당히 많은 숫자들(1, 2, 3, 4, 6, 12)로 나누어지기 때문에 굉장히 유연하다. 예를 들어서 8칸으로 나누고 싶더라도 12라는 숫자의 유연함 덕분에 쉽게 할 수 있다. col-6를 두 개 쓰면 2등분 할 수 있고, 그 안에서 또 col-3로 4등분을 하면 8칸이 생긴다. 이런식으로 열을 또 여러 열로 나누는 것을 `중첩(nesting)`한다고 부른다. 중첩을 하기 위해서는 우선 열(`<div class="col-6">`) 안에 새로운 행(`<div class="row">`)을 써야 한다. 아래 예제를 보자.

```html
/* html */

<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
</head>

<body>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="row"> <!-- 중첩을 위한 새로운 행 -->
          <div class="col-3 first">1</div>
          <div class="col-3 second">2</div>
          <div class="col-3 third">3</div>
          <div class="col-3 fourth">4</div>
        </div>
      </div>

      <div class="col-6">
        <div class="row"> <!-- 중첩을 위한 새로운 행 -->
          <div class="col-3 first">5</div>
          <div class="col-3 second">6</div>
          <div class="col-3 third">7</div>
          <div class="col-3 fourth">8</div>
        </div>
      </div>
    </div>
  </div>
</body>
```

```css
/* css */

.container {
  text-align: center;
}

.first {
  background-color: yellow;
}

.second {
  background-color: lime;
}

.third {
  background-color: orange;
}

.fourth {
  background-color: blue;
}
```

<br />

#### `출력화면`
![image](https://user-images.githubusercontent.com/75716255/134697842-ff9fcdce-512a-4387-bd48-bd0e6eae37ea.png)

<br />

> ### 그리드 참고 사이트
- [bootstrap css grid](http://bootstrapk.com/css/#grid)
- [bootstrap grid system(v5.0)](https://getbootstrap.com/docs/5.0/layout/grid/)
- [Bootstrap grid examples](https://getbootstrap.com/docs/5.0/examples/grid/#containers)
- [부트스트랩 그리드 정리 블로그](https://min-blog.tistory.com/entry/%EB%B6%80%ED%8A%B8%EC%8A%A4%ED%8A%B8%EB%9E%A9-%EA%B7%B8%EB%A6%AC%EB%93%9C?category=600307)
- 
<br />

> ## 반응형 그리드

> #### 부트스트랩에서 정해둔 반응형 구간

![image](https://user-images.githubusercontent.com/75716255/134704936-99e7458e-3da8-46e7-bcd1-5312b1a9d092.png)

- Extra Small (< 576px): 모바일
- Small (≥ 576px): 모바일
- Medium (≥ 768px): 타블릿
- Large (≥ 992px): 데스크탑
- Extra Large (≥ 1200px): 와이드 데스크탑
- Extra Extra Large (≥ 1400px): 와이드 데스크탑

<br />

> #### 중단점(Breakpoints)
`중단점`은 장치 또는 뷰포트 크기에 따라 레이아웃 응답이 어떻게 변경되는지에 대한 부트스트랩의 트리거이다. 

- 중단점은 반응형 디자인의 빌딩 블록이고 레이아웃을 특정 뷰포트 또는 장치 크기로 조정할 수 있는 시기를 제어하는 데 사용한다.

- 중단점은 미디어쿼리를 사용하여 중단점으로 CSS를 설계한다. 미디어쿼리는 브라우저 및 운영체제 매개변수 세트에 따라 조건부로 스타일을 적용할 수 있는 CSS 기능이다. (min-width 미디어 쿼리에서 가장 일반적으로 사용 됨)

- 모바일 우선, 반응형 디자인이 목표이다. 부트스트랩의 CSS는 최소한의 스타일을 적용하여 가장 작은 중단점에서 레이아웃이 작동하도록 한 다음 스타일에 레이어를 적용하여 더 큰 장치에 맞게 해당 디자인을 조정하는 것을 목표로 한다. 이는 CSS를 최적화 하고 렌더링 시간을 개선하며 방문자에게 훌륭한 경험을 제공해준다.

<br />

> ### Container
기본적으로 `컨테이너(Container)`는 가운데 정렬이 되어 있고, 그리드의 행들을 감싸주는 역할을 한다 (행들은 열들을 감싸고 있음). 

<br />

> #### 컨테이너 특징

- 컨테이너는 부트스트랩에서 가장 기본적인 레이아웃 요소이며, 기본 그리드 시스템을 사용할 때 필요하다.
- 컨테이너는 콘텐츠를 포함하거나 채우며 이를 중앙에 배치하는데 사용된다.
- 컨테이너는 중첩될 수 있지만 대부분의 레이아웃에는 중첩된 컨테이너가 필요하지 않다.

<br />

> #### 컨테이너 종류

[`여기`](https://getbootstrap.com/docs/5.0/examples/grid/#containers) 로 들어가면 반응형 컨테이너에 적용에 대한 결과를 직접 볼 수 있다. (화면 사이즈 조절 하면서 볼 것.)

![image](https://user-images.githubusercontent.com/75716255/134709946-b2d14976-4e5a-4cd7-b420-89b0d219c546.png)

- `.container` : 구간별로 그리드에 고정된 width를 설정해 준다. 
- `.container-fluid` : 그리드는 항상 width: 100%; 이다.
- `.container-{breakpoint}` : 지정 된 중단점 까지의 width: 100%; 이다.

<br />

__🔸 `.container`, 기본 컨테이너__

기본 `.container` 클래스는 반응형 고정 너비 컨테이너로, 각 중단점에서 최대폭이 변한다. 

만약 구간별로 그리드에 고정된 가로값을 설정해주고 싶으면 `.container` 클래스를 사용하면 된다. 구간별로 그리드가 고정되어 있으면 레이아웃 예측이 더욱 쉬워진다.

`.container` 클래스를 사용하면 아래의 CSS 코드가 적용된다.

```html
/* html */

<div class="container">
  <!-- Content here -->
</div>
```

```css
/* css */

.container {
  width: 100%; /* extra small */
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

/* small */
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

/* medium */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

/* large */
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

/* extra large */
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
```

<br />

__🔸 `.container-fluid`, 유체 컨테이너__

`.container-fluid`는 뷰포트의 전체 너비에 걸쳐있는 전체 너비 컨테이너에 사용한다. 이는 엽개 없이 100% 꽉 찬 레이아웃을 만들 때 사용한다.

`.container-fluid` 클래스를 사용하면 아래의 CSS 코드가 적용된다.

```css
/* css */

.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
```

<br />

__🔸 `.container-{breakpoint}`, 반응형 컨테이너__

`.container-{breakpoint}`인 반응형 컨테이너를 사용하면 지정된 중단점에 도달할 때까지 100% 너비의 클래스를 지정할 수 있으며, 그 후에는 각 상위 중단점에 최대 너비를 적용할 수 있다.

```html
/* html */

<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
<div class="container-xxl">100% wide until extra extra large breakpoint</div>
```

<br />

> ## Column
반응형 구간별로 (총12 칸 중) 열이 차기하는 칸의 개수도 다르게 할 수 있다.

<br />

> #### 예시1. 구간별로 모두 설정되어 있는 경우

```html
/* html */

<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
```

- Extra Small (< 576px): 12칸을 모두 차지
- Small (≥ 576px): 6칸 차지
- Medium (≥ 768px): 4칸 차지
- Large (≥ 992px): 3칸 차지
- Extra Large (≥ 1200px): 2칸 차지

<br />

> #### 예시2. 특정 구간만 설정되어 있는 경우

아래와 같이 특정 구간에만 열 수가 설정되어있는 경우, 그 구간부터 새로운 설정이 있는 상위 구간까지는 같은 칸 수를 차지한다.
```html
/* html */

<div class="col-12 col-lg-3">

```

- Extra Small (< 576px): 12칸을 모두 차지
- Small (≥ 576px): 12칸을 모두 차지
- Medium (≥ 768px): 12칸을 모두 차지
- Large (≥ 992px): 3칸 차지
- Extra Large (≥ 1200px): 3칸 차지

<br />

```html
/* html */

<div class="col-6">
```

- Extra Small (< 576px): 6칸 차지
- Small (≥ 576px): 6칸 차지
- Medium (≥ 768px): 6칸 차지
- Large (≥ 992px): 6칸 차지
- Extra Large (≥ 1200px): 6칸 차지

<br />

> ### 반응형 그리드 참고 사이트
- [부트스트랩 컨테이너 정리 블로그](https://min-blog.tistory.com/entry/%EB%B6%80%ED%8A%B8%EC%8A%A4%ED%8A%B8%EB%9E%A9-5-%EC%8B%9C%EC%9E%91)
- [bootstrap containers](https://getbootstrap.com/docs/5.0/layout/containers/)

<br />

## before & after

> ### Pseudo Element

`::before`과 `::after`는 CSS에서 소위 pseudo element라고 한다.

일반적인 CSS 선택자(selector)로는 지정할 수 없는 미세한 영역을 선택하기 위해서 사용된다.

CSS에는 `::before`과 `::after`뿐만 아니라 `::first-letter`, `::first-line`, `::selection`, `::marker` 등 다양한 [pseudo element](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)가 있다.

<br />

pseudo element는 선택자 뒤에 붙여주는데,

CSS3 문법 상 `:` 기호를 사용하는 pseudo class와 구분해주기 위해서

원칙적으로는 `::` 기호를 사용해야 하지만

`:` 기호를 사용하더라도 대부분 브라우저에서 문제없이 작동을 한다.

예를 들어, `::before` pseudo element는 다음과 같이 두가지 문법을 모두 사용할 수 있다.

```css
div::before {
  content: "before";
}
```

```css
div:before {
  content: "before";
}
```

<br />

> ### before 와 after

우선 아래 코드와 결과 화면을 보자.

```html
<ul>
  <li>HTML</li>
  <li class="heart">CSS</li>
  <li class="star">JavaScript</li>
  <li>NodeJS</li>
  <li class="heart">ReactJS</li>
  <li class="star">GraphQL</li>
</ul>
```

```css
HTML CSSResult Skip Results Iframe
EDIT ON
.star::before {
  content: "⭐";
}

.heart::after {
  content: "❤️";
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
```

<br />

> #### `출력화면`

목록에서 star 클래스가 적용된 항목은 앞에 별 아이콘이 붙어있고,

heart 클래스가 적용된 항목은 뒤에 하트 아이콘이 붙어 있는 것을 볼 수 있다.

<p align="center"><img href="https://user-images.githubusercontent.com/75716255/145275444-7868e32d-9ecc-4060-ae64-1801824610ce.png"></p>

<br />

CSS 코드를 보면 `star` 클래스에는 `::before`를

`heart` 클래스에는 `::after`를 사용하여

content 속성에 해당 아이콘을 명시해준 것을 볼 수 있다.

또한,

`::before` 또는 `::after`를 사용해서 `content`속성값이 선택된 엘리먼트의 앞 또는 뒤에 삽압되는 것을 알 수 있다.

```css
.star::before {
  content: "⭐";
}

.heart::after {
  content: "❤️";
}
```

<br />

브라우저 개발자 도구로 좀 더 자세히 해당 엘리먼트를 살펴보면,

`::before`/`::after`라는 placeholder가 엘리먼트 안에 삽입된 것을 볼 수 있다.

```html
<li class="heart">
  "CSS"
  ::after
</li>
<li class="star">
  ::before
  JavaScript
</li>
```

<br />

여기서 알 수 있는 `::before`/`::after` 사용 시 주의점이 바로

해당 엘리먼트 앞뒤로 새로운 엘리먼트가 삽입되는 것이 아닌,

해당 엘리먼트 내부의 맨 앞 또는 맨 뒤에 컨텐츠가 삽인 된다는 것 이다.

참고로, `content` 속성에는 단순 텍스트 뿐만 아니라 이미지도 사용할 수 있다.
