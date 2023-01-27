import React from 'react';
import { Link } from 'react-router-dom';

const NoteItem = () => {
  return (
    <Link to={'`edit-note/${}'} className="note">

    </Link>
  )
}

export default NoteItem;
