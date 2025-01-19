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
    <App greet="Hello" name="USER XYZ" />
  </StrictMode>,
)
/*
Here in App component we are passing a prop greet="Hello" as an attribute to the App 
component. In real word we would bring data from an API using Fetch API or Axios 
and pass it as props to the component. Or simply here to understand we will bring data
from a dummy json to a component (for this see PropsMapsCond). Also If the data is 
already available in our application (like static data, user input, or locally managed 
state), we can pass it as props directly without fetching it.
*/
