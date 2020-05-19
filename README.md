# 🌐📦 Webpack Tutorial

## 🏃🏻‍♀️ 연습 순서

실습 끝나면 `webpack.config.js` 파일의 코드 블락을 첨부하자

### 기초

- 초기 빌드 설정

```js
var path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

- css 로더 사용하기

```js
var path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
    ],
  },
};
```

- sass 로더, style 로더 사용하기
- 플러그인 사용하기

### 활용

- 기초적인 코드 스플리팅
- 웹팩 데브 서버 + 소스맵 활용
- mode 알아보기

### 이후

- 플러그인의 실제 적용 효과 눈으로 확인하기(의도대로 표현할 수 있도록)
- 코드 스플리팅의 효용 알아보기
- 웹팩 이용한 비동기 번들 로딩(레이지 로딩) 구현

## 📝 커밋 규칙

> 단계명:단계번호. 단계내용 완료

ex : 기초: 2.css 로더 사용하기

## reference

- [캡틴판교 - 웹팩 핸드북](https://joshua1988.github.io/webpack-guide/)
- [webpack official documentation](https://webpack.js.org/)
