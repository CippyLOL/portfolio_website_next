
import Head from 'next/head'
import ContactCircle from '../components/ContactCircle'
import styles from '../styles/Works.module.css'


export default function Works() {
    var pageTitle = "Works"
    return (
        <div>
            <Head>
                <title>Contact | Portfolio</title>
                <meta property="og:contact" content="Contact | Portfolio" key="contact" />
            </Head>
            <div className={styles.container}>
                <h1>{pageTitle}</h1>
                <p>This is the {pageTitle} page of the website</p>
                <br />
                <p>Wassup this is a test</p>
                {/* <Illust_2 /> */}
                {/* <Illust_3 /> */}
                <ContactCircle />
            </div>
        </div>
    )
}