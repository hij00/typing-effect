let target = document.querySelector("#dynamic");
// let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JAVASCRIPT"];
// let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
// // 스트링 배열 만큼의 랜덤한 숫자 생성
// // Math.floor로 배열의 소숫점 삭제(배열엔 소숫점이 들어갈 수 없음)
// let selectStringArr = selectString.split("");
// // .split("") => 문자열의 단어마다 나눠져 새로운 배열로 됨, 배열값을 하나씩 출력

function randomString() {
  let stringArr = ["Learn to HTML", "Learn to CSS", "Learn to JAVASCRIPT"];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

// 타이핑 리셋
function resetTyping() {
  target.textContent = "";

  dynamic(randomString());
}

// 한 글자씩 텍스트 출력 함수
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}
dynamic(randomString());

// console.log(selectStringArr);

// 나눠진 단어의 값이 randomArr로 전달

// 커서 깜빡임 효과
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);
