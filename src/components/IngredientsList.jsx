import styles from "./IngredientsList.module.css"

export default function IngredientsList(props) {

    // Mapping ingredients to li items
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    return (
        <section>
                <h2>Ingredients on hand:</h2>
                <ul className={styles.ingredientsList}>{ingredientsListItems}</ul>
                {props.ingredients.length > 3 &&
                    <div className={styles.genRecipeContainer}>
                        <div>
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button 
                            onClick={props.getRecipe}
                            >
                            Get a recipe
                        </button>
                    </div>
                }
        </section>
    );
}