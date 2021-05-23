import Link from 'next/link'

const Header = () => {
    return (
        <nav className="sticky">
            <h1><Link href="/"><a>Gillianne Papasin</a></Link></h1>
            <div className="nav-bar">
                <Link href="/"><a>Home</a></Link>
                <Link href="/works"><a>Works</a></Link>
                <Link href="/blog/blog"><a>Blog</a></Link>
            </div>

        </nav>
    );
}

export default Header;