import DisplayComp from "./DisplayItems/DisplayComp";
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
function App() {
  return (
    <div >
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<DisplayComp/>} />
       </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
