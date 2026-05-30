import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './DigitalClockApp/DigitalClock.css'
import DigitalClockApp from './DigitalClockApp/DigitalClockApp.jsx'

createRoot(document.getElementById('root2')).render(
  <StrictMode>
    <DigitalClockApp />
  </StrictMode>,
)