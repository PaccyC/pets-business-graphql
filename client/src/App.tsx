import { useState,lazy,Suspense } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

import './App.css'


const PetList = lazy(()=> import( "./pages/PetList"))
const PetDetail = lazy(()=> import( "./pages/PetDetail"))
const AddPet = lazy(()=> import( "./pages/AddPet"))
const EditPet = lazy(()=> import( "./pages/EditPet"))

function App() {

  const [petToEdit,setPetToEdit]= useState(null)

  return (
    <div className='App'>
      <Router>
        <h1>Pet Shelter</h1>

        <Routes>
          <Route 
           path='/'
           element={
            <Suspense fallback={<></>}>
              <PetList/>
            </Suspense>
           }
           
           />

          <Route
           path='/:petId'
           element={
            <Suspense fallback={<></>}>
              <PetDetail/>
            </Suspense>
           }

           
          />
          <Route 
           path='/:petId/edit'
           element={
            <Suspense fallback={<></>}>
              <EditPet/>
            </Suspense>
           }
          />

          <Route
            path='/add'
            element={
              <Suspense fallback={<></>}>
                <AddPet/>
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
