import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'

function App() {
return (
    <>
        <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
            <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            </Routes>
        </div>
        <Footer />
        </BrowserRouter>
    </>
)
}

export default App