import CreateUsers from './CreateUsers'
import DeleteUsers from './DeleteUsers'
import UpdateUsers from './UpdateUsers'
import Userss from './Userss'


import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Userss/>}></Route>
        <Route path="/create" element={<CreateUsers/>}></Route>
        <Route path="/update" element={<UpdateUsers/>}></Route>
        <Route path='/delete' element={<DeleteUsers/>}></Route>
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
