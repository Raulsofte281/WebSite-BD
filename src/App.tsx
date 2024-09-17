
import { BrowserRouter, Routes, Route, } from "react-router-dom"; 
import { Search} from '@/components/Search'
import {Test} from "@/test";
import Menu from "./components/Menu";
import Music from "@/components/Music";
import Playlist from "@/components/Playlist-Screen";
import Home from "@/components/Home-Screen";

export function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Search/>}/> {/* coloque a tela inicial */}
          <Route path="/Search" element={<Search/>}/>
          <Route path="/Home-Screen" element={<Home/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/Music" element={<Music/>}/>
          <Route path="/Playlist-Screen" element={<Playlist/>}/>
          <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>  
    </BrowserRouter>
    </>
  );
}

export default App;