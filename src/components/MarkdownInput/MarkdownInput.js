import React, { useState } from "react";

const MarkdownInput = ({updateTitle, updateContent, onSave, changeInputValue, changeTextareaValue}) =>{
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

  const handleClickSave = (e)=>{
    onSave(inputValue, textareaValue);
  }

  return (
    <>
      <div className="mdown">
        <input type = "text" value = {changeInputValue} onChange={handleTitleChange}></input>
        <p><textarea id = "textarea_conten" value={changeTextareaValue} type = "text" onChange={handleContentChange}></textarea></p>
        <p><button id = "save_button" onClick={handleClickSave}>Sauvegarder</button></p>
      </div>
    </>
  )
}

export default MarkdownInput;