import './App.css';
import { useState } from 'react';

function App() {
  const posts = [
    '첫번째 글', '두번째 글', '세번째 글'
  ]
  let name = '홍길동'
  const [likes, setLikes] = useState([0, 0, 0, 0])

  // 좋아요 버튼 클릭++ 함수
  function btnLike(key) {
    let copy = [...likes];
    copy[key] += 1; // 해당 키의 값 1증가
    setLikes(copy); // state update
  }

  return (
    <>
      <h1>{name}의 홈페이지</h1>
      {
        likes.map((like, key) => {
          return (
            <div key={key}>
              <button 
                onClick={() => {
                  btnLike(key)
                }}
              >좋아요</button>
              <span>{like}</span>
            </div>
          )
        })
      }

      {
        posts.map((값, key) => {
          return <p key={key}>{값}</p>
        })
      }
    </>
  );
}

export default App;