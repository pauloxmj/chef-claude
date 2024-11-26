import { useState } from "react"
import styles from "./Main.module.css"

export default function Main() {
    //Initializing state for ingredients
    const [ingredients, setIngredients] = useState([]);

    //Mapping ingredients to li items
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    function handleSubmit(event) {
        event.preventDefault(); // Prevents page refresh when submitting form

        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient").trim(); //Get form data and trim input from any whitespaces

        //Snippet to only add ingredients when form is not empty
        if (newIngredient) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        }

        // Clear the input field after adding ingredient
        event.currentTarget.reset();

    }

    return(
        <main>
            <form onSubmit={handleSubmit} className={styles.addIngredientForm}>
                <input 
                    type="text" 
                    placeholder="e.g. Chicken" 
                    aria-label="Add ingredient"
                    name="ingredient" 
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    );
}