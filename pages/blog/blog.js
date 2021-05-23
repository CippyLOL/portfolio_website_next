
import Head from 'next/head'
import styles from '../../styles/Works.module.css'
import fetch from 'isomorphic-unfetch'
import PostCard from '../../components/PostCard'


export default function Blog({ posts }) {
    var pageTitle = "Blog Homepage test"

    console.log(posts)

    return (
        <div>
            <Head>
                <title>Contact | Portfolio</title>
                <meta property="og:blog" content="Blog | Portfolio" key="blog" />
            </Head>
            <div className={styles.container}>
                <h1>{pageTitle}</h1>
                {
                    // posts.map(post => (
                    //     <Card key={post.id} post={post} />

                    // ))
                    posts.map(post => (
                        // <div key={post.id}>
                        //     {post.title}
                        // </div>
                        <PostCard key={post.id} post={post} />
                    ))
                }
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const { API_URL } = process.env;
    // const res = await fetch("http://localhost:1337/posts");
    const res = await fetch(`${API_URL}/posts`);

    const data = await res.json();

    return {
        props: {
            posts: data
        }
    }
}
