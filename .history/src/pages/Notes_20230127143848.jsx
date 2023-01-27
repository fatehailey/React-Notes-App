import React from 'react';
import {BiSearchAlt} from  'react-icons'
const Notes = () => {
  return (
    <section>
        <header className="notes__header">
            <h2>My Notes</h2>
            <input type="text" autoFocus placeholder='Keyword...'/>
            <button><BiSearchAlt</button>
        </header>
    </section>
  );
}

export default Notes;
