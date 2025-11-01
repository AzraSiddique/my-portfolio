import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// `tailwind-fallback.css` removed — Tailwind v3 now provides the full utility set.
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)