// import { SYMBOL_PREVIEW_DATA } from 'next/dist/next-server/server/api-utils';
import Link from 'next/link'
import Moment from 'react-moment'
// import 'moment-timezone'

//  need to style

const cardPostStyle = {

    margin: '0%',
    marginTop: '1rem',
    marginBottom: '1rem',
    paddingBottom: '0',
}

const titleStyle = {
    borderBottom: 'solid',
    borderWidth: '1px',
    borderColor: 'black',
    fontSize: '2em',
    color: '#ab3f3d',
}

export default function PostCard({ post }) {

    const { title, slug, description, publishDate } = post.fields;
    // const updatedAt = post.sys.updatedAt;
    // const dateToFormat = updateAt;

    return (
        <div className="card" style={cardPostStyle}>
            <h2 style={titleStyle}><Link href={'/blog/posts/' + slug}><a>{title}</a></Link>
             / <span style={{ color: '#000' }}><Moment format="DD.MM.YY">{publishDate}</Moment></span></h2>
            <p>{description}</p>
            {/* <Moment date={updatedAt} /> <br /> */}
            <br />

        </div>
    )
}