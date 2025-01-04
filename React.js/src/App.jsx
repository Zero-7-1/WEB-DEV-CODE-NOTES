import React from 'react'; // This is not explicitly needed in upper versions 
import PropsMapsCond from './PropsMapsCond'; 


// adhering to concise arrow function syntax (see core js) 
// to enter js world within jsx we use {} 
/*
instead of passing props name in App as App(props) then using it like {props.greet}
we can destructure (see js destructuring) it as {greet} and use it directly.
here in the below component we have two names for props greet and name. name here
has a default value just like default parameters in js function, incase name is not 
passed it will be "John Doe". 
*/

const App = ({greet, name="John Doe"}) => (
  <>
    <h1>{greet} from React, {name}</h1>
    <p>Learning React is fun!</p>
    <PropsMapsCond/>
  </>
); 
export default App;








/************************************************************************************
-------------------------------------------------------------------JSX AND COMPONENTS
---------------------------------------------- IMPORTS AND EXPORTS
-----------------------------------------PROPS
--------------------CONDITIONAL RENDERING
*************************************************************************************
Q. EXPALIN WHAT IS JSX ? **
   - JSX stands for JavaScript Syntax Extension
   - It is the syntax used in react that allows to write 
     HTML elements in JavaScript and react puts these html elements in 
     DOM without for us to write DOM methods like createElement or appendChild 
     internally. 
 
   - In React behind the scene this happens basically:
     React.createElement("h1", "null", "Hello From React");
     null is for props which acts as attributes, this is what 
     internally react does 
     for our this jsx code below;
     export const App = () => {
         return <h1>Hello from React</h1>;
      };
         
   - React used Babel which is a JS compiler and in React 19 it have its 
     own compiler where JSX made more powerful and no need of createElement.
     Browser doesn't understand jsx syntax so it takes the help of compiler then 
     react further converts to it objects and to elements (Virtual DOM). This is
     what is called Transpilation (Conversion of one language to its equivalent).

Q. EXPLAIN WHAT ARE COMPONENTS IN REACT ? WHAT ARE COMPOSITIONS AND HOW 
   IT DIFFERS FROM COMPONENTS ?  ** 
 - Components are resuable pieces of codes like JavaScript functions that 
   returns JSX expression. It forms a part of UI like navigation component, footer 
   component, main component etc. 
 - A componnet always starts with capital letter as here in App.jsx. 

 - Composition is a design pattern in React where multiple components are 
   combined to build more complex UIs. It focuses on how components are arranged 
   together and interact with one another. For example, A Form component can be 
   composed of Input and Button components.

Q. WHAT DOES REACT ENCOURAGES COMPOSITION OR INHERITANCE ? *** 
  - React encourages composition over inheritance, in other words react 
   emphasizes on building components by combining smaller components together 
   (composition), rather than relying on class inheritance to share behavior or 
   functionality.

   Instead of inheriting properties and methods, components work together by:
   1. Nesting: Placing components inside other components.
   2. Passing Props: Customizing child components by passing data or functions 
                     as props.

Q. HOW MANY TYPES OF COMPONENTS ARE THERE IN REACT AND WHAT'S THE 
   DIFFERENCE ? ***
  - Class Components are not used anymore as it was more lengthy so 
    Functional Components are used today widely. 

  - Class components is defined using ES6 class syntax, needs to 
    extend React.Component and have a render method. 
    Whereas, 
    Functional Components are defined using a simple JavaScript function that 
    returns JSX. (Easier synatx of Functional Components)

   - Functional components were at first stateless but introduction of Hooks
     solved this.
     However.
     In class components state is managed using this.state and updated using 
     this.setState(). (Class components offers state management without Hooks)

Q. HOW MANY ELEMENTS ARE RETURNED BY A FUNCTIONAL COMPONENT ? OR WHY CAN'T WE RETURN 
   MULTIPLE ELEMENTS AT THE SAME TIME IN A FUNCTIONAL COMPONENT ? OR WHAT ARE REACT 
   FRAGMENTS ? *** 
  - A functional component or any jsx expression can only return one element at a time
    so generally we return a parent div element and inside that div we can return 
    multiple elements. 
  
  - But to be more specific a div creates creates extra node in DOM, which can be 
    seen if consoled log. To avoid that we use React Fragments '<> </>'. 
  
   - JSX expressions are converted to normal JavaScript function calls and we can not
    return more than one value technically from a function. 

Q. HOW MANY COMPONENTS ARE RENDERED IN REACT ? WHAT IS THE ROOT COMPONENT IN REACT ?  
   OR EXPLAIN A BIT ABOUT REACT RENDERING. OR WHY ONLY ROOT COMPONENT ? OR WHAT 
   IS THE ENTRY POINT OF A REACT APPLICATION ? WHAT DO YOU MEAN BY SINGLE PAGE
   APPLICATION ? *** 
  
  - React is used to build SPAs (Single Page Applications) i.e. whole application
    is mounted to a single HTML element having a div with id "root". This div acts 
    as the single entry point entire React application into the existing HTML 
    structure. Everything that React renders will be placed inside this div.

  - SPA contents dynamically loaded into the DOM without refreshing the whole page. 
    
  - Many components are rendered in react but they all must be part of only one 
    component that is root component. By convention that component is App.jsx. 
    This root component is the top level component and act as container for 
    other components. 

  - Rendering multiple root components independently would create multiple 
    DOM trees, which is generally unnecessary and can complicate features of react
    like state management and routing.

Q. EXPLAIN WHAT IS PROP ? HOW TO PASS PROPS IN REACT ? ** 
   - Like in normal js function we pass parameters that allows us to pass data as 
     arguments to a function, in React we use props to pass data from one component. 

   - Props (short for properties) are used to pass data from one component to 
     another in React (more specifically from a parent component to child and 
     data flow is unidirectional i.e. from parent to child). 
   
   - Props can not be modified by its component, they are read-only.
     e.g. props.name = "newName";  
*/



