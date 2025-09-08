import React, { useState } from 'react';

export default function Main() {
    // 1. Muuta ingredients-taulukko tilaksi useState-hookilla
    const [ingredients, setIngredients] = useState(["Chicken", "Oregano", "Tomatoes"]);

    // State, joka pitää kirjaa input-kentän arvosta
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

        // 3. Päivitä ingredients-tila: luo uusi taulukko ja lisää uusi ainesosa
        // spread-operaattori (...) kopioi kaikki vanhat ainesosat uuteen taulukkoon
        // ja newIngredient lisätään uutena elementtinä loppuun.
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);

        // Tyhjennä input-kenttä lähetyksen jälkeen
        setNewIngredient("");
    }

    // 4. Mappaa päivitetty ingredients-tila listakohteiksi
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