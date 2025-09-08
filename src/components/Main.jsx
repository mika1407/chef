import React, { useState } from 'react'; // Tuo useState Hook


export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    // State, joka pitää kirjaa input-kentän arvosta
    const [newIngredient, setNewIngredient] = useState("");

    // Käsitellään input-kentän muutoksia
    function handleChange(event) {
        setNewIngredient(event.target.value);
    }

    // Käsitellään lomakkeen lähetystä
    function handleSubmit(event) {
        // Estä selaimen oletuskäyttäytyminen, joka lataisi sivun uudelleen
        event.preventDefault();

        // Tässä voit tehdä jotain newIngredient-arvolla
        console.log("Lisättävä ainesosa:", newIngredient);

        // Tyhjennä input-kenttä lähetyksen jälkeen (valinnainen)
        setNewIngredient("");
    }

        const ingredientsList = ingredients.map((ingredient, index) => {
        return (
            <li key={index}>
                {ingredient}
            </li>
        );
    });

  return (
          <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input  type="text" 
                        placeholder="e.g. oregano" 
                        aria-label="Add ingredient"
                        value={newIngredient} // Liitä inputin arvo stateen (controlled component)
                        onChange={handleChange} // Käsittele inputin muutoksia
                        />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>
          </main>
  )
}