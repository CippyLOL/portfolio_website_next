import styles from '../../../styles/Post.module.css'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import ReactMarkdown from 'react-markdown'
import { createClient } from 'contentful'
import Moment from 'react-moment'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
    const res = await client.getEntries({

        content_type: 'blogPost'
    })

    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({

        content_type: 'blogPost',
        'fields.slug': params.slug
    })

    return {
        // take first item only from the array
        props: { post: items[0] }
    }
}

export default function PostDetails({ post }) {


    const { title, body, publishDate } = post.fields;
    const updatedAt = post.sys.updatedAt;

    return (
        <div>
            <Head>
                <title>Contact | Portfolio</title>
                <meta property="og:post" content="Post | Portfolio" key="post" />
            </Head>
            <div className={styles.container}>
                <div className="title">
                    <h1>{title}</h1>
                    <p>Published: <Moment format="MM.YYYY">{publishDate}</Moment></p>
                    <p>Updated: <Moment format="MM.YYYY">{updatedAt}</Moment></p>
                </div>
                <div className="markdown_body">
                    <ReactMarkdown>{body}</ReactMarkdown>
                </div>


            </div>
        </div>
    )
}





// export async function getStaticPaths() {
//     const { API_URL } = process.env;
//     // Call an external API endpoint to get posts
//     const res = await fetch(`${API_URL}/posts`);
//     const posts = await res.json();

//     // Get the paths we want to pre-render based on posts
//     const paths = posts.map((post) => ({
//         params: { slug: post.slug },
//     }));

//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false };
// }
