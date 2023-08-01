import React from "react";

const NoteBox = ({title, content})=>{
  
  return (
    <>
      <div className='resume w300'>
        <h2>{title}</h2>
        <label>{content}</label>
      </div>
    </>
  )
}

export default NoteBox;