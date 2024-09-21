
import { BrowserRouter, Routes, Route, } from "react-router-dom"; 
import { Search} from '@/components/Search'
import {Music} from '@/components/Playlist'

import Menu from "./components/Menu";

export function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Search/>}/>
          <Route path="/Search" element={<Search/>}/>
          <Route path="/Playlist" element={<Music/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>  
    </BrowserRouter>
    </>
  );
}

export default App;