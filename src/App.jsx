import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import RoomDetailsPage from './pages/RoomDetailsPage';


const App = ()=>{
  
 
   return(
    <>
       <BrowserRouter>
       <Routes>
         <Route exact path="/" element={<HomePage/>}/>
         <Route exact path="/rooms/:id" element={<RoomDetailsPage/>}/>
       </Routes>
       </BrowserRouter>
    </>
   )
}

export default App;