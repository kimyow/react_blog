/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  let [title, updateTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학'])
    let [like, updateLike] = useState(0)
    function changeTitle() {
      let newArray = [...title];
      newArray[0] = '여자코트 추천';
        updateTitle(newArray)
    }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
        <button onClick={changeTitle}>제목 변경</button>
        <div className="list">
            <h3> {title[0]} <span onClick={ () => { updateLike(like + 1)}}>👍</span>{like}</h3>
            <p>2월 17일 발행</p>
            <hr/>
        </div>
        <div className="list">
            <h3> {title[1]} </h3>
            <p>2월 18일 발행</p>
            <hr/>
        </div>
        <div className="list">
            <h3> {title[2]} </h3>
            <p>2월 19일 발행</p>
            <hr/>
        </div>

        <Modal></Modal>

    </div>
  );
}

function Modal() {
    return (
        <div className="modal">
            <h3> 굳잡~!! </h3>
            <p>2월 19일 발행</p>
            <hr/>
        </div>
    )
}

export default App;
