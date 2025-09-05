import {StrictMode} from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './routes/Router.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <Router />
    </StrictMode>
)
