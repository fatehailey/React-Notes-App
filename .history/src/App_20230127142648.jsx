import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Note}>

    </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
