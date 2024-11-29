import ReactMarkdown from 'react-markdown'
import styles from './Recipe.module.css'

export default function Recipe(props) {
    return(
        <section className={styles.recipeContainer} aria-live="polite">
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}