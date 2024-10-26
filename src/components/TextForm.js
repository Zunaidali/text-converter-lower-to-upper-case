import React, { useState } from 'react';

function TextForm(props) {
  const [text, setText] = useState('Enter text here!!');
  const [msgtext, setMsgText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setMsgText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mt-8 text-black-500">
        {props.heading}
      </h1>
      <div className="flex justify-center mt-4">
        <textarea
          className="w-full max-w-xl border border-black text-lg sm:text-xl px-4 py-2 rounded"
          id="textarea"
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>
      <div className="msg mx-auto mt-4 w-full max-w-xl text-lg sm:text-xl break-words px-4 py-2 bg-gray-100 rounded">
        {msgtext}
      </div>
      <button
        className="block text-white bg-blue-700 mt-5 mx-auto p-2 rounded text-sm sm:text-base md:text-lg hover:bg-blue-800 transition"
        onClick={handleUpClick}
      >
        Convert To UpperCase
      </button>
    </>
  );
}

export default TextForm;
