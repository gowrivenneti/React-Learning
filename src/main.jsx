import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './ColorPicker.css'
import App from './App.jsx'
import App2 from './App2.jsx'
import ColorPickerApp from './ColorPickerApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App2/>
    <ColorPickerApp />
  </StrictMode>,
)
