import Head from 'next/head'
import Illust_3 from '../components/Illust_3'
import styles from '../styles/Error.module.css'


export default function Error() {
    var pageTitle = "404"
    return (
        <div>
            <Head>
                <title>Contact | Portfolio</title>
                <meta property="og:contact" content="Contact | Portfolio" key="contact" />
            </Head>
            <div className={styles.container}>
                <h1>{pageTitle}</h1>
                <p>Whoopsies, this page was not found :(</p>
                <br />
                <Illust_3 />
            </div>
        </div>
    )
}