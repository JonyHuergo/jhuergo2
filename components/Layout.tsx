import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer';

const Layout = ({children}) => {
    return ( 
        <>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="description"
            content="My personal portfolio"
            />
            {/* <meta
            property="og:image"
            content=""
            /> */}
            <title>Jonathan Huergo - Front End Developer</title>
        </Head>
        <Navbar/>
        <main>
            {children}
        </main>
        <Footer/>
        </>
    );
}
 
export default Layout;