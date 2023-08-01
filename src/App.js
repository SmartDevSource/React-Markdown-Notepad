import './App.css';
import React, {useEffect, useState} from 'react';
import NoteBox from './components/NoteBox/NoteBox';
import NoteDisplay from './components/NoteDisplay/NoteDisplay';
import MarkdownInput from './components/MarkdownInput/MarkdownInput';

function App() {
  const [noteDisplayTitle, setNoteDisplayTitle] = useState("");
  const [noteDisplayContent, setNoteDisplayContent] = useState("");
  const [saves, setSaves] = useState([]);

  const updateNoteDisplayTitle = (newTitle)=>{
    setNoteDisplayTitle(newTitle);
  }

  const updateNoteDisplayContent = (newContent) =>{
    setNoteDisplayContent(newContent);
  }

  const handleSave = (title, content) =>{
    const newSave = {title, content};
    setSaves((prevSaves)=> [...prevSaves, newSave]);
    localStorage.setItem("saves", JSON.stringify([...saves, newSave]));
  }

  const handleNoteBoxClick = (title, content) =>{
    updateNoteDisplayTitle(title);
    updateNoteDisplayContent(content);
  }

  const addNote = () =>{
    updateNoteDisplayTitle("");
    updateNoteDisplayContent("");
    
  }

  localStorage.removeItem("saves");

  useEffect(()=>{
    const savedData = JSON.parse(localStorage.getItem("saves")) || [];
    setSaves(savedData);
  }, []);

  return (
    <div className="App">
      <div className='flex-row'>
        <div className='flex-col w300'>
          <button className='ml50 mr50' onClick={addNote}>Ajouter une note</button>
          {saves !== null && saves.map((data) => {
        return <NoteBox key={data.title} title={data.title} content={data.content} onClick={handleNoteBoxClick}/>; })}
        </div>

        <span className='vline'></span>

        <div className='flex-col'>
          <NoteDisplay title = {noteDisplayTitle} content = {noteDisplayContent}/>
          <MarkdownInput 
            updateTitle={updateNoteDisplayTitle} 
            updateContent={updateNoteDisplayContent} 
            onSave={handleSave}
            changeInputValue={noteDisplayTitle}
            changeTextareaValue={noteDisplayContent}/>
        </div>
      </div>
    </div>
  );
}

export default App;