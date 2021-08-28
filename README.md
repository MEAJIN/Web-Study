# Web_in_codeit
웹 프론트엔드를 공부하면서 실습했던 과제 및 프로젝트들을 담고 있습니다. 또한, 웹 프론트엔드를 공부하면서 알아두면 유용 할 것 같은 부분들은 README에 정리하며 기록하고 있습니다.

### 학습 기간
- 21.08.25 ~ 27 HTML/CSS 기초 (완)
- 21.08.28 ~ HTML/CSS 핵심 (학습중)

### 목차

- CSS 폰트

  - [기본 폰트(default)](#기본-폰트)
  - [폰트 파일 사용법](#폰트-파일-사용법)
    - [폰트 파일 사용 시, 알아 두면 좋은 점](#@font-face,-이것-만은-알아두자!)
  - [스타일 시트를 활용한 폰트 사용법](#특정-스타일-시트에서-또-다른-스타일-시트를-활용한-폰트-사용법)
    - [스타일 시트를 활용한 폰트 사용 시, 알아 두면 좋은 점](#@import-&-link,-이것-만은-알아두자!)
  - [폰트 참고 사이트](#폰트-참고-사이트)

<br />

## CSS 폰트

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

```
@font-face {
  src : url("폰트 파일 경로");
  font-family: "폰트 별명";
}

입력 후,

p {
  font-family: "폰트 별명";
}

로 사용
```

#### @font-face, 이것 만은 알아두자!
  - @font-face를 사용함으로써 사이트에 추가적인 요청(HTTP)이 들어갈 수도 있음
  - 결과적으로 '웹 사이트 속도가 느려짐'
  
  - 따라서 font-weight 또는 font-style 기능을 최대한 적게 사용하고, character set을 가볍게 해서 파일 크기를 줄여야 함
  
- *character set : 정보를 표현하기 위한 글자들의 집합을 정의한 것 (http://hell0-world.com/etc/2020/05/09/ChracterSet.html)*

<br />

> ### 특정 스타일 시트에서 또 다른 스타일 시트를 활용한 폰트 사용법 <br>

```
1. @import ".css 파일명"; *문자 형식*
2. @import url(".css 파일명"); *url 형식*
```

#### @import & link, 이것 만은 알아두자!
  - Q : @import 방식과 link 방식 중 어떤 방법이 더 효율적일까? 
  - A : link 방식 (외부 스타일) 방식이 더 '효율적' 이다.
  
  - Why?
    - @import 방식의 경우 @import 된 css들을 '직렬' 로딩 방식으로 불러오고,
    - 외부 스타일 방식의 경우 '병렬' 로딩 방식으로 css를 불러오기 때문.<br><br>
    
 예를 들어, 아래와 같은 __@import 방식__ 의 경우 test1.css를 불러온 뒤에 test2.css, test3.css를 차례로 불러온다.
 
  ```
  @import "test1.css";  /* 1번째 */
  @import "test2.css";  /* 2번째 */
  @import "test3.css";  /* 3번째 */
  ```
  
즉, css를 하나하나 순차적(직렬 로딩)으로 불러오기 때문에 css의 양이 얼마 되지 않는다면 크게 상관이 없겠지만, __css의 양이 방대해진다면__ 페이지 로딩속도가 현저히 '느려질 것'이다.

반면 아래의 __link 방식 (외부 스타일 방식)__ 의 경우, test1.css와 test2.css, test3.css가 동시에 로딩(병렬 로딩)하여 불러오기 때문에 페이지 로딩 속도가 @import 방식에 비해 빠르고 효율적이다.

  ```
  <link rel="stylesheet" href="test1.css">
  <link rel="stylesheet" href="test2.css">
  <link rel="stylesheet" href="test3.css">
  ```
  <br />
  
- 결론 : 로딩 문제나 edge 브라우저 버그 문제 등을 고려한다면 link 방식을 사용하자.
 
 <br />

> ### 폰트 참고 사이트
- <https://fonts.google.com/> *영문체*
- https://fonts.google.com/earlyaccess *한글체, Ctrl+F > korean*

<br />

## CSS display 속성: inline, block, inline-block
CSS에서 `display` 속성은 웹 페이지 상에서 엘리먼트들이 어떻게 보여지고 다른 엘리먼트와 어떻게 상호 배치되는지를 결정한다.

> ### Inline
`display` 속성이 `inline`으로 지정된 엘리먼트는 전후 줄바꿈 없이 한 줄에 다른 엘리먼트들과 나란히 배치된다. 대표적인 `inline` 엘리먼트로 `<span>`이나 `<a>`, `<em>` 태그 등이 있다.

예를 들어, 여러개의 `inline` 엘리먼트들을 아래와 같이 마크업하면 줄바꿈 없이 순서대로 한 줄에 보이게 된다.

```
// HTML 

before
<a>A</a>
<span>SPAN</span>
<em>EM</em>
after

// CSS

span {
  background: yellow;
  width: 200px;
  height: 50px;
  margin: 20px;
  padding: 10px;
}
```

#### 출력 화면
![inline](https://user-images.githubusercontent.com/75716255/131222899-03886dba-d14c-49c3-a316-62834b1b34f3.png)
