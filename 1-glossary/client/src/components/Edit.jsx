import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
const axios = require('axios');
import '../../dist/styles.css';


const Edit = ({ handleClose, show, id, children }) => {
  // const [values, setValues] = useState({
  //   editedWord: '',
  //   editedDefinition: ''
  // });
  const [editedWord, setEditedWord] = useState('');
  const [editedDefinition, setEditedDefinition] = useState('');

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit click', editedWord);
    console.log('submit click', editedDefinition);
    // const { editedWord, editedDefinition } = values;
    const editedEntry = {_id: id, word: editedWord, definition: editedDefinition}
    console.log(editedEntry);
    axios.post('/edits', editedEntry)
    //.then()
    //.catch()
  }

  const handleWordChange = (e) => {
    e.preventDefault();
    console.log('pre state update', e.target.value)
    setEditedWord(e.target.value);
    console.log('post state update', editedWord);
  }

  const handleDefinitionChange = (e) => {
    e.preventDefault();
    console.log('pre state update', e.target.value)
    setEditedDefinition(e.target.value);
    console.log('post state update', editedDefinition);
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <label>
          Word:
          <input type="text" name="word" onChange={handleWordChange}/>
          Definition:
          <input type="text" name="definition" onChange={handleDefinitionChange}/>
        </label>

        <button type="submit" onClick={handleSubmit}>
          Save
        </button>

        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};


export default Edit;