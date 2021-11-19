//타이머 함수

const a = setTimeout(function (){
  console.log('setTimeout 함수 입니다')
}, 1000) //특정한 시간 후에 한번


const b = setInterval(function (){
  console.log('setInterval 함수 입니다')
}, 1000) //특정한 시간마다 반복

console.log(a, b)

//타이머 제거 함수

clearTimeout(a) //실행되고 있는 timeout 을 중지
clearInterval(b) //실행되고 있는 interval 을 중지
//=> 1 2



//타이머 만들기(직접 따라 해보기)
let time = 10; //기준시간 작성
let min = " "; //분
let sec = ""; //초

//setInterval(함수, 시간) : 주기적인 실행
let x = setInterval(function() {
  //parseInt() : 정수를 반환 - parseInt() 함수는 문자열 인자를 구문분석하여 특정 진수(수의 진법 체계에 기준이 되는 값)의 정수를 반환합니다.(MDN 출처)
  min = parseInt(time/60); //몫을 계산
  sec = time%60; //나머지를 계산

  document.getElementById("demo").innerHTML = min + "분" + sec + "초";
  time--;

  //타임아웃 시
  if(time < 0) {
    clearInterval(x); //setInterval()실행을 끝냄
    document.getElementById("demo").innerHTML = "시간초과";
  }
}, 1000);

// //이론 +
// parseInt() 함수에 대해 
// ex> parseInt("100, 2")는 문자열 "100"을 2진법으로 변환한다.
//     만약 첫번째 글자를 지정된 베이스로 변환할 수 없다면 NaN을 리턴한다.
