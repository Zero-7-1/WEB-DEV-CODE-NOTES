import resturantData from './api/resturantData.json'
/***********************************************************************************
Here we dive a little further into props and we will also see conditional rednering. 


For conditional rendering or rendering a list of items we use js map() method (see 
core js high order array methods).   
*/

// This is a simple example to show map() usage 
const PropsMapsCond = ({catsData}) => {

const catList = catsData.map((cats) => (
    <li key={cats.id}>
      <h2>{cats.name}</h2>
      <img src={cats.img} alt={cats.name} />
    </li>
  )); 
  return (
  <> 
  <h4> Rendering Lists using Map() method: </h4>
  <ul>{catList}</ul>
  </>
);
};

export default PropsMapsCond; 


/*
Q. IN THE INTERVIEW WE MAY BE ASKED TO PERFORM SOME OPERATIONS ON A JSON DATA LIKE 
   HERE WE ARE ASKED TO DISPLAY AVAILABLE ITEMS OF A RESTURANT ALSO PERORM FILTER
   SUCH WAY THAT ONLY ITEMS WITH LESS THAN 500 CALORIES WOULD DISPLAYED AND SORTING
   NEEDS TO BE DONE IN SUCH WAY THAT ITEMS ARE DISPLAYED FROM LOW TO HIGH CALORIES. 
*/

export const FilterSortMap = () => {
  // Filter items with calories less than 500
  const lowCaloriesFilter = resturantData.filter(
              (item) => item.calories < 500
      );
  
  // Sort the filtered items from low to high calories
  const sortedLowCalories = lowCaloriesFilter.sort(
              (a, b) => a.calories - b.calories
      );

  // Map sorted results
  const result = sortedLowCalories.map((item) => ({
      name: item.name,
      calories: item.calories,
      createdAt: item.createdAt,
  }));

  // Now return the jsx using result to display desired condition
  return (
    <>
    <h4> Conditional Rendering of Lists (Filter, Sort & Map): </h4>
      <ul>
          {result.map((item) => (
              <li key={item.name}>
                  {item.name} - {item.calories} calories
              </li>
          ))}
      </ul>
    </>
  );
};

/*
We can not use traditional if..else to render something based some conditions but
most effective way of doing that is to js terniary operator (see Terniary Operators in
JS) whcich has many use cased in react. 
*/

export const CondUsingTerniary = ({ isLoggedIn }) => {
  return (
      <>
        <h4> Conditional Rendering using Terniary: </h4>
          {isLoggedIn ? (
              <button onClick={() => alert('Logged out!')}>Logout</button>
          ) : (
              <button onClick={() => alert('Logged in!')}>Login</button>
          )}   {/* Terniary expression needs to be in curly braces as it is a core js 
                 feature and we cant return pure js in jsx */ }
      </>
  );
};