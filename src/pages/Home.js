import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import CarouSel from "../features/carou/Carou"
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";

function Home() {
    return ( 
        <div>
            <NavBar>
                <CarouSel></CarouSel>
                <ProductList></ProductList>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default Home;