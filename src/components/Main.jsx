import { useState } from "react"
import styles from "./Main.module.css"

export default function Main() {
    // Initializing state for ingredients
    const [ingredients, setIngredients] = useState([]);

    // Mapping ingredients to li items
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    // React 18 handling of form data:
    function handleSubmit(event) {
        event.preventDefault(); // Prevents page refresh when submitting form
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient").trim(); //Get form data and trim input from any whitespaces
        // Statement to only add ingredients when form is not empty
        if (newIngredient) {
            setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
        }
        // Clear the input field after adding ingredient
        event.currentTarget.reset()
    }

    // React 19 handling of form data:
    // function addIngredient(formData) {
    //     const newIngredient = formData.get("ingredient")
    //     setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    // }
    // <main>
    //  <form action={addIngredient} className={styles.addIngredientForm}>

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