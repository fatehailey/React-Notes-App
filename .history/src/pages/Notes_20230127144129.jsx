import React from 'react';
import {BsSearch} from  'react-icons/bs'
const Notes = () => {
  return (
    <section>
        <header className="notes__header">
            <h2>My Notes</h2>
            <input type="text" autoFocus placeholder='Keyword...'/>
            <button><BsSearch /></button>
        </header>
    </section>
  );
}

export default Notes;
