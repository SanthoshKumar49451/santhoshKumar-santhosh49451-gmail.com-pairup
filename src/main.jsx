
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import './main.css'
import { Provider } from 'react-redux'
import store from '../src/store/store.js'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store} >
    <App />

  </Provider>
  </BrowserRouter>



)
