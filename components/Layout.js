import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
