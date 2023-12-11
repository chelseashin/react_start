import React, { useState } from 'react';
import OddEvenResult from './OddEvenResult';    

// 부모 컴포넌트에서 내려준 props를 매개변수를 통해 받아와 사용
// const Counter = (props) => {
const Counter = ({initialValue}) => {    // 비구조화 할당 방식
    // console.log("Counter 호출!", initialValue);
    // 0에서 출발, +누르면 1증가, -누르면 1감소, counter 만들기
    // count: 상태의 값으로 사용, setCount: count라는 값을 변화시키는 상태변화 함수로써 사용 , 0은 초기값으로 사용
    const [count, setCount] = useState(initialValue);
    // useState: 배열 반환하고, 배열의 비구조 할당을 통해 0번째 인덱스 카운트, 1번째 인덱스를 setCount라는 상수로 받아온 것을 확인

    const onIncrease = () => {
        setCount(count + 1);
    };

    const onDecrease = () => { 
        setCount(count - 1);
    };

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>

            <OddEvenResult count={count} />
        </div>
    )
};

Counter.defaultProps={
    initialValue: 0
}

export default Counter;