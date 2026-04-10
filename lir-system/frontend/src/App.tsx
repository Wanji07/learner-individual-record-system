import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import LoginForm from './pages/LoginForm'

function App() {
  return (
    <Routes>
      {/*
      <Route element={<Layout />}>
        <Route path="/" element={<Login />} />
      </Route>
      */}
      <Route path="/" element={<LoginForm />} />
    </Routes>
  )
}

export default App
