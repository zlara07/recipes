import './App.css';
import { useEffect, useState } from "react";
import video from './food.mp4';
import MyRecipesComponents from './MyRecipesComponent';

function App() { 

  const MY_ID = "a1ef2413";
  const MY_KEY = "fa902032cf7423ef010723a87b61f829";

  const[mySearch, setMySearch] = useState("");
  const[myRecipes, setMyRecipes] = useState([]);
  const[wordSubmitted, setWordSubmitted] = useState("avocado");

  useEffect(() => {
    const getRecipe = async() => {
      const respons = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`)
      const data = await respons.json();
      setMyRecipes(data.hits);
      console.log(data.hits);
    }
    getRecipe()

  }, [wordSubmitted])

  const myRecipeSearch=(e) =>{
    setMySearch(e.target.value)
    console.log(e.target.value)

  }

  const finalSearch = (e) =>{
    e.preventDefault()
    setWordSubmitted(mySearch)
  }


  return (
    
    <div className="App">

     <div className="container">
      <video autoPlay muted loop>
      <source src={video} type="video/mp4" />
      </video>

      <h1>Find a Recipe</h1>
     </div>

     <div className='container'>
      <form onSubmit={finalSearch}>
        <input className ='search'onChange={myRecipeSearch} value={mySearch}/>
      </form>
     </div>

      <div className='container'>
       <button onClick={finalSearch}> 
         <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt="icon"/>
       </button>
      </div>

      
      {myRecipes.map((element, index) => (
        <MyRecipesComponents key={index}
        label={element.recipe.label} 
        image={element.recipe.image} 
        calories={element.recipe.calories}
        ingredients={element.recipe.ingredientLines}
        fit={element.recipe.digest[0].total}
        carbs={element.recipe.digest[1].total}
        protein={element.recipe.digest[2].total}
        source={element.recipe.url}/>
      

      ))}

    

    </div>
    
  );
}

export default App;
