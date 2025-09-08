import React, { useState } from 'react';

export default function Main() {
    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"]);

    const [newIngredient, setNewIngredient] = useState("");

    // Käsittelee input-kentän muutoksia
    function handleChange(event) {
        setNewIngredient(event.target.value);
    }

    // Käsittelee lomakkeen lähetystä
    function handleSubmit(event) {
        event.preventDefault();

        // 2. Estä tyhjän ainesosan lisääminen
        if (newIngredient.trim() === "") {
            return; // Älä tee mitään, jos syöte on tyhjä
        }

        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        setNewIngredient("");
    }

    const ingredientsList = ingredients.map((ingredient, index) => {
        return (
            <li key={index}> {/* Käytä indexiä keynä staattisessa tapauksessa */}
                {ingredient}
            </li>
        );
    });

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    value={newIngredient}
                    onChange={handleChange}
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </main>
    );
}