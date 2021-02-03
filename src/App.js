import React from "react"
import './App.css'

import Start from "./Start";
import Quiz from "./Quiz";
import Score from "./Score";

/*2주차 44:39*/
/*2주차 44:39*/

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "골든 리트리버",
            page: "quiz",
            list: [
                {question: "골든리트리버는 1살이다.", answer: "0"},
                {question: "골든리트리버는 2살이다.", answer: "0"},
                {question: "골든리트리버는 3살이다.", answer: "0"},
                {question: "골든리트리버는 4살이다.", answer: "0"},
                {question: "골든리트리버는 5살이다.", answer: "0"},
            ],
            scoreMsg:"이 정도면 아주 친한 친구사이! 더 친하게 지내요 :)"
        };
    }

    render() {
        return (
            <div className="App">

                {this.state.page === "quiz" && (<Quiz list={this.state.list} />)} {/*//앞에 조건이 참일때만 Quiz컴포넌트실행*/}
                {this.state.page === "start" && (<Start name={this.state.name} />)}
                {this.state.page === "score" && (<Score name={this.state.name} scoreMsg={this.state.scoreMsg}/>)}

            </div>
        )
    }
}

export default App;
