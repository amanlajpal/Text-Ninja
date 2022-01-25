import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter your text here");

    // const upClickHandle = () => {
    //     setText(text.toUpperCase());
    //     // const button = document.querySelectorAll(".btn")[1]
    //     // console.log(button.textContent)

    //     // button.textContent = "toLowerCase"
    // }
    let numberoftimes=0;
    const button = document.getElementsByClassName(".btn")[1]
    const handleClickEvent2 =()=>{
       
        if(numberoftimes===0){
            setText(text.toLowerCase());           
            numberoftimes=numberoftimes+1;
            button.textContent="UpperCase"
        }else{
            setText(text.toUpperCase());
            numberoftimes=numberoftimes-1;
            button.textContent="LowerCase"
        }
        
    }

    

    const onChangeHandle = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <div className="container my-3">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={onChangeHandle} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                {/* <button className="btn btn-primary mx-2" onClick={upClickHandle}>Uppercase</button> */}
                <button className="btn btn-dark mx-2" onClick={handleClickEvent2} type="submit">LowerCase</button>
                {/* <button className="btn btn-success mx-2" onClick={handleClickEvent3}type="submit">Length</button> */}
            </div>
            <div className="container my-3">
                <h1>Text Details</h1>
                <p>Words is {text.split(" ").length} and length chanracter is {text.length}</p>
                <p>Time Taken{0.008 * text.split(" ").length}</p>
                <h2>Result For</h2>
                <textarea className="form-control" value={text} onChange={onChangeHandle} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
        </>
    )
}
