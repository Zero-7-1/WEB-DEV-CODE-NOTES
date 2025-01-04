/***********************************************************************************
Here through this component we are going to understand props more and map method. 
--------------------------------------------------------------------MORE ON PROPS 
----------------------------------------------------------MAP METHOD
*/

import catsData from "./api/catsData.json";

const PropsMapsCond = () => {

// Using map method to iterate over the cat data
const catList = catsData.map((cat) => (
    
  // Return JSX for each cat item
    <li key={cat.id}>
      <h2>{cat.name}</h2>
      <img src={cat.img} alt={cat.name} />
    </li>
  ));

  // Return in the form of list 
  return <ul>{catList}</ul>;
};
export default PropsMapsCond; 

