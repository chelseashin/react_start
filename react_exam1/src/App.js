// import logo from './logo.svg';
// import './App.css';

import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';

function App() {
  let name = "채원이";
  const style = {
    App: {
      backgroundColor: "white"
    },
    h2: {
      color: "red",
    },
    bold_text: {
      color: "green"
    },
  };

  const func = () => {
    return "func func !!"
  };
  
  const number = 5;
  const counterProps = {
    a: 1,
    b: 2, 
    c: 3,
    d: 4,
    e: 5,
    initialValue: 50
  }

  return (
    // <div className="App">
    <div style={style.App}>
      <MyHeader />

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2 style={style.h2}>안녕 {name}!</h2>
        <b style={style.bold_text} id="bold_text">
          React.js에서는 숫자나 문자열만 표현할 수 있다! {func()} {5+5} <br></br>
          {number}는 {number%2 === 0 ? "짝수" : "홀수"}
        </b>
      </header>
      {/* 부모 컴포넌트인 App컴포넌트에서 자식 컴포넌트인 Counter로 컴포넌트에게 어떤 값을 이름을 붙여서 전달하는 방식을 prop이라고 함 */}
      {/* <Counter initialValue={10} a={1} b={2} c={3} d={4} e={5} /> */}
      <Counter {... counterProps}/>  {/* Spread 연산자 사용해 전달하기 */}
      <MyFooter />
    </div>
  );
}

export default App;
