import React, { useState } from 'react';
import ClaudeRecipe from './components/ClaudeRecipe';
import IngredintsList from './components/IngredientsList';

export default function Main() {
    const [ingredients, setIngredients] = useState([
        "all the main spices", "pasta", "ground beef", "tomato paste"
    ]);

    const [recipeShown, setRecipeShown] = useState(false);

    function toggleRecipe() {
        setRecipeShown(prevShown => !prevShown);
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient.trim() === "") {
            return; // Lopeta funktion suoritus, jos syöte on tyhjä
        }
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    return (
        <main className='main-main'>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            
                {ingredients.length > 0 && <IngredintsList
                    ingredients={ingredients}
                    toggleRecipe={toggleRecipe}
                />  
            }

            {recipeShown && <ClaudeRecipe/>}

        </main>
    );
}