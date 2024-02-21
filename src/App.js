import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = "강남 우동 맛집";
  //let [글제목,b] = useState("남자 코트 추천"); //useState도 디스트럭처링 문법처럼 남는다.
  //let [글제목2,bb] = useState("강남 우동 맛집");
  //let [글제목3,bbb] = useState("파이썬 독학");

  let [글제목,글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]); // array 방식으로 사용가능
  // ["남자 코트 추천", 함수] 이렇게 들어간다.
  // 변수가 아닌 state로 데이터를 저장해야 하는 이유는 값이 바뀔 경우 자동으로
  // 렌더링이 되어 실제 html에서도 자동 재랜더링 되어 번영이 된다.


  let num = [1,2];
  //let a = num[0];
  //let c = num[1]; 아래와 같다.
  let [a,c] = [1,2]; //디스트럭처링 문법

  let [따봉,따봉변경] = useState(0);
    return (
    <div className="App">
      <div className="black_nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={()=>{
        let copy = [...글제목].sort();
        글제목변경(copy);
      }}>가나다순정렬</button>
      <button onClick={()=>{
        //state 변경 방법, 원본데이터는 건들지 말고 copy해서 사용한다.
        let copy = [...글제목]; // 카피할 때는 [...문법] 을 사용한다.
        copy[0] = "여자 코트 추천";
        글제목변경(copy) //기존 state(글제목)과 신규state(copy)가 같을 경우 변경을 안해줌 (주소기준)
        }}>변경</button>
      <div className="list">
        <h4>{글제목[0]} <span onClick={()=> 따봉변경(따봉 + 1)}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal></Modal>
    </div>
  );
}

//방식 1
const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

Modal = 'asd';
//const로 만들면 좋은 이유는 만약 다른 작업자가 실수로 Modal = 'asfas'로 바꾸어도 바뀌지 않음

//방식 2
function Modal(){
  return(
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
