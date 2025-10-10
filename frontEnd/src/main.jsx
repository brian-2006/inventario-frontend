import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


//Estilos
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
//se importa el componente con todos los provider para envolver el app principal
import AppProviders from './providers/AppProvider.jsx'
//se importa el app principal
import App from './App.jsx'


        

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AppProviders>
            <App />
      </AppProviders>
  </StrictMode>,
)
