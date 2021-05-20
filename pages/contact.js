import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Contact() {
    var pageTitle = "Contact"
    return (
        <div className={styles.container}>
            <h1>{pageTitle}</h1>
            <p>This is the {pageTitle} page of the website</p>
            <br />
            <p>Wassup this is a test</p>
        </div>
    )
}


