import React from "react";
import logo from "./logo.svg";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import styled from "styled-components";

// 클래스형 컴포넌트는 이렇게 생겼습니다!
class Testing extends React.Component {
    constructor(props) {
        super(props);
        this.text = React.createRef();
    }

    componentDidMount(){
        // 콘솔에서 확인해보자!
        console.log(this.text);
        console.log(this.text.current);
        this.text.current.focus();
    }

    // 랜더 함수 안에 리액트 엘리먼트를 넣어줍니다!
    render() {

        return (
            <div className="App">
                <div>
                    <input type="text" ref={this.text}/>
                </div>
            </div>
        );
    }
}

export default Testing;