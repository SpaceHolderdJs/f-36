import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CurrentUserContextProvider } from './contexts/CurrentUserContext.tsx'
import App from './App.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CurrentUserContextProvider>
      <App />
    </CurrentUserContextProvider>
  </StrictMode>,
)
