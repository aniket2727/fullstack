import DisplayComp from "./DisplayItems/DisplayComp";
import CrudOperations from "./Crud/CrudComponets";
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
function App() {
  return (
    <div >
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<DisplayComp/>} />
          <Route path="/crud" element={<CrudOperations/>} />
       </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
