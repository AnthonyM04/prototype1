import Main from "./Main";
import Footer from "./Footer";
import NavMenu from "./NavMenu";

export default function AppLayout( {children} ) {
    return(
        <>
            <NavMenu/>
            <Main/>
            {children}
            <Footer />
        </>
    )
}