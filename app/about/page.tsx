import styles from "../../styles/about.module.css"

export default function About() {
    return (
        <div className={styles.container}>
            <h1>About</h1>
            <p>
            Welcome to the official explorer for The New York Times Best Seller list
            explorer.
            <br />
            We hope you enjoy your stay!
            </p>
        </div>
    );
}