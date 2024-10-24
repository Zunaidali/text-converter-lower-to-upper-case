import React, {useState} from 'react'


function TextForm(props) {
  const [text, setText] = useState('Enter text here!!');
  const [msgtext, setMsgText] = useState('');

  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setMsgText(newText);
    
  }

  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
  return (
    <>
      <h1 className="ml-80 mt-12 text-4xl text-black-500">{props.heading}</h1>
      <textarea className="ml-80 mt-2 border border-black text-xl" id="textarea" value={text} onChange={handleOnChange} cols="100" rows="10"></textarea>
      <div className="msg ml-80 mt-2 text-xl break-words">{msgtext}</div>
      <button className="text-white bg-blue-700 mt-5 ml-80 p-2 rounded" onClick={handleUpClick}>Convert To UpperCase</button>
    </>
  )
}

export default TextForm
