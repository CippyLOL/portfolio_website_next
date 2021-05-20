import Link from 'next/link'

const Header = () => {
    return (
        <nav className="sticky">
            <h1>Gillianne Papasin</h1>
            <div className="nav-bar">
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/contact"><a>Contact</a></Link>
            </div>

        </nav>
    );
}

export default Header;