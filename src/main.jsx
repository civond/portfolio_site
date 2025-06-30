import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'

import Profile from './components/Profile/component.jsx'
import Content from './components/Content/component.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Profile />
    <Content />

  </StrictMode>,
)
