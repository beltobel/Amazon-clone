import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import reducer, {initialState} from './components/Providers/reducer'
import { StateProvider } from './components/providers/StateProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  // </React.StrictMode>,
)
