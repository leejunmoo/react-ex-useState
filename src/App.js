import './App.css';
import { useState, useEffect } from 'react';
import Item from './components/item';

function App() {
  const [photos, setPhotos] = useState([])
  useEffect(()=> {
    // 앱이 실행되면 서버 데이터 요청
    // fetch 패치는 비동기함수
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        console.log(json) // 시간이 걸리면 기다리지않고 다음함수처리로넘어가기떄문에 console 로 받아놔야함
        setPhotos(json); // 데이터 추가
        console.log(photos)
      })
        
  }, []);
  return (
    <>
      <h1>서버에서 데이터 불러오기</h1>
      { // 맵함수 for문은 리액트에서는 사용할수 없음
        photos.map((photo, key) => {
          return <Item photo={photo} key={key}/>
        })
      }
      
    </>
  );
}

export default App;