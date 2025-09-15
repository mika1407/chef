import React, { useState } from 'react';
import ClaudeRecipe from './components/ClaudeRecipe';
import IngredintsList from './components/IngredientsList';
import { getRecipeFromMistral } from "../ai"

export default function Main() {
    const [ingredients, setIngredients] = useState([]);

    const [recipe, setRecipe] = useState(null);

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient.trim() === "") {
            return; // Lopeta funktion suoritus, jos syöte on tyhjä
        }
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    async function getRecipe() {
        // Aseta reseptin tilaksi null haku-ajaksi
        setRecipe(null); 
        const newRecipe = await getRecipeFromMistral(ingredients);
        setRecipe(newRecipe);
    }

    // FUNKTIO TILAN NOLLAAMISEEN
    function resetApp() {
        setIngredients([]); // Tyhjentää ainesosalistan
        setRecipe(null); // Tyhjentää reseptin tilan
    }

    return (
        <main className='main-main'>
            <h4>Add at least four ingredients</h4>
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
                    getRecipe={getRecipe}
                    resetApp={resetApp}
                />  
            }

            {recipe && <ClaudeRecipe recipe={recipe}/>}

        </main>
    );
}