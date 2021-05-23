import Link from 'next/link'

//  need to style
export default function PostCard({ post }) {

    const { title, slug, content, hero, updated_at } = post;

    return (
        <div className="card">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Updated at: {updated_at}</p>
            <div className="actions">
                <Link href={'/blog/posts/' + slug}><a>View Post</a></Link>
            </div>

        </div>
    )
}