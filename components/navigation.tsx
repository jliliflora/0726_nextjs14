import Link from "next/link";

import styles from "../styles/navigation.module.css";

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link prefetch href="/">Home</Link>
                </li>
                <li>
                    <Link prefetch href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}