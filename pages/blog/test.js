
import Head from 'next/head'
import ContactCircle from '../../components/ContactCircle'
// import Illust_1 from '../components/Illust_1'
// import Illust_2 from '../components/Illust_2'
// import Illust_3 from '../components/Illust_3'
import styles from '../../styles/Works.module.css'


export default function Test() {
    var pageTitle = "Blog Homepage test"
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