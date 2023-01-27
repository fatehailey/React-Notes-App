import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNote from "./pages/CreateNote";
import Notes from "./pages/Notes";

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Notes />}/>
    <Route path='/' element={<CreateNote />}/>
    <Route path='/' element={<Notes />}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
