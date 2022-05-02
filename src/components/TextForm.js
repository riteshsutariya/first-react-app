import ClassComp1 from "./ClassComp1";

import { useState } from "react";

export default function TextForm(prop)
{
    const handleUpClick= ()=>{
       const newText=text.toUpperCase();
       SetText(newText)
    }

    const changeHandle=(event)=>{
        SetText(event.target.value)
        
    }

    const handleLowClick=()=>{
       const newText=text.toLowerCase();
       SetText(newText)
    }

    const handleClear=()=>{
        const newText='';
        SetText(newText);
    }

    const getEmail=()=>{
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        let content=text.split(" ");
        let emails='';
        content.forEach((email)=>{
            if(regex.test(email))
            {
                 emails=emails+"\n"+email;
            }
        })
        SetEmail(emails);
    }

    const[text,SetText]=useState('');
    const[email,SetEmail]=useState('no emails');

    return(
        <>
        <div className="container">
            <h1>{prop.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} name="" id="myBox"  rows="8" onChange={changeHandle} Style="overflow:scroll;"></textarea>
            </div>
            <button className="btn btn-outline-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert To LowerCase</button>
            <button type="button" class="btn btn-outline-danger mx-1" onClick={handleClear}>clear text</button>
            <button className="btn btn-primary mx-1" onClick={getEmail}>extract email</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{text.split(" ").length*0.08} minutes required to read content</p>
            <p>emails in content: {email}</p>
        </div>
        </>
    )
}
