import React, { useState } from "react";

const MarkdownInput = ({updateTitle, updateContent}) =>{
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const handleTitleChange = (e)=>{
    setInputValue(e.target.value);
    updateTitle(e.target.value);
  }

  const handleContentChange = (e)=>{
    setTextareaValue(e.target.value);
    updateContent(e.target.value);
  }

  return (
    <>
      <div className="mdown">
        <input type = "text" onChange={handleTitleChange}></input>
        <p><textarea type = "text" onChange={handleContentChange}></textarea></p>
        <p><button id = "save_button">Sauvegarder</button></p>
      </div>
    </>
  )
}

export default MarkdownInput;