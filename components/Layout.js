import Header from "./Header2";
import Footer from "./Footer";

const Layout = ({ children }) => {

    return (
        <>

            <Header />
            {children}
            <Footer />

        </>
    );
};

export default Layout;