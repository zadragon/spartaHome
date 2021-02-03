import React from "react";
import img from "./dog.png";


const Start = (props) =>{

    return (
        <div className="container">
            <div className="outter">
                <img className="img" src={img} alt=""/>
                <h1>나는 <span>{props.name}</span> 에 대해 얼마나 알고있을까?</h1>
                <input className="text-box" type="text" placeholder="내용" />
                <button className="button">시작하기</button>
            </div>
        </div>
    )
}

export default Start;