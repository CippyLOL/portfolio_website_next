
import Head from 'next/head'
import styles from '../../styles/Blog.module.css'
import fetch from 'isomorphic-unfetch'
import PostCard from '../../components/PostCard'
import { createClient } from 'contentful'

export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({ content_type: 'blogPost' })

    return {
        props: {
            posts: res.items
        }
    }
}

export default function Blog({ posts }) {
    var pageTitle = "Blog"

    console.log(posts)

    return (
        <div>
            <Head>
                <title>{pageTitle} | Portfolio</title>
                <meta property="og:blog" content="Blog | Portfolio" key="blog" />
            </Head>
            <div className={styles.container}>
                <h1>{pageTitle}</h1>
                {
                    posts.map(post => (
                        // <div key={post.sys.id}>{post.fields.title}</div>
                        <PostCard key={post.sys.id} post={post} />
                    ))
                }
            </div>
        </div>
    )
}

