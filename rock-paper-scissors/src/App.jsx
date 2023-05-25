import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

/* 
    1.박스 2개 (타이틀, 사진, 결과)
    2.가위, 바위, 보 버튼
    3.버튼을 클릭 -> 클릭한 아이템이 유저 박스에 보임
    4.버튼을 클릭 -> 컴퓨터 박스에 랜덤 아이템이 보임
    5.3, 4번 승패
    6.결과에 따라 박스 테두리, 글씨 색 변화(승 : 파랑색, 패 : 회색)
*/
function App() {
    const [userSelect, setUserSelect] = useState();
    const [comSelect, setComSelect] = useState();
    const [result, setResult] = useState("");

    const choice = {
        scissors: {
            name: "Scissors",
            img: "scissors.png",
        },
        rock: {
            name: "Rock",
            img: "rock.png",
        },
        paper: {
            name: "Paper",
            img: "paper.png",
        },
    };

    const play = (userChoice) => {
        setUserSelect(choice[userChoice]);
        let comChoice = randomChoice();
        setComSelect(comChoice);

        setResult(judgement(choice[userChoice], comChoice));
    };

    const judgement = (user, com) => {
        /* 
            유저 == 컴퓨터 : 비김 tie
            유저 == rock, 컴퓨터 == scissors : 유저 win
            유저 == rock, 컴퓨터 == paper : 유저 lose
            유저 == scissors, 컴퓨터 == paper : 유저 win
            유저 == scissors, 컴퓨터 == rock : 유저 lose
            유저 == paper, 컴퓨터 == rock : 유저 win
            유저 == paper, 컴퓨터 == scissors : 유저 lose
        */
        if (user.name === com.name) {
            return "tie";
        } else if (user.name === "Rock") {
            return com.name === "Scissors" ? "win" : "lose";
        } else if (user.name === "Scissors") {
            return com.name === "Paper" ? "win" : "lose";
        } else if (user.name === "Paper") {
            return com.name === "Rock" ? "win" : "lose";
        }
    };

    const randomChoice = () => {
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
    };

    return (
        <>
            <div className="main">
                <Box title="My" item={userSelect} result={result} />
                <Box title="Computer" item={comSelect} result={result} />
            </div>
            <div className="main">
                <button onClick={() => play("scissors")}>가위</button>
                <button onClick={() => play("rock")}>바위</button>
                <button onClick={() => play("paper")}>보</button>
            </div>
            <p className="main resultP">{result}</p>
        </>
    );
}

export default App;
