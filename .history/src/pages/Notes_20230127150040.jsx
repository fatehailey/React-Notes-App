import dummyNotes from '../dummy__notes'
import {BiSearchAlt} from  'react-icons/bi'
const Notes = () => {
  return (
    <section>
        <header className="notes__header">
            <h2>My Notes</h2>
            <input type="text" autoFocus placeholder='Keyword...'/>
            <button className="btn"><BiSearchAlt /></button>
        </header>
        <div className="notes__container">
            {
                dummyNotes.map(note => <NoteItem key)
            }
        </div>
    </section>
  );
}

export default Notes;
