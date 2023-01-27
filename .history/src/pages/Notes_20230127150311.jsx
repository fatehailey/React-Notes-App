import dummyNotes from '../dummy__notes'
import {BiSearchAlt} from  'react-icons/bi'
import { Link } from 'react-router-dom';
import {AiFillPlusCircle} from 'react-icons/ai'
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
                dummyNotes.map(note => <NoteItem key={note.id} />)
            }
        </div>
            <Link className='btn add__btn'><AiFillPlusCircle /></Link>
    </section>
  );
}

export default Notes;
