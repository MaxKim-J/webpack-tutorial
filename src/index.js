import _ from "lodash";
// 자바스크립트 파일에서 css를 임포트할때가 문제
import "./style/index.css";
import "./style/index.scss";

console.log("css loaded");

function component() {
  var app = document.querySelector(".app");
  var element = app.createElement("div");
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

document.body.appendChild(component());
