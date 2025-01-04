/*
Q. WHAT IS THE ROLE OF THIS MAIN.JSX COMPONENT ? 
 - The main.jsx component's role is to render the App component into the DOM.
 - It calls ReactDOM.createRoot to render the App component into the root element i.e.
   <div id="root"> in index.html file.
*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App greet="Hello" />
  </StrictMode>,
)
/*
Here in App component we are passing a prop greet="Hello" as an attribute to the App 
component. If we pass a name prop then it will override the default value. 
This is just for basic understanding of props. In real word we would bring data
from an API and pass it as props to the component, we shall see that soon.
*/
