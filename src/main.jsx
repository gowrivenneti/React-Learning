import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './ColorPicker-Project/ColorPicker.css'
import App from './App.jsx'
import App2 from './App2.jsx'
import ColorPickerApp from './ColorPicker-Project/ColorPickerApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App2/>
    <ColorPickerApp />
  </StrictMode>,
)
