import React from 'react';
import { Link } from 'react-router-dom';

const NoteItem = () => {
  return (
    <Link to={`/edit-note/${note.id}`} className="note">
<h4>{note.title}</h4>
<p>{note</p>
    </Link>
  )
}

export default NoteItem;
