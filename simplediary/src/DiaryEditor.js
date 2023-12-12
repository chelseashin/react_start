import { useState } from "react";

const DiaryEditor = () => {
    // 1. State 합치기
    // author, content와 같이 동작이 비슷한 State는 나누지 않고 한 번에 State라는 변수로 묶을 수 있음!
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 3,
    })
    
    // 2. Event 함수 합치기(onChange 부분이 아래에서 겹치므로 하나로 쓰기 위함)
    const handleChangeState = (e) => {
        // console.log(e.target.name, ">>>", e.target.value);

        setState({
        ...state,
        [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = () => {
        console.log(state)
        alert("오늘의 일기 저장 성공!");
    }

    //const [author, setAuthor] = useState("");
    ///const [content, setContent] = useState("");
    
    return (
    <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input 
                name = "author"
                value={state.author} 
                // onChange={(e)=>{
                //     // console.log("author >>> ", e.target.value, e.target.name, state);
                //     // setAuthor(e.target.value);
                //     setState({
                //         author: e.target.value,
                //         content: state.content,    // 방식 1. State 내 변수들을 일일이 써서 값을 유지함
                //     })
                // }} 
                onChange={handleChangeState}
            />
        </div>
        <div>
            <textarea 
                name="content"
                value={state.content} 
                // onChange={(e) => {
                // // console.log("contest >>> ", e.target.value);
                // // setContent(e.target.value)
                // setState({
                //     ...state,    // 방식 2. spread 연산자를 넣어 10개 20개가 되더라도 한 줄로 표현, 반드시 가장 첫 줄에 써줘야 함!!!
                //     content: e.target.value,    // 변경하고자 하는 property를 가장 마지막에 적어줌
                // })
                // }}
                onChange={handleChangeState}
            />
        </div>
        <div>
            <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>일기 저장하기</button>
        </div>
    </div>
    );
};

export default DiaryEditor;