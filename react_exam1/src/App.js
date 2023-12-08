import logo from './logo.svg';
// import './App.css';

import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function App() {
  let name = "채원이";
  const style = {
    App: {
      backgroundColor: "black"
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

  return (
    // <div className="App">
    <div style={style.App}>
      <MyHeader />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 style={style.h2}>안녕 {name}!</h2>
        <b style={style.bold_text} id="bold_text">
          React.js에서는 숫자나 문자열만 표현할 수 있다! {func()} {5+5} <br></br>
          {number}는 {number%2 === 0 ? "짝수" : "홀수"}
        </b>
      </header>

      <MyFooter />
    </div>
  );
}

export default App;
