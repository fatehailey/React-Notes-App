import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNote from "./pages/CreateNote";
import Notes from "./pages/Notes";
import EditNotes from "./pages/EditNote";
const App = () => {
  return (
   <main  id="app">
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Notes />}/>
    <Route path='/create-note' element={<CreateNote />}/>
    <Route path='/edit-note/:id' element={<EditNotes />}/>
   </Routes>
   </BrowserRouter>
   </main>
  );
}

export default App;
