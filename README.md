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

```bash
npm i -D css-loader
```

```js
var path = require("path");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  // .js파일에서 css를 모듈로써 임포트할때 로더가 필요한 것
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

```bash
npm i node-sass sass-loader style-loader
```

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
      // style-loader: 해당 CSS 파일이 웹 애플리케이션에 인라인 스타일 태그로 추가되게함
      // 로더 use 배열의 로더 적용 순서는 오른쪽에서 왼쪽!
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
```

- 플러그인 사용하기

```js
var path = require("path");
var webpack = require("webpack");
// npm install --save-dev html-webpack-plugin
// 웹팩으로 빌드한 결과물로 HTML 파일을 생성해주는 플러그인
var HtmlWebpackPlugin = require("html-webpack-plugin");

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
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  // 플러그인 배열에 생성자 키워드로 인스턴스 선언
  // 플러그인은 클래스로 이루어져있다고 함
  plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
};
```

### 활용

- 기초적인 코드 스플리팅

```js
// css loader에 플러그인을 적용하여 css 파일을 따로 빼는 과정

var path = require("path");
var webpack = require("webpack");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 로더 플러그인은 여기다가 객체로 등록해준다
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  // 새로운 플러그인 인스턴스 추가
  plugins: [new webpack.ProgressPlugin(), new MiniCssExtractPlugin()],
};
```

- 웹팩 데브 서버 + 소스맵 활용
- mode 알아보기

### 이후

- 트리 쉐이킹
- 코드 스플리팅 + 그리고 그게 어떨 때 좋은지
- 비동기 번들 로딩(레이지 로딩) 구현
- 커스텀 로더 만들기
- 커스텀 플러그인 만들기

## 📝 커밋 규칙

> 단계명:단계번호. 단계내용 완료

ex : 기초: 2.css 로더 사용하기

## reference

- [캡틴판교 - 웹팩 핸드북](https://joshua1988.github.io/webpack-guide/)
- [실전 리액트 프로그래밍 - 7.4 웹팩 고급편](http://www.yes24.com/Product/Goods/74223605)
- [webpack official documentation](https://webpack.js.org/)
