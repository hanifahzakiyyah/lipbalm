import './style.css'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

function App() {
    return (
        <>
            {/* Routing tetap berjalan, tapi Canvas tidak ikut dirender ulang */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<h1>About</h1>} />
            </Routes>
        </>
    )
}

root.render(
    <StrictMode>
        <BrowserRouter future={{ v7_startTransition: true }}>
            <App />
        </BrowserRouter>
    </StrictMode>
)
