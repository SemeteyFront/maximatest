import React, { useState } from 'react';

function Form() {
  const [text, setText] = useState('');
  const [arr, setArr] = useState([]);
  const onInput = (event) => {
    setText(event.target.value);
  };

  const addText = (event) => {
    event.preventDefault();
    setArr((arr) => [...arr, text]);
    setText('');
  };
  return (
    <>
      <form onSubmit={addText}>
        <input type='text' onChange={onInput} />
        <button type='submit'>Сохранить имя</button>
      </form>
      {arr.length > 0 && arr.map((item, index) => <h3 key={index}>{item}</h3>)}
    </>
  );
}

export default Form;
