import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Add from '../Add/Add'
import View from '../View/View'
import Header from '../Layout/Header/Header'
import Details from '../Details/Details'


const Routing = () => {
    return (
        <div>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="add" element={<Add/>} />
                    <Route path="view" element={<View/>}/>
                    <Route path="view/detail/:pid" element={<Details/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing


///for intall json server===>>>    npm install --save-dev json server 

/// npx json run ==>>>> npx json-server --watch pathname --port no  


//// steps for git uplaod ==>>>
//// 1  git init 
//// 2  git add .
///  3  git commit -m "first commit msg"