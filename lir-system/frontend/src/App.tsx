import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import PersonalInformation from './pages/PersonalInformation'

function App() {
  return (
    <Routes>
      {/*
      <Route element={<Layout />}>
        <Route path="/" element={<Login />} />
      </Route>
      */}
      <Route path="/" element={<PersonalInformation />} />
    </Routes>
  )
}

export default App
