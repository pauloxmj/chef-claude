import styles from "./Main.module.css"

export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const ingredientsListItems = ingredients.map((ingredient) => <li>{ingredient}</li> )

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");
        ingredients.push(newIngredient);
        console.log(ingredients);
    }

    return(
        <main>
            <form onSubmit={handleSubmit} className={styles.addIngredientForm}>
                <input 
                    type="text" 
                    placeholder="e.g. chicken" 
                    aria-label="Add ingredient"
                    name="ingredient" 
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}