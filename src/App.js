import Notes from './components/Notes'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const App = ({notes}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/signin' />} />
        <Route path='/notes' element={<Notes notes={notes}/>} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App