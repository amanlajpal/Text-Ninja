import React, { useState } from 'react'

export default function Result(props) {
    const [text, setText] = useState("")
    const [para, setpara] = useState('')
    const onUpperCase = () => {
        setText('');
        setpara(text.toUpperCase());
        props.showAlert('UpperCase Done!!', 'warning')

    }
    const onLowerCase = () => {
        setText('');
        setpara(text.toLowerCase());
        props.showAlert('LowerCase Done!!', 'warning')

    }
    const onClear = () => {
        setText('');
        setpara("");
        props.showAlert('All Cleared', 'danger')
    }
    const onCopy = () => {
        navigator.clipboard.writeText(para);
        props.showAlert('Copied Successfully',"secondary")

    }
    const onMove = () => {
        setText(para)
        props.showAlert('Output Moved Successfully', "danger")

    }
    const onHtmlToJsx = () => {
        setText('');
        setpara(text.replace(/class=/gi, "className=").replace(/for=/gi, "htmlFor="));
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} autoFocus={true} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                <div className="buttons my-3">
                    <button disabled= {text.length===0} className="btn btn-primary mx-2" type="submit" onClick={onUpperCase}>Upper Case</button>
                    <button disabled= {text.length===0} className="btn btn-primary mx-2" type="submit" onClick={onLowerCase}>Lower Case</button>
                    <button disabled= {text.length===0} className="btn btn-primary mx-2" type="submit" onClick={onClear}>Clear</button>
                    <button disabled= {text.length===0} className="btn btn-primary mx-2" type="submit" onClick={onCopy}>Copy Output</button>
                    <button disabled= {text.length===0} className="btn btn-primary mx-2" type="submit" onClick={onHtmlToJsx}>Html to JSX</button>
                </div>
                <div className="textDetails">
                    <h2>Text Details</h2>
                    <p>character count: {text.length}, word count: {text.split(" ").filter((e)=>e!=='').length}</p>
                    <p>{0.008*text.split(" ").filter((e)=>e!=='').length} minute Read</p>
                    <div className="outputbox" style={para ? {} : { display: 'none' }}>
                        <h3>Output: </h3>
                        <p>{para}</p>
                        <button className="btn btn-primary my-2" type="submit" onClick={onMove}>Move Up</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
