import { useState } from "react"

export default function Pizza():JSX.Element {
    const[selectedIngredients,setSelectedIngredients] = useState <string[]> ([]);

    function handleAddIngredient(ingredient:string):void {
        setSelectedIngredients([...selectedIngredients,ingredient]);
    }

    return (
        <>
            <h1>Pizza order</h1>
                <h2>Let`s make a list of ingredients</h2>
                    <h3>Choose Ingredients:</h3>
                    <div>
                    <h3>Do you want to add bacon?</h3>   
                    <button type="button" onClick={() => handleAddIngredient("bacon")}>Add bacon</button>
                    <h3>Do you want to add tomatoes?</h3>     
                        <button type="button" onClick={() => handleAddIngredient("tomatoes")}>Add tomatoes</button>  
                    <h3>Do you want to add cheese?</h3>     
                        <button type="button" onClick={() => handleAddIngredient("cheese")}>Add cheese</button>
                    <h3>Do you want to add mushrooms?</h3>     
                        <button type="button" onClick={() => handleAddIngredient("mushrooms")}>Add mushrooms</button>
                    </div>
                <h2>Current ingredients: {selectedIngredients.join(", ")} </h2>                      
        </>         
    )
}