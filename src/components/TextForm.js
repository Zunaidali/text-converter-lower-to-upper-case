import React, { useState } from 'react';

function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mt-8 text-gray-800">
        {props.heading}
      </h1>
      
      <div className="flex justify-center mt-4">
        <textarea
          className="w-full max-w-xl border border-gray-300 text-lg sm:text-xl px-4 py-2 rounded focus:outline-none focus:border-blue-500"
          id="textarea"
          value={text}
          onChange={handleOnChange}
          rows="4"
          placeholder="Enter your text here..."
        ></textarea>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-5">
        <button
          className="text-white bg-blue-600 px-4 py-2 rounded text-sm sm:text-base hover:bg-blue-700 transition"
          onClick={handleUpClick}
        >
          Convert To UpperCase
        </button>
        <button
          className="text-white bg-blue-600 px-4 py-2 rounded text-sm sm:text-base hover:bg-blue-700 transition"
          onClick={handleLowerClick}
        >
          Convert To LowerCase
        </button>
        <button
          className="text-white bg-blue-600 px-4 py-2 rounded text-sm sm:text-base hover:bg-blue-700 transition"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>

      <div className="container mx-auto mt-6 max-w-xl px-4">
        <h2 className="text-lg sm:text-2xl font-semibold text-gray-800">Your Text Summary</h2>
        <p className="text-lg sm:text-xl mt-2 text-gray-700 bg-gray-100 p-3 rounded">
          {text.split(/\s+/).filter((word) => word.length !== 0).length} words and {text.length} characters
        </p>
        <p className="text-lg sm:text-xl mt-2 text-gray-700 bg-gray-100 p-3 rounded">
          {0.008 * text.split(/\s+/).filter((word) => word.length !== 0).length} Minutes Read
        </p>
        <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 mt-4">Preview</h3>
        <p className="text-lg sm:text-xl mt-2 text-gray-700 bg-gray-100 p-3 rounded break-words">
          {text.length > 0 ? text : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}

export default TextForm;
