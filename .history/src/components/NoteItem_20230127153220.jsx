import React from 'react';
import { Link } from 'react-router-dom';

const NoteItem = () => {
  return (
    <Link to={'/edit-note/${}'>
  )
}

export default NoteItem;
