const OddEvenResult = ({count}) => {
    console.log("Render!", count);
    return <>{count%2 === 0 ? "짝수" : "홀수"}</>;
};


export default OddEvenResult;