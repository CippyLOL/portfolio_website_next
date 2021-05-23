import styles from '../../../styles/Post.module.css'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import ReactMarkdown from 'react-markdown'

export default function PostDetails({ post }) {
    return (

        <div>
            <Head>
                <title>Contact | Portfolio</title>
                <meta property="og:post" content="Post | Portfolio" key="post" />
            </Head>
            <div className={styles.container}>
                <h1>{post.title}</h1>
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const { API_URL } = process.env;
    // const res = await fetch("http://localhost:1337/posts");
    const res = await fetch(`${API_URL}/posts/${context.params.slug}`);

    const data = await res.json();

    return {
        props: {
            post: data
        },
        revalidate: 1,
    }
}

export async function getStaticPaths() {
    const { API_URL } = process.env;
    // Call an external API endpoint to get posts
    const res = await fetch(`${API_URL}/posts`);
    const posts = await res.json();

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}
