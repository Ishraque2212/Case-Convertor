import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        console.log("Handle on Change");
        setText(event.target.value)
    }

    const handleUpClick = () => {
        console.log("Upper Case clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        console.log("Lower Case clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearText = () => {
        console.log("Cleared");
        let newText = "";
        setText(newText);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    function toCapitalizedCase() {
        let newText = text.toLowerCase().replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
        setText(newText);
    }

    const handleReverseClick = () => {
        console.log("Reverse Case clicked");
        let newText = "";
        for (let i = 0; i < text.length; i++) {
            if (text[i] === text[i].toLowerCase()) {
                newText += text[i].toUpperCase();
            } else {
                newText += text[i].toLowerCase();
            }
        }
        setText(newText);
    }

    function downloadText() {
        const element = document.createElement('a');
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'Text.txt';
        document.body.appendChild(element);
        element.click();
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        alert("Text Copied");
    }

    function toAlternatingCase(s) {
        let result = '';
        for (let i = 0; i < s.length; i++) {
            if (i % 2 === 0) {
                result += s[i].toUpperCase();
            } else {
                result += s[i].toLowerCase();
            }
        }
        return result;
    }
    const handleAlternatingClick = () => {
        console.log("Alternating Case clicked");
        let newText = toAlternatingCase(text);
        setText(newText);
    }


    function removePunctuation(s) {
        return s.replace(/[^\w\s]/gi, '');
    }
    const handleRemovePunctuationClick = () => {
        console.log("Remove Punctuation clicked");
        let newText = removePunctuation(text);
        setText(newText);
    }



    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <h1 className='my-3'>{props.title}</h1>
                    <textarea className="form-control" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} id="exampleFormControlTextarea1" rows="15" value={text} placeholder="Enter your Text" onChange={handleOnChange}></textarea>
                    <input className="btn btn-primary my-3" type="button" value="Upper Case" onClick={handleUpClick}></input>
                    <input className="btn btn-primary my-3 mx-1" type="button" value="Lower Case" onClick={handleLowClick}></input>
                    <input className="btn btn-primary my-3 mx-1" type="button" value="Capatalized Case" onClick={toCapitalizedCase}></input>
                    <input className="btn btn-primary my-3 mx-1" type="button" value="Alternate Case" onClick={handleAlternatingClick}></input>
                    <input className="btn btn-primary my-3 mx-1" type="button" value="Reverse Case" onClick={handleReverseClick}></input>
                    <input className="btn btn-primary my-3 mx-1" type="button" value="Remove Punctuation" onClick={handleRemovePunctuationClick}></input>
                    <input className="btn btn-primary my-3 mx-1" type="button" value="Clear Extra Space" onClick={handleExtraSpaces}></input>
                    <input className="btn btn-primary my-3 mx-1" type="button" value="Download" onClick={downloadText}></input>
                    <input className="btn btn-primary my-3 mx-1" type="button" value="Copy" onClick={copyToClipboard}></input>
                    <input className="btn btn-primary my-3 mx-1" type="button" value="Clear" onClick={clearText}></input>
                </div>
            </div>

            {/* Counting words and character */}
            <div className='container my-3'>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words | {text.length} character | {text.split("\n").length} Line</p>
                <p></p>
            </div>
        </>
    )
}
