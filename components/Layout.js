import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
    return (
        <>
            <CustomCursor />
            <Header />
            {children}
            <Footer />

        </>
    );
}

export default Layout;
