import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import { FakeKasaAPI, KasaAPI } from './lib/api.js';

export const DependenciesProvider = React.createContext();

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <DependenciesProvider.Provider value={
            {
                api: new FakeKasaAPI(),
            }
        }>
            <App />
        </DependenciesProvider.Provider>
    </BrowserRouter>
)

