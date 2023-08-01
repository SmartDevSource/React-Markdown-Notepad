import React from "react";
import showdown from "showdown";

const NoteDisplay = ({title, content})=>{

  const converter = new showdown.Converter();
  const html = converter.makeHtml(content);

  return (
    <>
      <h2>{title}</h2>
      <div className='textContent' dangerouslySetInnerHTML={{__html:html}}/>

    </>
  )
}

export default NoteDisplay;