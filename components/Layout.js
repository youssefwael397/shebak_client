import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {

    return (
        <>

            <div className="row px-0">
                <div className="col-shebak-3 px-0">
                    <Header />
                </div>
                <div className="col-shebak-9 px-0">
                    {children}
                </div>
            </div>
            {/* <Footer /> */}

        </>
    );
};

export default Layout;