import logo from "../assets/images/chef-claude-icon.png"
import styles from "./Header.module.css"

export default function Header() {
    return(
        <header className={styles.container}>
            <img className={styles.logo} src={logo} alt="Chef Claude logo" />
            <h1 className={styles.title}>Chef Claude</h1>
        </header>
    )
}