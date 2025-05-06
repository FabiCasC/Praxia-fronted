// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignupPage from './components/SignupPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
