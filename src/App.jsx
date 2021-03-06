import FileUpload from "./FileUpload";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import {useParams} from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import Aside from "./components/Aside";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import CustomProvider from "./Contexts/CartContext";



const resultado = useParams;
console.log(resultado);


const App = () => {
    return(
        <>
            <BrowserRouter>
                <CustomProvider>
                    <Header/>
                    <Nav/>
                    <Routes>
                        <Route path="/" exact element={
                            <div className="index__main">
                                <ItemListContainer className="ItemListContainer"/>
                                <Aside/>
                            </div>
                        }/>
                        <Route path="/cart" exact element={<Cart/>}/>
                        <Route path="/producto/:id" exact element={<ItemDetailContainer className="ItemDetailContainer"/>}/>
                    </Routes>
                    <FileUpload/>
                    <Footer/>
                </CustomProvider>
            </BrowserRouter>
        </>
    );
}

export default App;