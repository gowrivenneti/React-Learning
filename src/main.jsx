import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './ColorPicker-Project/ColorPicker.css'
import './ToDoList/ToDo.css'

import './StopWatch/StopWatch.css'
import App from './App.jsx'
import App2 from './App2.jsx'
import ColorPickerApp from './ColorPicker-Project/ColorPickerApp.jsx'
import ToDoApp from './ToDoList/ToDoApp.jsx'
import DigitalClockApp from './DigitalClockApp/DigitalClockApp.jsx'
import StopWatchApp from './StopWatch/StopWatchApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <App2/>
    <ToDoApp />
    <ColorPickerApp />
    <DigitalClockApp />
    <StopWatchApp />
  </StrictMode>,
)

