import { BrowserRouter, Routes, Route, } from "react-router-dom"; 
import { Search} from '@/components/Search'
import Menu from "./components/Menu";
import Music from "@/components/Music";
import Playlist from "@/components/Playlist-Screen";
import Home from "@/components/Home-Screen";
import Teste from "./components/texte";

export function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Search/>}/>
          <Route path="/Search" element={<Search/>}/>
          <Route path="/Home-Screen" element={<Home/>}/>
          <Route path="/Playlist" element={<Music/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/Playlist-Screen" element={<Playlist/>}/>
          <Route path="/Teste" element= {<Teste/>}/>
      </Routes>  
    </BrowserRouter>
    </>
  );
}

export default App;