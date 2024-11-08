function MyRecipesComponents({label, image, calories, ingredients, fit, carbs, protein}) {
    return (
    <div> 
        <div className="container">
          <h2>{label}</h2>
        </div>

        <div className="container">
          <img src={image}  alt="dish"/>
        </div>

        <ul className="container list">
            {ingredients.map((ingredient, index) =>(
               <li key={index}>
                <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" className="icon" alt="Icon"/>
                {ingredient}</li> 
            ))}
        </ul>

        <div className="container">
          <p>{calories.toFixed()} calories</p>
        </div>
            
        <div className="container red">
          <p>{fit.toFixed()} grams FIT</p>
        </div>

        <div className="container blue">
          <p>{carbs.toFixed()} grams CARBS</p>
        </div>

        <div className="container green">
          <p>{protein.toFixed()} grams PROTEIN</p>
        </div>
    </div>
  )  
}

export default MyRecipesComponents;