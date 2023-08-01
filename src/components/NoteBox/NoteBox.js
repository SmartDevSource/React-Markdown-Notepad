import React from "react";

const NoteBox = ({title, content, onClick})=>{

  const handleClickDiv = ()=>{
    onClick(title, content);
  }
  
  return (
    <>
      <div className='notebox w300' onClick={handleClickDiv}>
        <span className="title-notebox">{title}</span>
        <p><label>{content}</label></p>
      </div>
    </>
  )
}

export default NoteBox;