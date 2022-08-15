import { BrowserRouter } from "react-router-dom";
import NavBar from "./componetes/NavBar";
import Main from "./componetes/Main";
import Footer from "./componetes/Footer"


const App = () => {

    return (
        <BrowserRouter>
            <NavBar/>
            <Main/>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;