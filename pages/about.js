import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
    var pageTitle = "About"
    return (
        <div className={styles.container}>
            <h1>{pageTitle}</h1>
            <p>This is the {pageTitle} page of the website</p>
        </div>
    )
}


