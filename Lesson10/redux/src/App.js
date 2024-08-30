import logo from './logo.svg';
import './App.css';
import {createContext, useEffect, useState} from 'react';
import Effect from './components/Effect';
import Content from './components/Content';
import Example from './components/Example';
import Ref from './components/Ref';
import Reducer from './components/Reducer';
import ContentUseCallback from './components/ContentUseCallback';
import ExUseMemo from './components/ExUseMemo';

function App() {
  const lists = ["arr1","arr2"];
  const [count, setCount] =  useState(0);
  const [list, setList] = useState(lists);
  function handleList(){
    setList([
      ...list,
      parseInt(Math.random() *1000)
    ])
    
  }
  // useEffect
  useEffect(()=>{
    console.log("Render lại trang sẽ chạy vào useEffect(callback) này");
  })

  // Callback
  const handleInscrease = () =>{
    setCount(pre => pre+1)
  }

  return (
    <div>
       {/* <h2>Tìm hiểu về State</h2>
       <div>
        <p>You click {count} times</p>
        <p>
          List: {list.toString()}
        </p>
        <button onClick={()=>setCount(count+1)}>Click me</button>
        <button onClick={handleList}>Click me</button>
       </div>
       <Effect count = {count}/>

      <Example/>
      <Ref/>
      <Reducer/>

      <ContentUseCallback OnIncrease ={handleInscrease}>

      </ContentUseCallback> */}
      <ExUseMemo/>
    </div>
  );
}

export default App;
