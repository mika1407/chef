import React, { useState, useRef, useEffect } from 'react';
import ClaudeRecipe from './ClaudeRecipe';
import IngredintsList from './IngredientsList';
import { getRecipeFromMistral } from "../../ai"

export default function Main() {
    const [ingredients, setIngredients] = useState([]);
    
    const [recipe, setRecipe] = useState(null);
    const recipeSection = useRef(null)
    
    useEffect(() => {
        // Varmista, että resepti on olemassa ja että viite-elementti on renderöity.
        if (recipe && recipeSection.current) {
            recipeSection.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [recipe])

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
                    ref={recipeSection}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />  
            }

            {recipe && <ClaudeRecipe recipe={recipe} resetApp={resetApp}/>}

        </main>
    );
}