import './App.css';
import React, {useState} from 'react';
import NoteBox from './components/NoteBox/NoteBox';
import NoteDisplay from './components/NoteDisplay/NoteDisplay';
import MarkdownInput from './components/MarkdownInput/MarkdownInput';

function App() {
  const [noteDisplayTitle, setNoteDisplayTitle] = useState("");
  const [noteDisplayContent, setNoteDisplayContent] = useState("");

  const updateNoteDisplayTitle = (newTitle)=>{
    setNoteDisplayTitle(newTitle);
  }

  const updateNoteDisplayContent = (newContent) =>{
    setNoteDisplayContent(newContent);
  }

  return (
    <div className="App">
      <div className='flex-row'>
        <div className='flex-col'>
          <button className='ml50 mr50' id = "add_note">Ajouter une note</button>
          <NoteBox title = "Ceci est un titre" content = "Salut à vous les amis !"></NoteBox>
        </div>

        <span className='vline'></span>

        <div className='flex-col'>
          <NoteDisplay title = {noteDisplayTitle} content = {noteDisplayContent}/>
          <MarkdownInput updateTitle={updateNoteDisplayTitle} updateContent={updateNoteDisplayContent}/>
        </div>
      </div>
    </div>
  );
}

export default App;