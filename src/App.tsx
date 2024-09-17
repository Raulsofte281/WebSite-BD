
import { BrowserRouter, Routes, Route, } from "react-router-dom"; 
import { Search} from '@/components/Search'
import {Test} from "@/test";
import Menu from "./components/Menu";

export function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Search/>}/> {/* coloque a tela inicial */}
          <Route path="/Search" element={<Search/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>  
    </BrowserRouter>
    </>
  );
}

export default App;