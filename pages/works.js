
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Works.module.css'


export default function Works() {
    var pageTitle = "Works"
    return (
        <div>
            <Head>
                <title>{pageTitle} | Portfolio</title>
                <meta property="og:works" content="Works | Portfolio" key="works" />
            </Head>
            <div className={styles.container}>
                <h1>{pageTitle}</h1>
                <div classsName={styles.programming}>
                    <h2>Programming Projects</h2>
                    <h3>/<Link href="https://github.com/CippyLOL/github_profile"><span>DevHub</span></Link>/
                    <Link href="#"><span>DJ_App</span></Link>/
                    <Link href="blog/posts/creating-my-portfolio"><span>Porfolio</span></Link>
                    </h3>
                </div>
                <div className={styles.design}>
                    <h2>Design Projects</h2>
                    <h3>
                        /<Link href="https://www.behance.net/gallery/102084623/GET-TGT"><span>GET_TGT</span></Link>/
                        <Link href="#"><span>Doggo</span></Link>/
                        <Link href="#"><span>Sticker_Pack</span></Link>
                    </h3>
                </div>

            </div>
        </div>
    )
}